import React, { Component } from 'react';
import { Table, Button, Input } from 'antd'
import _ from '../../util/util'

import styles from './index.less'

export default class Product extends Component {

  constructor() {
    super();

    this.state = {
      dataFilter: this.dataSource
    }

    this.onSearch = this.onSearch.bind(this);
  }

  columns = [{
    title: '基金名称',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '近七日年化',
    dataIndex: 'dividend',
    key: 'dividend',
    sorter: (a, b) => a.dividend - b.dividend,
    render: (text) => {
      return <span className="red">{
        text + "%"
      }</span>
    }
  }, {
    title: '万份收益（元）',
    dataIndex: 'gains',
    key: 'gains',
    sorter: (a, b) => a.gains - b.gains,
  }, {
    title: '期限',
    dataIndex: 'expireDate',
    key: 'expireDate'
  }, {
    title: '',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => {
      return <Button type="primary">
        买入
      </Button>
    }
  }]

  dataSource = [{
    key: 1,
    name: "华夏财富宝",
    dividend: 3.0560,
    gains: 0.9465,
    expireDate: "随买随取"
  }, {
    key: 2,
    name: "天弘财富宝",
    dividend: 3.721,
    gains: 0.9777,
    expireDate: "随买随取"
  }]


  onSearch(event) {
    const text = event.target.value;
    this.setState({
      dataFilter: _.searchText(this.dataSource, text, "name")
    })
  }

  render() {
    return <div>
      <div className={styles.top}>
        <Input
          onChange={this.onSearch}
          className={styles.searchBox}
          placeholder="请输入基金名"
        />
      </div>
      <Table
        columns={this.columns}
        dataSource={this.state.dataFilter}
      />
    </div>
  }
}