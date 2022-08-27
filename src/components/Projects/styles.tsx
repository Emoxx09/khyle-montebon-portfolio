import styled from 'styled-components';

import '@fontsource/montserrat';

import { Box, Flex, Image, Tab, Tabs, Text } from '@chakra-ui/react';

export const ProjectsContainer = styled(Flex)`
  position: relative;
  padding-top: 100px;
  padding-left: 200px;
  padding-right: 200px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Container = styled.div`
  display: table;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  width: 1000px;
  margin: 0 auto;
  place-content: center;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ProjectImageContainer = styled.div`
  flex-basis: 50%;
  text-align: -webkit-center;
`;

export const ProjectDescriptionContainer = styled.div`
  margin-left: 50px;
  flex-basis: 40%;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledImage = styled(Image)`
  border-radius: 3%;
  min-width: 90%;
`;

export const IconContainer = styled.div`
  padding: 10px;
`;

export const Title = styled(Text)`
  font-family: 'Montserrat';
  font-size: 49px;
`;

export const ProjectTitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 33px;
`;

export const Subtitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 16px;
  color: #525252;
  max-width: 600px;
`;
