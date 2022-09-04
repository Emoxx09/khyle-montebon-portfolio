import styled from 'styled-components';

import '@fontsource/montserrat';

import { Flex, Text } from '@chakra-ui/react';

export const WorkContainer = styled(Flex)`
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

export const Container = styled.div`
  display: table;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  width: 663px;
  margin: 0 auto;
  background-color: #eeeeee;
  border-radius: 40px;

  @media only screen and (max-width: 1023px) {
    zoom: 0.7;
  }

  @media only screen and (max-width: 430px) {
    zoom: 0.45;
  }
`;

export const InnerContainer = styled.div`
  display: table;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin: 0 auto;
  place-content: space-between;
`;

export const Title = styled(Text)`
  font-family: 'Montserrat';
  font-size: 49px;
`;

export const TypeTitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 24px;
`;

export const WorkplaceTitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 16px;
`;

export const Subtitle = styled(Text)`
  font-family: 'Montserrat';
  font-size: 16px;
  color: #525252;
`;

export const WorkDescription = styled(Text)`
  font-family: 'Montserrat';
  font-size: 16px;
  color: #525252;
  max-width: 750px;
`;
