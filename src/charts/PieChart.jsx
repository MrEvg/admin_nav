import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Learn", 7],
  ["Eat", 1],
  ["Commute", 2],
  ["Watch TV", 6],
  ["Sleep", 8],
];

const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
  colors: [
    "rgb(53, 138, 148)",
    "rgb(37, 11, 165)",
    "rgb(40, 134, 70)",
    "#f39f2a",
    "#188310"
  ]
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="270px"
      data={data}
      options={options}
    />
  );
}
