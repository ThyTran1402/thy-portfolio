/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Thy Tran",
  title: "Hi, I'm Thy Tran",
  subTitle: emoji(
    "An aspiring Software Engineer who loves building end-to-end and impactful products that serve the community. I love building the bridge between the technology world and bussiness world 🚀. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mfVzsiwTUVMLQ-_WQyeIv7pxGyuDb-qx/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ThyTran1402",
  linkedin: "https://www.linkedin.com/in/thytran1402/",
  gmail: "ttmt.140201@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  instagram: "https://www.instagram.com/minhthy_tran/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Skillset",
  skills: [
    emoji(
      "⚡ Developer with experience in Full Stack developement with React.js, Node.js, MongoDB, Ruby on Rails, Python, mySQL"
    ),
    emoji("⚡ Currently learning and growing my skillsets in TensorFlow, AWS, Kubernetes, Go"),
    emoji(
      "⚡ Intrested in solving real-world problems that can use technology to make life easier"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of South Florida",
      logo: require("./assets/images/usf.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2021 - May 2025",
      desc: "I have taken varity of courses in Computer Science: Data Structures, Algorithms, Operating Systems, Database Design, Software Engineering",
      descBullets: [
        
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assisant",
      company: "University of South Florida",
      companylogo: require("./assets/images/usf.png"),
      date: "June 2023 – Present",
      desc: "I developed a learning platform that enables 300 college students to watch Haptics lectures on their own schedules, achieving 81% rating. I built web interface from scratch by leveraging React.js and BigBlueButton open-source virtual classroom software used, creating a friendly and easy-to-use platform used by USF and Johns Hopkins University students.",
      // descBullets: [
        
      // ]
    },
    {
      role: "Software Developer Intern",
      company: "Avocademy",
      companylogo: require("./assets/images/Avocademy.png"),
      date: "June 2022 – August 2022",
      desc: "I Developed a dashboard to automate job application for Avocademy’s students using Next.js and TailwindCSS. Utilized web bundles to boost performance, reducing page load time by 20% and decreasing JavaScript bundles size by 25%."
    },
    {
      role: "Software Engineering Intern",
      company: "FPT Software ",
      companylogo: require("./assets/images/fpt_software.jpg"),
      date: "Jan 2021 – June 2021",
      desc: "I tested a laboratory real-time monitoring web application for PHCbi built on microservices structure using Spring framework, identified 15 bugs in initial testing"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects that I have worked on until now",
  projects: [
    {
      image: require("./assets/images/carbonator.webp"),
      projectName: "Carbonator",
      projectDesc: "I collaborated in a team of 4 to implement the smart greenhouse plant by training and analyzing machine learning models to classify the crops and plants with 85% accuracy.\n First place team won the State Farm’s Good Neighbor Challenge.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ThyTran1402/shellhacks-carbonator"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/remind_me.png"),
      projectName: "Remind me",
      projectDesc: "Led with a team of 4 to build a chrome extension that enabled users to add tasks and reminders. The extension also sent notifications reminding users to complete the tasks on time.\n My team won an award at USF Hackabull.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ThyTran1402/remindme"
        }
      ]
    },

    {
      //image: require("./assets/images/remind_me.png"),
      projectName: "Movie Collection",
      projectDesc: "I implemented an interactive web application allowing users to search 300+ movies by category, genre, watch trailers, and view cast information\n. Developed the front end with React.js, Redux, and Material UI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ThyTran1402/movie_collection"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "My resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Are you interested in collabrate with me? Let connect!",
  number: "4256964214",
  email_address: "ttmt.140201@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
