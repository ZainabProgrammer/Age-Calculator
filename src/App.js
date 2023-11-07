import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [date, setDate] = React.useState({
    year: "",
    month: "",
    day: "",
  });

  const [age, setAge] = React.useState({
    year: "--",
    month: "--",
    day: "--",
  });

  return (
    <div className="container">
      <div className="card">
        <Form date={date} setDate={setDate} setAge={setAge}></Form>
        <div className="age-result">
          <h1>
            <span>{age.year}</span> years
          </h1>
          <h1>
            <span>{age.month}</span> months
          </h1>
          <h1>
            <span>{age.day}</span> days
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
