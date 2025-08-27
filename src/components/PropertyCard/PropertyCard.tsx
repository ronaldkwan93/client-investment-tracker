import type { Property } from "../../context/PropertyContextProvider";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="h-40 border rounded-lg shadow p-4 grid grid-cols-[1fr_2fr_1fr]">
      <div>
        <h2 className="text-lg font-bold">Address: {property.address}</h2>
        <p className="text-gray-600">Suburb: {property.suburb}</p>
        <p className="text-gray-600">
          Purchase price: ${property.purchasePrice}
        </p>
        <p className="text-gray-600">Weekly rent: ${property.weeklyRent}</p>
      </div>
      <div>
        <img className="w-20 " src={logo} alt="" />
      </div>
      <div className="text-right ">
        <h1
          className="cursor-pointer ml-50 w-10 flex justify-center items-center "
          onClick={() => navigate(`/property/${property.id}`)}
        >
          <FaRegEdit />
        </h1>
      </div>
    </div>
  );
};

export default PropertyCard;
