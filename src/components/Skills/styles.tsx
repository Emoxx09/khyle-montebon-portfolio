import styled from 'styled-components';

import '@fontsource/montserrat';

import { Flex, Text } from '@chakra-ui/react';

export const SkillsContainer = styled(Flex)`
  position: relative;
  padding-top: 100px;
  padding-left: 200px;
  padding-right: 200px;
  flex-wrap: wrap;
  align-items: center;

  @media only screen and (max-width: 1023px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
  }
`;

export const Container = styled.div`
  display: table;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin: 0 auto;
  place-content: center;

  @media only screen and (max-width: 1440px) {
    zoom: 0.6;
  }

  @media only screen and (max-width: 1023px) {
    zoom: 0.5;
  }

  @media only screen and (max-width: 425px) {
    zoom: 0.3;
  }
`;

export const IconContainer = styled.div`
  padding: 40px;
`;

export const Title = styled(Text)`
  font-family: 'Montserrat';
  font-size: 49px;
`;

export const Subtitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 16px;
  color: #525252;
  max-width: 750px;
`;
