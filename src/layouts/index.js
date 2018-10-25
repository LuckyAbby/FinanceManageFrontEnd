import { Component } from 'react';
import { Layout } from 'antd';


import styles from './index.css';

const { Header, Footer, Sider, Content } = Layout;

function BasicLayout(props) {
  return (
    <Layout>
      <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          Sider
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* {this.props.children} */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>footer</Footer>
        </Layout>
    </Layout>
  );
}

export default BasicLayout;
