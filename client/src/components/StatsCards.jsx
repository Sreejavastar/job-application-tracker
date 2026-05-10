const stats = [
  {
    title: "Applications",
    value: "42",
    color: "from-purple-500 to-violet-700",
  },
  {
    title: "Interviews",
    value: "8",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Offers",
    value: "2",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Rejected",
    value: "12",
    color: "from-pink-500 to-rose-600",
  },
];

function StatsCards({
    darkMode
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`
            ${darkMode ? "bg-[#070B14] text-white"  : "bg-[#F3F4F6] text-black"}
            border
            border-[#1D2740]
            rounded-3xl
            p-6
            flex
            items-center
            justify-between
            hover:border-purple-500
            transition-all
            duration-300
          `}
        >
          <div>
            <h3 className="text-gray-400 text-lg">
              {item.title}
            </h3>

            <h1 className="text-5xl font-bold mt-2">
              {item.value}
            </h1>
          </div>

          <div
            className={`
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-br
              ${item.color}
            `}
          />
        </div>
      ))}
    </div>
  );
}

export default StatsCards;