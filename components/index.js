import React, {Component} from 'react';
import styled from 'styled-components/native';
import Home from './screen/home';

// Main Styled
const MainWrapper = styled.View`
    
`;

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Home />
      </MainWrapper>
    );
  }
}

export default App;