// import React from "react";

import Event from "../../Components/Events/Event";

const HomeEvent = () => {
  return (
    <>
      <div className="py-[9rem] relative object-cover w-full h-full">
        <div className="flex flex-col justify-center items-center gap-[1rem] text-center">
          <h2 className="text-[4rem] font-medium">Our Memorable Events</h2>
          <p className="text-[2rem] font-medium">
            We throw most lit bollywood nightclub and dayclub events across USA.
          </p>
          <div className="mt-[2rem]">
            <Event />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeEvent;
