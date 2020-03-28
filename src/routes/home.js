import React from 'react';
import {  Route } from 'react-router';
import Home from '../views/home/index'
  const Recommends = (props) => {
	return (
		<div>
            <Route path="/" component={ Home } />
		</div>
	)
}

export default Recommends;
  