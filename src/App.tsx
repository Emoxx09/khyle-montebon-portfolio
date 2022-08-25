import React from 'react';

import styled from 'styled-components';

import './App.css';

import Navbar from './components/Navbar/index';
import Henlo from './components/Henlo';
import About from './components/About/index';

function App() {
  return (
    <div>
      <StyledNavbar />
      <About />
      <Henlo />
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  position: fixed;
`;

export default App;
