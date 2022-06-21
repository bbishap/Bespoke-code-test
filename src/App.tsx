import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateSlots from "./Pages/createSlots";
import ListSlots from "./Pages/listSlots";
import "./App.css";
import Overview from "./Pages/overview";
import React, { useState } from "react";

interface Data {
  startTime: string;
  seating: number;
}
export interface Value {
  dataObject: Data[];
  setState: (value: Data[]) => void;
}

export const MyContext = React.createContext<Value | null>(null);

function App() {
  const [dataObject, setDataObj] = useState<Data[]>([]);

  const setState = (value: Data[]) => {
    setDataObj(value);
  };

  return (
    <Router>
      <MyContext.Provider value={{ dataObject, setState }}>
        <Routes>
          <Route path="/list-slots" element={<ListSlots />} />
          <Route path="/create-slots" element={<CreateSlots />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/" element={<CreateSlots />} />
          {/* <Route path="*" component={} /> */}
        </Routes>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
