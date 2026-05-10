function CalendarPanel({darkMode}) {
    return (
        <div className={`${darkMode ? "bg-[#070B14] text-white"  : "bg-[#F3F4F6] text-black"} border border-[#1D2740] rounded-3xl p-6 h-[400px]`}>
            <h2 className="text-3xl font-bold">
                May 2025
            </h2>

            <div className="grid grid-cols-7 gap-3 mt-8 place-items-center">
                {[...Array(31)].map((_, index) => (
                    <div
                        key={index}
                        className={`
                            w-8
                            h-8
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            text-sm
                            font-medium
                            transition-all
                            hover:bg-yellow-600

                            ${
                                index === 9
                                ? "bg-purple-600 text-white"
                                : darkMode
                                ? "bg-[#151E32] text-white"
                                : "bg-gray-200 text-black"
                            }
                            `}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CalendarPanel;