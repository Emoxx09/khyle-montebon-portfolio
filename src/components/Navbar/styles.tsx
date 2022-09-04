import styled from 'styled-components';

import '@fontsource/montserrat';

import { Flex, MenuItem, Tab, Tabs } from '@chakra-ui/react';

export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0px;
  // padding-left: 100px;
  // padding-right: 100px;
  z-index: 1;

  @media only screen and (min-width: 770px) {
    padding-left: 0px;
    padding-right: 100px;
  }
`;

export const NavContainer = styled(Flex)`
  padding: 2rem;
  // padding-left: 80px;
  // padding-right: 150px;
  place-content: space-between;
  align-items: center;

  backdrop-filter: blur(3px);
`;

export const StyledImage = styled.img`
  height: 7rem;
  margin: 0px 10px 0px;
  padding-left: 150px;

  @media only screen and (max-width: 1023px) {
    padding-left: 0px;
  }
`;

export const StyledTab = styled(Tab)`
  font-family: 'Montserrat';
  font-weight: 700;

  visibility: shown;

  @media only screen and (min-width: 769px) {
    visibility: shown;
    display: initial;
  }

  @media only screen and (max-width: 770px) {
    visibility: hidden;
    display: none !important;
  }
`;

export const StyledTabs = styled(Tabs)`
  align-items: center;
`;

export const StyledMenuContainer = styled.div`
  visibility: shown;
  display: block;

  @media only screen and (min-width: 769px) {
    visibility: hidden;
    // display: none !important;
  }

  @media only screen and (max-width: 770px) {
    visibility: shown;
    // display: initial;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-family: 'Montserrat';
`;
