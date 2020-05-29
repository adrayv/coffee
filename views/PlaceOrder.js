import React from 'react';
import { Card } from 'antd';

export default ({
  menuItems,
  onMenuItemSelect,
  selectedMenuItem,
  phoneNum,
  onPhoneNumChange,
  canSubmit,
  onSubmit,
}) => (
  <div>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);
