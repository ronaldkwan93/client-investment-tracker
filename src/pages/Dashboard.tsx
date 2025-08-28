import { useContext, useEffect, useState } from "react";
import { PropertyContext } from "../context/PropertyContextProvider";
import Charts from "../components/Charts/Charts";
import { getRecentProperties } from "../services/data-service";
import RecentPropCard from "../components/PropertyCard/RecentPropCard";
import { TbHandClick } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const context = useContext(PropertyContext);
  const [recentProps, setRecentProps] = useState([]);
  const navigate = useNavigate();
  if (!context)
    throw new Error("PropertyList must be used within PropertyContextProvider");

  const { properties } = context;

  useEffect(() => {
    getRecentProperties().then((result) => setRecentProps(result));
  }, []);

  const handleViewProperty = () => {
    navigate("/investments");
  };

  console.log(recentProps);

  return (
    <div className="m-1 h-screen bg-neutral-100 flex flex-col items-center gap-5 pt-5 mx-35 rounded-sm my-10">
      <div className="flex w-3xl justify-evenly">
        <div
          className="border-none h-50 w-50 shadow-lg rounded-xl flex flex-col justify-evenly items-center transform transition-transform duration-200 
               hover:-translate-y-1 hover:-translate-x-1 bg-blue-100"
        >
          <p>Properties:</p>
          <h1 className="text-7xl">{properties.length}</h1>
        </div>
        <div
          className="border-none h-50 w-50 rounded-xl shadow-lg flex flex-col justify-evenly items-center transform transition-transform duration-200 
               hover:-translate-y-1 hover:-translate-x-1 bg-orange-100"
        >
          <p>Weekly rental income:</p>
          <h1 className="text-5xl">
            $
            {(properties.reduce(
              (acc, property) => acc + (property.weeklyRent ?? 0),
              0
            )).toLocaleString()}
          </h1>
        </div>
        <div
          className="border-none h-50 w-50 rounded-xl shadow-lg flex flex-col justify-evenly items-center transform transition-transform duration-200 
               hover:-translate-y-1 hover:-translate-x-1 bg-red-100"
        >
          <p>Total Portfolio value:</p>
          <h1 className="text-4xl">
            $
            {(properties.reduce(
              (acc, property) => acc + (property.purchasePrice ?? 0),
              0
            )).toLocaleString()}
          </h1>
        </div>
      </div>
      <div className="flex w-3xl justify-evenly">
        <Charts data={properties} />
        {/* <div className="border-none h-50 w-50 rounded-xl flex justify-center items-center">
          <Charts/>
        </div>
        <div className="border-none h-50 w-50 rounded-xl flex justify-center items-center">
          number stat 2
        </div>
        <div className="border-none h-50 w-50 rounded-xl flex justify-center items-center">
          number stat 3
        </div> */}
      </div>
      <div className="flex flex-col w-full justify-evenly items-center gap-2">
        <div className="flex justify-start w-170 gap-40 ">
          <button
            className="flex justify-center items-center cursor-pointer text-2xl transform transition-transform duration-200 
               hover:-translate-y-1"
            onClick={handleViewProperty}
          >
            <TbHandClick />
            View
          </button>
          <h1>Recently updated investments..</h1>
        </div>
        {recentProps.map((properties, index) => (
          <div key={index}>
            <RecentPropCard property={properties} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
