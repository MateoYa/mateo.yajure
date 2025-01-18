"use client"
import * as motion from "motion/react-client"
import Image from "next/image";
import Header from './header';
import PathDrawing from "./PathDrawing";
import FancyText from "./FancyText"
import Programmer from "./Programmer";
import Ellipse from "./Ellipse";
import DownArrow from "./DownArrow";


export default function LandingPage() {
    return(
      <div id="Home" className="flex flex-col h-[100vh] gap-40 row-start-2 items-center  ">

        <div className="flex flex-col md:flex-row mt-[15%] md:mt-[35%] lg:mt-[15%] gap-5 lg:gap-0 w-[90%]  lg:w-[65%] lg:space-x-[5%] items-center justify-end">
          <div className="list-inside content-center  text-xl text-center font-sans ">
            <PathDrawing/>
            <FancyText /> 
          </div>
          {/* personalized and animated */}
              <Programmer/>
              
            
          
          
          {/* <a><Image
              src="/file.svg"
              alt="Vercel logomark"
              width={1000}
              height={1000}
            />
          </a> */}
        </div>
        <div className="absolute -z-[10] bottom-[0] w-screen overflow-hidden">
            <Ellipse/>
        </div> 
      </div> 
      
    )
}
