import React from 'react';
import { Input } from 'antd';

export default ({ phoneNum, onPhoneNumChange }) => (
  <>
    <Input
      placeholder="Phone"
      type="number"
      style={{ width: '100%' }}
      value={phoneNum}
      onChange={e => onPhoneNumChange(e.target.value)}
    />
  </>
);
