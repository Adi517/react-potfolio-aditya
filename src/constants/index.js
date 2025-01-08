import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a motivated software developers with experience in building both front-end and back-end applications. With a strong background in Electronics and Telecommunications, I bring a unique perspective to solving technical problems. I have worked with technologies like React, Node.js, and MongoDB to create practical solutions, including a personal finance tracker and Vibrasense. I enjoy tackling challenges and building user-friendly platforms that make a real difference. My goal is to continue learning and creating software that helps businesses and users achieve their goals more efficiently.`;

export const ABOUT_TEXT = `I am a dedicated and versatile tech enthusiast with a passion for creating impactful software and hardware solutions. With hands-on experience in technologies like React, Node.js, Spring Boot, MongoDB, and Power BI, I’ve developed innovative projects, including Vibraile, a tactile system for the blind and deaf, and a responsive Expense Management Website. My journey began with curiosity about bridging technology and accessibility, evolving into a career where I thrive in collaborative environments, solving complex challenges with creativity and efficiency. Outside of work, I enjoy exploring emerging technologies and contributing to meaningful social innovations.`;

export const EXPERIENCES = [
  {
    year: "Jun 2023 - Aug 2023",
    role: "Frontend Developer",
    company: "IBM",
    description: `During my IBM Skills Build Virtual Internship, I led a team of 10 to develop a responsive 'Volunteer Exchange Platform', showcasing opportunities for social engagement. I designed dynamic event pages, managed tasks, and resolved integration challenges to deliver the project on time.`,
    technologies: ["HTML", "CSS", "javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Vibraile - Assistive Technology for Blind and Deaf",
    image: project3, // Replace with the image variable or path
    description:
      "An innovative system enabling blind and deaf individuals to read and understand text through tactile vibrations. It includes algorithms for converting text to Braille and vibrations, paired with a user-friendly website for input and learning.",
    technologies: ["HTML", "CSS", "JavaScript", "Arduino", "ESP32", "React"],
  },
  {
    title: "Bank Management System",
    image: project4, // Replace with the image variable or path
    description:
      "A desktop-based ATM simulator with functionalities like account creation, deposits, withdrawals, mini statements, and pin changes. Built using Java OOP concepts and a MySQL database.",
    technologies: ["Java", "MySQL", "Java Swing", "AWT"],
  },
  {
    title: "Expense Management Website",
    image: project2, // Replace with the image variable or path
    description:
      "A web application for tracking income and expenses with a visual representation of spending through a percentage wheel. Includes features for managing budgets and transaction histories.",
    technologies: ["Node.js", "React", "MongoDB", "Express.js"],
  },
  {
    title: "E-Commerce Sales Dashboard",
    image: project1, // Replace with the image variable or path
    description:
      "A Power BI dashboard analyzing over 1500 sales records to provide actionable insights. Features customized filters, slicers, and visualizations like bar charts, pie charts, and cards for improved data interpretation.",
    technologies: ["Power BI", "DAX", "Excel"],
  },
];

export const CONTACT = {
  address: " address: Shastri nagar ",
  phoneNo: "+91 8669136688 ",
  email: "adityasomani400@gmail.com",
};
