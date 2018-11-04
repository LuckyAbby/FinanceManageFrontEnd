import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

export default class DividendChart extends Component {

    constructor(props) {
        super(props)

        this.getOption = this.getOption.bind(this)
    }

    data = [
        {
            "arrivalTime": 1541174400000,
            "arrivalTimeStr": "2018-11-03",
            "createTime": 1540224000000,
            "createTimeStr": "2018-10-23",
            "dividedIncome": 0.7634,
            "fpid": "354a5345-8b93-4663-a4b7-92d58dcdb7ea",
            "incomeTime": 1541174400000,
            "incomeTimeStr": "2018-11-03",
            "peid": "81648a12-644d-4c26-b695-9160bd9943f1",
            "sevenRate": "3.0762%"
        },
        {
            "arrivalTime": 1541174400000,
            "arrivalTimeStr": "2018-11-03",
            "createTime": 1540310400000,
            "createTimeStr": "2018-10-24",
            "dividedIncome": 0.7482,
            "fpid": "354a5345-8b93-4663-a4b7-92d58dcdb7ea",
            "incomeTime": 1541174400000,
            "incomeTimeStr": "2018-11-03",
            "peid": "81648a12-644d-4c26-b695-9160bd9943f2",
            "sevenRate": "3.0540%"
        },
        {
            "arrivalTime": 1541174400000,
            "arrivalTimeStr": "2018-11-03",
            "createTime": 1540396800000,
            "createTimeStr": "2018-10-25",
            "dividedIncome": 0.8067,
            "fpid": "354a5345-8b93-4663-a4b7-92d58dcdb7ea",
            "incomeTime": 1541174400000,
            "incomeTimeStr": "2018-11-03",
            "peid": "81648a12-644d-4c26-b695-9160bd9943f3",
            "sevenRate": "3.1080%"
        },
        {
            "arrivalTime": 1541174400000,
            "arrivalTimeStr": "2018-11-03",
            "createTime": 1540483200000,
            "createTimeStr": "2018-10-26",
            "dividedIncome": 1.1879,
            "fpid": "354a5345-8b93-4663-a4b7-92d58dcdb7ea",
            "incomeTime": 1541174400000,
            "incomeTimeStr": "2018-11-03",
            "peid": "81648a12-644d-4c26-b695-9160bd9943f4",
            "sevenRate": "3.2781%"
        },
        {
            "arrivalTime": 1541174400000,
            "arrivalTimeStr": "2018-11-03",
            "createTime": 1540569600000,
            "createTimeStr": "2018-10-27",
            "dividedIncome": 0.8534,
            "fpid": "354a5345-8b93-4663-a4b7-92d58dcdb7ea",
            "incomeTime": 1541174400000,
            "incomeTimeStr": "2018-11-03",
            "peid": "81648a12-644d-4c26-b695-9160bd9943f5",
            "sevenRate": "3.2781%"
        },
        {
            "arrivalTime": 1541174400000,
            "arrivalTimeStr": "2018-11-03",
            "createTime": 1540656000000,
            "createTimeStr": "2018-10-28",
            "dividedIncome": 0.8282,
            "fpid": "354a5345-8b93-4663-a4b7-92d58dcdb7ea",
            "incomeTime": 1541174400000,
            "incomeTimeStr": "2018-11-03",
            "peid": "81648a12-644d-4c26-b695-9160bd9943f6",
            "sevenRate": "4.4300%"
        },
        {
            "arrivalTime": 1541174400000,
            "arrivalTimeStr": "2018-11-03",
            "createTime": 1540742400000,
            "createTimeStr": "2018-10-29",
            "dividedIncome": 0.8226,
            "fpid": "354a5345-8b93-4663-a4b7-92d58dcdb7ea",
            "incomeTime": 1541174400000,
            "incomeTimeStr": "2018-11-03",
            "peid": "81648a12-644d-4c26-b695-9160bd9943f7",
            "sevenRate": "3.0270%"
        }

    ]

    getOption() {
        // const { data } = this.props;
        let data = this.data

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
                    收益率：${data[i].dividedIncome}`
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