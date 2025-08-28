import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Property } from "../context/PropertyContextProvider";
import { getPropertyById, updateInvestment } from "../services/data-service";
import AddressMap from "../components/GoogleMaps/AddressMap";

const Property = () => {
  const [data, setData] = useState<Property>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== undefined) {
      getPropertyById(Number(id)).then((result) => setData(result));
    }
  }, [id]);

  console.log(data);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data) return;
    const result = await updateInvestment(Number(id), data);
    console.log(result);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-6">
      {data && (
        <div className="border-4 border-blue-500 rounded-lg overflow-hidden w-full max-w-5/6">
          <AddressMap
            address={`${data.address}, ${data.suburb}, ${data.state}`}
          />
        </div>
      )}

      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-4">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="Address"
            value={data?.address ?? ""}
            onChange={(e) => setData({ ...data!, address: e.target.value })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-12 text-lg text-gray-700"
          />
          <label htmlFor="">Suburb</label>

          <input
            type="text"
            value={data?.suburb ?? ""}
            onChange={(e) => setData({ ...data!, suburb: e.target.value })}
            placeholder="Suburb"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-12 text-lg text-gray-700"
          />
          <label htmlFor="">State</label>

          <input
            type="text"
            placeholder="State"
            value={data?.state ?? ""}
            onChange={(e) => setData({ ...data!, state: e.target.value })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-12 text-lg text-gray-700"
          />
          <label htmlFor="">Purchase Price</label>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              $
            </span>
            <input
              type="number"
              value={data?.purchasePrice ?? ""}
              onChange={(e) => {
                if (data) {
                  setData({ ...data, purchasePrice: Number(e.target.value) });
                }
              }}
              className="pl-7 pr-3 py-2 border rounded-md w-full"
              placeholder="Purchase price"
            />
          </div>
          <label htmlFor="">Weekly Rent</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              $
            </span>
            <input
              type="number"
              value={data?.weeklyRent ?? ""}
              onChange={(e) => {
                if (data) {
                  setData({ ...data, weeklyRent: Number(e.target.value) });
                }
              }}
              className="pl-7 pr-3 py-2 border rounded-md w-full"
              placeholder="Weekly rent"
            />
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 shadow-lg rounded-lg w-full h-12 text-lg flex justify-center items-center cursor-pointer transform transition-transform duration-200 
               hover:-translate-y-1"
            >
              Save
            </button>
            <h1
              className="bg-red-500 text-white p-3 rounded-lg w-full h-12 text-lg flex justify-center items-center cursor-pointer"
              onClick={() => navigate("/investments")}
            >
              Cancel
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Property;
