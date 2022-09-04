import React from 'react';

import { Link } from 'react-scroll';

import { GiHamburgerMenu } from 'react-icons/gi';

import {
  ChakraProvider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  TabList,
} from '@chakra-ui/react';

import * as S from './styles';

function Navbar() {
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;

  return (
    <>
      <S.StyledNavbar>
        <ChakraProvider>
          <S.NavContainer>
            <S.StyledImage src="/personalLogo.png" />
            <Spacer />
            <S.StyledTabs size="lg" variant="unstyled">
              <TabList>
                <S.StyledTab onClick={scroll.scrollToTop}>HOME</S.StyledTab>
                <S.StyledTab>
                  <Link activeClass="active" to="Home" spy={true} smooth={true}>
                    ABOUT
                  </Link>
                </S.StyledTab>
                <S.StyledTab>
                  <Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                  >
                    SKILLS
                  </Link>
                </S.StyledTab>
                <S.StyledTab>
                  <Link activeClass="active" to="Work" spy={true} smooth={true}>
                    WORK
                  </Link>
                </S.StyledTab>
                <S.StyledTab>
                  <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                  >
                    PROJECTS
                  </Link>
                </S.StyledTab>
                <S.StyledTab>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                  >
                    CONTACT
                  </Link>
                </S.StyledTab>
              </TabList>
            </S.StyledTabs>
            <S.StyledMenuContainer>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<GiHamburgerMenu />}
                  variant="outline"
                />
                <MenuList>
                  <S.StyledMenuItem onClick={scroll.scrollToTop}>
                    HOME
                  </S.StyledMenuItem>
                  <Link activeClass="active" to="Home" spy={true} smooth={true}>
                    <S.StyledMenuItem>ABOUT</S.StyledMenuItem>
                  </Link>
                  <Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                  >
                    <S.StyledMenuItem>SKILLS</S.StyledMenuItem>
                  </Link>
                  <Link activeClass="active" to="Work" spy={true} smooth={true}>
                    <S.StyledMenuItem>WORK</S.StyledMenuItem>
                  </Link>
                  <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                  >
                    <S.StyledMenuItem>PROJECTS</S.StyledMenuItem>
                  </Link>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                  >
                    <S.StyledMenuItem>CONTACT</S.StyledMenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </S.StyledMenuContainer>
          </S.NavContainer>
        </ChakraProvider>
      </S.StyledNavbar>
    </>
  );
}

export default Navbar;
