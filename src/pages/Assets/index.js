import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Button, message } from 'antd';
import styles from './index.less'


const mapStateToProps = ({ assets }) => ({
  assets
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    assets: {
      fetch: payload => dispatch({ type: 'assets/fetch', payload }),
      sale: (payload, callback) => dispatch({ type: 'assets/sale', payload, callback }),
    },
  },
});

class Assets extends Component {
  componentDidMount = () => {
    this.props.dispatcher.assets.fetch();
  }
  onSale = (key) => {
    this.props.dispatcher.assets.sale(key, () => {
      message.success('卖出成功');
      this.props.dispatcher.assets.fetch();
    });
  }
  render() {
    const { assets } = this.props;
    const { list } = assets;
    // console.log('list is ', list);
    return (
      <div className={styles.container}>
        {list.length && list.map(item => 
          <Card
            className={styles.card}
            key={item.fpid}
            title={item.productName}
            extra={<Button type="primary" size="small" onClick={() => this.onSale(item.fpid)}>卖出</Button>}
          >
            <div className={styles.itemContainer}>
              <div className={styles.itemDiv}>
                <p>持有资产(元)</p>
                <p>{item.holdMoney}</p>
              </div>
              <div className={styles.itemDiv}>
                <p>昨日固定收益(元)</p>
                <p>{item.yesterdayIncome}</p>
              </div>
              <div className={styles.itemDiv}>
                <p>累计固定收益(元)</p>
                <p>{item.sumIncome}</p>
              </div>
            </div>
          </Card>  
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assets)