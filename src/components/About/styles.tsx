import styled from 'styled-components';

import '@fontsource/montserrat';

import { Flex, Image, Text } from '@chakra-ui/react';

export const AboutContainer = styled(Flex)`
  display: flex;
  // padding-left: 200px;
  // padding-right: 200px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  padding-left: 50px;

  @media only screen and (max-width: 1023px) {
    visibility: shown;
    flex-basis: 100%;
    display: initial;
    padding: 50px;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 50%;
  text-align: -webkit-center;

  @media only screen and (min-width: 1024px) {
    visibility: shown;
    flex-basis: 50%;
    display: initial;
  }

  @media only screen and (max-width: 1023px) {
    visibility: hidden;
    flex-basis: 0%;
    display: none !important;
  }
`;

export const StyledImage = styled(Image)`
  width: 70%;
`;

export const Title = styled(Text)`
  font-family: 'Montserrat';
  font-size: 49px;
`;

export const Subtitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 16px;
  color: #525252;
`;
