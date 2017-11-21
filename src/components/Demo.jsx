import React from 'react';
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

export default Demo;
