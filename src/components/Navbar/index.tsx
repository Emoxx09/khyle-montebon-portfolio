import React from 'react';

import { ChakraProvider, Tabs, TabList, Tab } from '@chakra-ui/react'

import * as S from './styles';

function Navbar(){
    return (
        <>
            <S.StyledNavbar>
                <S.StyledImage src="/personalLogo.png"/>
                <ChakraProvider>
                    <Tabs variant='unstyled'>
                    <TabList>
                        <S.StyledTab>HOME</S.StyledTab>
                        <S.StyledTab>ABOUT</S.StyledTab>
                        <S.StyledTab>PROJECTS</S.StyledTab>
                        <S.StyledTab>CONTACT</S.StyledTab>
                    </TabList>
                    </Tabs>
                </ChakraProvider>
            </S.StyledNavbar>
        </>
    );
}

export default Navbar;