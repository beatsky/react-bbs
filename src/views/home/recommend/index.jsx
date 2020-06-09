import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
import './style.scss'

const Recommends = (props) => {
	const {
		title,
		href,
		recomList
	} = props

	const List = recomList.map(item =>
		<li key={item.href}>
			<img src={item.src} />
			<a href={`/recommends/${item.href}`}>{item.title}</a>
		</li>
	)
	return (
		<div>
			<Card title={title} extra={<a href={href}>更多</a>} style={{ width: 280 }}>
				{List}
			</Card>
		</div>
	)

}

export default Recommends;