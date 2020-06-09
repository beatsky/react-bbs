import React from 'react';
import { Route } from 'react-router';
import UserSetting from '../views/user-setting/index'
  const Setting = () => {
	return (
		<div>
            <Route path="/setting" exact component={ UserSetting } />
            <Route path="/q" exact component={ UserSetting } />
		</div>
	)
}

export default Setting;
  