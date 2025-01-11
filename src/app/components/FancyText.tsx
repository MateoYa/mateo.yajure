'use client';
import React, { useState, useEffect } from "react"

const FancyText = () => {
  const [text, setText] = useState("")
  // const [welcome, setWelcome] = useState(false)
  const [fullText, setFullText] = useState(
      "Hi my name is Mateo Yajure I am a Computer Engineering Student @ Waterloo & a fan of all things puzzles. My main programming intrests are game dev, web dev and robtics!! "
    )
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
      // setTimeout((setWelcome(true)) => {}, 50)
      if (index < fullText.length) {
        setTimeout(() => {
          setText(text + fullText[index])
          setIndex(index + 1)
        }, 15)
      }
    }, [index])
  
    return(
        <h2 className="text-left">{text}<span className="text-[#0a0a0a]">{fullText.replace(text, "")}</span></h2>
    )
}
export default FancyText;