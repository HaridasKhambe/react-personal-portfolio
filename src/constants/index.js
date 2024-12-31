import project1 from "../assets/projects/portfolio.png";
import project2 from "../assets/projects/gp.png";
import project3 from "../assets/projects/feedback.png";
import project4 from "../assets/projects/attendace.png";
import project5 from "../assets/projects/ATS-admin.png";


export const HERO_CONTENT = `Passionate and driven, I’m a computer engineering student eager to explore new technologies. I am dedicated to leveraging my skills in web development, programming, and database management to create innovative solutions.`;

export const ABOUT_TEXT = `I am a computer engineering student with a solid foundation built from a 3-year diploma and currently pursuing my BTech degree.
 With hands-on experience in web development, C++, Python, and database management, I thrive in developing solutions that tackle real-world problems. 
My interest in computer network security further fuels my commitment to improving technology and society.`;

export const SKILLS = [

  {
    skill: "WEB DEVELOPMENT - FULLSTACK, APIS ",
    progress: "75"

  },
  {
    skill: "PROGRAMMING - C++, PYTHON ",
    progress: "70"
    
  },
  {
    skill: "DATABASE - MYSQL, MONGODB ",
    progress: "80"
    
  },
  {
    skill: "SECURITY - ETHICAL HACKING ",
    progress: "50"
    
  },
  {
    skill: "HARDWARE ",
    progress: "65"
    
  }


];

export const EXPERIENCES = [
  {
    year: "NOV 2024",
role: "Team Member",
competition: "Smart India Hackathon (SIH) 2024",
project: "AI-Powered Centralized Chatbot for Admission Queries",
description: `Developed a virtual assistant to address admission-related challenges faced by educational institutes, reducing their workload. The chatbot features multi-modal interaction, multi-language support, real-time notifications, and a recommendation system. It also adapts to new queries through data scraping and provides actionable insights for institutional improvements.`,
technologies: ["AI", "ML", "NLP"],
  },
  {
    year: "Jul 2022 - Aug 2022",
    role: "Computer Hardware Intern",
    company: "Google Computers Dapoli",
    description: `Completed a 1.5-month internship focused on computer hardware troubleshooting and assembly. Enhanced communication skills by assisting real customers and attending external calls. Gained hands-on experience in resolving hardware issues and assembling new PCs as part of the college curriculum.`,
    technologies:["Computer Hardware", "Troubleshooting", "Customer Interaction"],
  },
  
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
     "A personal portfolio website built using React and Tailwind CSS, featuring smooth animations, interactive UI, and showcasing projects, skills, and contact information with a modern design.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "#",
  },

  {
    title: "Grampanchayat's Tax Management System",
    image: project2,
    description:
      "A real-world project with user-friendly web application designed to automate and streamline tax collection and management processes for Grampanchayat offices.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    link: "https://github.com/HaridasKhambe/Grampanchayat-Tax-Management-System",
  },
  {
    title: "Real Time Event Feedback Analysis System",
    image: project3, // Replace with the appropriate image variable or URL
    description:
      "A web-based application designed to collect and analyze event feedback in real-time, enhancing attendee engagement and enabling dynamic adjustments during events.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Google Charts"],
    link: "https://github.com/HaridasKhambe/Real-Time-Event-Feedback-Analysis-System",
  },
  {
    title: "Alumni Tracking System",
    image: project5, // Replace with the appropriate image variable or URL
    description:
      "An Alumni Tracking System developed during the 'Avinya Hackathon 2024,' winning the 'BEST PERFORMER' award. It includes two portals: one for Alumni to register and manage profiles, and another for Admins to verify alumni, search details, and connect via messages or emails.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    link: "#",
  },
  
  {
    title: "Fingerprint Sensor Based Biometric Attendance Management System",
    image: project4, // Replace with the appropriate image variable or URL
    description:
      "A secure and reliable attendance tracking system using a fingerprint sensor, NodeMCU, and a web interface, aimed at reducing paperwork and streamlining attendance management. This system integrates hardware and software to provide seamless and efficient attendance tracking.",
    technologies: ["NodeMCU", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/HaridasKhambe/Biometric-Attendance-Management-System/tree/main",
  },
 
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
