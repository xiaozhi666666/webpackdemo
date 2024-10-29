import React from 'react';
import avatar from '@assets/avatar.png';
import { Button, Col, Row } from 'antd';

function Page1() {
  return (
    <div className="div-container">
      <div>page1</div>
      <div className="div-btn">跳转</div>
      <img src={avatar} alt="" />
      <Row gutter={[10, 10]}>
        <Col span={8}>
          <Button>123</Button>
        </Col>
        <Col span={8}>
          <Button>123</Button>
        </Col>
        <Col span={8}>
          <Button>123</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Page1;
