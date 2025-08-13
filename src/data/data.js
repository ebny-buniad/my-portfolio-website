import { PencilRuler, Code, Search, Layout } from 'lucide-react';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const workAreas = [
    {
        title: "Web Design",
        description: "Crafting visually appealing and user-friendly website layouts.",
        icon: PencilRuler
    },
    {
        title: "Web Development",
        description: "Building responsive and functional websites with modern technologies.",
        icon: Code
    },
    {
        title: "Web Research",
        description: "Gathering data and insights to create effective web strategies.",
        icon: Search
    },
    {
        title: "UX/UI Design",
        description: "Designing intuitive interfaces and smooth user experiences.",
        icon: Layout
    }
];

const webTech = [
    {
        name: "HTML5",
        icon: FaHtml5,
        color: "#ffffff"
    },
    {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#ffffff"
    },
    {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "#ffffff"
    },
    {
        name: "React",
        icon: FaReact,
        color: "#ffffff"
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#ffffff"
    },
    {
        name: "Express.js",
        icon: SiExpress,
        color: "#ffffff"
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#ffffff"
    },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "#ffffff"
    }
];

export { workAreas, webTech }