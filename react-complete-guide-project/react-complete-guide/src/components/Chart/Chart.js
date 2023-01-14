import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    // Grafik oluşturmak için Expenses - ExpensesChart - Chart - ChartBar dosyalarını incele
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Tüm değerleri almak amacıyla kullanıldı
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
