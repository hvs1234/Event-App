// import React from 'react'
import { Link } from "react-router-dom";
import logo from "/Images/logo-main.png";

const Hero = () => {
  return (
    <>
      <div className="relative object-cover bg-no-repeat bg-center bg-cover w-full h-[100vh] transition-all duration-[0.4s] ease-linear">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
          src="/Images/hero-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.8] bg-[black]"></div>
        <div className="relative w-full flex flex-col gap-[2rem] text-center items-center justify-center h-[100%]">
          <img src={logo} alt="logo" className="w-[10%] max-[600px]:w-[20%] max-[500px]:w-[25%]" />
          <h1 className="text-[7rem] font-medium text-[white] max-xl:text-[5rem] max-md:text-[4rem] max-sm:text-[3rem] max-[400px]:text-[2.5rem]">
            Unforgettable Celebrations Moment
          </h1>
          <p className="text-[white] text-[2.5rem] text-center leading-[1.5] font-normal max-w-[50%] max-2xl:max-w-[60%] max-xl:max-w-[70%] max-xl:text-[2rem]  max-md:text-[1.8rem] max-md:max-w-[80%] max-sm:text-[1.6rem]">
            Capture the essence of joy with our expertly crafted events. From
            intimate gatherings to grand affairs, we make every moment
            unforgettable
          </p>
          <div className="mt-[2rem]">
            <Link
              to={"/"}
              className="bg-[darkgreen] text-[white] rounded-xl px-[4rem] py-[1rem] text-[2.5rem] outline-none border-none transition-all duration-[0.3s] ease-linear hover:bg-[#104b10] font-normal max-xl:text-[2rem] max-sm:text-[1.8rem]"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
