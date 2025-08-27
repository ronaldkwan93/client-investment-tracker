import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";

type Props = {
  address: string;
};

export default function AddressMap({ address }: Props) {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null
  );

  // Fixed - Load Google Maps script once
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  });

  useEffect(() => {
    if (!isLoaded || !address) return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const loc = results[0].geometry.location;
        setCoords({ lat: loc.lat(), lng: loc.lng() });
      } else {
        console.error("Geocode error:", status);
      }
    });
  }, [isLoaded, address]);

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <>
      {coords && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "350px" }}
          center={coords}
          zoom={15}
        >
          <Marker position={coords} />
        </GoogleMap>
      )}
    </>
  );
}
