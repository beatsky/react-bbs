import React from 'react';
import { Row, Col, Descriptions, Card } from 'antd';
import './style.scss';

/**
 * conponents
 * 
 */

import UserHeader from './header/';

class UserSetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="container">
        <Row type="flex" justify="center" align="top">
          <Col span={20} style={{ padding: '0 20px 0' }}>
            <Card bordered={false} className="card-block">
              <UserHeader />
            </Card>
            <Descriptions title="User Info">
              <Descriptions.Item label="UserName">孙燕姿</Descriptions.Item>
              <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
              <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
              <Descriptions.Item label="Remark">empty</Descriptions.Item>
              <Descriptions.Item label="Address">
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default UserSetting;