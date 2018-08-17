import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';

class Layout extends Component {
  render() {
    return(
      <div>
        <Header />
        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  }
}

const Container = styled.div`
  padding: 20px 0;
`;

export default Layout;
