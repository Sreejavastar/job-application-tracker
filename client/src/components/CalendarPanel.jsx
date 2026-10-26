
import { useState } from "react";
import "../styles/Calendar.css"

const YEAR = 2026;

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = Array.from({ length: 12 }, (_, i) => ({
  name: new Date(YEAR, i, 1).toLocaleString("en-US", {
    month: "long",
  }),
  month: i,
}));

function CalendarPanel() {
  const [applications, setApplications] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [count, setCount] = useState("");
  const [notes, setNotes] = useState("");
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());

  function getColor(value) {
    if (!value) return "#FFF9D9";
    if (value <= 2) return "#FFF0A6";
    if (value <= 5) return "#FFE477";
    if (value <= 8) return "#FFD642";
    return "#E5B900";
  }

  function selectDate(date) {
    setSelectedDate(date);
    setCount(applications[date]?.count ?? "");
    setNotes(applications[date]?.notes ?? "");
  }

  function submitApplication(e) {
    e.preventDefault();

    setApplications((previous) => ({
      ...previous,
      [selectedDate]: {
        count: Number(count),
        notes,
      },
    }));
  }

  return (
    <div className="application-calendar">
      <h2>Application <span className="orangeHiglight">Activity</span></h2>
      <p className="calendar-subtitle">
        Every application gets you closer.
      </p>

      <div className="months-scroll">
        {months.map(({ name, month }) => {
          const days = new Date(YEAR, month + 1, 0).getDate();
          const firstDay = new Date(YEAR, month, 1).getDay();

          return (
          
              <section className={`month-section ${activeMonth === month ? "active-month" : ""
                  }`} key={name}>
              <h3><span className="highLightMonth">{name}</span> {YEAR}</h3>

              <div className="calendar-grid">
                {weekdays.map((day) => (
                  <div className="weekday" key={day}>
                    {day}
                  </div>
                ))}

                {Array.from({ length: firstDay }, (_, i) => (
                  <div className="empty-day" key={`empty-${i}`} />
                ))}

                {Array.from({ length: days }, (_, i) => {
                  const day = i + 1;
                  const date = `${YEAR}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                  const record = applications[date];

                  return (
                    <button
                      type="button"
                      key={date}
                      className={`date-cell ${
                        selectedDate === date ? "selected" : ""
                      }`}
                      style={{
                        backgroundColor: getColor(record?.count ?? 0),
                      }}
                      onClick={() => selectDate(date)}
                      title={`${date}: ${record?.count ?? 0} applications`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      <div className="formData">
            <form className="application-form" onSubmit={submitApplication}>
                <h3>
                {selectedDate
                    ? `Be honest! Did you apply on ${selectedDate}?`
                    : "Select a date to log applications"}
                </h3>

                <label htmlFor="application-count">
                Number of applications
                </label>
                <input
                id="application-count"
                type="number"
                min="0"
                required
                value={count}
                onChange={(e) => setCount(e.target.value)}
                disabled={!selectedDate}
                />

                <label htmlFor="application-notes">
                Where did you apply?
                </label>
                <textarea
                id="application-notes"
                placeholder="Amazon, Google, Adobe..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                disabled={!selectedDate}
                />

                <button type="submit" disabled={!selectedDate}>
                Save my progress
                </button>

                {selectedDate && applications[selectedDate] && (
                <p className="saved-message">Progress saved for this date!</p>
                )}
            </form>
            <div className="application-form" id="dataRecord" >
                <h3>
                      Your Record For this Day :
                </h3>
                <div className="ApplyCounter">
                      <label htmlFor="application-count">
                          Number of applications
                      </label>
                      <span className="noApplications">
                          {selectedDate
                              ? applications[selectedDate]?.count ?? 0
                              : 0}
                      </span>

                </div>
                <div className="ApplyWhere">
                      <label htmlFor="application-notes">
                          Where did you apply?
                      </label>

                      <p>
                          {selectedDate
                              ? applications[selectedDate]?.notes ?? "You have no applications recorded to this date"
                              : "You have no applications recorded to this date"}
                      </p>
                </div>

            </div>
      </div>
    </div>
  );
}

export default CalendarPanel;
