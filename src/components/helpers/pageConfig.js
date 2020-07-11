//* holds config data for each page, so they don't get cluttered
export const HomeConfig = {
  briefDescription: "You are now on the homepage :D",
  description:
    "Here is some homepage placeholder text. Required to make sure everything formats correctly, doesn't clip, etc.",
  icon: {
    imgPath: "assets/icons/beaker.svg",
    imgAlt: "default logo: a beaker I coded in svg",
  },
};

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
  //title: "Living, learning, & leveling up one day at a time.",
  title: "He would increase his arcane wizardry",
  subtitle: "not satisfied tinkering until reality bent to his will",
  copyright: "Zach Niemann © twentytwenty",
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

export const FABConfig = {
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

const ProjectsImgBase = "assets/projects/";

export const ProjectsConfig = {
  title: "Projects",
  description:
    "From SVG animations using Sass (preprocessed CSS) to React.js, Node.js, Socket.IO, and WebRTC. Check out a few of my latest projects.",
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
          srcSet: `${ProjectsImgBase}whisper-chatting-320w.png 320w,
          ${ProjectsImgBase}whisper-chatting-480w.png 480w,
          ${ProjectsImgBase}whisper-chatting-600w.png 600w`,
          sizes: `(max-width: 360px) 320px,
          (max-width: 520px) 480px,
          600px`,
          src: `${ProjectsImgBase}whisper-chatting-480w.png`,
          alt: "example conversation in whisper app",
        },
        {
          srcSet: `${ProjectsImgBase}whisper-sign-in-320w.png 320w,
          ${ProjectsImgBase}whisper-sign-in-480w.png 480w,
          ${ProjectsImgBase}whisper-sign-in-600w.png 600w`,
          sizes: `(max-width: 360px) 320px,
          (max-width: 520px) 480px,
          600px`,
          src: `${ProjectsImgBase}whisper-sign-in-480w.png`,
          alt: "shows sign-in page",
        },
        {
          srcSet: `${ProjectsImgBase}whisper-landing-320w.png 320w,
          ${ProjectsImgBase}whisper-landing-480w.png 480w,
          ${ProjectsImgBase}whisper-landing-600w.png 600w`,
          sizes: `(max-width: 360px) 320px,
          (max-width: 520px) 480px,
          600px`,
          src: `${ProjectsImgBase}whisper-landing-480w.png`,
          alt: "shows landing page",
        },
        {
          srcSet: `${ProjectsImgBase}whisper-sign-up-320w.png 320w,
          ${ProjectsImgBase}whisper-sign-up-480w.png 480w,
          ${ProjectsImgBase}whisper-sign-up-600w.png 600w`,
          sizes: `(max-width: 360px) 360px,
          (max-width: 520px) 480px,
          600px`,
          src: `${ProjectsImgBase}whisper-sign-up-480w.png`,
          alt: "shows sign-up page",
        },
      ],
    },

    {
      name: "GIF Component",
      briefDescription: "Standalone GIF search",
      techStack: ["React", "GIPHY API"],
      role: "Side Project",
      description:
        "This GIF search component searches your queries through the GIPHY API.",
      images: [],
    },

    {
      name: "Roulette",
      briefDescription: "Video chat app using WebRTC",
      techStack: ["Node.js", "WebRTC", "React", "Socket.IO", "Electron"],
      role: "Full-stack roulette",
      description: "placeholder roulette description",
      images: [
        {
          srcSet: `${ProjectsImgBase}whisper-chatting-320w.png 320w,
          ${ProjectsImgBase}whisper-chatting-480w.png 480w,
          ${ProjectsImgBase}whisper-chatting-600w.png 600w`,
          sizes: `(max-width: 360px) 320px,
          (max-width: 520px) 480px,
          600px`,
          src: `${ProjectsImgBase}whisper-chatting-480w.png`,
          alt: "example conversation in whisper app",
        },
      ],
    },

    {
      name: "Word-connect",
      briefDescription: "Desktop Dictionary Search",
      techStack: ["Electron", "Node.js", "React", "IndexedDB"],
      role: "The coding bit",
      description:
        "A side project I coded to get some experience with web scraping with Node.js",
      images: [
        {
          srcSet: `${ProjectsImgBase}whisper-chatting-320w.png 320w,
          ${ProjectsImgBase}whisper-chatting-480w.png 480w,
          ${ProjectsImgBase}whisper-chatting-600w.png 600w`,
          sizes: `(max-width: 360px) 320px,
          (max-width: 520px) 480px,
          600px`,
          src: `${ProjectsImgBase}whisper-chatting-480w.png`,
          alt: "example conversation in whisper app",
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
      images: [],
    },
  ],
};

export const NavArrowConfig = {
  left: {
    addClasses: "arrow left",
    icon: {
      imgPath: "assets/page/arrow_right.svg",
      imgAlt: "",
    },
  },

  right: {
    addClasses: "arrow right",
    icon: {
      imgPath: "assets/page/arrow_right.svg",
      imgAlt: "",
    },
  },
};

export const NavbarConfig = {
  logo: {
    //* logo for homepage navigation
    name: "logo",
    link: "#homepage",
    imgPath: "assets/logo.svg",
    imgAlt: "navigate to homepage",
  },
  pages: [
    {
      name: "About",
      link: "#about",
      alt: "navigate to 'about' page",
    },
    {
      name: "Projects",
      link: "#projects",
      alt: "navigate to 'projects' page",
    },
    {
      name: "Contact",
      link: "#contact",
      alt: "navigate to 'contact' page",
    },
  ],
};

export const TinkeringData = {
  title: "Tinkering",
  description: "The cards below animate on tap / hover.",
  videos: [
    {
      src: "https://media.giphy.com/media/9DawXEUzWLcN2qzyX2/giphy.mp4",
      type: "video/mp4",
      name: "Pure Sass Menu",
      id: "sass-menu-vid",
    },

    {
      src: "https://media.giphy.com/media/1ziiF5jQ5CaXnjipIf/giphy.mp4",
      type: "video/mp4",
      name: "Sass Preloader",
      id: "sass-preloader-1-vid",
      addClasses: "padded",
    },

    {
      src: "https://media.giphy.com/media/9AIA9Jz1zwJKHvaLeI/giphy.mp4",
      type: "video/mp4",
      name: "Spinner Preloader",
      id: "sass-preloader-2-vid",
      addClasses: "padded",
    },

    {
      src: "https://media.giphy.com/media/5hq1mh1VHvFr1Bv5q5/giphy.mp4",
      type: "video/mp4",
      name: "Spinner Preloader",
      id: "spinner-preloader-3-vid",
      addClasses: "padded",
    },
  ],
};
