import { withRouter } from 'react-router-dom';
import React from 'react';
import { Carousel } from 'antd';
import './style.scss';

class HomeCarousel extends React.Component {
  state = {
    imgList: [
      require('@/assets/img/1.jpg'),
      require('@/assets/img/2.jpg'),
      require('@/assets/img/3.jpg'),
    ]
  }
  render() {
    return (
      <Carousel autoplay>
        {this.state.imgList.map(item => (
          <div className="home-carousel" key={item}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
    )
  }
}

export default HomeCarousel;