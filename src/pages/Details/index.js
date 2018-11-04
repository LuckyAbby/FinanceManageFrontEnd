import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

const mapStateToProps = ({ details }) => ({
  details,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    details: {
      fetch: payload => dispatch({ type: 'details/fetch', payload }),
    }
  }
});
const columns = [{
  title: '时间',
  dataIndex: 'createTimeStr',
  key: 'createTimeStr',
}, {
  title: '交易方式',
  dataIndex: 'meanTransaction',
  key: 'meanTransaction',
}, {
  title: '产品',
  dataIndex: 'productName',
  key: 'productName',
}, {
  title: '金额',
  dataIndex: 'money',
  key: 'money',
}, {
  title: '当前状态',
  dataIndex: 'state',
  key: 'state',
}]

class Details extends Component {
  componentDidMount = () => {
    this.props.dispatcher.details.fetch();
  }
  render() {
    const { details } = this.props;
    const { list } = details;
    console.log('list is', list);
    return (
      <div>
        <Table columns={columns} dataSource={list}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)