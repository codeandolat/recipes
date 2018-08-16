import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

import { Link } from '../styles'

class Header extends Component {
  render() {
    return <HeaderContainer>
        <Grid>
          <Row middle="xs" between="xs">
            <Title>Recipes</Title>
            <HeaderLinksContainer>
              <Link href="/" color="white" fontSize="18px">Home</Link>
              <Link href="/" color="white" fontSize="18px">New recipe</Link>
              <Link href="/about" color="white" fontSize="18px">About</Link>
            </HeaderLinksContainer>
          </Row>
        </Grid>
      </HeaderContainer>;
  }
}

const HeaderContainer = styled.div`
  background-color: #4caf50;
`;

const HeaderLinksContainer = styled.div`
  max-width: 300px;
  ${Link} {
    margin-left: 15px;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  font-family: "Lobster", cursive;
  font-size: 35px;
`;

export default Header;
