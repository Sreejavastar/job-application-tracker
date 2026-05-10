import { FaBell, FaMoon, FaSearch } from "react-icons/fa";

function Topbar({
    darkMode,
    setDarkMode,
}) {
    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="bg-[#0F1729] border border-[#1D2740] rounded-2xl px-5 py-4 flex items-center gap-3 w-full lg:w-[400px]">
                <FaSearch className="text-gray-500" />

                <input
                    type="text"
                    placeholder="Search jobs, companies..."
                    className="bg-transparent outline-none w-full text-white"
                />
            </div>

            <div className="flex flex-wrap items-center gap-6 lg:gap-4">
                <button className={`${darkMode ? "bg-[#070B14] text-white"  : "bg-[#F3F4F6] text-black"}  p-4 rounded-2xl border border-[#1D2740]`}>
                    <FaBell />
                </button>

                <button
                    onClick={handleThemeToggle}
                    className={
                        `${darkMode ? "bg-[#070B14] text-white"  : "bg-[#F3F4F6] text-black"} 
                        bg-[#0F1729]
                        p-4
                        rounded-2xl
                        border
                        border-[#1D2740]
                        hover:bg-purple-600
                        transition-all
                        duration-300
                        `}
                    >
                    <FaMoon />
                </button>

                <div className={`${darkMode ? "bg-[#070B14] text-white"  : "bg-[#F3F4F6] text-black"} border border-[#1D2740] px-5 py-3 rounded-2xl flex items-center gap-3`}>
                    <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        S
                    </div>

                    <div>
                        <h3 className="font-semibold">Sreeja</h3>
                        <p className="text-sm text-gray-400">Frontend Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;