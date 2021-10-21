import React from "react";
import { BarChart } from "react-d3-components";


function BarChartContainer() {
  let data = [
    {
      label: "Aldersgruppe",
      values: [
        { x: "18-24", y: 7000 },
        { x: "25-34", y: 31000 },
        { x: "35-44", y: 34500 },
        { x: "45-55", y: 25000 },
        { x: "55-64", y: 7500 }
      ]
    }
  ];



  return (
    <div>

      <p className="age">
        <span class="dot" /> Age
      </p>
      <BarChart
        data={data}
        width={600}
        height={500}

        margin={{ top: 70, bottom: 50, left: 90, right: 0 }}

        xAxis={{
          tickPadding: 8,
          innerTickSize: 10,
          label: "Age-group",
          labelPadding:25
        }}
        yAxis={{
          tickPadding: 8,
          innerTickSize: 10,
          label: "Total",
          strokeColor: "red",
        }}
        stroke={{
          strokeWidth: 2,
          strokeColor: "#fff",
          strokeLinecap: "round",
        }}

      />

    </div>
  );
}
export default BarChartContainer;
