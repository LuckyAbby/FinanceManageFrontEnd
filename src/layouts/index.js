import { Component, Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';


// import styles from './index.css';

const { Footer, Sider, Content } = Layout;

export default class BasicLayout extends Component {

  menuMap = [{
    route: "/",
    pattern: /(^\/$)|(^\/product)/,
    icon: "info-circle",
    text: "产品介绍"
  }, {
    route: "/assets",
    pattern: /^\/assets/,
    icon: "property-safety",
    text: "我的资产"
  }, {
    route: "/details",
    pattern: /^\/details/,
    icon: "table",
    text: "交易明细"
  }, {
    route: "/userInfo",
    pattern: /^\/userInfo/,
    icon: "user",
    text: "个人信息"
  }]

  /**
   * 获取当前页面的路由，从而设置Menu的defaultSelectedKeys
   */
  getCurrKey() {
    const { pathname } = this.props.location;

    if (!pathname) {
      return "0";
    }

    return this.menuMap.findIndex(item => {
      return item.pattern.exec(pathname) != null
    }) + ""
  }

  render() {

    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[this.getCurrKey()]}>
            {
              this.menuMap.map((item, index) => {
                return <Menu.Item key={index}>
                  <Link to={item.route}>
                    <Icon type={item.icon} theme="outlined" />
                    <span>{item.text}</span>
                  </Link>
                </Menu.Item>
              })
            }
            {/* <Menu.Item key="1">
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
            </Menu.Item> */}
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


