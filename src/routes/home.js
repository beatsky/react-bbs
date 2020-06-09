import React from 'react';
import { Route } from 'react-router';
import Home from '../views/home/index'
  const Recommends = (props) => {
	return (
		<div>
            <Route path="/" exact component={ Home } >
				{/* <Route path="/s" exact component={ Home } ></Route> */}
			</Route>
		</div>
	)
}

export default Recommends;
  