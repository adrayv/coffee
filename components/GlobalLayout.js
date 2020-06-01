import React from 'react';
import styled from 'styled-components';
import Nav from '~/components/AppNav';
import { Card } from 'antd';

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

export default class GlobalLayout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Layout>
          <Nav />
          <Card style={{ boxSizing: 'border-box', margin: '3%' }}>
            {this.props.children}
          </Card>
        </Layout>
      </Wrapper>
    );
  }
}
