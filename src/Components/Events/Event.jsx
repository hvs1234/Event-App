// import React from 'react'
import test from "/Images/Event/1.jpg";
import EventData from "./EventAPI";
import { useState } from "react";

const Event = () => {
  // API
  // ----------------------Event API-------------------------------

  const [eventdata] = useState(EventData);

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
  };

  return (
    <>
      <div className="py-[2rem] ml-auto mr-auto max-w-[140rem]">
        <div className="grid grid-cols-2 gap-[2rem] w-full h-full">
          {eventdata.map((e) => {
            return (
              <div
                key={e.id}
                onClick={handleOnClick(e.to)}
                className={`flex flex-col gap-[1rem] justify-center items-center text-center py-[2rem] px-[2rem] bg-[${e.boxcolor}] cursor-pointer transition-all duration-[0.3s] ease-linear hover:translate-y-[-2rem] rounded-xl`}
              >
                <img src={test} alt="test" className="w-[100%]" />
                <p className="text-[2.5rem] max-w-[80%] text-[white] font-medium uppercase">
                  {e.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Event;
