import React from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Modular Bar Chart",
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Product A",
      data: [20, 30, 40, 50, 60, 70, 20, 30, 40, 50, 60, 70],
      backgroundColor: "blue",
    },
  ],
};

const Body = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className=" flex justify-between mx-auto ">
          {cardInfo.map((item) => (
            <div className="w-full m-5 bg-white border-2 " key={item.id}>
              <p>{item.title}</p>
              <p>${item.income}</p>
              <p
                className={`${
                  item.monthlyIncome > 10 ? "text-green-800" : "text-red-800"
                }`}
              >
                {item.monthlyIncome}% this month
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Chart Bar */}
      <div className="flex">
        <div className="w-[80%]">
          <Bar options={option} data={data} />
        </div>

        <div className="w-[20%]">{/* <Bar options={option} data={data} /> */}</div>
      </div>
    </>
  );
};

export default Body;

const cardInfo = [
  {
    id: 1,
    title: "Earning",
    image: "",
    income: "198K",
    monthlyIncome: "37.8",
  },
  {
    id: 2,
    title: "Orders",
    image: "",
    income: "2.4K",
    monthlyIncome: "2",
  },
  {
    id: 3,
    title: "Balance",
    image: "",
    income: "2.4K",
    monthlyIncome: "2",
  },
  {
    id: 4,
    title: "Total Sales",
    image: "",
    income: "89K",
    monthlyIncome: "11",
  },
];
