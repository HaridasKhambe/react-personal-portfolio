import React, { useEffect, useState } from "react";
import './home.css'
import harry from '../../assets/harry2-image.png'
import { Link } from 'react-scroll'
import { MdGroupAdd } from "react-icons/md";

import {motion} from 'framer-motion';

import {HERO_CONTENT} from "../../constants";

import { ReactTyped } from "react-typed";

const container = (delay) =>({
  hidden:{x:-100, opacity:0},
  visible:{x:0, opacity:1, transition:{duration:0.5, delay:delay},},
});

const TypingAnimation = React.memo(() => (
  <ReactTyped
    strings={["Engineer", "Fullstack Developer", "Programmer"]}
    typeSpeed={100}
    backSpeed={20}
    loop
    cursorChar=""
    showCursor={true}
  />
));

const Home = () => {

  return (
    <div>

        <section id='section-home'>
            <div className="introContent">
                <motion.div 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="hello">Hello,</motion.div>

                <motion.div 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="introText">I'm <span className="introName">Haridas Khambe</span> <br />
                    <span className='role'>
                          <TypingAnimation />
                    </span>
                </motion.div>

                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='introPara max-w-xl'>{HERO_CONTENT}</motion.p>
                {/* <Link ><button className='hireBtn'><img src={<MdGroupAdd />} alt='hire-btn' />Hire me</button></Link> */}
                <a href="https://www.linkedin.com/in/haridas-khambe-aa650926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                      <motion.button
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="hireBtn"
                      >
                        <MdGroupAdd className="hire-icon" />
                        <span>Hire me</span>
                      </motion.button>
                </a>

                <motion.img 
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:1.2}}
                src={harry} alt='profile image' className='profile-image'/>
            </div>
        </section>
      
    </div>
  )
}

export default Home;
