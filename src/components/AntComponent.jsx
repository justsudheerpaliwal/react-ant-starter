import React from 'react';
import { Layout } from 'antd';

export default () => {
  const {
    Header, Sider, Content, Footer,
  } = Layout;
  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};
