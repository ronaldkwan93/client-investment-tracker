import type { Property } from "../../context/PropertyContextProvider";
import house from "../../assets/house.jpg";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();

  const roi =
    property.weeklyRent && property.purchasePrice
      ? ((property.weeklyRent * 52) / property.purchasePrice) * 100
      : 0;
  return (
    <div className="h-45 border-none  rounded-lg shadow p-4 grid grid-cols-[1fr_2fr_1fr]">
      <div>
        <div>
          <h2 className="text-lg font-bold"> {property.address}</h2>
        </div>
        <p className="text-gray-600">Suburb: {property.suburb}</p>
        <p className="text-gray-600">State: {property.state}</p>
        <p className="text-gray-600">
          Purchase price: ${(property.purchasePrice)?.toLocaleString()}
        </p>
        <p className="text-gray-600">Weekly rent: ${(property.weeklyRent)?.toLocaleString()}</p>
        <p
          className="text-red-600 border w-22 rounded-lg text-center transform transition-transform duration-500 
               hover:-translate-y-0.5 bg-red-100 cursor-pointer"
        >
          ROI: {roi.toFixed(2)}%
        </p>
      </div>
      <div>
        <img
          className="w-full max-h-30 object-cover rounded-2xl "
          src={house}
          alt=""
        />
      </div>

      <h1
        className="cursor-pointer flex justify-center items-center "
        onClick={() => navigate(`/property/${property.id}`)}
      >
        <FaRegEdit />
      </h1>
    </div>
  );
};

export default PropertyCard;
