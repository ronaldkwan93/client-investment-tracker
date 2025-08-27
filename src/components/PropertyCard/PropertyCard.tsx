import type { Property } from "../../context/PropertyContextProvider";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="h-40 border rounded-lg shadow p-4">
      <h2 className="text-lg font-bold">Address: {property.address}</h2>
      <p className="text-gray-600">Suburb: {property.suburb}</p>
      <p className="text-gray-600">Purchase price: ${property.purchasePrice}</p>
      <p className="text-gray-600">Weekly rent: ${property.weeklyRent}</p>
    </div>
  );
};

export default PropertyCard;
