import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
    <Helmet>
        <title>Gadget Heaven | Statistics</title>
      </Helmet>
      <div className="bg-[#9538E2] py-8">
        <Heading
          title={`Statistics`}
          subtitle={`Explore detailed statistics and trends on the latest tech gadgets to stay ahead in the ever-evolving world of technology.`}
        ></Heading>
      </div>
      <div className="my-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold">Statistics</h3>
        {/* bar chart */}
        <div className="w-full py-12 bg-white rounded-3xl mt-8">
          <BarChart
            width={1100}
            height={450}
            data={data}
            barSize={50}
            margin={{ top: 10, right: 30, left: 30, bottom: 150 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="product_title"
              interval={0}
              angle={-45}
              textAnchor="end"
              padding={{ left: 20, right: 20 }}
            />
            <YAxis />
            <Tooltip />
            <Legend
              layout="horizontal"
              align="right"
              verticalAlign="top"
              wrapperStyle={{
                top: -10,
                right: 50,
                position: "absolute", 
              }}
              />
            <Bar dataKey="price" fill="#9538E2" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default Statistics;
