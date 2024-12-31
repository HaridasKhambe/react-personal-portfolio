import {motion} from 'framer-motion';

const iconVariants = (duration)=>({
  anitial: {y:-10},
  animate: {
    y:[10, -10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse"
    }
  }
});


const Contact = () => {
  return (
   <div  className="ml-3 border-b border-neutral-900 pb-4 px-5 " id="section-contact">
         <h1 className="my-20 text-center text-4xl" >Contact</h1>


         <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0, x:-100}}
         animate={{duration:0.5, delay:1}}
          className="mt-10 mb-20 px-5">
        <form
            action="https://formspree.io/f/xrbbkyjv" 
            method="POST"
            className="flex flex-col gap-4 max-w-md mx-auto"
        >
            <input
            type="text"
            name="name"
            placeholder="Your Name" 
            className="mb-4 border border-neutral-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="mb-4 border border-neutral-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="mb-4 border border-neutral-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
            Send Message
            </button>

        </form>
    </motion.div>


        {/* Social Media Links */}
      <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0, x:-100}}
          animate={{duration:0.5, delay:1}}
      className="mt-2 flex justify-center gap-8 social-media ">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/haridas-khambe-aa650926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <motion.img 
          variants={iconVariants(2.4)}
          initial="inital"
          animate="animate"
            src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
            alt="LinkedIn"
            className="w-12 h-12"
          />
        </a>

        {/* GitHub */}
        <a
        
          href="https://github.com/HaridasKhambe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <motion.img
          variants={iconVariants(4)}
          initial="inital"
          animate="animate"
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            className="w-12 h-12"
          />
        </a>

         {/* Twitter */}
         <a
          href="https://twitter.com/haridas_khambe?t=cvIKuG69J2Lu0MoYpWcbYw&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <motion.img
          variants={iconVariants(6)}
          initial="inital"
          animate="animate"
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
            className="w-12 h-12 mb-10"
          />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100069861863366&mibextid=JRoKGi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <motion.img
          variants={iconVariants(3)}
          initial="inital"
          animate="animate"
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook"
            className="w-12 h-12"
          />
        </a>

         {/* YouTube */}
         <a
          href="https://youtube.com/@haridaskhambe1327?si=FrJjCCaAEOzQL542"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <motion.img
          variants={iconVariants(5)}
          initial="inital"
          animate="animate"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="YouTube"
            className="w-12 h-12"
          />
        </a>


        {/* Telegram */}
        <a
        href="https://t.me/haridaskhambe"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
        >
        <motion.img
        variants={iconVariants(2.4)}
        initial="inital"
        animate="animate"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111545.png"
            alt="Telegram"
            className="w-12 h-12"
        />
        </a>

      </motion.div>
   
       </div>
  )
}

export default Contact
