import React from "react";
import Shopping_Header from "./Shopping_Header";
import { Outlet } from "react-router-dom";

const Shopping_Layout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      {/* <h1>shop</h1> */}
      <Shopping_Header />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Shopping_Layout;
