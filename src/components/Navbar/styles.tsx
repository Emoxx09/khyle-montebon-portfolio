import styled from 'styled-components';

import '@fontsource/montserrat';

import { Flex, Tab, Tabs } from '@chakra-ui/react';

export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0px;
  padding-left: 100px;
  padding-right: 100px;
  z-index: 1;
`;

export const NavContainer = styled(Flex)`
  padding: 2rem;
  padding-left: 80px;
  padding-right: 150px;
`;

export const StyledImage = styled.img`
  height: 7rem;
  margin: 0px 10px 0px;
`;

export const StyledTab = styled(Tab)`
  font-family: 'Montserrat';
  font-weight: 700;
`;

export const StyledTabs = styled(Tabs)`
  align-items: center;
`;
