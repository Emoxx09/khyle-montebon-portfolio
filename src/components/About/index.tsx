import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import * as S from './styles';

function About() {
  return (
    <>
      <S.AboutContainer id="Home">
        <ChakraProvider>
          <S.Container>
            <S.Subtitle>KHYLE AARON MONTEBON</S.Subtitle>
            <S.Title as="b">SOFTWARE ENGINEER</S.Title>
            <S.Subtitle>
              As a young and passionate Software Engineer from the Philippines,
              I indulge in creating applications that solve real-world problems.
              Aside from software engineering, I also do research in the field
              of machine learning and do some Game Development.
            </S.Subtitle>
            <br />
            <S.Subtitle>
              I graduated as Magna Cum Laude from the University of the
              Immaculate Conception with a degree in Bachelor of Science in
              Computer Science. Now, I'm always ready to take on the world!
            </S.Subtitle>
          </S.Container>
          <S.ImageContainer>
            <S.StyledImage src="/pix.png" alt="Khyle Montebon" />
          </S.ImageContainer>
        </ChakraProvider>
      </S.AboutContainer>
    </>
  );
}

export default About;
