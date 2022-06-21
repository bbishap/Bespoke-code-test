import { ReactNode, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import localeDate from "dayjs/plugin/localeData";
import "./calendar.scss";

interface Props {
  onDateClick: (e: React.MouseEvent<HTMLElement>, date: Dayjs) => void;
  value: Dayjs;
}

const Calendar = ({ onDateClick, value }: Props) => {
  const [state, setState] = useState({ dateData: dayjs() });
  dayjs.extend(localeDate);
  const weekDays = dayjs.weekdaysShort();

  useEffect(() => {
    setState((state) => ({ ...state, dateData: value }));
  }, [value]);

  const year = () => state.dateData.format("YYYY");
  const month = () => state.dateData.format("MMMM");
  const daysInMonth = (): number => state.dateData.daysInMonth();
  const currentDate = () => state.dateData.get("date");
  const firstDayOfMonth = (): number =>
    Number(dayjs(state.dateData).startOf("month").format("d"));

  const displayWeekDays = () =>
    weekDays.map((day) => (
      <td key={day} className="calendarCell">
        <span className="weekDays">{day}</span>
      </td>
    ));

  const onClick = (e: React.MouseEvent<HTMLElement>, d: number) => {
    let { dateData } = state;
    let data = dayjs(dateData).set("date", d);

    setState((state) => ({
      ...state,
      dateData: data,
    }));
    onDateClick && onDateClick(e, data);
  };

  const displayDate = () => {
    const displayPattern = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      displayPattern.push(
        <td key={i * 10} className="calendarCell">
          {""}
        </td>
      );
    }
    for (let d = 1; d <= daysInMonth() * 1; d++) {
      displayPattern.push(
        <td key={d} className="calendarCell">
          <span
            className={d === currentDate() * 1 ? "currentDate" : "normalDate"}
            onClick={(e: React.MouseEvent<HTMLElement>) => onClick(e, d)}
          >
            {" "}
            {d}
          </span>
        </td>
      );
    }
    const rows: ReactNode[] = [];
    let cells: ReactNode[] = [];
    displayPattern.forEach((row, index) => {
      if (index % 7 !== 0) {
        cells.push(row);
      } else {
        const insertRows = cells.slice();
        rows.push(insertRows);
        cells = [];
        cells.push(row);
      }
      if (index === displayPattern.length - 1) {
        const insertRows = cells.slice();
        rows.push(insertRows);
      }
    });
    return rows.map((data: ReactNode, index: number) => (
      <tr key={index * 80}>{data}</tr>
    ));
  };

  const changeMonth = (type: string) => {
    let { dateData } = state;
    if (type === "prev") {
      dateData = dayjs(dateData).subtract(1, "month");
    } else {
      dateData = dayjs(dateData).add(1, "month");
    }
    setState((state) => ({ ...state, dateData: dateData }));
  };

  const monthNavigation = () => {
    return (
      <tr className="headerWrapper">
        <td onClick={() => changeMonth("prev")} className="arrow">{`<`}</td>
        <td>{`${month()}, ${year()}`}</td>
        <td onClick={() => changeMonth("next")} className="arrow">{`>`}</td>
      </tr>
    );
  };

  return (
    <>
      <div className="tableWrapper">
        <div className="tableWrapper">
          <table>
            <thead style={{ display: "table-caption" }}>
              {monthNavigation()}
            </thead>
            <tbody>
              <tr>{displayWeekDays()}</tr>
              {displayDate()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Calendar;
