import dayjs, { Dayjs } from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { MyContext, Value } from "../../App";
import Button from "../../atoms/button";
import Calendar from "../../atoms/Calendar";
import Input from "../../atoms/input";
import TimeSelector from "../../molecules/TimeSelector";
import "./createBulkSlots.scss";

interface State {
  date: Dayjs;
  time: Time;
  capacity: number;
}

type Time = {
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
};

type singleTime =
  | { startHour: string }
  | { endHour: string }
  | { startMinute: string }
  | { endMinute: string };

const CreateBulkSlot = () => {
  const context = useContext(MyContext) as Value;
  const [data, setData] = useState({
    date: dayjs(),
    time: {
      startHour: "00",
      startMinute: "00",
      endHour: "00",
      endMinute: "15",
    },
    capacity: 1,
  } as State);

  const onTimeUpdate = (time: singleTime) => {
    setData((data) => ({ ...data, time: { ...data.time, ...time } }));
  };
  const onDateChange = (e: React.MouseEvent<HTMLElement>, date: Dayjs) => {
    setData((data) => ({ ...data, date: date }));
  };
  const onCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((data) => ({ ...data, capacity: Number(e.target.value) }));
  };

  const handleRefresh = () => {
    setData({
      date: dayjs(),
      time: {
        startHour: "00",
        startMinute: "00",
        endHour: "00",
        endMinute: "15",
      },
      capacity: 1,
    });
  };

  const getSlotTimings = () => {
    const timingArray = [];
    for (
      let i = Number(data.time.startHour);
      i <= Number(data.time.endHour);
      i++
    ) {
      if (Number(data.time.startHour) === Number(data.time.endHour)) {
        for (
          let j = Number(data.time.startMinute);
          j <= Number(data.time.endMinute);
          j += 15
        ) {
          timingArray.push({
            startTime: `${i} : ${j.toString().padStart(2, "0")}`,
            seating: 0,
          });
        }
      } else {
        if (i === Number(data.time.startHour)) {
          for (let j = Number(data.time.startMinute); j <= 45; j += 15) {
            timingArray.push({
              startTime: `${i} : ${j.toString().padStart(2, "0")}`,
              seating: 0,
            });
          }
        } else if (i === Number(data.time.endHour)) {
          for (let j = 0; j <= Number(data.time.endMinute); j += 15) {
            timingArray.push({
              startTime: `${i} : ${j.toString().padStart(2, "0")}`,
              seating: 0,
            });
          }
        } else {
          for (let j = 0; j <= 45; j += 15) {
            timingArray.push({
              startTime: `${i} : ${j.toString().padStart(2, "0")}`,
              seating: 0,
            });
          }
        }
      }
    }
    return timingArray;
  };

  const createSlots = () => {
    let timings = getSlotTimings();
    let seatingCap = data.capacity;
    let totalSlots = timings.length;

    if (seatingCap > totalSlots) {
      let remainingSeatings = seatingCap % totalSlots;
      let eachSlotSeating = Math.floor(seatingCap / totalSlots);

      for (let i = 0; i < totalSlots; i++) {
        timings[i].seating = eachSlotSeating;
      }
      if (remainingSeatings >= 1) {
        for (let i = totalSlots - 1; i >= totalSlots - remainingSeatings; i--) {
          timings[i].seating = eachSlotSeating + 1;
        }
      }
    } else {
      for (let i = 0; i < seatingCap; i++) {
        timings[i].seating = 1;
      }
    }
    context.setState(timings);
    handleRefresh();
    alert("Slots created successfully");
  };
  return (
    <>
      <div className="form-wrapper">
        <div>
          <span className="header">1. SELECT DATE OF APPOINTMENT *</span>
          <span className="sub-header">
            Please select the dates that you'd like to open up slots.
          </span>
          <Calendar onDateClick={onDateChange} value={data.date} />
        </div>
        <div>
          <span className="header">2. SELECT THE HOURS *</span>
          <span className="sub-header">
            Please select the Start and End Time.
          </span>
          <TimeSelector setTime={onTimeUpdate} value={data.time} />
          <div className="time-footer-wrapper">
            <span className="time-footer">Please select the Start Time.</span>
            <span className="time-footer">
              Please select the time your last 15 min Block Starts
            </span>
          </div>
        </div>
        <div>
          <span className="header">3. CHOOSE SEATING CAPACITY *</span>
          <span className="sub-header">
            Please enter total Seating Capacity.
          </span>
          <Input
            type="number"
            onChange={onCapacityChange}
            value={data.capacity}
          />
        </div>
      </div>
      <div className="button-wrapper">
        <Button
          type="secondary"
          onClick={handleRefresh}
          className="cancel-button"
        >
          Cancel
        </Button>
        <Button type="primary1" onClick={createSlots}>
          Create Slots
        </Button>
      </div>
    </>
  );
};
export default CreateBulkSlot;
