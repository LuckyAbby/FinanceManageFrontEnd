import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './$product.less'
import { InputNumber, Button, Divider } from 'antd';
import { DividendChart } from '../../components'


const mapPropsToState = state => ({
    detail: state.product.detail,
    dividendList: state.product.dividendList
})

const mapDispatchToProps = dispatch => ({
    dispatch,
    dispatcher: {
        buyProduct: buyMoney => dispatch({ type: "product/buyProduct", payload: { buyMoney } })
    }
})

class ProductDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buyMoney: 0
        }
    }



    render() {
        const { dividendList, detail } = this.props;
        const { buyProduct } = this.props.dispatcher;


        return <div className={styles.product}>
            <div className={styles.info}>
                <h1>{detail.productName}</h1>
                <div className={styles.row}>
                    <span className={styles.key}>
                        万份收益
                    </span>
                    <span className={styles.value}>
                        {detail.dividedIncome}
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.key}>
                        七日年化
                    </span>
                    <span className={styles.value}>
                        {detail.sevenRate}
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.key}>
                        理财期限
                    </span>
                    <span className={styles.value}>
                        {detail.productTerm}
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.key}>
                        产品类型
                    </span>
                    <span className={styles.value}>
                        {detail.productType}
                    </span>
                </div>
                <Divider />
                <div className={styles.row}>
                    <span className={styles.key}>
                        买入金额
                    </span>
                    <span className={styles.value}>
                        <InputNumber
                            onChange={(buyMoney) => {
                                this.setState({
                                    buyMoney
                                })
                            }}
                            value={this.state.buyMoney}
                            size="small"
                            min={0}
                            defaultValue={0.0}
                        />
                        &nbsp;元
                    </span>
                </div>
                <div className={styles.row}>
                    <Button
                        type="primary"
                        onClick={() => {
                            if (window.confirm("确认买入?")) {
                                buyProduct(this.state.buyMoney)
                            }
                        }}
                    >买入</Button>
                </div>
            </div>
            <div className={styles.graph}>
                <DividendChart
                    data={dividendList}
                />
            </div>
        </div>
    }
}


export default connect(mapPropsToState, mapDispatchToProps)(ProductDetail)