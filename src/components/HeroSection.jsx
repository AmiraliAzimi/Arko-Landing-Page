import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        AI Selling Automation
        <span className="bg-gradient-to-r from-green-500  to-cyan-600 text-transparent bg-clip-text">
          {" "}
          for Onlineshops
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        A new way for Online Shops to sell better and Inroduce them product Better , Faster and More Fully
      </p>
      <div className="flex justify-center my-10">

        <a href="#" className="hover:bg-gradient-to-r from-green-600 to-cyan-500 py-3 px-4 mx-3 rounded-md border border-zinc-500">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-500 shadow-sm shadow-cyan-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border  border-green-500 shadow-sm shadow-cyan-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
