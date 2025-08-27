import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyCardsContainer = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="border rounded-sm">
        <PropertyCard />
      </div>
      <div className="border rounded-sm">
        <PropertyCard />
      </div>
      <div className="border rounded-sm">
        <PropertyCard />
      </div>
      <div className="border rounded-sm">
        <PropertyCard />
      </div>
    </div>
  );
};

export default PropertyCardsContainer;
