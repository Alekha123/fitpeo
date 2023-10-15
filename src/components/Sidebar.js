import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="bg-slate-800 flex flex-col h-screen justify-between">
        <div  className="mx-auto">
          <div className="mx-auto text-white py-8">LogoDashboard</div>
          <div className="text-white mx-auto space-y-4">
            <div>Dashboard</div>
            <div>Product</div>
            <div>Customers</div>
            <div>Income</div>
            <div>Promote</div>
            <div>Help</div>
          </div>
        </div>

        <div className="text-white mx-auto mb-8">Evano</div>
      </div>
    </>
  );
};

export default Sidebar;
