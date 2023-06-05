import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';

import Navbar from './components/Navbar/index';
import About from './components/About/index';
import Skills from './components/Skills/index';
import Work from './components/Work/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';

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
          <Logo src="/personalLogo.png" />
          <WelcomeImg src="/welcome.png" />
        </Loader>
      ) : (
        <Container>
          <StyledNavbar />
          <About />
          <Skills />
          <Work />
          <Projects />
          <Contact />
        </Container>
      )}
    </div>
  );
}

const loadItems = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${loadItems} 0.5s linear 0s normal none;
`;

const slideUp = keyframes`
  0% { 
    transform: translateY(0);
  }
  50% {
    transform: translateY(0%)
  }
  80% {
    transform: translateY(-200%)
  }
`;

const fade = keyframes`
  0% { opacity: 1; }
  80% { opacity: 0.5; }
  100% { opacity: 0; }
`;

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
  animation: ${fade} 7s linear 0s infinite normal none;
`;

const rotate = keyframes`
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
    transform:  rotate(0deg);
  }
  20% {
    transform:  rotate(130deg);
  }
  40% {
    transform:  rotate(-360deg);
  }
  60% {
    transform:  rotate(-720deg);
  }
  70% {
    transform:  rotate(-720deg);
  }
  100% {
    transform:  rotate(-720deg);
  }
`;

const appearFade = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
`;

const Logo = styled.img`
  zoom: 50%;
  animation: ${rotate} 6s linear 0s infinite normal none;

  @media only screen and (max-width: 1440px) {
    zoom: 30%;
  }

  @media only screen and (max-width: 1023px) {
    zoom: 20%;
  }

  @media only screen and (max-width: 424px) {
    zoom: 10%;
  }
`;

const WelcomeImg = styled.img`
  zoom: 50%;
  animation: ${appearFade} 6s linear 0s infinite normal none;

  @media only screen and (max-width: 1440px) {
    zoom: 30%;
  }

  @media only screen and (max-width: 1023px) {
    zoom: 20%;
  }

  @media only screen and (max-width: 424px) {
    zoom: 10%;
  }
`;

const StyledNavbar = styled(Navbar)`
  position: fixed;
`;

export default App;
