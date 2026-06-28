import "./skills.css";
import { DiJavascript } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { DiResponsive } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";

export default function skilles() {
    const skills = [
        {
            image: <IoLogoHtml5 className="text-red-700 "/>,
            name: "HTML",
        },
        {
            image: <FaCss3Alt className="text-blue-500"/>,
            name: "CSS",},
        {
            image: <DiJavascript className="text-yellow-500"/>,
            name: "JavaScript", },
        {
            image: <FaReact className="text-cyan-500"/>,
            name: "React", },
        {
            image: <FaGithub className="text-gray-800"/>,
            name: "Git", },
            {
            image: <TbBrandTailwind className="text-cyan-500"/>,
            name: "Tailwind", },
            {
            image: <FaBootstrap className="text-purple-500"/>,
            name: "Bootstrap", },
            {
                image: <DiResponsive className="text-green-500"/>,
                name: "Responsive Design", },
    ];
           
  return (
<div className="skills" id="skills">
            <div className="skills-container">
            <div className="skills-header">
                <h1>My Skills</h1>
            </div>
        </div>
        <div className="skills-grid">
            {skills.map((item, index) => (
                <div className="skills-card" key={index}>
                    <div className="skills-icon">
                        {item.image}
                    </div>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}
