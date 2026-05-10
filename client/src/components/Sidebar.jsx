import {
  FaBriefcase,
  FaChartBar,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="hidden lg:flex w-[260px] bg-[#0B1020] border-r border-[#1A2235] p-6 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="bg-purple-600 p-3 rounded-xl">
          <FaBriefcase />
        </div>

        <h1 className="text-2xl font-bold text-white">JobFlow</h1>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <button className="bg-[#171F33] text-white p-4 rounded-2xl flex items-center gap-3 hover:bg-purple-600 transition">
          <FaChartBar />
          Dashboard
        </button>

        <button className="text-gray-400 p-4 rounded-2xl flex items-center gap-3 hover:bg-[#171F33] transition">
          <FaClipboardList />
          Applications
        </button>

        <button className="text-gray-400 p-4 rounded-2xl flex items-center gap-3 hover:bg-[#171F33] transition">
          <FaCog />
          Settings
        </button>
      </div>
    </div>
  );
}

export default Sidebar;