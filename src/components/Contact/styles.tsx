import styled from 'styled-components';

import '@fontsource/montserrat';

import { Flex, Text } from '@chakra-ui/react';

export const ContactContainer = styled(Flex)`
  position: relative;
  padding-top: 100px;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 50px;
  flex-wrap: wrap;
  align-items: center;

  @media only screen and (max-width: 1023px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconContainer = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

export const Title = styled(Text)`
  font-family: 'Montserrat';
  font-size: 49px;
`;

export const Subtitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 16px;
  color: #525252;
  max-width: 600px;
`;

export const ChannelTitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 16px;
  color: #525252;
  font-weight: bold;
  padding-top: 10px;
  min-width: 100px;
`;
