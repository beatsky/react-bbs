import React from 'react';
import { Menu, Icon } from 'antd';
import './style.scss';

const { SubMenu } = Menu;

class NavHeader extends React.Component {
  state = {
    current: 'index',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="submenu">
        <Menu.Item key="index">
          首页
        </Menu.Item>
        <Menu.Item key="pallet">
          夹板
        </Menu.Item>
        <Menu.Item key="strategy">
          攻略
        </Menu.Item>
        <Menu.Item key="official">
          官方
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              更多
              <Icon type="down" />
            </span>
          }
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item key="setting:3">Option 3</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default NavHeader;