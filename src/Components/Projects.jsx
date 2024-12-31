import { DiTechcrunch } from "react-icons/di";
import {PROJECTS} from "../constants";
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <div>
      <div className="px-5 border-b border-neutral-900 pb-4 " id="section-projects">
            <motion.h1 
             whileInView={{opacity:1, y:0}}
             initial={{opacity:0, y:-100}}
             animate={{duration:0.5, delay:1}}
             className="my-20 text-center text-4xl" >Projects</motion.h1>
      
        <div>{PROJECTS.map((project, index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x:-100}}
                 animate={{duration:1, delay:1.2}}
                  className="w-full lg:w-1/4">
                <a href={project.link} target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform">
                  <img src={project.image} width={250} height={250} alt={project.title} className="mb-6 rounded border" /></a>
                </motion.div>

                <motion.div
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0, x:100}}
                  animate={{duration:1, delay:1.2}}
                   className="w-full max-w-xl lg:w-3/4">
                    
                    <a href={project.link} target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-wrap hover:scale-110 transition-transform">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, index)=>(
                        <span key={index} className="mr-2 mt-4 rounded bg-yellow-900 px-2 py-1 text-sm font-medium">{tech}</span>
                    ))}</a>
                </motion.div>
            </div>
           
        ))}

        </div>
            <div className="pt-4  flex flex-wrap text-xl font-semibold text-orange-400 lg:justify-end lg:w-3/4 ">
              <span>10+ Projects</span>
            </div>
            
      
      </div>
    </div>
  )
}

export default Projects
