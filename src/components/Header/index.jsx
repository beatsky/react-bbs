import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import './style.scss';

class NavHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'index',
      menuList: [
        { key: 'index', label: '首页' },
        { key: 'pallet', label: '夹板' },
        { key: 'strategy', label: '攻略' },
        { key: 'official', label: '官方' },
        { key: 'setting', label: '个人' },
      ]
    };
    console.log(props)
  }
  

  handleClick = (e) => {
    this.props.history.push(e.key)
  };

  
  render() {
    const menuItem = this.state.menuList.map(item => 
      <Menu.Item key={item.key}>
        { item.label }
      </Menu.Item>
    );
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="submenu">
        { menuItem }
      </Menu>
    );
  }
}

export default withRouter(NavHeader);