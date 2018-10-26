import { Component, Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';


// import styles from './index.css';

const { Footer, Sider, Content } = Layout;

export default class BasicLayout extends Component {
  render() {
    return (
    <Layout>
      <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys="[1]">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="info-circle" theme="outlined" />
                <span>产品介绍</span>
              </Link>
            </Menu.Item>
             <Menu.Item key="2">
              <Link to="assets">
                <Icon type="property-safety" theme="outlined" />
                <span>我的资产</span>
              </Link>
            </Menu.Item>
             <Menu.Item key="3">
              <Link to="details">
                <Icon type="table" theme="outlined" />
                <span>交易明细</span>
              </Link>
            </Menu.Item>
             <Menu.Item key="4">
              <Link to="userInfo">
                <Icon type="user" theme="outlined" />
                <span>个人信息</span>
              </Link>
            </Menu.Item>
          </Menu>
      </Sider>
      <Layout >
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 480 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Fragment>
              Copyright <Icon type="copyright" /> 2018 金融信息系统小分队
            </Fragment>
          </Footer>
      </Layout>
    </Layout>
  );
  }
}


