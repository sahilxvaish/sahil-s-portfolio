import { RiReactjsLine } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
   initial: {y: -10},
   animate: {
      y: (10, -10),
      transition: {
         duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse",
      },
   },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
       <h1 className="my-20 text-center text-4xl"> Technologies </h1>
       <div className="flex flex-wrap item-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
             <RiReactjsLine className="text-7xl text-cyan-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
             <SiDart className="text-6xl text--400 text-blue-500"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
             <RiFlutterFill className="text-7xl text-blue-700"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
             <IoLogoFirebase className="text-7xl text-orange-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
             <TbBrandNextjs className="text-7xl "/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
             <SiMongodb className="text-7xl text-green-500"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
             <FaJava className="text-7xl text-red-700"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
             <FaNodeJs className="text-7xl text-green-500"/>
          </div>
       </div>
        </div>
)
}

export default Technologies
