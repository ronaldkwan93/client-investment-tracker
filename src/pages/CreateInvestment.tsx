import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Property } from "../context/PropertyContextProvider";
import { addNewInvestment } from "../services/data-service";
import AddressMap from "../components/GoogleMaps/AddressMap";

const CreateInvestment = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<Property>({
    id: null,
    address: "",
    suburb: "",
    state: "",
    purchasePrice: null,
    weeklyRent: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await addNewInvestment(data);
    if (result !== undefined) {
      setSuccess(true);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-6">
      {data && (
        <div className=" rounded-lg overflow-hidden w-full max-w-5/6">
          <AddressMap
            address={`${data.address}, ${data.suburb}, ${data.state}`}
          />
        </div>
      )}
      {success && <div>Investment created!</div>}
      <h1 className="border px-2 text-2xl shadow-2xl rounded-lg">
        Add new investment
      </h1>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-4">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="Address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-12 text-lg text-gray-700"
          />
          <label htmlFor="">Suburb</label>

          <input
            type="text"
            placeholder="Suburb"
            value={data.suburb}
            onChange={(e) => setData({ ...data, suburb: e.target.value })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-12 text-lg text-gray-700"
          />
          <label htmlFor="">State</label>

          <input
            type="text"
            placeholder="State"
            value={data.state}
            onChange={(e) => setData({ ...data, state: e.target.value })}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-12 text-lg text-gray-700"
          />
          <label htmlFor="">Purchase Price</label>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              $
            </span>
            <input
              type="number"
              className="pl-7 pr-3 py-2 border rounded-md w-full"
              placeholder="Purchase price"
              value={data.purchasePrice ?? ""}
              onChange={(e) =>
                setData({ ...data, purchasePrice: Number(e.target.value) })
              }
            />
          </div>
          <label htmlFor="">Weekly Rent</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              $
            </span>
            <input
              type="number"
              value={data.weeklyRent ?? ""}
              onChange={(e) =>
                setData({ ...data, weeklyRent: Number(e.target.value) })
              }
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

export default CreateInvestment;
