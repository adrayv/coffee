import React from 'react';
import { Input } from 'antd';

export default ({ name, onNameChange }) => (
  <>
    <Input
      placeholder="Name"
      style={{ width: '100%' }}
      value={name}
      onChange={e => onNameChange(e.target.value)}
    />
  </>
);
