import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", applications: 2 },
  { day: "Tue", applications: 5 },
  { day: "Wed", applications: 3 },
  { day: "Thu", applications: 7 },
  { day: "Fri", applications: 4 },
  { day: "Sat", applications: 8 },
];

function AnalyticsChart({darkMode}) {
  return (
   
    <div className={`
             ${darkMode ? "bg-[#070B14] text-white"  : "bg-[#F3F4F6] text-black"}
             border border-[#1D2740]
             rounded-3xl p-6 h-[400px]
        `}>
      <h2 className="text-2xl font-semibold mb-8">
        Applications Over Time
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#94A3B8" />
          
          <Tooltip />

          <Bar
            dataKey="applications"
            fill="#7C3AED"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;