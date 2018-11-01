import React, { Component } from 'react'
import { Cascader, Input } from 'antd'

import adressData from './addressData'

export default class LocationPicker extends Component {

    constructor() {
        super();

        this.state = {
            provinceCity: "",
            detailLocation: ""
        }

        this.getCascaderData = this.getCascaderOption.bind(this);
        this.triggerOnChange = this.triggerOnChange.bind(this);
    }

    getCascaderOption() {
        let cascaderData = [];
        for (let key in adressData) {
            cascaderData.push({
                value: key,
                label: key,
                children: adressData[key].map(item => ({
                    value: item,
                    label: item
                }))
            });
        }
        return cascaderData;
    }

    triggerOnChange() {
        const { onChange } = this.props;
        const { provinceCity, detailLocation } = this.state;

        if (typeof (onChange) === "function") {
            onChange(provinceCity + detailLocation);
        }
    }

    render() {
        let { width } = this.props;
        if (!width) {
            width = 400;
        }

        return <div style={{ width }}>
            <Cascader
                style={{ width }}
                placeholder="请选择省市"
                onChange={(value) => {
                    this.setState({ provinceCity: value.join("") },()=>{
                        this.triggerOnChange();
                    });
                }}
                options={this.getCascaderOption()} />
            <Input
                style={{
                    width,
                    marginTop: 10
                }}
                onChange={(event) => {
                    this.setState({ detailLocation: event.target.value },()=>{
                        this.triggerOnChange();
                    });
                }}
                placeholder="请输入详细地址"
            />
        </div>
    }
}