import React from 'react';
import styled from 'styled-components';
import Nav from '../components/AppNav';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Rest = styled.div`
  width: 100%;
  max-width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default class GlobalLayout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <Nav />
          <Rest>{this.props.children}</Rest>
        </Layout>
      </Wrapper>
    );
  }
}
