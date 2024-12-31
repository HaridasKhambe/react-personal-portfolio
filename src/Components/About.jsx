
import { ImMap } from 'react-icons/im';
import harry from '../assets/harry2-circle.png'
import {SKILLS} from "../constants";

import {ABOUT_TEXT} from "../constants";

import {motion} from "framer-motion";

const About = () => {
  return (
    <div className=" px-5 border-b border-neutral-900 pb-4 " id="section-About">
          <h1 className="my-20 text-center text-4xl" >About</h1>
    
<div className=" max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* left side */}
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        animate={{duration:0.5, delay:1}}
        className='max-w-xl w-full lg:w-2/4 flex flex-wrap'>

            <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                    src={harry}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
               
            </div>

            <div className='mt-8 '>

            <h6 className='mb-2 text-medium text-neutral-400'><span className='text-neutral-300'>Role:</span> Computer Engineering Student</h6>
            <h6 className='mb-2 text-medium  text-neutral-400'><span className='text-neutral-300'>Experience:</span> Web and Programming</h6>
            <h6 className='mb-2 text-medium  text-neutral-400'><span className='text-neutral-300'>Address:</span>  Pune, India</h6>
            </div>

            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            animate={{duration:0.5, delay:2}}
            className="w-full">

            <h3 className="text-xl font-semibold mb-4">Skills</h3>


                <div> {SKILLS.map((skill, index) =>(

                    <div key={index} className='mb-2 lg:justify-center'>
                        <div className='w-full'>

                            <div className=''>
                                <h6 className='mb-2 mr-1 text-sm text-neutral-400'>{skill.skill}-
                                     <span className="mb-2 ml-1 text-sm text-neutral-400">{skill.progress}%</span></h6>
                               
                            </div>

                            <div className="bg-gray-300 w-full h-2 rounded">
                                <div className="bg-orange-500 h-2 rounded"  style={{ width: `${skill.progress}%` }}></div>
                            </div>
                        
                        </div>
                    </div>

                ))}
                </div>
            </motion.div>
        </motion.div>  

        {/* Right side */}
  <motion.div 
  whileInView={{opacity:1,x:0}}
  initial={{opacity:0, x:100}}
  animate={{duration:0.5, delay:1}}
  className="w-full lg:w-2/4 mt-10 lg:mt-0 lg:pl-10">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="mb-8 text-neutral-400">
             {ABOUT_TEXT}
    </p>
    {/* Additional Details */}
    <motion.ul 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0, x:100}}
    animate={{duration:0.5, delay:2}}
    className="space-y-3">
      <li className="flex">
        <span className="font-semibold w-32">Profile:</span>
        <span className='text-neutral-400'>Computer Engineering Student</span>
      </li>
      <li className="flex flex-wrap">
        <span className="font-semibold w-28">Education:</span>
        <div className="ml-4 text-neutral-400">
            <p>Bachelor of Technology (BTech)</p>
            <p>Diploma in Computer Engineering</p>
        </div>
       </li>
      <li className="flex">
        <span className="font-semibold w-32">Languages:</span>
        <span className='text-neutral-400'>English, Hindi, Marathi</span>
      </li>
      <li className="flex">
        <span className="font-semibold w-32">Other Skills:</span>
        <span className='text-neutral-400' >Cloud, Excel, Git</span>
      </li>
      <li className="flex">
        <span className="font-semibold w-32">Interests:</span>
        <span className='text-neutral-400' >Coding, Photography, Piano</span>
      </li>
    </motion.ul>
  </motion.div> {/* Closing div for Right side */}
</div>
    </div>
  )
}

export default About
