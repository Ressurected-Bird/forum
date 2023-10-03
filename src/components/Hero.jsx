import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row-reverse p-7 sm:p-10 w-screen ">

      <div className="px-5 w-[80%] md:w-[50%] md:h-[50%]">
        <img src="assets/hero_img.svg" className="object-contain " alt="" />
      </div>

      <div className="mt-10 sm:m-0 px-5  w-full md:w-[50%] flex flex-col justify-center 
      sm:p-6 text-start ">
        <h1 className="text-3xl md:text-5xl font-bold leadi">
          Welcome to
          <br />
          <span className="text_gradient"> RessurectedBird </span>
          Forum
        </h1>
        <p className="mt-6 mb-8 text-sm md:text-lg sm:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          vel aliquam sagittis, ullamcorper ut diam, tincidunt. Lacinia justo
          nunc amet, varius dolor. Nisl ut natoque libero et. Ipsum nunc purus.
        </p>
        <div>
            <Link to={"/register"} className="background_gradient p-3  rounded-lg text-white  text-sm sm:text-base" >
              Create an Account
            </Link>
        </div>
      </div>

    </section>
  );
};

export default Hero;
