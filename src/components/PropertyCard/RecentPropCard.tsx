import type { Property } from "../../context/PropertyContextProvider";

interface PropertyCardProps {
  property: Property;
}

const RecentPropCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="h-20 border border-gray-200 rounded-lg shadow p-4 w-170 transform transition-transform duration-200 
               hover:-translate-y-0.5">
      <div className="flex justify-between">
        <div>
          <h2>Address</h2>
          <h2 className="text-lg font-bold">{property.address}</h2>
        </div>
        <div>
          <h2>Suburb</h2>
          <p className="text-gray-600">{property.suburb}</p>
        </div>
        <div>
          <h2>Purchase Price</h2>
          <p className="text-gray-600">${property.purchasePrice}</p>
        </div>
        <div>
          <h2>Weekly Rent</h2>
          <p className="text-gray-600">${property.weeklyRent}</p>
        </div>
      </div>
      <div>{/* <img className="w-20 " src={logo} alt="" /> */}</div>
      {/* <div className="text-right ">
        <h1
          className="cursor-pointer ml-50 w-10 flex justify-center items-center "
          onClick={() => navigate(`/property/${property.id}`)}
        >
          <FaRegEdit />
        </h1>
      </div> */}
    </div>
  );
};

export default RecentPropCard;
