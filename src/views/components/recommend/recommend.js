import React from 'react';
import { Card } from 'antd';
import './style.scss'

class Recommends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.recommendMessage.title,
      href: props.recommendMessage.href,
      recomList: props.recommendMessage.recomList
    };
  }

  
  render() {
  	const List = this.state.recomList.map(item => 
  	  <li>
  	  	<img src={item.src}/>
  	  	<a href={`/recommends/${item.href}`}>{item.title}</a>
  	  </li>
  	)
  	return (
	  <div>
	    <Card title={this.state.title} extra={<a href={this.state.href}>更多</a>} style={{ width: 280 }}>
	      {List}
	    </Card>
	  </div>
  	)
  }
  
}

export default Recommends;