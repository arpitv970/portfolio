import { ProjectType } from "./types";

const iconPath = '/assets/icons/';
const logoPath = '/assets/logo/';
const images = '/assets/images/';


const brief = 'I am a Freelancer, Full-Stack Developer & Open-Source Contributor. Also, I have great work experience in building products & services for various startups. Being a curious developer, I am currently exploring the vast field of DevOps in as full-time role.'

const socials = [
  {
    plateform: 'GitHub',
    url: 'https://github.com/arpitv970/',
    logo: `${iconPath}/github-icon.svg`,
  },
  {
    plateform: 'Twitter',
    url: 'https://twitter.com/arpitv970',
    logo: `${iconPath}/twitter-icon.svg`,
  },
  {
    plateform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arpitv970/',
    logo: `${iconPath}/linkedin-icon.svg`,
  },
  {
    plateform: 'Instagram',
    url: 'https://www.instagram.com/arpitv970/',
    logo: `${iconPath}/insta-icon.svg`,
  },
];

const skills = [
  {
    skill: 'Next.js',
    logo: `${logoPath}/nextjs-logo.svg`,
  },
  {
    skill: 'JavaScript',
    logo: `${logoPath}/js-logo.svg`,
  },
  {
    skill: 'TypeScript',
    logo: `${logoPath}/ts-logo.svg`,
  },
  {
    skill: 'Express.js',
    logo: `${logoPath}/expressjs-logo.svg`,
  },
  {
    skill: 'TailwindCSS',
    logo: `${logoPath}/tailwindcss-logo.svg`,
  },
  {
    skill: 'React.js',
    logo: `${logoPath}/reactjs-logo.svg`,
  },
  {
    skill: 'Node.js',
    logo: `${logoPath}/nodejs-logo.svg`,
  },
  {
    skill: 'Postgres',
    logo: `${logoPath}/psql-logo.svg`,
  },
  {
    skill: 'MongoDB',
    logo: `${logoPath}/mongodb-logo.svg`,
  },
  {
    skill: 'Redux',
    logo: `${logoPath}/redux-logo.svg`,
  },
];

export const projects: ProjectType[] = [
  {
    title: "Project 1",
    img: "project1.jpg",
    bullets: ["Feature 1", "Feature 2"],
    demo: "https://example.com/demo1",
    code: "https://github.com/project1"
  },
  {
    title: "Project 1",
    img: "project1.jpg",
    bullets: ["Feature 1", "Feature 2"],
    demo: "https://example.com/demo1",
    code: "https://github.com/project1"
  },
  {
    title: "Project 1",
    img: "project1.jpg",
    bullets: ["Feature 1", "Feature 2"],
    demo: "https://example.com/demo1",
    code: "https://github.com/project1"
  },
  {
    title: "Project 1",
    img: "project1.jpg",
    bullets: ["Feature 1", "Feature 2"],
    demo: "https://example.com/demo1",
    code: "https://github.com/project1"
  }
];

const pricing = [
  {
    price: '$10',
    desc: [
      'Static Site',
      'Fully Responsive',
      'Quick Delivery',
    ],
  },
  {
    price: '$10',
    desc: [
      'Static Site',
      'Fully Responsive',
      'Quick Delivery',
    ],
  },
  {
    price: '$10',
    desc: [
      'Static Site',
      'Fully Responsive',
      'Quick Delivery',
    ],
  },
];

export const user = {
  name: 'Arpit Verma',
  email: 'arpitv970@gmail.com',
  phone: '+91 6375796873',
  avatar: '/assets/images/Arpit-img.svg',
  brief,
  socials,
  skills,
  projects,
  pricing,
}


