'use client';
import React, { useState, useEffect } from "react"

const FancyText = () => {
  const [text, setText] = useState("")
  // const [welcome, setWelcome] = useState(false)
  const [fullText, setFullText] = useState(
      "My name is Mateo Yajure I am a Computer Engineering Student @ Waterloo & a fan of all things puzzles."
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
        <h2 className="text-left">{text}</h2>
    )
}
export default FancyText;