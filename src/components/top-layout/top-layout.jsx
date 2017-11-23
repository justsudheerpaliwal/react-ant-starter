import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './top-layout.css';

const { Header, Content, Footer } = Layout;

export default (props) => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to='/login'>nav 1</Link></Menu.Item>
          <Menu.Item key="1"><Link to='/verify-otp'>nav 1</Link></Menu.Item>
          <Menu.Item key="1"><Link to='/dashboard'>nav 1</Link></Menu.Item>
          <Menu.Item key="1"><Link to='/verify-otp'>Logout</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        {props.render && props.render()}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Some copyright stuff here
      </Footer>
    </Layout>);
};
