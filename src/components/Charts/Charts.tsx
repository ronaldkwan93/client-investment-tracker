import {
  // LineChart,
  // Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Legend,
  Bar,
  // PieChart,
  // Pie,
  // Cell,
  // LabelList,
} from "recharts";
import type { Property } from "../../context/PropertyContextProvider";

type ChartsProps = {
  data: Property[];
};

const Charts = ({ data }: ChartsProps) => {
  const chartData = data.map((property) => ({
    name: property.address,
    price: property.purchasePrice,
    roi:
      property.weeklyRent && property.purchasePrice
        ? ((property.weeklyRent * 52) / property.purchasePrice) * 100
        : 0,
  }));

  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex gap-10">
      <div className="flex flex-col justify-center items-center border border-gray-300 rounded-2xl p-2">
        {/* <LineChart
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
        </LineChart> */}
        <BarChart
          width={300}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 15, left: 35, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide={true} />
          <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
        <h2>Purchase price</h2>
      </div>

      <div className="flex flex-col justify-center items-center border border-gray-300 rounded-2xl p-2">
        <BarChart
          width={300}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 15, bottom: 0 }}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" hide={true} />
          <YAxis tickFormatter={(value) => `${value.toLocaleString()}%`} />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
          <Legend />
          <Bar dataKey="roi" fill="#eb8c34" />
        </BarChart>
        <h2>ROI% (Yearly)</h2>
      </div>
    </div>
  );
};

export default Charts;
