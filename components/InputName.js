import React from 'react';
import { Input, Typography } from 'antd';

const { Text } = Typography;

export default ({ name, onNameChange }) => (
  <>
    <Text>Your Name</Text>
    <Input
      style={{ width: '100%' }}
      value={name}
      onChange={e => onNameChange(e.target.value)}
    />
  </>
);
