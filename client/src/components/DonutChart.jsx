import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Applied", value: 42 },
  { name: "Interview", value: 8 },
  { name: "Offers", value: 2 },
  { name: "Rejected", value: 12 },
];

const COLORS = [
  "#7C3AED",
  "#22C55E",
  "#EAB308",
  "#EC4899",
];

function DonutChart({darkMode}) {
  return (
    <div className={`  ${darkMode ? "bg-[#070B14] text-white"  : "bg-[#F3F4F6] text-black"} border border-[#1D2740] rounded-3xl p-6 h-[400px]`}>
      
      <h2 className="text-2xl font-semibold mb-8">
        Application Status
      </h2>

      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            cy="35%"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-3 mt-2 relative top-[-55px] left-[20px]">
        {data.map((item, index) => (
          <div
            key={item.name}
           className={`flex items-center gap-2 text-sm ${
                    darkMode ? "text-gray-300" : "text-black"
                    }`} >
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: COLORS[index],
              }}
            />

            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonutChart;