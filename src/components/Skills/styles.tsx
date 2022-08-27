import styled from 'styled-components';

import { Box, Flex, Image, Tab, Tabs, Text } from '@chakra-ui/react';

export const SkillsContainer = styled(Flex)`
  position: relative;
  padding: 100px;
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

export const ImageContainer = styled.div`
  flex-basis: 50%;
  text-align: -webkit-right;
`;

export const IconContainer = styled.div`
  padding: 40px;
`;

export const Title = styled(Text)`
  font-family: 'Century Gothic';
  font-size: 49px;
`;

export const Subtitle = styled(Text)`
  font-family: 'Century Gothic';
  font-size: 16px;
  color: #525252;
  max-width: 850px;
`;
