import { PropertyContext } from "../../context/PropertyContextProvider";
import { useContext } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyCardsContainer = () => {
  const context = useContext(PropertyContext);
  if (!context)
    throw new Error("PropertyList must be used within PropertyContextProvider");
  const { properties } = context;

  return (
    <div className="flex flex-col gap-2">
      {properties.map((property, index) => (
        <div key={index}>
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyCardsContainer;
