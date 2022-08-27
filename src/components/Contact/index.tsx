import React from 'react';

import { SiGmail, SiFacebook, SiLinkedin, SiGithub } from 'react-icons/si';

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

function Contact() {
  return (
    <>
      <S.ContactContainer>
        <ChakraProvider>
          <S.Title as="b">CONTACT</S.Title>
          <S.Subtitle>
            Want to get in contact with me? Connect with me through the
            following channels below!
          </S.Subtitle>
          <S.Container>
            <S.IconContainer>
              <SiGmail size={20} />
            </S.IconContainer>
            <S.ChannelTitle>Gmail</S.ChannelTitle>
            <S.IconContainer>
              <SiLinkedin size={20} />
            </S.IconContainer>
            <S.ChannelTitle>Linkedin</S.ChannelTitle>
          </S.Container>
          <S.Container>
            <S.IconContainer>
              <SiFacebook size={20} />
            </S.IconContainer>
            <S.ChannelTitle>Facebook</S.ChannelTitle>
            <S.IconContainer>
              <SiGithub size={20} />
            </S.IconContainer>
            <S.ChannelTitle>Github</S.ChannelTitle>
          </S.Container>
        </ChakraProvider>
      </S.ContactContainer>
    </>
  );
}

export default Contact;
