import styled from 'styled-components';

import { Box, Flex, Image, Tab, Tabs, Text } from '@chakra-ui/react';

export const AboutContainer = styled(Flex)`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
`;

export const ImageContainer = styled.div`
  flex-basis: 50%;
  text-align: -webkit-right;
`;

export const StyledImage = styled(Image)`
  border-radius: 40%;
  width: 60%;
`;

export const Title = styled(Text)`
  font-family: 'Century Gothic';
  font-size: 49px;
`;

export const Subtitle = styled(Text)`
  font-family: 'Century Gothic';
  font-size: 16px;
  color: #525252;
`;
