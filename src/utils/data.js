import { nanoid } from "nanoid";
import html from "../assets/html.png";
import css from "../assets/CSS3.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import reduxToolit from "../assets/redux-toolkit.svg";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import hook from "../assets/react-hook.jpg";
import formhook from "../assets/react-form-hook.png";
import mui from "../assets/mui.png";
import git from "../assets/github.png";
import reactCertification from "../assets/certifications/React-IBM-certification.png";
import BronzeLearner from "../assets/Achievements/Champion-Learner-Bronze-2023.png";
import DSA from "../assets/Achievements/DSA-mock-interview-scaler.png";
import myPhoto from "../assets/gyanendra-photo.jpg";

export const about = {
  name: "Gyanendra Kumar",
  img: myPhoto,
  introduction: "Hi, I'm Gyanendra Kumar Software Engineer.",
  description:
    "I'm an Application Developer at IBM in India. I'm passionate and enthusiastic for Front-End Development. I am dedicated to creating immersive user experiences through dynamic UI effects and animations, committed to seamlessly blending creativity with functionality in intuitive interfaces.",
};

export const profile = [
  {
    id: nanoid(),
    desc: "Working in IBM from March 2020.",
  },
  {
    id: nanoid(),
    desc: "Having a total of 3.5+ years of IT experience.",
  },
  {
    id: nanoid(),
    desc: "Trained and Certified in React.JS at IBM",
  },
  {
    id: nanoid(),
    desc: "Interacted with client to understand the requirements to produce Technical Solution.",
  },
  {
    id: nanoid(),
    desc: "My project managers, team members and clients have commended me on my ability to quickly grasp new concepts.",
  },
  {
    id: nanoid(),
    desc: "Achieved Champion Learner BRONZE at IBM in 2023",
  },
];

export const skills = [
  {
    id: nanoid(),
    image: html,
    name: "HTML",
  },
  {
    id: nanoid(),
    image: css,
    name: "CSS",
  },
  {
    id: nanoid(),
    image: tailwind,
    name: "Tailwind CSS",
  },
  {
    id: nanoid(),
    image: javascript,
    name: "JS/ES6",
  },
  {
    id: nanoid(),
    image: react,
    name: "React.JS",
  },
  {
    id: nanoid(),
    image: hook,
    name: "React Hook",
  },
  {
    id: nanoid(),
    image: reduxToolit,
    name: "Redux/Toolkit",
  },
  {
    id: nanoid(),
    image: formhook,
    name: "React Form",
  },
  {
    id: nanoid(),
    image: mui,
    name: "Material UI",
  },
  {
    id: nanoid(),
    image: firebase,
    name: "Firebase",
  },
  {
    id: nanoid(),
    image: git,
    name: "GitHub",
  },
];

export const companyProject = [
  {
    id: nanoid(),
    company: "Suntrust",
    role: "FileNet Developer (Support- DC2 Migration Team)",
    duration: "June 2023 - 30 Nov 2023",
    location: "Kolkata",
    description: [
      "Responsible to create test cases for FileNet application migration.",
      "Attaching Test cases to ALM Tool.",
      "After migration, performing wave validations and taking screenshots.",
      "Attaching screenshots to ALM as per application test cases.",
      "Collaborating with different teams to perform test cases validations.",
    ],
  },
  {
    id: nanoid(),
    company: "Hertz",
    role: "FileNet Developer (Prod Support and Dev Support)",
    Technologies: "FileNet, ACCE, WorkPlace, MySQL",
    duration: "June 2022 - May 2023",
    location: "Kolkata",
    description: [
      "Responsible to check incidents in Service Now",
      "Categorize tickets based on issues reported.",
      "Check issues and provide solution to the end users",
      "Provide solutions before SLA targets",
      "Tested entire VIR application based on AWS end to end from FileNet VIR application to case manager.",
    ],
  },
  {
    id: nanoid(),
    company: "JPMC",
    role: "Application Developer - Non-Prod support (Night-Shift)",
    duration: "March 2021 - May 2022",
    location: "Bangalore",
    description: [
      "Ensure the application is up and running as expected.",
      "Responsible for receiving requests from end-users, analyzing these, and either responding to the end-user with a solution or escalating it to the other IT teams.",
      "Dealing with the user issues with already scripted solutions and creating an incident to assign it to other teams.",
      "Providing Technical support for the application users",
      "* My quick response with solution has been appreciated by Clients.",
    ],
  },
  {
    id: nanoid(),
    company: "Westpac Corporation",
    role: "Application Developer (Prod Support)",
    duration: "June 2020 - March 2021",
    location: "Hyderabad",
    description: [
      "I was part of ECM L3 support team.",
      "Supported on multiple incidents.",
      "Supported on multiple CRQ production deployments.",
    ],
  },
];

export const personalProject = [
  {
    id: nanoid(),
    projectName: "E-Commerce",
    role: "React Developer",
    Technologies:
      "React.js,React Form Hook, Tailwind CSS, React Router DOM, Material UI, Framer Motion, React Icons, Firebase, GitHub",
    description: [
      "Developed authentication and authorization functionality using React.js, React Hooks, Tailwind CSS, Redux Toolkit, Firebase, React Form Hook.",
      "Working on Admin dashboard to display graph, add new products, update the products, view and change order status.",
      "Non-Admin user cannot access admin dashboard",
      "Currently working on this Project.",
    ],
    demo: "https://eccomerce-gyanendra-kumars-projects.vercel.app/",
    github: "https://github.com/Huski-commando/eccomerce",
  },
  {
    id: nanoid(),
    projectName: "PortFolio",
    role: "React Developer",
    Technologies:
      "React.js, Tailwind CSS, React Router DOM, Material UI, Framer Motion, React Icons",
    description: [
      "Created Portfolio web app using above mentioned technologies",
      "Implemented react-router-dom latest features to allow users to view my resume, Github page for respective projects and live demo site of the respective projects",
      "Implemented tab feature to show organization projects and personal projects",
      "Implemented dialog feature to showcase contacts, certifications and achievements",
      "Data is being fetched dynamically",
    ],
    demo: "https://gyanendra-portfolio-0112.netlify.app/",
    github: "https://github.com/Huski-commando/portfolio",
  },
  {
    id: nanoid(),
    projectName: "Movix",
    role: "React Developer",
    Technologies:
      "React.js, Redux Toolkit, SCSS, Axios, React Router DOM, API integration",
    description: [
      "Created movie web app using above mentioned technologies",
      "Implemented react-router-dom latest features to navigate users to movie or TV Shows detail page",
      "Implemented Search and filter to find specific movie or TV shows",
      "Implemented skeleton loading while data is being fetched from API",
      "Implemented lazy loading for images",
      "Used Redux toolkit to store the movie, TV series and genres state",
    ],
    demo: "https://movix0112.netlify.app/",
    github: "https://github.com/Huski-commando/movix.git",
  },
  {
    id: nanoid(),
    projectName: "MixMaster",
    role: "React Developer",
    Technologies:
      "React.JS, CSS, React Query, API integration, Axios, React Router DOM, Toastify",
    description: [
      "User can search with Search bar",
      "React Query to cache data to fast reload",
      "Used React-Router-DOM for navigation",
      "React Hooks to manage state",
      "Axios to fetch data from given API",
    ],
    demo: "https://mixmaster0112.netlify.app/",
    github: "https://github.com/Huski-commando/mixmaster",
  },
  {
    id: nanoid(),
    projectName: "GYM Website",
    role: "React Developer",
    Technologies:
      "React.js, Tailwind CSS, API Integration, Axios, React Router DOM",

    description: [
      "Designed a GYM website with Rapid API",
      "React Router DOM to navigate to different exercises",
      "Implemented search functionality to search different exercises",
      "It displays similar exercises and YouTube videos",
      "React Hooks to manage state",
      "Axios to fetch data from API",
    ],
    demo: "https://gym-mania.netlify.app/",
    // github: "https://github.com/Huski-commando/mixmaster",
  },
];

export const certification = [
  {
    id: nanoid(),
    image: reactCertification,
    name: "IBM React Certificate",
  },
];
export const achievement = [
  {
    id: nanoid(),
    image: BronzeLearner,
    name: "IBM Champion Bronze Learner",
  },
  {
    id: nanoid(),
    image: DSA,
    name: "Scaler DSA Mock Interview",
  },
];

export const educations = [
  {
    id: nanoid(),
    duration: "2015 - 2019",
    degree: "Bachelor of Engineering",
    university: "VTU",
    course: "CSE",
  },
];
