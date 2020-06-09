import React from 'react';

import { Row, Col } from 'antd';
// import './style.scss';

// 组件
import Carousel from './carousel/index.jsx';
import Recommend from './recommend/index.jsx';

class AppHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recommendMessage: {
        title: '逆光',
        href: 'https://music.apple.com/cn/album/%E9%80%86%E5%85%89/905226289?i=905226302',
        recomList: [
          {
            title: '逆光',
            href: '../',
            src: ''
          }
        ]
      }
    }
  }
  render() {
    return (
      <Row type="flex" justify="center" align="top">
        <Col span={16} style={{ padding: '0 20px 0' }}>
          <Carousel />
        </Col>
        <Col span={10} style={{ padding: '0 20px 0' }}>
        </Col>
        <Col span={6} style={{ padding: '0 20px 0' }}>
          <Recommend {...this.state.recommendMessage} />
        </Col>
      </Row>

    )
  }
}

export default AppHome;
