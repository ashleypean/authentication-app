import React from 'react';
import ContextWrapper  from './utils/ContextWrapper.js'
import styled from 'styled-components'
import Homepage from './components/Homepage/Homepage'

const MainDiv = styled.div``

function App() {
  return (
    <ContextWrapper>
      <MainDiv>
        <Homepage />
      </MainDiv>
    </ContextWrapper>
  );
}

export default App;
