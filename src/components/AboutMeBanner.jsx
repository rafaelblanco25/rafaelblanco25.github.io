import profile from "../assets/profile-2.png";
import Skill from "./Skill";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import reactIcon from "../assets/atom.png";
import c from "../assets/c.svg.png";
import csharp from "../assets/c-sharp.png";
import cpp from "../assets/c-.png";
import css from "../assets/css.png";
import excel from "../assets/excel.png";
import html from "../assets/html-5.png";
import javascript from "../assets/java-script.png";
import python from "../assets/python.png";
import r from "../assets/r.png";
import jupyter from "../assets/jupyter.svg.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";
import tensorflow from "../assets/tensor-flow.svg.png";
import java from "../assets/java.png";
import unity from "../assets/unity.png";
import aws from "../assets/aws.png";
import git from "../assets/git.png";
import django from "../assets/django.svg";
import docker from "../assets/docker.png";
import kubernetes from "../assets/kubernetes.svg.png";
import psql from "../assets/psql.svg.png";
import spanish from "../assets/spain.png";
import english from "../assets/usa.png";
import french from "../assets/france.png";
import latex from "../assets/latex.svg.png";
import overleaf from "../assets/overleaf.jpg";

import CategoryIdentifier from "./CategoryIdentifier";

import Banner from "./Banner";

function AboutMeBanner() {
  const data_scientist_skills = [
    {
      names: ["Python", "Pandas", "NumPy", "TensorFlow", "Jupyter Notebook"],
      icons: [python, pandas, numpy, tensorflow, jupyter],
    },
    {
      names: ["Excel"],
      icons: [excel],
    },
    {
      names: ["R"],
      icons: [r],
    },
  ];

  const computer_engineer_skills = [
    {
      names: ["Python", "Java", "C", "C++", "C#"],
      icons: [python, java, c, cpp, csharp],
    },
    {
      names: ["Git"],
      icons: [git],
    },
    {
      names: ["Docker", "Kubernetes"],
      icons: [docker, kubernetes],
    },
    {
      names: ["HTML", "CSS", "JavaScript", "React"],
      icons: [html, css, javascript, reactIcon],
    },
    {
      names: ["PostgreSQL"],
      icons: [psql],
    },
    {
      names: ["Unity3D"],
      icons: [unity],
    },
    {
      names: ["AWS"],
      icons: [aws],
    },
  ];
  const full_stack_web_developer_skills = [
    {
      names: ["HTML", "CSS", "JavaScript"],
      icons: [html, css, javascript],
    },
    {
      names: ["PostgreSQL"],
      icons: [psql],
    },
    {
      names: ["React"],
      icons: [reactIcon],
    },
    {
      names: ["Python", "Django"],
      icons: [python, django],
    },
    {
      names: ["Git"],
      icons: [git],
    },
    {
      names: ["Docker", "Kubernetes"],
      icons: [docker, kubernetes],
    },
    {
      names: ["AWS"],
      icons: [aws],
    },
  ];
  const researcher_skills = [
    {
      names: ["Latex", "Overleaf"],
      icons: [latex, overleaf],
    },
    {
      names: [
        "English - Full professional proficiency",
        "Spanish - Native",
        "French - Beginner",
      ],
      icons: [english, spanish, french],
    },
  ];

  return (
    <Banner>
      <div className="bg-black flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-8 lg:p-16 border-2 border-gray rounded-lg">
        <img src={profile} alt="rafael" className="rounded-lg w-40 h-40 min-w-40 min-h-40 lg:w-72 lg:h-72 md:w-60 md:h-60" />
        <div className="w-3/4">
          <CategoryIdentifier name="About Me" description="Who Am I"/>
          <p className="text-white font-sans text-lg pb-4 px-4">
            I am a passionate computer engineer with a strong background in data
            science and full-stack web development. I love solving complex
            problems and creating innovative solutions that make a difference.
          </p>
          <CategoryIdentifier name="Skills" description="Technologies And Resources I Manage"/>
          <Tabs value="data-scientist" className="w-full mt-4">
            <TabsHeader
              className="rounded-none border-b border-gray bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gold shadow-none rounded-none",
              }}
            >
              <Tab key={"data-scientist"} value={"data-scientist"}>
                <p className="font-bold text-white">Data Scientist</p>
              </Tab>
              <Tab key={"computer-engineer"} value={"computer-engineer"}>
                <p className="font-bold text-white">Computer Engineer</p>
              </Tab>
              <Tab
                key={"full-stack-web-developer"}
                value={"full-stack-web-developer"}
              >
                <p className="font-bold text-white">Full-Stack Web Developer</p>
              </Tab>
              <Tab key={"Researcher"} value={"Researcher"}>
                <p className="font-bold text-white">Researcher</p>
              </Tab>
            </TabsHeader>
            <TabsBody className="mt-10">
              <TabPanel
                key={"data-scientist"}
                value={"data-scientist"}
                className="mx-auto"
              >
                <div className="flex gap-8 items-center justify-center flex-wrap">
                  {data_scientist_skills.map((skill, index) => (
                    <Skill
                      key={index}
                      icons={skill.icons}
                      names={skill.names}
                    />
                  ))}
                </div>
              </TabPanel>
              <TabPanel key={"computer-engineer"} value={"computer-engineer"}>
                <div className="flex gap-8 items-end justify-center flex-wrap">
                  {computer_engineer_skills.map((skill, index) => (
                    <Skill
                      key={index}
                      icons={skill.icons}
                      names={skill.names}
                    />
                  ))}
                </div>
              </TabPanel>
              <TabPanel
                key={"full-stack-web-developer"}
                value={"full-stack-web-developer"}
              >
                <div className="flex gap-8 items-end justify-center flex-wrap">
                  {full_stack_web_developer_skills.map((skill, index) => (
                    <Skill
                      key={index}
                      icons={skill.icons}
                      names={skill.names}
                    />
                  ))}
                </div>
              </TabPanel>
              <TabPanel key={"Researcher"} value={"Researcher"}>
                <div className="flex gap-8 items-end justify-center flex-wrap">
                  {researcher_skills.map((skill, index) => (
                    <Skill
                      key={index}
                      icons={skill.icons}
                      names={skill.names}
                    />
                  ))}
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </Banner>
  );
}

export default AboutMeBanner;
