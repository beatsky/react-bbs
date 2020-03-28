import React from 'react';
import {  Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Home from './home'
  const Index = () => {
	return (
		<div>
			<BrowserRouter key={Math.random()}>
                <Switch>
                    <Home></Home>
                </Switch>
            </BrowserRouter>
		</div>
	)
}

export default Index;
  