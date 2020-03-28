import React from 'react';
import { Router, Route, Link, Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";

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
          <Recommend {...this.state.recommendMessage} />
        </Col>
        <BrowserRouter key={Math.random()}>
          <Switch>
            {/* <Route path="/sth" component={ Recommend } recommendMessage={this.state.recommendMessage} /> */}
          </Switch>
        </BrowserRouter>

      </Row>

    )
  }
}

export default AppHome;
