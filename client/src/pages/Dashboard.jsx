import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCards from "../components/StatsCards";
import AnalyticsChart from "../components/AnalyticsChart";
import CalendarPanel from "../components/CalendarPanel";
import DonutChart from "../components/DonutChart";
import { useState } from "react";

function Dashboard() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        
        <div
        className={`flex min-h-screen transition-all duration-300
                    ${darkMode ? "bg-[#070B14] text-white"  : "bg-[#F3F4F6] text-black"}
                `}
        >
            <Sidebar />

            <div className="flex-1 p-6">
                <Topbar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <div className="mt-8">
                    <h1 className="text-4xl font-bold">Dashboard</h1>
                    <p className="text-gray-400 mt-2">
                        Track your job search progress and stay organized.
                    </p>
                </div>

                <StatsCards
                    darkMode={darkMode}

                 />
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-10">

                    <div className="xl:col-span-6">
                        <AnalyticsChart 
                            darkMode={darkMode}
                          
                    </div>

                    <div className="xl:col-span-3">
                        <DonutChart
                            darkMode={darkMode}
                            
                         />
                    </div>

                    <div className="xl:col-span-3">
                        <CalendarPanel 
                            darkMode={darkMode}
                          
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;