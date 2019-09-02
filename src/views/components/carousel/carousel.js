import React from 'react';
import { Carousel } from 'antd';
import './style.scss';

class HomeCarousel extends React.Component {
  state = {
    imgList: [1,2,3]
  }
  render() {
    return (
      <Carousel autoplay>
        {this.state.imgList.map(item => (
          <div className="home-carousel">
            <img src={item} />
          </div>
        ))}
      </Carousel>
    )
  }
}

export default HomeCarousel;