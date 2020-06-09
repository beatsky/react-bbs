import React, { useState, useEffect  } from 'react';
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.scss';


function UserHeader() {
  const [count, setCount] = useState({count: 1});
  const clickCount = () => {
    setCount({count: count.count + 1})
  }
  useEffect(() => {
    console.log(count)
    return () => {
      console.log(count)
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count.count} times</p>
      <button onClick={clickCount}>
        Click me
      </button>
    </div>
  );
}

export default UserHeader;