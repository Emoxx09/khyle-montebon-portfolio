import React from 'react';

import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from 'react-icons/si';

import { ChakraProvider } from '@chakra-ui/react';

import * as S from './styles';

function Contact() {
  return (
    <>
      <S.ContactContainer id="Contact">
        <ChakraProvider>
          <S.Title as="b">CONTACT</S.Title>
          <S.Subtitle>Want to get in contact with me?</S.Subtitle>
          <S.Subtitle>
            Connect with me through the following channels below!
          </S.Subtitle>
          <S.Container>
            <S.IconContainer>
              <SiTwitter size={20} />
            </S.IconContainer>
            <S.ChannelTitle>
              <a
                href="https://twitter.com/aaron_khyle"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </S.ChannelTitle>
            <S.IconContainer>
              <SiGithub size={20} />
            </S.IconContainer>
            <S.ChannelTitle>
              <a
                href="https://github.com/Emoxx09"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </S.ChannelTitle>
          </S.Container>
          <S.Container>
            <S.IconContainer>
              <SiGmail size={20} />
            </S.IconContainer>
            <S.ChannelTitle>
              <a href="mailto:khyle.emox@gmail.com">Gmail</a>
            </S.ChannelTitle>
            {/* <S.IconContainer>
              <SiLinkedin size={20} />
            </S.IconContainer> */}
            {/* <S.ChannelTitle>
              <a
                href="https://www.linkedin.com/in/khyle-aaron-montebon-551583176/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
            </S.ChannelTitle> */}
          </S.Container>
        </ChakraProvider>
      </S.ContactContainer>
    </>
  );
}

export default Contact;
