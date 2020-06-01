import React from 'react';
import { PageHeader, Steps, Descriptions } from 'antd';
import Router from 'next/router';

const { Step } = Steps;

const Content = ({ children, extra }) => {
  return (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
};

function getStatusNumber(status) {
  switch (status) {
    case 'Queued':
      return 0;
    case 'In Progress':
      return 1;
    case 'Done':
      return 2;
    default:
      return 0;
  }
}

export default ({
  orderName,
  orderId,
  orderStatus,
  customerName,
  customerPhoneNum,
  createdDate,
  extra,
}) => (
  <div>
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => Router.push('/')}
      title="Order Summary"
      extra={extra}
    >
      <Content
        extra={
          <Steps current={getStatusNumber(orderStatus)}>
            <Step
              title="Order Placed"
              description={`Order Placed by ${customerName}`}
            />
            <Step title="In Progress" description="Order is being made" />
            <Step
              title="Done"
              description="Order is finished and ready for pickup"
            />
          </Steps>
        }
      >
        <Descriptions
          style={{ marginTop: 15, marginBottom: 25 }}
          size="small"
          column={2}
        >
          <Descriptions.Item label="Order ID">{orderId}</Descriptions.Item>
          <Descriptions.Item label="Order Name">{orderName}</Descriptions.Item>
          <Descriptions.Item label="Customer">{customerName}</Descriptions.Item>
          <Descriptions.Item label="Phone">
            {customerPhoneNum}
          </Descriptions.Item>
          <Descriptions.Item label="Order Placed">
            {new Date(createdDate).toDateString()}
          </Descriptions.Item>
        </Descriptions>
      </Content>
    </PageHeader>
  </div>
);
