"use client"
import * as motion from "motion/react-client"
import Image from "next/image";
import FancyText from "./FancyText"
import frc from './4421_2024.jpeg';
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
export default function Experience() {
    return(
            <div id="Projects"  className="relative flex flex-col  row-start-0 items-center y-translate-0 space-y-4 bg-[#2c2d2e]">
                <h1 className="text-5xl text-[#1cc7c9] drop-shadow-[-1px_1px_10px_rgba(0,0,0,1)] font-sans">Experience & Projects</h1>
                <h1 className="text-xl space-y-10 font-sans">A brief look at the stuff I have worked on.</h1>
                <div className="w-[100%] lg:w-[100%]">
                    <div className="flex flex-col flex-wrap">
                        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                            <div className="relative w-full flex flex-col items-center">
                                <div className="relative w-[97%] flex flex-col items-center">
                                    <div className="w-[90%]">
                                    <h1 className={`text-3xl text-center w-full font-sans text-[#1cc7c9]`}>Telus</h1>
                                    <p className="text-xl text-left w-full font-sans mt-2">
                                        At TELUS, I worked on internal tooling on the System Capability Modernization team with projects for managing and mapping infrastructure.
                                    </p>
                                    <div className="relative flex flex-col items-start mt-4 w-[90%]">
                                        <img src="/TELUS_Logo.svg" alt="TELUS Logo" className="relative w-[25%] z-10" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full flex flex-col items-center">
                                <div className="relative w-[97%] flex flex-col items-center">
                                    <div className="w-[90%]">
                                    <h1 className={`text-3xl text-center w-full font-sans text-[#1cc7c9]`}>Photo Booth App</h1>
                                    <p className="text-xl text-left w-full font-sans mt-2">
                                        I was commisioned by <a href="https://www.youthdigitaltalent.com/project-showcase" className="underline">Digital Youth Talent</a> to build a Flutter photo booth app for that they used for high school graduations. The app took a timed sequence of three photos, combined them into a strip, and let users add stickers. It was used by over 75% of the graduating class (700+ students) to capture and share digital photo strips during the event.
                                    </p>
                                    <br/>
                                    <br/>
                                    <div className="absolute inset-x-[45%] inset-y-[91%]">
                                        <div className="flex justify-center y-space-[-5]">
                                            <a className="text-center w-100" href={"https://github.com/MateoYa/photobooth"}><IoLogoGithub size={30}/></a>
                                            <a className="text-center w-100" href={"https://www.youthdigitaltalent.com/project-showcase"}><TbWorld size={30}/></a>
                                        </div>
                                    </div>
                                    {/* <div className="relative flex flex-col items-start mt-4 w-[90%]">
                                        <img src="/TELUS_Logo.svg" alt="Photo Booth" className="relative w-[25%] z-10" />
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full flex flex-col items-center">
                                <div className="relative w-[97%] flex flex-col items-center">
                                    <div className="w-[90%]">
                                    <h1 className={`text-3xl text-center w-full font-sans text-[#1cc7c9]`}>Forge Robotics</h1>
                                    <p className="text-xl text-left w-full font-sans mt-2">
                                        I competed in the 2022 through 2024 <a href="https://www.firstinspires.org/robotics/frc" className="underline">FIRST Robotics Competition (FRC)</a> as a programmer on team 4421 Forge Robotics, serving as programming lead since in 2023. That year’s challenge involved launching foam rings into a goal 8 feet off the ground. I led development of a system to calculate firing vectors in real time, allowing accurate shots while the robot was in motion.
                                    </p>
                                    {/* <div className="relative flex flex-col items-start mt-4 w-[90%]">
                                        <img src="/TELUS_Logo.svg" alt="TELUS Logo" className="relative w-[25%] z-10" />
                                    </div> */}
                                    <br/>
                                    <div className="absolute inset-x-[45%] inset-y-[91%]">
                                        <div className="flex justify-center y-space-[-5]">
                                            
                                            <a className="text-center w-100 " href={"https://github.com/ATAARobotics/4421-robot-code-2024"}><IoLogoGithub size={30}/></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full flex flex-col items-center">
                                <div className="relative w-[97%] flex flex-col items-center">
                                    <div className="w-[90%]">
                                    <h1 className={`text-3xl text-center w-full font-sans text-[#1cc7c9]`}>Widget Devlopment</h1>
                                    <p className="text-xl text-left w-full font-sans mt-2">
                                        I was contracted by Intellect.ai to build custom web widgets their developers were struggling with. This included a complex pie chart with slice radii proportional to values to spec. I also created animated indicators that responded dynamically to percentage inputs. The example image combines two sections of the site for demonstration.
                                    </p>
                                    </div>
                                    <br/>
                                    <div className="absolute inset-x-[45%] inset-y-[91%]">
                                        <div className="flex justify-center y-space-[-5]">
                                            <a className="text-center w-100" href={"https://github.com/elianabean/intellect"}><IoLogoGithub size={30}/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full flex flex-col items-center">
                                <div className="relative w-[97%] flex flex-col items-center">
                                    <div className="w-[90%]">
                                    <h1 className={`text-3xl text-center w-full font-sans text-[#1cc7c9]`}>VM(Spot) Maintance Interface</h1>
                                    <p className="text-xl text-left w-full font-sans mt-2">
                                        I built a tool to run cloud workloads using discounted Spot Instances. It keeps tasks running by shifting them across AWS, GCP, and Azure when interruptions occur. The project reduces compute costs while maintaining reliability.
                                    </p> 
                                    <br/>
                                    <div className="absolute inset-x-[45%] inset-y-[91%]">
                                        <div className="flex justify-center y-space-[-5]">
                                            <a className="text-center w-100" href={"https://github.com/MateoYa/spot-creation-tool"}><IoLogoGithub size={30}/></a>
                                        </div>
                                    </div>
                                    {/* I wrote a utility to launch Spot Instances of virtual machines in multiple cloud computing platforms. Spot VMs are virtual machines that can be had at a discount, but they can get shut down without warning, as if their compute cycles were being auctioned. This program ensured the persistence of one's computation by detecting spot availability and launching persistent compute across instances in Amazon Web Services (AWS), Google Cloud Platform (GCP) and Microsoft Azure. I wrote this for the learning opportunity, but as an application it would be capable of optimizing the cost of a compute-intensive application across these three platforms. */}
                                    {/* I built a utility to launch Spot Instances on AWS, GCP, and Azure. Spot Instances offer discounted compute, but can be terminated without notice. My tool detects spot availability and maintains persistent computation by relaunching workloads as needed. It enables cost optimization for compute-intensive applications across cloud providers. I developed it as a learning project, but it has real-world use for resilient, low-cost cloud computing. */}
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full flex flex-col items-center">
                                <div className="relative w-[97%] flex flex-col items-center">
                                    <div className="w-[90%]">
                                    <h1 className={`text-3xl text-center w-full font-sans text-[#1cc7c9]`}>The Kingdom Project</h1>
                                    <p className="text-xl text-left w-full font-sans mt-2">
                                        The Kingdom Project was a civilization-style game developed in Unity, where players gathered resources from a procedurally generated map. I served as the lead developer, collaborating with a teammate who created custom assets including music, icons, and tile textures. My contributions included implementing the map generation algorithm, building placement, game loop cycles, UI systems, and a custom serialization scheme for saving progress.
                                    </p>
                                <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100" href={"https://github.com/MateoYa/the-kingdom-project"}><IoLogoGithub size={30}/></a>
                                </div>      
                                </div>
                                </div>
                            </div>
                            {/* <div className="relative w-full flex flex-col items-starth-full">
                            <h1 className="text-3xl text-left w-[100%] font-sans text-[#1cc7c9]">Digital Youth Talent</h1>

                            <p className="text-xl text-left  w-[90%] justify-center font-sans mt-2">
This was an app I made in flutter in a really tight timeline in order to be used at a highschool graduation in Calgary. I was approached by Digital Youth Talent to make this app because their high-school's developers were having difficulty. This was by far the most successful software project I have ever made being used by more than 70% of the graduating class.
                            </p>

                            <div className="relative flex flex-col items-start mt-4 w-[90%]">
                                <img src="/TELUS_Logo.svg" alt="Team 4421 in 2024" className="relative w-[25%] z-10" />

                            </div>
                            </div> 
                            <div className="relative w-full flex flex-col items-starth-full">
                            <h1 className="text-3xl text-left w-[100%] font-sans text-[#1cc7c9]">HS Robotics</h1>

                            <p className="text-xl text-left w-[90%] font-sans mt-2">
                                I competed in the 2022 through 2024
                                <a href="https://www.firstinspires.org/robotics/frc" className="underline ml-1">FIRST Robotics Competition (FRC)</a>
                                as a programmer on team 4421 Forge Robotics. In 2024, the game's objective was to score foam rings into a 1-foot tall goal, 8 feet off the ground.
                                I was the programming lead of our team of 40+, where we developed code to calculate the vector required to fire one of these notes into the goal
                                while the robot was in motion, based on our current position.
                            </p>

                            <div className="relative flex flex-col items-start mt-4 w-[90%]">
                                <div className="flex items-right justify-center w-full mt-1">
                                <span className="text-lg font-semibold">2024</span>
                                <a href="https://github.com/ATAARobotics/4421-robot-code-2024">
                                    <IoLogoGithub size={30} />
                                </a>

                                <span className="text-lg font-semibold">2024</span>
                                <a href="https://github.com/ATAARobotics/4421-robot-code-2024">
                                    <IoLogoGithub size={30} />
                                </a>
                                </div>

                                <img src="/4421_2024.jpeg" alt="Team 4421 in 2024" className="relative w-full z-10" />

                            </div>
                            </div> 
                            <div className="relative w-full flex flex-col text-black items-starth-full">
                            <h1 className="text-3xl text-center w-[100%] font-sans text-[#1cc7c9]">HS Robotics</h1>

                            <p className="text-xl text-left w-[100%] font-sans mt-2">
                                I competed in the 2022 through 2024
                                <a href="https://www.firstinspires.org/robotics/frc" className="underline ml-1">FIRST Robotics Competition (FRC)</a>
                                as a programmer on team 4421 Forge Robotics. In 2024, the game's objective was to score foam rings into a 1-foot tall goal, 8 feet off the ground.
                                I was the programming lead of our team of 40+, where we developed code to calculate the vector required to fire one of these notes into the goal
                                while the robot was in motion, based on our current position.
                            </p>

                            <div className="relative flex flex-col items-start mt-4 w-[90%]">
                                <div className="flex items-right justify-center w-full mt-1">
                                <span className="text-lg font-semibold">2024</span>
                                <a href="https://github.com/ATAARobotics/4421-robot-code-2024">
                                    <IoLogoGithub size={30} />
                                </a>

                                <span className="text-lg font-semibold">2024</span>
                                <a href="https://github.com/ATAARobotics/4421-robot-code-2024">
                                    <IoLogoGithub size={30} />
                                </a>
                                </div>

                                <img src="/4421_2024.jpeg" alt="Team 4421 in 2024" className="relative w-full z-10" />

                            </div>
                            </div>  */}

                        </div>
                    </div>  
                    <h1 className="text-3xl text-[#1cc7c9] drop-shadow-[-1px_1px_10px_rgba(0,0,0,1)] font-sans text-center">Some Project Photos</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5">
                        <div className="relative flex flex-col items-start mt-4 w-[100%]">
                            <img src="/4421_2024.jpeg" alt="Team 4421 in 2024" className="relative w-full z-10" />
                        </div>
                        <div className="relative flex flex-col col-span-2 items-start mt-4 w-[100%]">
                            <img src="/intellect_ai_example.png" alt="Team 4421 in 2024" className="relative w-full z-10" />
                        </div>
                        <div className="relative flex flex-col items-start mt-4 w-[100%]">
                                <img src="/kingdom_project.png" alt="TELUS Logo" className="relative w-full z-10" />
                        </div>
                        <div className="relative flex flex-col items-start mt-4 w-[100%]">
                                <img src="https://images.squarespace-cdn.com/content/v1/64d3135815ef857788423e61/87db6174-046a-4e44-a14c-727b3e28f76a/YDT+photo+booth+at+graduation.png" alt="TELUS Logo" className="relative w-full z-10" />
                        </div>
                    </div>
                    <div id="About" className="translate-y-[5%] h-[80%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-start content-evenly gap-12 row-auto">
                            <div className="relative flex justify-center top-100 border-solid border-[#000000] border-[3px]">
                                <img className="z-[1] " src={"https://images.squarespace-cdn.com/content/v1/64d3135815ef857788423e61/f39b48fa-af26-45a5-8d93-68e56d9ca923/Mateo+Y_20240717232733.jpg?format=750w"}/>
                            </div>
                            <div style={{backgroundColor: "#5f606b"}} className="w-[98%] md:w-[80%] flex justify-center items-start rounded-[50px] h-[100%]" >
                                <div className="flex justify-center flex-col w-[90%] ">
                                    <h1 className="text-6xl text-[#1cc7c9] text-center drop-shadow-[-1px_1px_10px_rgba(0,0,0,1)] font-sans">About Me</h1>
                                    <h1 className="text-2xl text-left font-sans">Hello my name is Mateo Yajure. I am a second year student enrolled in the Computer Engineering program at the University of Waterloo.<br/><br/> I am a slightly obsessive person about my goals and learning, often driven by a desire to achieve. I have been programming since I was eight years old, and I have helped many elementary and high-school students take their first steps in their coding journeys. < br/><br/> Some of the programming interests I have had the longest are game development and robotics. I was extremely fortunate to be exposed to technology when I was really young and I was fortunate enough to share my passion with younger students who are just like I was. I have been responsible for running 6 workshops over the past few years which has been a rewarding venue to give back to my community and share the joy of code.</h1>
                                    <br/>
                                </div>

                            </div>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/>
                    </div>
                    
                    </div>
                    {/* <div className="translate-y-[8%] h-screen">
                        <h1 className="text-6xl ">Connect With Me</h1>

                    </div> */}
            </div>
            

      
    )
}
