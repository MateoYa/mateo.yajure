"use client"
import * as motion from "motion/react-client"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.25
        return {
            pathLength: 0.03,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
                opacity: { delay, duration: 5 },
            },
        }
    },
  }
export default function Ellipse() {
    return (
        <motion.svg
        id="Layer_2"
        viewBox="0 0 160 90"
        initial="hidden"
        animate="visible"
      >
        <motion.ellipse
          style={{
            fill: "#2c2d2e",
          }}
          cx={80}
          cy={135}
          rx={160}
          ry={55}
          variants={draw}
          custom={0}
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
        
    )
}

/**
 * ==============   Styles   ================
 */

const image: React.CSSProperties = {
    maxWidth: "80vw",
}

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}
