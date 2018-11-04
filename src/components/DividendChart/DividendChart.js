import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

export default class DividendChart extends Component {

    constructor(props) {
        super(props)

        this.getOption = this.getOption.bind(this)
    }

    getOption() {
        const { data } = this.props;
        if (!data) {
            return {}
        }

        let dates = []
        let values = []
        for (let i = 0; i < data.length; i++) {
            dates.push(data[i].createTimeStr)
            values.push(data[i].dividedIncome)
        }

        return {
            title: {
                left: 'center',
                text: '产品收益变化图'
            },
            tooltip: {
                trigger: 'axis',
                formatter(params) {
                    let i = params[0].dataIndex;
                    return `日期：${data[i].createTimeStr}<br/>
                    七日年化：${data[i].sevenRate}<br/>
                    万份收益：${data[i].dividedIncome}`
                }
            },
            xAxis: {
                type: 'category',
                data: dates
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: values,
                type: 'line',
                smooth: true
            }]
        }
    }

    render() {

        return <ReactEcharts
            option={this.getOption()}
        />
    }
}