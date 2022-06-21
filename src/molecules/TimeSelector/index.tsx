import React, { ChangeEvent, useEffect, useState } from "react";
import TimeDropdown from "../../atoms/TimeDropdown";
import { hours, minutes } from "../../constants";
import "./timeSelector.scss";

// enum dataTypeEnum {
//   startHour = "startHour",
//   startMinute = "startMinute",
//   endHour = "endHour",
//   endMinute = "endMinute",
// }

// type Times = {
//   [k in dataTypeEnum]: string;
// };

interface Props {
  setTime: (
    data:
      | { endHour: string }
      | { endMinute: string }
      | { startHour: string }
      | { startMinute: string }
  ) => void;
  value: {
    startHour: string;
    startMinute: string;
    endHour: string;
    endMinute: string;
  };
}

const TimeSelector = ({ setTime, value }: Props) => {
  const [displayTime, setDisplayTime] = useState({
    startHour: hours(),
    startMinute: minutes,
    endHour: hours(),
    endMinute: minutes,
  });

  useEffect(() => {
    getAvailableEndHours();
    getAvailableEndMinutes();
  }, [value.startHour, value.endHour, value.startMinute]);

  const getAvailableEndHours = () => {
    if (value.startMinute === "45") {
      setDisplayTime((displayTime) => ({
        ...displayTime,
        endHour: hours().slice(Number(value.startHour) + 1),
      }));
      if (value.startHour === value.endHour) {
        setTime({
          endHour: (Number(value.startHour) + 1).toString(),
        });
      }
    } else {
      setDisplayTime((displayTime) => ({
        ...displayTime,
        endHour: hours().slice(Number(value.startHour)),
      }));
    }
  };
  const getAvailableEndMinutes = () => {
    if (value.startHour == value.endHour) {
      if (value.startMinute === "00") {
        setDisplayTime((displayTime) => ({
          ...displayTime,
          endMinute: minutes.slice(1),
        }));
        setTime({ endMinute: "15" });
      }
      if (value.startMinute === "15") {
        setDisplayTime((displayTime) => ({
          ...displayTime,
          endMinute: minutes.slice(2),
        }));
        setTime({ endMinute: "30" });
      } else if (value.startMinute === "30") {
        setDisplayTime((displayTime) => ({
          ...displayTime,
          endMinute: minutes.slice(3),
        }));
        setTime({ endMinute: "45" });
      }
    } else {
      setDisplayTime((displayTime) => ({
        ...displayTime,
        endMinute: minutes,
      }));
    }
  };
  const handleStartHourSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setTime({
      startHour: e.target.value,
      endHour: e.target.value,
    });
  };

  const handleStartMinuteSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setTime({ startMinute: e.target.value });
  };

  const handleEndHourSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setTime({ endHour: e.target.value });
  };

  const handleEndMinuteSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setTime({ endMinute: e.target.value });
  };
  return (
    <>
      <div className="selector-wrapper">
        <div className="time-wrapper">
          <span className="time-label">Start Hour</span>
          <TimeDropdown
            options={hours()}
            handleSelect={handleStartHourSelect}
            value={value.startHour}
          />
        </div>
        <div className="time-wrapper">
          <span className="time-label">Minute</span>
          <TimeDropdown
            options={minutes}
            className="minute-dropdown"
            handleSelect={handleStartMinuteSelect}
            value={value.startMinute}
          />
        </div>
        <div className="colon">:</div>
        <div className="time-wrapper">
          <span className="time-label">End Hour</span>
          <TimeDropdown
            options={displayTime.endHour}
            handleSelect={handleEndHourSelect}
            value={value.endHour}
          />
        </div>
        <div className="time-wrapper">
          <span className="time-label">Minute</span>
          <TimeDropdown
            options={displayTime.endMinute}
            handleSelect={handleEndMinuteSelect}
            className="minute-dropdown"
            value={value.endMinute}
          />
        </div>
      </div>
    </>
  );
};
export default TimeSelector;
