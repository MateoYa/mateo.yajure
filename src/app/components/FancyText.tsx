'use client';
import React, { useState, useEffect } from "react"

const FancyText = () => {
  const [text, setText] = useState("")
  // const [welcome, setWelcome] = useState(false)
  const [fullText, setFullText] = useState(
      "Hi my name is Mateo Yajure. I am a Computer Engineering Student at the University of Waterloo, and a fan of all things puzzles. My main programming interests are game dev, web dev and robotics!!"
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
        <h2 className="text-left font-sans">{text}<span className="text-[#0a0a0a]">{fullText.replace(text, "")}</span>
           {index==fullText.length?
          <div className="absolute bottom-[20%] left-[0] w-[100%] flex justify-center"> 
              <a href="/yajure_mateo_resume.pdf">
                  <button  className="bg-[#1cc7c9] hover:bg-[#1cc7c9] text-black font-bold text-6xl py-2 px-4 rounded-[15px]">
                      Resume
                  </button>
              </a> 

          </div>
          :
          <div className="absolute bottom-[20%] left-[0] w-[100%] flex justify-center">
              <a href="/yajure_mateo_resume.pdf">
                  <button  className="bg-[#0a0a0a] w-[100%] hover:bg-[#0a0a0a] text-[#0a0a0a] font-bold text-6xl py-2 px-4 rounded-[15px]" >
                      Resume
                  </button>
              </a>
          </div>
          }
        </h2>
       
        
    )
}
export default FancyText;