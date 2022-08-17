import styled from 'styled-components';

import { ChakraProvider, Tabs, TabList, Tab } from '@chakra-ui/react'

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledNavbar = styled.div`
    padding: 4rem;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledImage = styled.img`
    height: 7rem;
    margin: 0px 0px 0px;
`;

export const StyledTabs = styled(Tabs)`

`;

export const StyledTab = styled(Tab)`
    font-family: 'Century Gothic';
    font-weight: 500;
`;