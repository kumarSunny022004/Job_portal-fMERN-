import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="conatiner px-4 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg">
        <h1 className="text-2xl lg:text-4xl mb-8 font-bold max-w-md">Download Mobile App for Better Experience</h1>
        <div className="flex gap-4">
          <a href="#" className="inline-block">
            <img className="h-12" src={assets.play_store} alt="Download on Play Store" />
          </a>
          <a href="#"  className="inline-block">
            <img className="h-12" src={assets.app_store} alt="Download on App Store" />
          </a>
        </div>
      <img className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden" src={assets.app_main_img} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
