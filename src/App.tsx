import React from 'react';

import styled from 'styled-components';

import './App.css';

import Navbar from './components/Navbar/index';
import Henlo from './components/Henlo';
import About from './components/About/index';
import Skills from './components/Skills/index';
import Projects from './components/Projects/index';

function App() {
  return (
    <div>
      <StyledNavbar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  position: fixed;
`;

export default App;
