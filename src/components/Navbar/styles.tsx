import styled from 'styled-components';

import { Flex, Tab, Tabs } from '@chakra-ui/react';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledNavbar = styled.nav`
  padding: 2rem;
  position: sticky;
  top: 0px;
`;

export const NavContainer = styled(Flex)`
  padding: 2rem;
`;

export const StyledImage = styled.img`
  height: 7rem;
  margin: 0px 0px 0px;
`;

export const StyledTab = styled(Tab)`
  font-family: 'Century Gothic';
  font-weight: 500;
`;

export const StyledTabs = styled(Tabs)`
  align-items: center;
`;
