import React from 'react';

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

function About() {
  return (
    <>
      <S.AboutContainer>
        <ChakraProvider>
          <S.Container>
            <S.Subtitle>KHYLE AARON MONTEBON</S.Subtitle>
            <S.Title as="b">SOFTWARE ENGINEER EXTRAORDINAIRE</S.Title>
            <S.Subtitle>
              I’m currently studying Computer Science at the University of the
              Immaculate Conception. I indulge in creating applications that
              solve real-world problems. Aside from creating software, I also do
              research in the field of machine learning and do a little bit of
              Game Development. Learn more about me!
            </S.Subtitle>
          </S.Container>
          <S.ImageContainer>
            <S.StyledImage src="/profilePic.jpg" alt="Khyle Montebon" />
          </S.ImageContainer>
        </ChakraProvider>
      </S.AboutContainer>
    </>
  );
}

export default About;
