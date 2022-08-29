import React from 'react';

import styled from 'styled-components';

import './App.css';

import Navbar from './components/Navbar/index';
import About from './components/About/index';
import Skills from './components/Skills/index';
import Work from './components/Work/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';

function App() {
  return (
    <div>
      <StyledNavbar />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  position: fixed;
`;

export default App;
