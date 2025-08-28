import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContextProvider";

const Dashboard = () => {
  const context = useContext(PropertyContext);
  if (!context)
    throw new Error("PropertyList must be used within PropertyContextProvider");

  const { properties } = context;

  return (
    <div className="m-1 h-screen flex flex-col items-center gap-5 pt-5">
      <div className="flex w-3xl justify-evenly">
        <div className="border h-50 w-50 rounded-xl flex flex-col justify-evenly items-center">
          <p>Properties:</p>
          <h1 className="text-7xl">{properties.length}</h1>
        </div>
        <div className="border h-50 w-50 rounded-xl flex flex-col justify-evenly items-center">
          <p>Weekly rental income:</p>
          <h1 className="text-5xl">
            $
            {properties.reduce((acc, property) => acc + (property.weeklyRent ?? 0), 0)}
          </h1>
        </div>
        <div className="border h-50 w-50 rounded-xl flex flex-col justify-evenly items-center">
          <p>Total Portfolio value:</p>
          <h1 className="text-4xl">
            $
            {properties.reduce((acc, property) => acc + (property.purchasePrice ?? 0), 0)}
          </h1>
        </div>
      </div>
      <div className="flex w-3xl justify-evenly">
        <div className="border h-50 w-50 rounded-xl flex justify-center items-center">
          number stat 1
        </div>
        <div className="border h-50 w-50 rounded-xl flex justify-center items-center">
          number stat 2
        </div>
        <div className="border h-50 w-50 rounded-xl flex justify-center items-center">
          number stat 3
        </div>
      </div>
      <div className="flex flex-col w-4/5 justify-evenly items-center gap-2">
        <h1>Recently added investments..</h1>
        <div className="border h-15 w-4/5 rounded-xl flex px-5 items-center">
          number stat 1
        </div>
        <div className="border h-15 w-4/5 rounded-xl flex px-5 items-center">
          number stat 2
        </div>
        <div className="border h-15 w-4/5 rounded-xl flex px-5 items-center">
          number stat 3
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
