import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './top-layout.css';

const { Header, Content, Footer } = Layout;

export default (props) => {
  console.log(props.render);
  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
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


/*import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const Demo = (props) => {
  const {
    Header, Sider, Content, Footer,
  } = Layout;

  console.log('demo', props);
  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>
          Enter your number:
          <input
            type="text"
            value={props.number || ''}
            onChange={event => props.onOtpNumberChange(event.target.value)}
          />
          <button onClick={() => props.onOtpNumberSubmit(props.number)}> Submit </button>
        </Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};

Demo.defaultProps = {
  onOtpNumberChange: undefined,
  onOtpNumberSubmit: undefined,
  number: '',
};

Demo.propTypes = {
  onOtpNumberChange: PropTypes.func,
  onOtpNumberSubmit: PropTypes.func,
  number: PropTypes.number,
};

export default Demo;*/
