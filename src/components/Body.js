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
      backgroundColor: ["blue"],
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
            <div>
                <img src={item.image} alt='' className='w-full'/>
            </div>
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
        <div className="w-[50%]">
          <Bar options={option} data={data} />
        </div>

        <div className="w-[20%]">{/* <Bar options={option} data={data} /> */}</div>
      </div>

     
     <div className="flex justify-between py-5 bg-slate-100 px-8 mt-7">
       <div>Product Sell</div>
       <div className="flex mr-2 ">
         <div className="relative">
           <FaSistrix className="inline-flex mr-2 absolute mt-2 ml-2"/> 
           <input className="border-2 pl-7" type="text" placeholder="search"/>
          </div>
         <div className="pl-2">
           <p>Last 30 days</p>
          </div>
       </div>
       
     </div>

      <div className="flex justify-between py-5bg-slate-100 px-8 mt-7">
        <div>Product Name</div>
        <div className="flex ">
          <div >Stock</div>
          <div className="pl-16">Price</div>
          <div className="pl-16">Total Sales</div>
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
    image: "earning.jpg",
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
