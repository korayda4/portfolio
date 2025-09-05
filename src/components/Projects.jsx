import React from "react";
import ProjectCard from "./ProjectCard";
import { DiReact, DiJavascript1, DiGithubBadge } from "react-icons/di";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const projects = [
    { type:"Mobile", icon: <SiNextdotjs size={32} color="#000" />, title: "Afettr Desktopview & Native application for Disaster", link: "https://www.afettr.com/" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Stock Management & Dashboard", link: "https://github.com/korayda4/stockmanagement-mega" },
    { type:"Desktop",icon: <SiNextdotjs size={32} color="#000" />, title: "Basic e-commerce with redux toolkit", link: "https://github.com/korayda4/my-ecommerce" },
    { type:"Desktop",icon: <SiNextdotjs size={32} color="#000" />, title: "Next Auth System & Protected Routes", link: "https://github.com/korayda4/next-auth" },
    { type:"Responsive",icon: <SiNextdotjs size={32} color="#000" />, title: "Türkün Haberi News Site", link: "https://www.turkunhaberi.com/" },
    { type:"Mobile",icon: <DiReact size={32} color="#61dafb" />, title: "React Native Mobile Application For Tourism & İslamic", link: "https://github.com/korayda4/canlikul" },
    { type:"Desktop",icon: <SiNextdotjs size={32} color="#000" />, title: "Dynamic Rick and Morty site using the Rick and Morty API", link: "https://github.com/korayda4?tab=repositories" },
    { type:"Responsive",icon: <SiNextdotjs size={32} color="#000" />, title: "E-Commerce MVP For TOPU", link: "https://github.com/korayda4/Topu" },
    { type:"Desktop",icon: <DiReact size={32} color="#61dafb" />, title: "Faceswap Site with AI", link: "https://github.com/korayda4/FaceSwap" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Translate App with APİ", link: "https://github.com/korayda4/Translate-App" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Dynamic Footbal Site with APİ", link: "https://github.com/korayda4/FootbalApp" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Dynamic News Site with APİ", link: "https://github.com/korayda4/newsApp" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Basic Weather Site with APİ", link: "https://github.com/korayda4/Weather-Site" },
    { type:"Desktop",icon: <DiReact size={32} color="#61dafb" />, title: "Kanban Management App Basic", link: "https://github.com/korayda4/Management-App" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Livori E-Commerce", link: "https://www.upwork.com/freelancers/~0145b771ea8f049179?p=1959944558895243264" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "The Foost Admin Panel", link: "https://www.upwork.com/freelancers/~0145b771ea8f049179?p=1959943717111013376" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Tedarika Landing Page", link: "https://www.upwork.com/freelancers/~0145b771ea8f049179?p=1959942915242266624" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Future Coder MVP site", link: "https://www.upwork.com/freelancers/~0145b771ea8f049179?p=1959942490191499264" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Psikolog Ecren Yüksel Site", link: "https://www.psikologecren.com/" },
    { type:"Responsive",icon: <DiReact size={32} color="#61dafb" />, title: "Rexiva Digital Agency Site", link: "https://rexiva.com.tr/" },
];

export default function Projects() {
    return (
        <section className="projects-section">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    icon={project.icon}
                    title={project.title}
                    link={project.link}
                    index={index}
                    type={project.type}
                />
            ))}
        </section>
    );
}
