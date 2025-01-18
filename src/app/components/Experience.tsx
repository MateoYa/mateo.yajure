"use client"
import * as motion from "motion/react-client"
import Image from "next/image";
import FancyText from "./FancyText"
import frc from './4421_2024.jpeg';
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
export default function Experience() {
    return(
            <div id="Projects"  className="relative flex flex-col gap-0 row-start-0 items-center y-translate-0 space-y-4 bg-[#324A5E]">
                <h1 className="text-5xl text-[#1cc7c9] drop-shadow-[-1px_1px_10px_rgba(0,0,0,1)] font-sans">My Experiences</h1>
                <h1 className="text-xl space-y-10 font-sans">A collection of some of the projects I have worked on both paid and unpaid.</h1>
                <div className="w-[90%] lg:w-[85%]">
                    <div className="flex flex-col pt-2 lg:space-y-10 flex-wrap">
                        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 place-items-center items-start content-evenly gap-12 row-auto">
                            <div style={{backgroundColor: "#84DBFF"}}  className="relative w-[100%] flex flex-col text-black items-center rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1" src={"/4421_2024.jpeg"}/>
                                </div>
                                <h1 className="text-6xl text-center row-span-2 w-[90%] font-sans">Competitive Robotics</h1>
                                <h1 className="text-xl text-center w-[90%] font-sans">I competed in the 2022 through 2024 <a href="https://www.firstinspires.org/robotics/frc" className="underline">FIRST Robotics Competition (FRC)</a> as a programmer in team 4421 Forge Robotics. In 2024 the game's objective was to score foam rings into a 1 foot tall goal, 8 feet from the ground. I was the programming lead of our team of 40+ where we developed the ability to calculate the vector required to fire one of these notes into the goal while moving based on our position. 
                                <br/>
                                <br/>
                                </h1>
                                
                                <div className="absolute inset-x-[45%] inset-y-[91%]">
                                    <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100 " href={"https://github.com/ATAARobotics/4421-robot-code-2024"}><IoLogoGithub size={30}/></a>
                                    </div>
                                </div>
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="relative w-[100%] flex flex-col text-black items-center rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center font-sans">Cloud Computing Management System</h1>
                                <h1 className="text-xl text-center w-[90%] font-sans">I wrote a utility to launch Spot Instances of virtual machines in multiple cloud computing platforms. Spot VMs are virtual machines that can be had at a discount, but they can get shut down without warning, as if their compute cycles were being auctioned. This program ensured the persistence of one's computation by detecting spot availability and launching persistent compute across instances in Amazon Web Services (AWS), Google Cloud Platform (GCP) and Microsoft Azure. I wrote this for the learning opportunity, but as an application it  would be capable of optimizing the cost of a compute-intensive application across these three platforms.
                                <br/>
                                <br/>
                                </h1>
                                <div className="absolute inset-x-[45%] inset-y-[91%]">
                                    <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100" href={"https://github.com/MateoYa/spot-creation-tool"}><IoLogoGithub size={30}/></a>
                                    </div>
                                </div>
                            </div>  
                            <div style={{backgroundColor: "#84DBFF"}} className="relative w-[100%] flex flex-col text-black items-center rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1 object-contain h-72 w-144" src={"https://images.squarespace-cdn.com/content/v1/64d3135815ef857788423e61/87db6174-046a-4e44-a14c-727b3e28f76a/YDT+photo+booth+at+graduation.png"}/>
                                </div>
                                <h1 className="text-6xl text-center w-[90%] font-sans">Photo Booth App</h1>
                                <h1 className="text-xl text-center w-[90%] font-sans">This was an app I made in flutter in a really tight timeline in order to be used at a highschool graduation in Calgary. I was approached by Digital Youth Talent to make this app because their high-school's developers were having difficulty. This was by far the most successful software project I have ever made being used by more than 70% of the graduating class.
                                    <br/>
                                    <br/>
                                </h1>
                      
                                <div className="absolute inset-x-[45%] inset-y-[91%]">
                                    <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100" href={"https://github.com/MateoYa/photobooth"}><IoLogoGithub size={30}/></a>
                                        <a className="text-center w-100" href={"https://www.youthdigitaltalent.com/project-showcase"}><TbWorld size={30}/></a>
                                    </div>
                                </div>
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="relative w-[100%] flex flex-col text-black items-center rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1" src={"/kingdom_project.png"}/>
                                </div>
                                <h1 className="text-6xl text-center w-[90%] font-sans">Unity based Civilization Style Game</h1>
                                <h1 className="text-xl text-center w-[90%] font-sans">The Kingdom Project was a civilization type game where you could gain resources through exploitation of a programmatically generated map. I was the main developer of this game and collaborated with a friend who created a great deal of assets to make the game beautiful including original music, iconography and map tile textures. I wrote a serialization scheme to save game progress, the map generation algorithm, building placement, update time, game cycles, menus. <br/> </h1>
                                <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100" href={"https://github.com/MateoYa/the-kingdom-project"}><IoLogoGithub size={30}/></a>
                                </div>                            
                            </div>  
                            <div style={{backgroundColor: "#84DBFF"}}className="relative w-[100%] flex flex-col text-black items-center rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1" src={"/intellect_ai_example.png"}/>
                                </div>
                                <h1 className="text-6xl text-center w-[90%] font-sans">Contract Website Development  </h1>
                                <h1 className="text-xl text-center w-[90%] font-sans">I have developed several websites under contract, and this particular startup called intellect.ai asked me to make a few widgets that their developers were struggling with. In particular, I was asked to create a pie chart that would have a proportional radius to pie slice. While I am aware that this is a terrible way to represent data, it was a difficult widget that I successfully crafted to my client's expectations and satisfaction. I made the other 2 moving element indicators on the right by using a function that took a percentage and put the respective indicator on the corresponding section of the chart. Also the example image is two pages of the webpage combined together.<br/>  <br/>  </h1>
                                <br/>
                                <div className="absolute inset-x-[45%] inset-y-[91%]">
                                    <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100" href={"https://github.com/elianabean/intellect"}><IoLogoGithub size={30}/></a>
                                    </div>
                                </div>
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="relative w-[100%] flex flex-col text-black items-center rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center w-[90%] font-sans">This Website</h1>
                                <h1 className="text-xl text-center w-[90%] font-sans">I made this website from React and Tailwind CSS. I didn't use any template except for the base Next js framework. I deployed this website using nginx and certbot on a bare linux vm. I also used an svg to react-component website then animated them for the initial animations.<br/> <br/> </h1>
                                <div className="absolute inset-x-[45%] inset-y-[88%] lg:inset-y-[91%]">
                                    <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100" href={"https://github.com/MateoYa/mateo.yajure"}><IoLogoGithub size={30}/></a>
                                    </div>
                                </div>
                            </div>   
                        </div>

                    </div>  
                    <div className="translate-y-[10%] h-[80%]">
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="grid grid-cols-1 place-items-center items-start content-evenly gap-12 row-auto ">
                            <a href="/yajure_mateo_resume.pdf">
                                <button  className="bg-[#84DBFF] w-[100%] hover:bg-[#B5F1F4] text-black font-bold text-6xl py-2 px-4 rounded-[15px]">
                                    Resume
                                </button>
                            </a>

                        </div>
                    </div>



                    <div id="About" className="translate-y-[5%] h-[80%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-start content-evenly gap-12 row-auto">
                            <div className="relative flex justify-center top-100 border-solid border-[#000000] border-[3px]">
                                <img className="z-[1] " src={"https://images.squarespace-cdn.com/content/v1/64d3135815ef857788423e61/f39b48fa-af26-45a5-8d93-68e56d9ca923/Mateo+Y_20240717232733.jpg?format=750w"}/>
                            </div>
                            <div style={{backgroundColor: "#80aced"}} className="w-[98%] md:w-[80%] flex justify-center text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="flex justify-center flex-col w-[90%] ">
                                    <h1 className="text-6xl text-[#1cc7c9] text-center drop-shadow-[-1px_1px_10px_rgba(0,0,0,1)] font-sans">About Me</h1>
                                    <h1 className="text-xl text-left font-sans">Hello my name is Mateo Yajure. I am a first year student enrolled in the Computer Engineering program at the University of Waterloo.<br/><br/> I am a slightly obsessive person about my goals and learning, often driven by a desire to achieve. I have been programming since I was eight years old, and I have helped many elementary and high-school students take their first steps in their coding journeys. < br/><br/> Some of the programming interests I have had the longest are game development and robotics. I was extremely fortunate to be exposed to technology when I was really young and I was fortunate enough to share my passion with younger students who are just like I was. I have been responsible for running 6 workshops over the past few years which has been a rewarding venue to give back to my community and share the joy of code.</h1>
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
