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
                pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
                opacity: { delay, duration: 3 },
            },
        }
    },
  }
export default function Ellipse() {
    return (
        <motion.svg
        id="Layer_2"
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
