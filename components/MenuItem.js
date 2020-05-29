import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';

const { Item } = List;
const { Meta } = Item;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  &:hover {
    background: ${props => (props.isSelected ? '#00ff00' : '#fafafa')};
  }
  background: ${props => (props.isSelected ? '#00ff00' : '#ffffff')};
`;

export default ({ name, description, isSelected, onClick }) => (
  <Wrapper isSelected={isSelected} onClick={() => onClick(name)}>
    <Item>
      <Meta title={name} description={description} />
    </Item>
  </Wrapper>
);
