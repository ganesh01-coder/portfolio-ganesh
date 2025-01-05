import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "HTML", icon: html},
  { title: "CSS", icon: css },

  { title: "JAVASCRIPT", icon: javascript },
  { title: "REACTJS", icon: reactjs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
 
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Apna College Apprenticeship",
    icon: eduskill,
    iconBg: "#161329",
    date: "Jul 2024 - Nov 2024",
    points: [
      "Completed a comprehensive front-end development program covering HTML, CSS, JavaScript, and Ractj.Js",

      "Worked on real-world projects to build responsive and interactive web applications.",

      "Learned on real-world projects to build responsive and interactive web applications.",

      "Learned version control using Git and modern frameworks like Bootstrap and Tailwind Css.",

      "Developed skills in debugging, problem-solving, and API intgration.",

    ],
  },
 
];

export const projects = [
  {
    name: "E-Commerce (Unique-Fahion-Hub)",
    description:
      "I developed an e-commerce frontend website using React.js, Vite, and Tailwind CSS to create a modern, responsive, and efficient user interface. React.js provided a robust framework for building reusable components and managing the application's state. Vite enhanced the development process with its fast build times and hot module replacement, ensuring a seamless workflow. Tailwind CSS allowed me to design a visually appealing and highly responsive layout using its utility-first approach, making customization quick and easy. The website includes features such as a dynamic product listing, a shopping cart, and a responsive design optimized for various devices, delivering a smooth and engaging user experience.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      {name: "React.Js", color: "blue-text-gradient"},
      { name: "Tailwind.css", color: "blue-text-gradient"},
    ],
    image: weatherpedia,
    
    
  },
  {
    name: "Portfolio Website",
    description:
      "I designed and built a portfolio website using HTML, CSS, and JavaScript to showcase my projects and skills in web development. HTML provided the structural foundation for the site, organizing content into well-structured sections such as About Me, Projects, Skills, and Contact. CSS was used to craft a visually appealing and responsive design, ensuring the website looks great on all devices, from desktops to smartphones. JavaScript added interactivity, enabling features like a smooth navigation menu, a dynamic project gallery, and animated scroll effects. The portfolio is user-friendly and professional, reflecting my technical expertise and creative approach to web design.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    
  },
  {
    name: "Weather Application",
    description:
      "I developed a weather website using HTML, CSS, JavaScript, and a weather API to provide users with real-time weather updates. The website allows users to search for any city and instantly retrieve detailed weather information, such as temperature, humidity, wind speed, and weather conditions. HTML structured the layout, while CSS ensured a clean, responsive design that adapts seamlessly to various devices. JavaScript was used to fetch data from the weather API and dynamically update the website content. Additional features include a location-based weather display using geolocation and visually appealing icons that match the current weather conditions, creating an engaging and functional user experience.",







    tags: [
      { name: "Html", color: "green-text-gradient"},
      { name: "Css", color: "green-text-gradient"},
      { name: "JavaScript", color: "green-text-gradient"},
      { name: "Api Weather", color: "green-text-gradient"},
    ],
    image: mhft,
    
  },
  {
    name: "HangMan Game",
    description:
      "I created a Hangman game using HTML, CSS, and JavaScript to provide an interactive and fun user experience. The game features a user-friendly interface where players guess letters to reveal a hidden word within a limited number of attempts. HTML structures the game's layout, CSS styles the game visually with an appealing design, and JavaScript powers the game logic.",
    tags: [
       { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
     
    ],
    image: payloadmaster,
   
  },
  {
    name: "Simon Game",
    description:
      "I developed a Simon Game using HTML, CSS, and JavaScript, inspired by the classic memory-based game. The game challenges players to repeat an increasingly long sequence of colors and sounds, testing their memory and focus.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: sketcher,
    
  },
  
];
