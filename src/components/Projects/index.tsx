import React from 'react';

import { SiJavascript, SiTypescript, SiGooglecloud } from 'react-icons/si';

import { ChakraProvider } from '@chakra-ui/react';

import * as S from './styles';

function Projects() {
  return (
    <>
      <S.ProjectsContainer id="Projects">
        <ChakraProvider>
          <S.Title as="b">PROJECTS</S.Title>
          <S.Subtitle>
            Throughout my development journey, I’ve built software that were
            either for the purpose of exercising my skills or creating solutions
            for its users' problems. Here are some of them.
          </S.Subtitle>
          <S.ProjectContainer>
            <S.ProjectImageContainer>
              <S.StyledImage src="/projectImg.png" alt="Project" />
            </S.ProjectImageContainer>
            <S.ProjectDescriptionContainer>
              <S.ProjectTitle as="b">Project Name</S.ProjectTitle>
              <S.Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </S.Subtitle>
              <S.TechContainer>
                <S.IconContainer>
                  <SiJavascript size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiTypescript size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiGooglecloud size={30} />
                </S.IconContainer>
              </S.TechContainer>
            </S.ProjectDescriptionContainer>
          </S.ProjectContainer>
          <S.ProjectContainer>
            <S.ProjectDescriptionContainer>
              <S.ProjectTitle as="b">Project Name</S.ProjectTitle>
              <S.Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </S.Subtitle>
              <S.TechContainer>
                <S.IconContainer>
                  <SiJavascript size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiTypescript size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiGooglecloud size={30} />
                </S.IconContainer>
              </S.TechContainer>
            </S.ProjectDescriptionContainer>
            <S.ProjectImageContainer>
              <S.StyledImage src="/projectImg.png" alt="Project" />
            </S.ProjectImageContainer>
          </S.ProjectContainer>
          <S.ProjectContainer>
            <S.ProjectImageContainer>
              <S.StyledImage src="/projectImg.png" alt="Project" />
            </S.ProjectImageContainer>
            <S.ProjectDescriptionContainer>
              <S.ProjectTitle as="b">Project Name</S.ProjectTitle>
              <S.Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </S.Subtitle>
              <S.TechContainer>
                <S.IconContainer>
                  <SiJavascript size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiTypescript size={30} />
                </S.IconContainer>
                <S.IconContainer>
                  <SiGooglecloud size={30} />
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
