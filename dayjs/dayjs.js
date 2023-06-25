const dayjs = require('dayjs');
const duration = require('dayjs/plugin/duration')
dayjs.extend(duration)
// let baseTime = '6/15/2022'
// let time = dayjs(baseTime).format('M/DD/YYYY HH:mm:ss');
// let time1 = dayjs().format('M/DD/YYYY HH:mm:ss');
// let diff = dayjs(time).diff(time1);

// // let dtime = dayjs(diff).format('M/DD/YYYY HH:mm:ss');

// let dtime = dayjs().subtract(diff).format('M/DD/YYYY HH:mm:ss');

// console.log(dtime);


// // console.log(time, time1, diff, dtime);


// 基准时间
let baseTime = '06/15/2022';

// 计算时间差
let diff = dayjs().diff(dayjs(baseTime, 'M/DD/YYYY HH:mm:ss'), 'second');

// 如果时间差小于等于0，表示已经过了指定时间
if (diff <= 0) {
  console.log('指定时间已经过了！');
} else {
  let duration = dayjs.duration(diff, 'second'); // 转换为 dayjs 的 duration 对象
  console.log(` ${duration.years()} 年  ${duration.months()} 月 ${duration.days()} 天 ${duration.hours()} 小时 ${duration.minutes()} 分钟 ${duration.seconds()} 秒`);
}
