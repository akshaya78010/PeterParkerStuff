// App.jsx
import React from "react";
import PlacementChart from "./BarChart";
import AreaChart from "./AreaChart";
import LineChart from "./LineChart";
import "./App.css";
import SideBarChart from "./SideBarChart";
import GradientDonut from "./GradientDonut";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <h1>Placement Statistics of CS Graduates</h1> */}
      <div className="top-section">
        <div className="GradientDonut">
          <GradientDonut />
        </div>
        <div class="metric-values">
          <div>
            <h3>$131,450</h3>
            <p>Avg Salary</p>
          </div>

          <div>
            <h3>15%</h3>
            <p>Global Job Growth</p>
          </div>
          <div>
            <h3>380,900+</h3>
            <p>Annual Departures</p>
          </div>
          <div>
            <h3>317,700+</h3>
            <p>New Job Openings</p>
          </div>
        </div>
      </div>
      <div className=" row-2">
        <div className="PlacementChart">
          <PlacementChart />
        </div>
        <div className="AreaChart">
          <AreaChart />
        </div>
      </div>
      <div className="LineChart">
        <LineChart />
      </div>
      {/* <SideBarChart /> */}
    </div>
  );
}

export default App;
