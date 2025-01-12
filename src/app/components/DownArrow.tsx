"use client"
import * as motion from "motion/react-client"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 0.3,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 15, bounce: 0 },
                opacity: { delay, duration: 5 },
            },
        }
    },
}

export default function DownArrow() {
    return (
    <motion.svg viewBox="0 0 32 32"
            initial="hidden"
            animate="visible"
            style={image}>
        <motion.path
            d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z"
            stroke={"#FFFFFF"}
            variants={draw}
            custom={0}            
            />
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
