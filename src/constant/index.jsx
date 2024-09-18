import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import {Instagram} from "lucide-react"
import {Check} from "lucide-react"

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    icon: <Instagram/>,
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Check />,
    text: "AI Introduce Your Products",
    description:
      "Arko Ai based on the Information given is able to introduce your products to customers .",
  },
  {
    icon: <Check />,
    text: "AI answer Your Customers Question",
    description:
      "Arko Ai can recognize customers' messages and respond to them based on the information given to them .",
  },
  {
    icon: <Check />,
    text: "Manage Your Products In Your Direct",
    description:
      "you can manage your products inventory and price b using the admin panel on instagram",
  },
  {
    icon: <Check />,
    text: "Arko Generate Invoice and Label",
    description:
      "You are able to generate your customers Lable and Invoice by using Arko bot on telegram",
  },
  {
    icon: <Check />,
    text: "Showcase In Your Customers Direct",
    description:
      "You can categorize your products and introduce them with all detail just like a Wabsite and The Showcase will Active on your customers direct and they are be able to Watch and Order your products",
  },
  {
    icon: <Check />,
    text: "Acsess to Customers Info",
    description:
      "You can havr access to your customers information on Google Sheet app after they complete theme order .",
  },
];

export const checklistItems = [
  {
    title: "Save Your Time",
    description:
      "",
  },
  {
    title: "Save More Money",
    description:
      "",
  },
  {
    title: "More Inforamation In Fastest Time and More Fully",
    description:
      "",
  },
  {
    title: "You Can Connect it To your Website",
    description:
      "",
  },
  {
    title: "You Have an Acess to Your Customers Data",
    description:
      "",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Linkedin" },
  { href: "#", text: "Github" },
  { href: "#", text: "X" },
  { href: "#", text: "Instagram" },
  { href: "#", text: "Telegram" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
