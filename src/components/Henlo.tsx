import React from 'react';

import styled from 'styled-components';

function Henlo() {
  return (
    <div>
      <StyledContainer></StyledContainer>
      <StyledContainer2></StyledContainer2>
    </div>
  );
}

const StyledContainer = styled.div`
  background-color: #e7e7e7;
  width: 100%;
  height: 2000px;
`;

const StyledContainer2 = styled.div`
  background-color: white;
  width: 100%;
  height: 2000px;
`;

export default Henlo;
