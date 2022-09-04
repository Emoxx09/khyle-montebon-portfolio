import styled from 'styled-components';

import '@fontsource/montserrat';

import { Flex, Image, Text } from '@chakra-ui/react';

export const ProjectsContainer = styled(Flex)`
  position: relative;
  padding-top: 100px;
  padding-left: 200px;
  padding-right: 200px;
  flex-wrap: wrap;
  align-items: center;

  @media only screen and (max-width: 1023px) {
    padding-left: 50px;
    padding-right: 50px;
  }
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

  @media only screen and (max-width: 599px) {
    flex-basis: 100%;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  margin-left: 50px;
  flex-basis: 40%;

  @media only screen and (max-width: 599px) {
    margin-left: 10px;
    flex-basis: 100%;
  }
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
