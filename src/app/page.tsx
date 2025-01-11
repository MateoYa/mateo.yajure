import Image from "next/image";
import Header from './components/header';
import PathDrawing from "./components/PathDrawing";
import FancyText from "./components/FancyText"
import Programmer from "./components/Programmer";
import * as motion from "motion/react-client"
import LandingPage from "./components/LandingPage";
export default function Home() {
  return (
    <div >
      <Header />
      <LandingPage/>
      <main className="flex flex-col gap-0 row-start-2 ] items-center bg-[#324A5E]">
            <h1 className="text-6xl">Experience</h1>
            <h1 className="text-6xl">Projects</h1>
            <h1 className="text-6xl">About Me</h1>
            <h1 className="text-6xl">Contact Me</h1>

      </main>



      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
          Learn
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
          Examples
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
          Go to nextjs.org →
        </a>
      
      </footer>
    </div>
  );
}
