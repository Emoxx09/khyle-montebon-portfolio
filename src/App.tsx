import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Navbar from './components/Navbar/index';
import About from './components/About/index';
import Skills from './components/Skills/index';
import Work from './components/Work/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';

import loaderImage from './Images/loader.gif';

import { Image } from '@chakra-ui/react';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader>
          {' '}
          <StyledImage src="/loader.gif" />
        </Loader>
      ) : (
        <div>
          <StyledNavbar />
          <About />
          <Skills />
          <Work />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

const Loader = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  @media only screen and (max-width: 1024px) {
    zoom: 0.5;
  }
`;

const StyledNavbar = styled(Navbar)`
  position: fixed;
`;

export default App;
