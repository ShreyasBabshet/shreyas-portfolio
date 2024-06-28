import projImg3 from "./assets/img/project-img3.png";
import learning from "./assets/img/learning.jpg";
import revenue from "./assets/img/revenue.jpg";
import assetMangement from "./assets/img/assetManagement.jpg";
import angularComponentImg from "./assets/img/angularComp.jpg";
import reactComponentImg from "./assets/img/reactComp.jpg";
import coditas from "./assets/img/coditas2.png";
import toddle from "./assets/img/toddle.png";

export const PROFILE_DATA = {
  projects: [
    {
      id: 1,
      title: "Leaning and Tutoring plateform",
      description: `Design & Development`,
      details: [
        `The project is a learning and training platform similar to Udemy, facilitating the hosting of live and recorded courses for a diverse range of subjects`,
        "It allows seamless enrollment for learners, making it easy for them to join and participate in various courses",
        "Trainers can register on the platform, manage their courses, and efficiently track their teaching progress",
        "An intuitive calendar system is included for trainers to organize and plan their sessions, providing a user-friendly scheduling experience",
        "To enhance learner engagement, the platform incorporates assessment tools, quizzes, and participation features.",
        "Administrative functionalities enable admins to create courses, formulate questions, design quizzes, and maintain overall control of the platform.",
        "The project also includes e-charts to provide graphical representations of courses and learner progress, helping visualize data effectively.",
      ],
      stacks: "React, Redux, Node",
      imgUrl: learning,
      link: "https://github.com/ShreyasBabshet/portfolio-website",
    },
    {
      id: 2,
      title: "Company Revenue and Project Tracking System",
      description: "Design & Development",
      stacks: "React, Redux, Node",
      imgUrl: revenue,
    },
    {
      id: 3,
      title: "Asset Management Plateform",
      description: "Design & Development",
      stacks: "React, Redux, Node",
      imgUrl: assetMangement,
    },
    {
      id: 4,
      title: "Angular Component Library",
      description: "Design & Development",
      stacks: "React, Redux, Node",
      imgUrl: angularComponentImg,
    },
    {
      id: 5,
      title: "React Component Library",
      description: "Design & Development",
      stacks: "React, Redux, Node",
      imgUrl: reactComponentImg,
    },
    {
      id: 6,
      title: "Business Startup",
      description: "Design & Development",
      stacks: "React, Redux, Node",
      imgUrl: projImg3,
    },
  ],
};

export const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Frontend Developer (ASE)",
          company: "Toddle App",
          company_url: "http://valorainfotech.com/",
          logo_path: toddle,
          duration: "July 2024 - Present",
          location: "Surat, Gujarat",
          description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
          Focus on change request functions in close collaboration with the project manager and team leads.
          Developed new and maintained existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          color: "#0071C5",
        },
        {
          title: "Software Engineer",
          company: "Coditas",
          company_url: "https://www.crestinfosystems.com/",
          logo_path: coditas,
          duration: "Aug 2022 - June 2024",
          location: "Pune, India",
          description: `As an SDE intern, my priorities include learning opportunities and professional development. Aiming for Backend Development proficiency.`,
          color: "#0071C5",
        },
      ],
    },
  ],
};
