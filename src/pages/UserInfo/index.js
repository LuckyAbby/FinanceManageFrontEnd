import React, { Component } from 'react'
import { connect } from 'dva';
import { Divider, Input, Button } from 'antd';
import { LocationPicker } from '../../components'

import styles from './index.less'


const mapStateToProps = (state) => ({
  detail: state.user.detail
})

class UserInfo extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { detail } = this.props;

    return <div>
      <h1>
        实名信息
        <span className={styles.notice}>(不可更改)</span>
      </h1>
      <div className={styles.row}>
        <span className={styles.key}>真实姓名</span>
        <span className={styles.value}>{detail.name}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>用户名称</span>
        <span className={styles.value}>{detail.username}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>证件号码</span>
        <span className={styles.value}>{detail.idCard}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>手机号码</span>
        <span className={styles.value}>{detail.phone}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>电子右键</span>
        <span className={styles.value}>{detail.email}</span>
      </div>
    </div>
  }
}


export default connect(mapStateToProps)(UserInfo)