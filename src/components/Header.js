import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return(
      <HeaderContainer>
        <Title>Recipes</Title>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.div`
  background-color: #4caf50;
  padding: 10px;
`;

const Title = styled.h3`
  color: #ffffff;
`;

export default Header;
