import OMDB from "../assets/projects/OMDB.png";
import coAcitify from "../assets/projects/coAcitify.png";
import taskflowX from "../assets/projects/taskflowX.jpg";

import virtualAsistant from "../assets/projects/Virtual-Assistant-at-home.webp";
import project1 from "../assets/projects/portfolio.png";
import project2 from "../assets/projects/gp.png";
import project3 from "../assets/projects/feedback.png";
import project4 from "../assets/projects/attendace.png";
import ATS from "../assets/projects/admin_manage_alumni.png";


export const HERO_CONTENT = `Passionate and driven final-year Computer Engineering student | Exploring new technologies | Skilled in Full-stack development, Java Programming, and database management | Dedicated to creating innovative solutions`;

export const ABOUT_TEXT = `I am a Computer Science Engineering student with a strong academic foundation (Diploma 89.83%, B.Tech CGPA 9.7) and hands-on experience in full-stack web development, Java, and database management.

I enjoy solving problems and building practical solutions, contributing value through clean and efficient code. My passion lies in creating impactful systems while continuously learning, adapting to new technologies, and using them to help society.`;

export const SKILLS = [

  {
    skill: "Programming & DSA - Java ",
    progress: "80"

  },
  {
    skill: "DATABASE - MYSQL, MONGODB (Basic) ",
    progress: "75"
    
  },
  {
    skill: "Frameworks & Technologies -  Spring Boot (Learning), REST API Development (Basic) ",
    progress: "45"
    
  },
  {
    skill: "Web Development - HTML, CSS, Tailwind CSS, JavaScript, React (Basic)",
    progress: "75"
    
  },
  
   {
    skill: "Cloud & Security - AWS Cloud Foundations (Certified), Cyber Security Fundamentals ",
    progress: "65"
    
  },
  {
    skill: " Tools & Platforms -  Git, GitHub, Linux (Bash), VSCode, Eclipse, Postman ",
    progress: "80"
    
  },
  
  {
    skill: "Core CS Fundamentals -  Object-Oriented Programming (OOP), Computer Networks (CN) Operating Systems (OS)",
    progress: "80"
    
  },

];

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Sep 2025",
    role: "Department Student Coordinator",
    company: "Indian Society for Technical Education (ISTE), JSPM RSCOE",
    description: `Led workshops, seminars, and a technical quiz competition, fostering peer learning and collaboration. Strengthened leadership, event management, and communication skills while coordinating student initiatives.`,
    technologies: ["Leadership", "Event Management", "Collaboration"],
  },

  {
    year: "Jul 2022 - Aug 2022",
    role: " IT Assistant Trainee ",
    company: "Google Computers Dapoli",
    description: `Completed a 1.5-month internship focused on assembling and troubleshooting PCs, diagnosing hardware/software issues, and configuring LAN setups. Interacted with customers regularly, leveraging strong communication skills to assess technical problems, provide solutions, and deliver on-site support.`,
    technologies:["Computer Hardware", "Troubleshooting", "Networking", "Customer Interaction", "Communication Skills"],
  }
  
];

export const PROJECTS = [
  {
    title: "TaskFlowX: Internal Task & Approval Management System",
    image: taskflowX, 
    description: `Built an enterprise-grade backend workflow system enforcing task lifecycle transitions, approvals, andrejections through backend-driven state validation, beyond basic CRUD operations. Implemented JWT-based authentication with role-based access control (RBAC) and centralized auditlogging, ensuring traceability and accountability across Admin, Manager, and Employee roles.  Improved backend performance using asynchronous processing for audit trails and in-memory caching for taskqueries, reducing API response time by ∼30% during testing.`,
    technologies: [ "JAVA", "Spring Boot", "Spring MVC", "RESTful APIs,", "JPA/Hibernate", "MySQL", "Caffeine Cache", "Async Processing", "JWT+RBAC",],
    link: "https://github.com/HaridasKhambe/Internal-Task-n-Approval-Management-System", 
  },

  {
    title: "CoActify Portal: Student Activity & Institutional Monitoring System",
    image: coAcitify, 
    description: `Engineered a full-stack platform to centralize student academic and co-curricular achievements, enabling institutions to maintain verified digital records and generate export-ready reports for NAAC, NIRF, and audit evaluations. Developed a secure Spring Boot REST API with JWT authentication and role-based access control using a layered MVC architecture. Designed and optimized a MySQL database with Spring Data JPA, integrating advanced filtering, field validation, and global exception handling to reduce manual workflows by 40%. Boosted student engagement by 30% through leaderboards, points, and achievement badges.`,
    technologies: [ "Spring Boot", "Spring MVC", "JWT", "REST API", "Spring Data JPA", "MySQL", "React", "Tailwind CSS", "Zustand",],
    link: "https://github.com/HaridasKhambe/smart-student-hub", 
  },

  {
    title: "OMDB Movie Explorer",
    image: OMDB, 
    description: `Built a full-stack movie search and discovery platform integrating the OMDb API with a high-performance Spring Boot backend using Caffeine Cache for 60-minute intelligent caching. Designed a responsive React interface with real-time search, validation, toast notifications, and detailed movie insights including ratings, cast, and plot. Implemented layered architecture with clean DTOs, global exception handling, and optimized API communication, achieving a fast and modern user experience across devices.`,
    technologies: [ "REST API", "Spring Boot", "Spring Web", "Spring Cache", "Caffeine Cache", "React", "Tailwind CSS", "Axios", "Maven"
    ],
    link: "https://github.com/HaridasKhambe/omdb-movie-explorer",
  },

  {
    title: "AI-Enabled Voice Assistant for Elderly People",
    image: virtualAsistant, 
    description: `Designed and developed a smart voice assistant to enhance elderly mental well-being, achieving a 20% increase in user engagement through sentiment analysis. Prepared a 51K-sample Hindi dialogue dataset labeled with 5 emotions (Anger, Joy, Suspense, Neutral) for domain-specific training. Enhanced BiLSTM + Attention and fine-tuned IndicBERT to reach 84.73% accuracy in sarcasm and emotion detection. Published in Fifth Congress on Intelligent Systems (CIS 2024), Springer.`,
    technologies: ["Python", "Deep Learning", "Sentiment Analysis", "IndicBERT", "BiLSTM"],
    link: "https://link.springer.com/chapter/10.1007/978-981-96-2694-6_15", 
  },

  {
    title: "AlumPulse: Alumni Tracking System",
    image: ATS, 
    description: ` Built a responsive alumni management platform using MVC-style architecture and REST-like JSON endpoints, enabling advanced
 search filters and user-friendly interface.  Implemented a secure role-based access control (RBAC) system for Alumni, College Admins, and Directorate users, supporting
 registration, verification, and advanced search to enhance alumni engagement.  Designed and optimized a MySQL database for large-scale alumni management `,
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "RBAC"],
    link: "https://github.com/HaridasKhambe/Alumni-Tracking-System-Pro", 
  },

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
    image: project3, 
    description:
      "A web-based application designed to collect and analyze event feedback in real-time, enhancing attendee engagement and enabling dynamic adjustments during events.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Google Charts"],
    link: "https://github.com/HaridasKhambe/Real-Time-Event-Feedback-Analysis-System",
  },
  
  
  {
    title: "Fingerprint Sensor Based Biometric Attendance Management System",
    image: project4, 
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
