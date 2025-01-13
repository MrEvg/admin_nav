import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2018", 1170, 460, 250],
  ["2019", 660, 1120, 300],
  ["2020", 200, 400, 200],
  ["2021", 370, 460, 250],
  ["2022", 460, 1220, 320],
  ["2023", 1230, 240, 250],
  ["2024", 1030, 540, 350],
];

const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses and Profits over the Years",
  },
  colors: [
    "rgb(53, 138, 148)",
    "rgb(37, 11, 165)",
    "#188310"
  ]
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="55vh"
      data={data}
      options={options}
    />
  );
}
