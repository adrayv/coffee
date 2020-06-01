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
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  &:hover {
    background: ${props => (props.isSelected ? '#7ec2f3' : '#fafafa')};
  }
  background: ${props => (props.isSelected ? '#7ec2f3' : '#ffffff')};
  transition: all 0.2s ease;
`;

export default ({ name, description, isSelected, onClick }) => (
  <Wrapper isSelected={isSelected} onClick={() => onClick(name)}>
    <Item>
      <Meta title={name} description={description} />
    </Item>
  </Wrapper>
);
