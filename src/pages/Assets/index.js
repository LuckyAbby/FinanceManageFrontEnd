import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Button, message } from 'antd';
import styles from './index.less'


const mapStateToProps = ({ assets, user }) => ({
  assets,
  user,
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
    const { user } = this.props;
    const { currUid } = user;
    console.log('curr', currUid)
    this.props.dispatcher.assets.fetch({ uid: currUid });
  }
  onSale = (fpid, currUid, buyMoney) => {
    console.log(fpid, currUid);
    const sendData = {
      fpid,
      uid: currUid,
      buyMoney,
    }
    this.props.dispatcher.assets.sale(sendData, () => {
      message.success('卖出成功');
      this.props.dispatcher.assets.fetch({uid: currUid});
    });
  }
  render() {
    const { assets, user } = this.props;
    const { list } = assets;
    const { currUid } = user;
    // console.log('list is ', list);
    return (
      <div className={styles.container}>
        {list.length && list.map(item => 
          <Card
            className={styles.card}
            key={item.fpid}
            title={item.productName}
            extra={<Button type="primary" size="small" onClick={() => this.onSale(item.fpid, currUid, item.holdMoney)}>卖出</Button>}
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