import React from 'react';

import styled from 'styled-components';

import './App.css';

import Navbar from './components/Navbar/index';
import Henlo from './components/Henlo';

function App() {
  return (
    <div>
      <StyledNavbar />
      <div>
        <Henlo />
      </div>
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  position: fixed;
`;

export default App;
