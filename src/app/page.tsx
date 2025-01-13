import Image from "next/image";
import Header from './components/header';
import PathDrawing from "./components/PathDrawing";
import FancyText from "./components/FancyText"
import Programmer from "./components/Programmer";
import * as motion from "motion/react-client"
import LandingPage from "./components/LandingPage";
import Experience from "./components/Experience";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import Ellipse from "./components/Ellipse";
export default function Home() {
  return (
    <div >
      <Header />
      <LandingPage/>
      <Experience/>


      


      <footer className="row-start-3 flex flex-col gap-3 flex-wrap items-center justify-center">
        <div id="Connect" className="flex flex-col justify-center items-center">
        <h1 className="text-6xl text-[#1cc7c9] text-center drop-shadow-[-1px_1px_10px_rgba(0,0,0,1)]">Say Hello</h1>
        <h1 className="text-xl ">It would be great to hear from you!</h1>
        </div>
        
        <div className="flex flex-row gap-3">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub size={15}/>
            Github
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={15}/>
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:mateo.e.yajure@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdAlternateEmail size={15}/>
            mateo.e.yajure@gmail.com
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineContactPage size={15}/>
            Resume
          </a>
        </div>
        
      
      </footer>
    </div>
  );
}
