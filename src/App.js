import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

import './App.css';
import HeaderNav from '@/common/Header/Header';
import Carousel from '@/views/components/carousel/carousel';
import Recommend from '@/views/components/recommend/recommend';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  let data = {
    recommendMessage: {
    	title: '推荐话题',
    	href: '123',
    	recomList: [
    	  {src: 'klkl', title: 'hhhhhhhhh'}
    	]
    }
  };

  return (
    <div>
	  <HeaderNav/>
	  <Row type="flex" justify="center" align="top">
	  	<Col span={12} style={{ padding: '0 20px 0' }}>
          <Carousel />
        </Col>
        <Col span={6}>
          <Recommend recommendMessage={data.recommendMessage}/>
        </Col>

	  </Row>

    </div>
  );
}

export default App;
