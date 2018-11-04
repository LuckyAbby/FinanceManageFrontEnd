import React, { Component } from 'react';
import { Table, Button, Input } from 'antd'
import { connect } from 'dva';
import Link from 'umi/link';
import _ from '../../util/util'

import styles from './index.less'


function mapPropsToState(state) {
  return {
    list: state.product.list
  }
}

class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataFilter: props.list
    }

    this.onSearch = this.onSearch.bind(this);
  }

  columns = [{
    title: '产品名称',
    dataIndex: 'productName',
    key: 'productName',
    render: (text, record) => {
      return <Link to={`/product/${record.fpid}`}>{text}</Link>
    }
  }, {
    title: '产品类型',
    dataIndex: 'productType',
    key: 'productType'
  }, {
    title: '购买方式',
    dataIndex: 'productTerm',
    key: 'productTerm'
  }, {
    title: '近七日年化',
    dataIndex: 'sevenRate',
    key: 'sevenRate',
    render: (text) => {
      return <span className="red">{
        text
      }</span>
    }
  }, {
    title: '万份收益（元）',
    dataIndex: 'dividedIncome',
    key: 'dividedIncome',
    sorter: (a, b) => a.dividedIncome - b.dividedIncome,
  }, {
    title: '',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => {
      return <Button type="primary">
        <Link to={`/product/${record.fpid}`}>买入</Link>
      </Button>
    }
  }]

  componentWillReceiveProps(nextProps) {
    const { list } = nextProps;

    console.log(list)

    this.setState({
      dataFilter: list
    })
  }


  onSearch(event) {
    const { list } = this.props;

    const text = event.target.value;
    this.setState({
      dataFilter: _.searchText(list, text, "productName")
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


export default connect(mapPropsToState)(Product)