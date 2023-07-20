import React from "react";
import Image from "next/image";
import { header } from "@/assests";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between px-20 py-8 bg-white">
      {/* Left side */}

      <div className="lg:w-1/2 lg:pr-8 text-left">
        <h1 className="text-6xl font-bold mb-5 pb-7">
          An Industrial <br />
          Take on <br />
          Streetwear
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Anyone can beat you, but no one <br /> can beat your outfit as long as
          you wear <br /> Dine outfits.
        </p>

        <div className="pt-7">
          <Button variant="outline" className="py-6 border border-black">
            Shop Now
          </Button>
        </div>
      </div>

      {/* Right side */}
      <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0 relative">
        <div className="absolute inset-0 bg-blue-200 rounded-full opacity-50"></div>
        <div className="relative z-10">
          <Image
            src={header} // Replace with the image path
            alt="Model in Streetwear"
            width={200}
            height={200}
            className="hidden lg:inline-block w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
