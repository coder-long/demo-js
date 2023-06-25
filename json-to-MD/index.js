/**
 * json2csv 代码中将接送数据转换成csv数据
 * csv-columns2md 命令中使用csv2md将csv生成的csv文件转换成MD文件
 *                csv2md ./json-to-MD/data.csv ./json-to-MD/data.md
 * rimraf 命令中将不需要的文件删除掉
 *        rimraf ./json-to-MD/data.csv
 *
 * npm cmd:  node ./json-to-MD/index.js && csv2md ./json-to-MD/data.csv ./json-to-MD/data.md && rimraf ./json-to-MD/data.csv
 */

const fs = require('fs');
const json2csv = require('json2csv').parse;

// 读取 JSON 文件
const jsonData = fs.readFileSync(__dirname + '/data.json', 'utf-8');

// require('csv-columns2md')
console.log(jsonData);

// 将 JSON 转换为 CSV
const csvData = json2csv(JSON.parse(jsonData).sort((a, b) => Number(a.Distance.split('KM')[0]) - Number(b.Distance.split('KM')[0])));

// 将 CSV 写入文件
fs.writeFileSync(__dirname + '/data.csv', csvData, 'utf-8');

/*

---|---|---|:---:|:---:|:---:|---|

"Image": "<img src='https://p5.itc.cn/q_70/images03/20220224/399b5a81cbf64d0284d35bf9c9e05463.png'>"

*/
