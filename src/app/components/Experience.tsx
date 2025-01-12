"use client"
import * as motion from "motion/react-client"
import Image from "next/image";
import FancyText from "./FancyText"
import frc from './4421_2024.jpeg';
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
export default function Experience() {
    return(
            <div id="Projects"  className="flex flex-col gap-0 row-start-2 items-center space-y-4 bg-[#324A5E]">
                <h1 className="text-6xl">My Experiences</h1>
                <h1 className="text-xl space-y-10">A collection of some of the projects I have worked on both paid and unpaid.</h1>
                <div className="w-[90%] lg:w-[85%]">
                    <div className="flex flex-col lg:pt-4 w-[95%] lg:space-y-10 flex-wrap">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center items-start content-evenly gap-12 row-auto">
                            <div style={{backgroundColor: "#84DBFF"}}  className="w-[100%] z-[-0.9] text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1" src={"/4421_2024.jpeg"}/>
                                </div>
                                <h1 className="text-6xl text-center row-span-2 ">Forge 4421</h1>
                                <h1 className="text-xl text-center ">I competed in a yearly highschool robtoics compeition called <a href="https://www.firstinspires.org/robotics/frc" className="underline">FRC</a> from 2022-2024. The team was number was 4421 Forge Robotics. In 2024 the games objective was to score these rings called notes into a large high goal. I was the programming lead of our team of 40+ where we developed the ability to calculate the vector requried to fire one of these notes into the goal while moving based on our postion. </h1>
                                <div className="flex justify-center y-space-[-5]">
                                    <a className="text-center w-100" href={"https://github.com/ATAARobotics/4421-robot-code-2024"}><IoLogoGithub size={30}/></a>
                                </div>

                                
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="w-[100%]  text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center ">Spot Creation Utility</h1>
                                <h1 className="text-xl text-center ">Spot VM are virtual machines that can get shut down if the market changes in price. Ie if someone is paying more for the vm so this program was deisgn to be able to maintain spots on AWS/GCP/Azure incase they went down. </h1>
                            </div>  
                            <div style={{backgroundColor: "#84DBFF"}} className="w-[100%]  text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1 object-contain h-72 w-144" src={"https://images.squarespace-cdn.com/content/v1/64d3135815ef857788423e61/87db6174-046a-4e44-a14c-727b3e28f76a/YDT+photo+booth+at+graduation.png"}/>
                                </div>
                                <h1 className="text-6xl text-center ">Photo Booth App</h1>
                                <h1 className="text-xl text-center "></h1>
                                <div className="flex justify-center y-space-[-5] relative ">
                                    <a className="text-center w-100" href={"https://github.com/MateoYa/photobooth"}><IoLogoGithub size={30}/></a>
                                    <a className="text-center w-100" href={"https://www.youthdigitaltalent.com/project-showcase"}><TbWorld size={30}/></a>
                                </div>
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="w-[100%] text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center ">The Kingdom Project</h1>
                                <h1 className="text-xl text-center ">Count the time your children spend on activities like homework, chores and exercise and convert it into screen time. I created this with Vue.js and the Howlr library to add the interactive clock sounds. It can be installed as a progressive web application. The git repository for this one is private at the moment. Count the time your children spend on activities like homework, chores and exercise and convert it into screen time. I created this with Vue.js and the Howlr library to add the interactive clock sounds. It can be installed as a progressive web application. The git repository for this one is private at the moment.</h1>
                            </div>  
                            <div style={{backgroundColor: "#84DBFF"}}className="w-[100%]  text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center ">Intellect.Ai</h1>
                                <h1 className="text-xl text-center ">Count the time your children spend on activities like homework, chores and exercise and convert it into screen time. I created this with Vue.js and the Howlr library to add the interactive clock sounds. It can be installed as a progressive web application. The git repository for this one is private at the moment.</h1>
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="w-[100%]  text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center ">This Website</h1>
                                <h1 className="text-xl text-center ">Count the time your children spend on activities like homework, chores and exercise and convert it into screen time. I created this with Vue.js and the Howlr library to add the interactive clock sounds. It can be installed as a progressive web application. The git repository for this one is private at the moment.</h1>
                            </div>   
                        </div>

                    </div>

                    <div className="translate-y-20">
                        <h1 className="text-6xl">About Me</h1>
                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="relative flex justify-center y-space-[-5] top-100">
                                <img className="z-[1] relative w-[80%] translate-y-1" src={"/4421_2024.jpeg"}/>
                            </div>
                            
                            <div style={{backgroundColor: "#B5F1F4"}} className="w-[100%]  text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center ">This Website</h1>

                            </div>
                        </div>
                    </div>
                    
                    </div>

                    
                    <h1 className="text-6xl ">Connect With Me</h1>
            </div>
            

      
    )
}
