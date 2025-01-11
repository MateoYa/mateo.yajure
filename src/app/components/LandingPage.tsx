"use client"
import * as motion from "motion/react-client"
import Image from "next/image";
import Header from './header';
import PathDrawing from "./PathDrawing";
import FancyText from "./FancyText"
import Programmer from "./Programmer";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
      const delay = i * 0.25
      return {
          pathLength: 0.03,
          opacity: 1,
          transition: {
              pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
              opacity: { delay, duration: 0.5 },
          },
      }
  },
}
export default function LandingPage() {
    return(
      <div className="flex flex-col gap-40 row-start-2 items-center h-screen  overflow-visible">
        <div className="flex flex-col lg:flex-row lg:mt-[15%] gap-5 lg:gap-0 w-[90%] lg:w-[65%] lg:space-x-[5%] items-center justify-end">
          <div className="list-inside content-center  text-xl text-center font-[family-name:var(--font-geist-mono)] ">
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
      <div className="absolute bottom-[-2] lg:bottom-[-60] w-screen">
            <motion.svg
                viewBox="72 -57 202 118"
                initial="hidden"
                animate="visible"
              >
                <motion.ellipse
                  style={{
                    fill: "#324A5E",
                  }}
                  cx={172}
                  cy={65}
                  rx={120}
                  ry={18}
                  variants={draw}
                  custom={16.5}
                />
                {/* <motion.rect
                  style={{
                    fill: "#324A5E",
                  }}
                  x={72}
                  y={58}
                  
                  width={202}
                  height={1}
                  variants={draw}
                  custom={.5}  
                /> */}
            </motion.svg>   
      </div>
      </div> 
      
    )
}
const image: React.CSSProperties = {
    maxWidth: "80vw",
}