import React from "react";

const About = () => {
  return (
    <section className="flex items-center  py-10 font-poppins dark:bg-gray-800 ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg"
              alt
              className="relative z-40 object-cover w-full h-96 rounded-3xl"
            />
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-4xl font-semibold text_gradient">
              What is ResurrectedBird?
            </h2>
            <p className="mb-10 text-base leading-7 text-gray-800">
              ResusrectedBird is aftermarket firmware Based on Android Open
              Source Project that helps the Pentester to Peneratrate the web
              with a smooth gaming Experience while Amazing User face Interface
              Experience. We have picked some of the amazing features for gaming
              purposes. You can find an amazing app alongside the Rom which will
              help you perform gaming tasks seamlessly while having full-fledged
              User Interface Customization. RessurectedBird Helps the hacker to
              use more than 50 hacking tools as of now and more will be added in
              the future. these tools include Johny the ripper, Maltego,
              Metasploit, and Nmap. For Gaming, there will be a gfx tool that
              helps users to have a good frame rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
