/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconType } from "react-icons";
import {
  FaGithub,
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

// Define a type for each social media icon object
interface SocialMedia {
  href: string;
  icon: IconType;
}

export const socialData: SocialMedia[] = [
  { href: "https://wa.link/37lp8a", icon: FaWhatsapp },

  { href: "https://www.behance.net/maryhogan_designs", icon: FaBehance },
  {
    href: "https://www.linkedin.com/in/sayo-adegoroye-41b28064?",
    icon: FaLinkedinIn,
  },
];

export const heroData = [
  {
    title: "UI / UX ",
  },
  {
    title: "Visual Designs",
  },
];

export const portfolioData = [
  {
    icon: "/images/alpha.png",
    title: "ALPHA BANK ",
    tags: "Fintech App",
    website: "https://www.behance.net/gallery/194825815/UIUX-CASE-STUDY",
    github: "https://www.behance.net/gallery/194825815/UIUX-CASE-STUDY",
  },
  {
    icon: "/images/stitch.png",
    title: "learning App ",
    tags: "Social App",
    website: "https://www.behance.net/gallery/194844615/STITCH-E-LEARNING-APP",
    github: "https://www.behance.net/gallery/194844615/STITCH-E-LEARNING-APP",
  },
];

export const UIUXData = [
  {
    icon: "/images/cinedate.png",
    title: "Cinedate App Design",
    tags: "Social",
    website:
      "https://www.behance.net/gallery/168172805/UX-case-study-for-CineDate-streaming-application",
    github: "",
  },
  {
    icon: "/images/alphamusic.png",
    title: "Alpha Music Ipad App",
    tags: "Music",
    website: "https://www.behance.net/gallery/165634963/Alpha-Ipad-music-app",
    github: "",
  },
  {
    icon: "/images/run.png",
    title: "Run Dispatch App",
    tags: "Logistics",
    website:
      "https://www.behance.net/gallery/164211483/UI-UX-CASE-STUDY-FOR-A-DELIVERY-MOBILE-APP",
    github: "",
  },
  {
    icon: "/images/capitalstate.png",
    title: "Capital State farm UI Design",
    tags: "Information",
    website:
      "https://www.behance.net/gallery/194301901/Capital-Start-farm-website-UI-design",
    github: "",
  },
  {
    icon: "/images/nexford.png",
    title: "Nexapluse Website Design",
    tags: "Tech Service",
    website:
      "https://www.behance.net/gallery/194303255/Nexapluse-Tech-Service-Landing-page",
    github: "",
  },
  {
    icon: "/images/cleaning.png",
    title: "Onimoto Cleaning service website Design",
    tags: "Information",
    website:
      "https://www.behance.net/gallery/194303089/Onimoto-Cleaning-service",
    github: "",
  },
];

export const navData = [
  { href: "/", name: "Home" },
  { href: "#services", name: "Service" },
  { href: "#portfolio", name: "Portfolio" },
  { href: "#about", name: "About" },
  { href: "#reviews", name: "Reviews" },
  { href: "#contact", name: "Contact" },
];

export const reviewData = [
  {
    avatar: "/images/about-img.png",
    name: "Sayo Adegoroye",
    review:
      "Mary is an amazing designer who is very diligent and keep to time. We have worked on quite a lot of projects together and he never disappoints.His web designs are topnotch, easy to navigate and interactive",
  },
  {
    avatar: "/images/conah.jpeg",
    name: "Comfort Onah",
    review:
      "Sayo is my go to guy when it comes to web development and designs.His time management is something i love about him and also his commitments to work. ",
  },
  {
    avatar: "/images/abbey.jpeg",
    name: "Ismail Olasunkanmi",
    review:
      "Sayo is my mentee and i can tell you he is a great developer. Always learning and improving , keeping up with latest technology at all cost. He is very intelligent and resourceful",
  },
];

export const ContactData = [
  {
    icon: "/images/call.svg",
    title: "Call me at",
    description: "+2349034970469",
    link: "https://wa.link/37lp8a",
  },
  {
    icon: "/images/mail.svg",
    title: "Send me an email",
    description: "adegoroyesayotosin@gmail.com",
    link: "https://mailto:adegoroyesayotosin@gmail.com",
  },
];

export const Footercontactdata = [
  {
    icon: "/images/github.svg",
    website: "https://github.com/shayomi",
  },
  {
    icon: "/images/behance.svg",
    website: "https://www.behance.net/shayomidesigns",
  },
  {
    icon: "/images/Ig.svg",
    website:
      "https://www.instagram.com/shayomiiii_designs?igsh=MWI4djBwdWo3MG1pdw%3D%3D&utm_source=qr",
  },
  {
    icon: "/images/linkedin.svg",
    website: "https://www.linkedin.com/in/sayo-adegoroye-41b28064?",
  },
  {
    icon: "/images/whatsapp.svg",
    website: "https://wa.link/37lp8a",
  },
];
