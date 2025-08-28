import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import type { Property } from "../../context/PropertyContextProvider";

type ChartsProps = {
  data: Property[];
};

const Charts = ({ data }: ChartsProps) => {
  const chartData = data.map((property) => ({
    name: property.address, 
    purchasePrice: property.purchasePrice,
    roi:
      property.weeklyRent && property.purchasePrice
        ? ((property.weeklyRent * 52) / property.purchasePrice) * 100
        : 0, 
  }));

  return (
    <div className="flex gap-10">
      <div className="flex flex-col justify-center items-center border border-gray-300 rounded-2xl p-2">
        <LineChart
          width={300}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#ccc" />
          <YAxis />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Line type="monotone" dataKey="purchasePrice" stroke="#8884d8" />
        </LineChart>
        <h2>Purchase price</h2>
      </div>

      <div className="flex flex-col justify-center items-center border border-gray-300 rounded-2xl p-2">
        <LineChart
          width={300}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 15, bottom: 5 }}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
          <Line type="monotone" dataKey="roi" stroke="#82ca9d" />
        </LineChart>
        <h2>ROI% (Yearly)</h2>
      </div>
    </div>
  );
};

export default Charts;
