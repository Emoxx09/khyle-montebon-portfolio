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
            <Menu>
              <S.StyledMenuButton
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>HOME</MenuItem>
                <MenuItem>ABOUT</MenuItem>
                <MenuItem>SKILLS</MenuItem>
                <MenuItem>WORK</MenuItem>
                <MenuItem>PROJECTS</MenuItem>
                <MenuItem>CONTACT</MenuItem>
              </MenuList>
            </Menu>
          </S.NavContainer>
        </ChakraProvider>
      </S.StyledNavbar>
    </>
  );
}

export default Navbar;
