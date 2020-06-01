//* holds config data for each page, so they don't get cluttered

export const AboutConfig = {
  description:
    "I'm a versatile Web Developer with experience in both the front-end and back-end of the development process.",
  description2:
    "Constantly looking to grow my skill set, specializing in React and mobile-first responsive design",

  dailyDescription: "Day-to-day:",
  occasionalDescription: "Additional experience with:",
  iconsDaily: [
    {
      name: "React",
      link: "https://www.reactjs.org",
      imgPath: "assets/icons/react.svg",
      imgAlt: "redirect to React's site",
      type: "named",
    },
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      imgPath: "assets/icons/javascript.svg",
      imgAlt: "redirect to Javascript docs on MDN",
      type: "named",
    },
    {
      name: "Sass",
      link: "https://sass-lang.com/",
      imgPath: "assets/icons/sass.svg",
      imgAlt: "redirect to Sass docs",
      type: "named",
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      imgPath: "assets/icons/git-icon.svg",
      imgAlt: "redirect to Git version control site",
      type: "named",
    },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      imgPath: "assets/icons/html-5.svg",
      imgAlt: "redirect to HTML5 docs on MDN",
      type: "named",
    },
  ],

  iconsOccasional: [
    {
      name: "Node.js",
      link: "https://nodejs.org/en/about/",
      imgPath: "assets/icons/nodejs.svg",
      imgAlt: "redirect to Node.js docs",
      type: "named",
    },
    {
      name: "Express.js",
      link: "https://expressjs.com/",
      imgPath: "assets/icons/expressjs.svg",
      imgAlt: "redirect to Express.js docs",
      type: "named",
    },
    {
      name: "Socket.IO",
      link: "https://socket.io/",
      imgPath: "assets/icons/socket.io.svg",
      imgAlt: "redirect to Socket.IO docs",
      type: "named",
    },
    {
      name: "WebRTC",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",
      imgPath: "assets/icons/webrtc.svg",
      imgAlt: "redirect to WebRTC docs on MDN",
      type: "named",
    },
  ],
};

export const FooterConfig = {
  title: "Living, learning, & leveling up one day at a time.",
  copyright: "Hand typed by me © twentytwenty",
  iconsData: [
    {
      name: "github",
      link: "https://www.github.com/niems",
      imgPath: "assets/social/github.svg",
      imgAlt: "redirect to my github profile",
      type: "social",
    },
    {
      name: "codepen",
      link: "https://codepen.io/niems",
      imgPath: "assets/social/codepen.svg",
      imgAlt: "redirect to my codepen profile",
      type: "social",
    },
    {
      name: "freecodecamp",
      link: "https://www.freecodecamp.org/niems",
      imgPath: "assets/social/freecodecamp.svg",
      imgAlt: "redirect to my freecodecamp profile",
      type: "social",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/zach-niemann-6203105a/",
      imgPath: "assets/social/linkedin.svg",
      imgAlt: "redirect to my linkedin profile",
      type: "social",
    },
  ],
};

export const NavConfig = {
  icon: {
    name: "arrow home",
    link: "#homepage",
    imgPath: "assets/page/arrow_up.svg",
    imgAlt: "scroll back to top",
    type: "page",
  },
  addClasses: "fab scroll-to-top",
};

export const DownloadBtnConfig = {
  icon: {
    name: "download resume",
    link: "#",
    imgPath: "assets/page/download.svg",
    imgAlt: "click here to download my resume as a PDF",
  },
  text: "RESUME",
};

export const ProjectsConfig = {
  allProjects: [
    {
      name: "Whisper",
      briefDescription: "Messenger app using Socket.IO",
      techStack: ["Node.js", "React", "Socket.IO", "Electron"],
      role: "Full-stack role, bruh",
      description:
        "placeholder whisper description that will have tooo much text and will run over for testing purposes",
      images: [
        {
          src: "",
          alt: "",
        },
      ],
    },

    {
      name: "Roulette",
      briefDescription: "Video chat app using WebRTC",
      techStack: ["Node.js", "WebRTC", "React", "Socket.IO", "Electron"],
      role: "Full-stack roulette",
      description: "placeholder roulette description",
      images: [
        {
          src: "",
          alt: "",
        },
      ],
    },

    {
      name: "Break It Test",
      briefDescription:
        "this is just some nonsense to see if my component fucks up or not. I'm hoping it's a real problem :D",
      techStack: ["Node.js", "WebRTC", "React", "Socket.IO", "Electron"],
      role: "Full-stack breaking shit",
      description:
        "bbreak-it test descriptionbreak-it test descriptionbreak-it test descriptionbreak-it test descriptionbreak-it test descriptionbreak-it test descriptionbreak-it test descriptionbreak-it test descriptionbreak-it test descriptionbreak-it test descriptionreak-it test description",
      images: [
        {
          src: "",
          alt: "",
        },
      ],
    },
  ],
};
