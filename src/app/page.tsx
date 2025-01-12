import Image from "next/image";
import Header from './components/header';
import PathDrawing from "./components/PathDrawing";
import FancyText from "./components/FancyText"
import Programmer from "./components/Programmer";
import * as motion from "motion/react-client"
import LandingPage from "./components/LandingPage";
import Experience from "./components/Experience";
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
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Github
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Email
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Resume
          </a>
        </div>
        
      
      </footer>
    </div>
  );
}
