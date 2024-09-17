import { testimonials } from "../constant"
import {Instagram} from "lucide-react"
import {Linkedin} from "lucide-react"
import {Send} from "lucide-react"
import {Mail} from "lucide-react"



const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        More Information 
      
      <span className="bg-gradient-to-r from-green-500  to-cyan-600 text-transparent bg-clip-text">
          {" "}
          About Us
        </span>
        </h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex space-x-16"> {/* Flex container with space between icons */}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={50} color="#22c55e"  strokeWidth={1.25} />  {/* Adjust the icon size */}
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Instagram size={50} color="#28e377"  strokeWidth={1.25}/>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Mail size={50} color="#28e3a6"  strokeWidth={1.25}/>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Send size={50} color="cyan" strokeWidth={1.25} />
          </a>
        </div>
      </div>
    </div>
  );
};


export default Testimonials;
