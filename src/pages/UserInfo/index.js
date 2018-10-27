import React, { Component } from 'react'

import styles from './index.less'
import { Divider, Input, Button } from 'antd';
import { LocationPicker } from '../../components'

export default class UserInfo extends Component {

  constructor() {
    super();

    this.submitLocation = this.submitLocation.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  state = {
    modifyLocationVisible: true,
    modifyEmailVisible: true,
    location: "",
    email: ""
  }

  submitLocation() {
    this.setState({ modifyLocationVisible: false })
  }

  submitEmail() {
    this.setState({ modifyEmailVisible: false })
  }

  render() {
    return <div>
      <h1>
        实名信息
        <span className={styles.notice}>(不可更改)</span>
      </h1>
      <div className={styles.row}>
        <span className={styles.key}>真实姓名</span>
        <span className={styles.value}>毛**</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>证件类型</span>
        <span className={styles.value}>身份证</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>证件号码</span>
        <span className={styles.value}>3****************1</span>
      </div>
      <div className={styles.row}>
        <span className={styles.key}>手机号码</span>
        <span className={styles.value}>178******27</span>
      </div>
      <Divider />
      <h1>
        其它信息
        <span className={styles.notice}>(可以更改)</span>
      </h1>
      <div className={styles.row}>
        <span className={styles.key}>联系地址</span>
        <span className={styles.value}>
          {
            this.state.modifyLocationVisible ? <>
              <LocationPicker
                onChange={(value) => {
                  this.setState({ location: value })
                }}
              />
              <Button
                onClick={this.submitLocation}
                className="mt10"
                type="primary">确认</Button>
              <Button
                onClick={() => {
                  this.setState({ modifyLocationVisible: false })
                }}
                className=" ml10"
              >取消</Button>
            </> : <>
                {this.state.location}
                &nbsp;
                <a onClick={() => {
                  this.setState({ modifyLocationVisible: true })
                }}>修改</a>
              </>
          }
        </span>
      </div>
      {/* 电子邮件显示与修改 */}
      <div className={styles.row}>
        <span className={styles.key}>电子邮件</span>
        <span className={styles.value}>
          {
            this.state.modifyEmailVisible ? <>
              <Input
                onChange={(event) => {
                  const email = event.target.value;
                  this.setState({ email })
                }}
                placeholder="请输入邮箱" />
              <Button
                onClick={this.submitEmail}
                className="mt10"
                type="primary">确认</Button>
              <Button
                onClick={() => {
                  this.setState({ modifyEmailVisible: false })
                }}
                className=" ml10"
              >取消</Button>
            </> : <>
                {this.state.email}
                &nbsp;
                <a onClick={() => {
                  this.setState({ modifyEmailVisible: true })
                }}>修改</a>
              </>
          }
        </span>
      </div>
    </div>
  }
}