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
                <h1 className="text-6xl text-[#1cc7c9] drop-shadow-[-1px_1px_10px_rgba(0,0,0,1)]">My Experiences</h1>
                <h1 className="text-xl space-y-10">A collection of some of the projects I have worked on both paid and unpaid.</h1>
                <div className="w-[90%] lg:w-[85%]">
                    <div className="flex flex-col lg:pt-4 md:w-[95%] lg:space-y-10 flex-wrap">
                        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 place-items-center items-start content-evenly gap-12 row-auto">
                            <div style={{backgroundColor: "#84DBFF"}}  className="relative w-[100%] z-[-0.9] text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1" src={"/4421_2024.jpeg"}/>
                                </div>
                                <h1 className="text-6xl text-center row-span-2 ">Forge 4421</h1>
                                <h1 className="text-xl text-center ">I competed in a yearly highschool robtoics compeition called <a href="https://www.firstinspires.org/robotics/frc" className="underline">FRC</a> from 2022-2024. The team was number was 4421 Forge Robotics. In 2024 the games objective was to score these rings called notes into a large high goal. I was the programming lead of our team of 40+ where we developed the ability to calculate the vector requried to fire one of these notes into the goal while moving based on our postion. </h1>
                                <br/>                                
                                <div className="absolute inset-x-[45%] inset-y-[91%]">
                                    <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100 " href={"https://github.com/ATAARobotics/4421-robot-code-2024"}><IoLogoGithub size={30}/></a>
                                    </div>
                                </div>
                                

                                
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="w-[100%]  text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center ">Spot Creation Utility</h1>
                                <h1 className="text-xl text-center ">Spot VM are virtual machines that can get shut down if the market changes in price. Ie if someone is paying more for the vm so this program was deisgn to be able to maintain spots on AWS/GCP/Azure incase they went down. </h1>
                            </div>  
                            <div style={{backgroundColor: "#84DBFF"}} className="relative w-[100%]  text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1 object-contain h-72 w-144" src={"https://images.squarespace-cdn.com/content/v1/64d3135815ef857788423e61/87db6174-046a-4e44-a14c-727b3e28f76a/YDT+photo+booth+at+graduation.png"}/>
                                </div>
                                <h1 className="text-6xl text-center ">Photo Booth App</h1>
                                <h1 className="text-xl text-center ">This was an app I made in flutter in a really tight timeline in order to be used at a highschool in my areas graduation. I was approuched by Digital Youth Tallent to make this app because their highschooler developers were having difficulty. This was by far the most succesful software project I have ever made being used by more than 70% of the graduating class.</h1>
                                <br/>                                
                                <div className="absolute inset-x-[45%] inset-y-[91%]">
                                    <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100" href={"https://github.com/MateoYa/photobooth"}><IoLogoGithub size={30}/></a>
                                        <a className="text-center w-100" href={"https://www.youthdigitaltalent.com/project-showcase"}><TbWorld size={30}/></a>
                                    </div>
                                </div>
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="w-[100%] text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1" src={"/kingdom_project.png"}/>
                                </div>
                                <h1 className="text-6xl text-center ">The Kingdom Project</h1>
                                <h1 className="text-xl text-center ">Effectively a civiliaztion type game except missing some importaint elements that makes it fun. However, the game had generation, building playcement, update time, game cycles, menus, lossing</h1>
                            </div>  
                            <div style={{backgroundColor: "#84DBFF"}}className="w-[100%]  text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <div className="relative flex justify-center y-space-[-5] top-100">
                                    <img className="z-[1] relative w-[80%] translate-y-1" src={"/intellect_ai_example.png"}/>
                                </div>
                                <h1 className="text-6xl text-center ">Intellect.Ai</h1>
                                <h1 className="text-xl text-center ">I was asked by a startup called intellect.ai to make a few widgets that their developers where struggling with particulary the pie chart which has preportional radius to pie slice. (I am aware that this is a terrible way to represent data but that's besides the point). I made the other 2 moving element indicators on the right by using a function that took an % and put the respective indicator on the corsponding section of the chart. Also the example image is two pages of the webpage combind together</h1>
                            
                            </div>  
                            <div style={{backgroundColor: "#B5F1F4"}} className="relative w-[100%] text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[105%]" >
                                <h1 className="text-6xl text-center ">This Website</h1>
                                <h1 className="text-xl text-center ">I made this website from React and Tailwind CSS I didn't use any template except for the base Next js framework. I deployed this website using nginx and certbot on a bare linux vm. I also used an svg to react-component website then animated them for the intial animations. A large portion of the layout insperation but none of the code (you can check the git repos and no help from ai) came from this website <a className="underline " href="https://dunks1980.com/">dunks1980.com. </a></h1>
                                <br/>
                                <div className="absolute inset-x-[45%] inset-y-[88%] lg:inset-y-[91%]">
                                    <div className="flex justify-center y-space-[-5]">
                                        <a className="text-center w-100" href={"https://github.com/MateoYa/mateo.yajure"}><IoLogoGithub size={30}/></a>
                                    </div>
                                </div>
                            </div>   
                        </div>

                    </div>  
                    <div className="grid grid-cols-1 place-items-center items-start content-evenly gap-12 row-auto">
                        <button  className="bg-blue-500 w-[20%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Button
                        </button>
                    </div>


                    <div id="About" className="translate-y-[10%] h-[80%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-start content-evenly gap-12 row-auto">
                            <div className="relative flex justify-center top-100 border-solid border-[#000000] border-[3px]">
                                <img className="z-[1] " src={"https://images.squarespace-cdn.com/content/v1/64d3135815ef857788423e61/f39b48fa-af26-45a5-8d93-68e56d9ca923/Mateo+Y_20240717232733.jpg?format=750w"}/>
                            </div>
                            <div style={{backgroundColor: "#80aced"}} className="w-[80%] flex justify-center text-black items-start rounded-[50px] border-solid border-[#000000] border-[3px] h-[100%]" >
                                <div className="flex justify-center flex-col w-[90%] ">
                                    <h1 className="text-6xl text-[#1cc7c9] text-center drop-shadow-[-1px_1px_10px_rgba(0,0,0,1)]">About Me</h1>
                                    <h1 className="text-xl text-left">Hello my name is Mateo Yajure (pictured), a first year student studying studying Computer Engineering at the University of Waterloo.<br/><br/> I am a slightly obessive person about my goals and learning, often driven by desire to achive something. I have been programming for close to a decade jumping around intrests quite a bit.< br/><br/>   Some of the programming intrests I have had the longest is game development and robotics. I was extremely fortunate to be exposed to technology when I was really young and I been fortunate enough to share my passion with younger students who are just like I was. I have been respoianible for running 6 workshops over the past few years which has been incredibly rewarding.</h1>
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
