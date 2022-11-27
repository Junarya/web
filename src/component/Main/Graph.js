import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function Graph(props) {
  const data = [
    {
      name: "2020",
      cafe: 1,
      staff: 3,
      drinks: 10,
      cups: 1.5
    },
    {
      name: "2021",
      cafe: 1,
      staff: 10,
      drinks: 20,
      cups: 2.7
    },
    {
      name: "2022",
      cafe: 2,
      staff: 15,
      drinks: 30,
      cups: 4
    }
  ];

  return (
    <ResponsiveContainer width="100%">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend wrapperStyle={{ fontWeight: "bold", fontSize: "1.3em" }} />
        <Line
          name="Напитков в меню"
          type="monotone"
          dataKey="drinks"
          stroke="#e07b5a"
          strokeWidth="3"
        />
        <Line
          name="Бариста"
          type="monotone"
          dataKey="staff"
          stroke="#a7b541"
          strokeWidth="3"
        />
        <Line
          name="Стаканов в месяц, тыс."
          type="monotone"
          dataKey="cups"
          stroke="#cfac4c"
          strokeWidth="3"
        />
        <Line
          name="Кафе"
          type="monotone"
          dataKey="cafe"
          stroke="#616161"
          strokeWidth="3"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Graph;
