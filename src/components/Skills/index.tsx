import React from 'react';

import {
  SiJavascript,
  SiTypescript,
  SiGooglecloud,
  SiJava,
  SiKotlin,
  SiFlutter,
  SiReact,
  SiFirebase,
  SiPython,
  SiTensorflow,
  SiGmail,
  SiFacebook,
  SiLinkedin,
  SiGithub,
} from 'react-icons/si';

import {
  Flex,
  ChakraProvider,
  Spacer,
  Stack,
  Tabs,
  TabList,
  Text,
  Box,
  Image,
} from '@chakra-ui/react';

import * as S from './styles';

function Skills() {
  return (
    <>
      <S.SkillsContainer>
        <ChakraProvider>
          <S.Container>
            <S.Title as="b">SKILLS</S.Title>
            <S.Subtitle>
              I’ve had experience in the domains of web development, mobile
              development, and machine learning. To add, I’ve dabbled on some
              game development. Here are some of the technologies that I used.
            </S.Subtitle>
          </S.Container>
          <S.Skills>
            <S.IconContainer>
              <SiJavascript size={100} />
            </S.IconContainer>
            <S.IconContainer>
              <SiTypescript size={100} />
            </S.IconContainer>
            <S.IconContainer>
              <SiGooglecloud size={100} />
            </S.IconContainer>
            <S.IconContainer>
              <SiJava size={100} />
            </S.IconContainer>
            <S.IconContainer>
              <SiKotlin size={100} />
            </S.IconContainer>
          </S.Skills>
          <S.Skills>
            <S.IconContainer>
              <SiFlutter size={100} />
            </S.IconContainer>
            <S.IconContainer>
              <SiReact size={100} />
            </S.IconContainer>
            <S.IconContainer>
              <SiFirebase size={100} />
            </S.IconContainer>
            <S.IconContainer>
              <SiPython size={100} />
            </S.IconContainer>
            <S.IconContainer>
              <SiTensorflow size={100} />
            </S.IconContainer>
          </S.Skills>
        </ChakraProvider>
      </S.SkillsContainer>
    </>
  );
}

export default Skills;
