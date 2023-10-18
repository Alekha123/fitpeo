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
import { FaSistrix } from "react-icons/fa6";
import { DonutChart } from "./DonutChart";

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
      text: "Overview ",
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
      data: [50, 30, 80, 60, 70, 20, 60, 90, 75, 50, 40, 60],
      backgroundColor: [
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "gray",
        "Indigo",
        "gray",
        "gray",
        "gray",
        "gray",
      ],
    },
  ],
};

const Body = () => {
  return (
    <>
      <div className="bg-slate-100 flex">
        <div className=" flex justify-between mx-auto ">
          {cardInfo.map((item) => (
            <div
              className="w-full m-5 p-3 bg-white border-2 flex"
              key={item.id}
            >
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="w-16 h-16 mr-3 rounded-full"
                />
              </div>
              <div>
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
            </div>
          ))}
        </div>
      </div>
      {/* Chart Bar */}
      <div className="flex">
        <div className="w-[60%]">
          <Bar options={option} data={data} />
        </div>

        <div className="w-[40%] ">
          <DonutChart />
        </div>
      </div>

      <div className="bg-slate-100 mt-0">
        <div className="flex justify-between py-5 bg-slate-100 px-8 mt-0">
          <div>Product Sell</div>
          <div className="flex mr-2 ">
            <div className="relative">
              <FaSistrix className="inline-flex mr-2 absolute mt-2 ml-2" />
              <input
                className="border-2 pl-7"
                type="text"
                placeholder="search"
              />
            </div>
            <div className="pl-2">
              <p>Last 30 days</p>
            </div>
          </div>
        </div>

        <div className=" py-1 bg-slate-100 px-1 mt-1">
          <table className="w-full">
            <tr className="text-left">
              <th className="pl-4">Product Name</th>
              <th className="text-right">Stock</th>
              <th className="text-right">Price</th>
              <th className="text-right">Total Sales</th>
            </tr>
            <tr className="text-left">
              <td className="pl-4 flex">
                <img
                  className="w-16 h-16"
                  src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                  alt="abstract"
                />
                <div >
                  <div >Abstract 3D</div>
                  <div>lorem ipsum sjjsjsj</div>
                </div>
              </td>
              <td className="text-right">32 in stock</td>
              <td className="text-right">$ 45.99</td>
              <td className="text-right">20</td>
            </tr>

            <tr className="text-left">
              <td className="pl-4 flex">
                <img
                  className="w-16 h-16"
                  src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
                  alt="abstract"
                />
                <div >
                  <div>Sarphens Illustration</div>
                  <div>lorem ipsum djyhkj</div>
                </div>
              </td>
              <td className="text-right">32 in stock</td>
              <td className="text-right">$ 45.99</td>
              <td className="text-right">20</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Body;

const cardInfo = [
  {
    id: 1,
    title: "Earning",
    image:
      "https://cdn-icons-png.flaticon.com/512/5501/5501360.png",
    income: "198K",
    monthlyIncome: "37.8",
  },
  {
    id: 2,
    title: "Orders",
    image:
      "https://booster.io/wp-content/uploads/custom-order-numbers-e1438361586475.png",
    income: "2.4K",
    monthlyIncome: "2",
  },
  {
    id: 3,
    title: "Balance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOieLvE6YEvSAG-KApx_HASWZvE1D53f7rxWBUs6Pr6lkVPhwQ9LukaDLEuEIicgvNWrs&usqp=CAU",
    income: "2.4K",
    monthlyIncome: "2",
  },
  {
    id: 4,
    title: "Total Sales",
    image:
      "https://banner2.cleanpng.com/20181119/slf/kisspng-shopping-logo-graphic-design-t-shirt-logo-5bf2d2e5a8a260.0203279815426403576907.jpg",
    income: "89K",
    monthlyIncome: "11",
  },
];
