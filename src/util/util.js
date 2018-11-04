import React from 'react'


export default {


    /**
     * 在record所有字段中搜索并返回filter数组
     * 
     * @param {any} originList 
     * @param {any} text 
     */
    searchText(originList, text, columnList) {
        let filter = [];

        if (Object.prototype.toString.call(originList) === "[object Array]") {
            let reg = new RegExp(text, 'gi');

            // 遍历所有原始数据
            originList.map((record, index) => {
                let match, passFlag = false, newRecord = {};
                for (let k in record) {
                    if (
                        columnList && columnList.indexOf(k) < 0
                        || !(typeof (record[k]) === "string")
                    ) {

                        newRecord[k] = record[k];
                        continue;
                    }
                    match = record[k].match(reg);
                    if (match) {
                        passFlag = true;
                        newRecord[k] = (
                            <span>
                                {
                                    record[k].split(reg).map((text, i) => (
                                        i > 0 ? [<span key={i} className="hignlight">
                                            {match[0]}
                                        </span>, text] : text
                                    ))
                                }
                            </span>
                        );
                    } else {
                        newRecord[k] = record[k];
                    }
                }
                if (passFlag) {
                    filter.push(newRecord);
                }
            })
        }
        return filter;
    },
}