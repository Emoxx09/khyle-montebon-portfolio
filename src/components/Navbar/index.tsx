import React from 'react';

import { Flex, ChakraProvider, Spacer, Tabs, TabList } from '@chakra-ui/react';

import * as S from './styles';

function Navbar() {
  return (
    <>
      <S.StyledNavbar>
        <ChakraProvider>
          <S.NavContainer>
            <S.StyledImage src="/personalLogo.png" />
            <Spacer />
            <S.StyledTabs size="lg" variant="unstyled">
              <TabList>
                <S.StyledTab>HOME</S.StyledTab>
                <S.StyledTab>SKILLS</S.StyledTab>
                <S.StyledTab>ABOUT</S.StyledTab>
                <S.StyledTab>PROJECTS</S.StyledTab>
                <S.StyledTab>CONTACT</S.StyledTab>
              </TabList>
            </S.StyledTabs>
          </S.NavContainer>
        </ChakraProvider>
      </S.StyledNavbar>
    </>
  );
}

export default Navbar;
