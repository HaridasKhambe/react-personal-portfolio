import { EXPERIENCES } from "../constants";
import {motion} from 'framer-motion';

const Experience = () => {
  return (
    <div className="px-5 border-b border-neutral-900 pb-4 " id="section-experience">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      animate={{duration:0.5, delay:1}}
      className="my-20 text-center text-4xl" >Experience</motion.h1>

        <div>
            {EXPERIENCES.map((experience, index)=> (
                 <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    animate={{duration:1, delay:1.2}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    animate={{duration:1, delay:1.2}}
                    className="flex flex-wrap flex-shrink-0 w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-sm text-orange-400">{experience.company}</span></h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>

                        {experience.technologies.map((tech, index) =>(
                            <span key={index} className="mr-2 mt-4 mt-2 mb-2 rounded bg-yellow-900 px-2 py-1 text-sm font-medium">{tech}</span>
                        ))}
                    </motion.div>
                    
                 </div>

                
            ))}
        </div>

    </div>
  )
}

export default Experience
