import React from "react";

import {
  SiFirebase,
  SiFlutter,
  SiKotlin,
  SiReact,
  SiSqlite,
  SiTypescript,
  SiUnity,
  SiPython,
} from "react-icons/si";

import { ChakraProvider } from "@chakra-ui/react";

import * as S from "./styles";

function Projects() {
  return (
    <>
      <S.ProjectsContainer id="Projects">
        <ChakraProvider>
          <S.Title as="b">PROJECTS</S.Title>
          <S.Subtitle>
            Throughout my development journey, I've built software that were
            either for the purpose of exercising my skills or creating solutions
            for its users' problems. Here are some of them.
          </S.Subtitle>
          <S.ProjectContainer>
            <S.ProjectImageContainer>
              <S.StyledImage src="/project0.png" alt="WeServe" />
            </S.ProjectImageContainer>
            <S.ProjectDescriptionContainer>
              <S.ProjectTitle as="b">WeServe</S.ProjectTitle>
              <S.Subtitle>
                WeServe is an AI-powered customer experience platform that helps
                companies deliver personalized, intelligent service at scale. It
                leverages Large Language Models (LLMs) to provide real-time
                insights and automate responses to common queries, allowing
                human agents to focus on more complex issues.
              </S.Subtitle>
              <S.TechContainer>
                <S.IconContainer>
                  <SiReact size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiTypescript size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiPython size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      padding: "3px",
                    }}
                  >
                    C
                  </div>
                </S.IconContainer>
              </S.TechContainer>
            </S.ProjectDescriptionContainer>
          </S.ProjectContainer>
          <S.ProjectContainer>
            <S.ProjectDescriptionContainer>
              <S.ProjectTitle as="b">AweQFy</S.ProjectTitle>
              <S.Subtitle>
                AweQFy is a Queueing Management System built for Awesome OS. It
                was made to automate the queueing process for the applicants of
                the company.
              </S.Subtitle>
              <S.TechContainer>
                <S.IconContainer>
                  <SiReact size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiTypescript size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiFirebase size={30} />
                </S.IconContainer>
              </S.TechContainer>
            </S.ProjectDescriptionContainer>
            <S.ProjectImageContainer>
              <S.StyledImage src="/project1.png" alt="AweQFy" />
            </S.ProjectImageContainer>
          </S.ProjectContainer>
          <S.ProjectContainer>
            <S.ProjectImageContainer>
              <S.StyledImage src="/project2.png" alt="iBudget" />
            </S.ProjectImageContainer>
            <S.ProjectDescriptionContainer>
              <S.ProjectTitle as="b">iBudget</S.ProjectTitle>
              <S.Subtitle>
                iBudget is a financial management application made for students
                to help them manage their spendings. It was built using Flutter
                and SQLite.
              </S.Subtitle>
              <S.TechContainer>
                <S.IconContainer>
                  <SiFlutter size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiSqlite size={30} />
                </S.IconContainer>
              </S.TechContainer>
            </S.ProjectDescriptionContainer>
          </S.ProjectContainer>
          <S.ProjectContainer>
            <S.ProjectDescriptionContainer>
              <S.ProjectTitle as="b">Super Ignacian</S.ProjectTitle>
              <S.Subtitle>
                Super Ignacian is a 2D Platformer Game built around the idea of
                a UIC student on his way to school. But there's a challenge; he
                must avoid getting dirty along the way! This game was built with
                Unity.
              </S.Subtitle>
              <S.TechContainer>
                <S.IconContainer>
                  <SiUnity size={30} />
                </S.IconContainer>
              </S.TechContainer>
            </S.ProjectDescriptionContainer>
            <S.ProjectImageContainer>
              <S.StyledImage src="/project3.png" alt="Super Ignacian" />
            </S.ProjectImageContainer>
          </S.ProjectContainer>
          <S.ProjectContainer>
            <S.ProjectImageContainer>
              <S.StyledImage src="/project4.png" alt="VaxEx" />
            </S.ProjectImageContainer>
            <S.ProjectDescriptionContainer>
              <S.ProjectTitle as="b">VaxEx</S.ProjectTitle>
              <S.Subtitle>
                A COVID vaccination reaction monitoring app built on Android
                with Kotlin and also with Firebase and SQLite. It was made to
                help help centers monitor the reactions of vaccine receivers
                after they get vaccinated.
              </S.Subtitle>
              <S.TechContainer>
                <S.IconContainer>
                  <SiKotlin size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiFirebase size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiSqlite size={30} />
                </S.IconContainer>
              </S.TechContainer>
            </S.ProjectDescriptionContainer>
          </S.ProjectContainer>
        </ChakraProvider>
      </S.ProjectsContainer>
    </>
  );
}

export default Projects;
