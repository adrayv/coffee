import React from 'react';
import { Input, Typography } from 'antd';

const { Text } = Typography;

export default ({ phoneNum, onPhoneNumChange }) => (
  <>
    <Text>Your Phone Number</Text>
    <Input
      type="number"
      style={{ width: '100%' }}
      value={phoneNum}
      onChange={e => onPhoneNumChange(e.target.value)}
    />
  </>
);
