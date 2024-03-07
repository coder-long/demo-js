// https://chp.shadiao.pro/ 彩虹屁
/**
 * @see schedule https://www.npmjs.com/package/node-schedule
 * @see nodemailer https://www.npmjs.com/package/nodemailer
 * @see superagent https://www.npmjs.com/package/superagent
 * @see cheerio https://www.npmjs.com/package/cheerio
 * @see template https://www.npmjs.com/package/art-template
 */

const nodemailer = require("nodemailer");
const schedule = require("node-schedule");
const request = require("superagent");
const cheerio = require("cheerio");
const template = require('art-template');
const path = require("path");

// 发送邮件函数
async function sendMail() {
  const html = await renderTemplate()  // template html
  var user = "xxx@qq.com";// your email address
  var pass = "xxx"; // Email authorization code
  var to = "xxx@qq.com";
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  });
  let info = await transporter.sendMail({
    from: `猪蹄<${user}>`, // 填入发件人信息
    to: `<${to}>`, // 填入收件人信息
    subject: "test mail", // 邮件主题 今日份暖心情话
    html: html, // 发送内容，可选text（普通文本）和html（网页形式）
  });
  console.log("发送成功");
}

function getDayData() {
  let current = new Date()
  // 开始时间
  let known = new Date('2018-4-7')
  let res = Math.ceil((current - known) / 1000 / 60 / 60 / 24)
  return {
    countDay: res
  }
}

function getWeatherData() {
  // weather chengdu gulin
  // let url = 'https://tianqi.moji.com/weather/china/sichuan/chengdu'   
  let url = 'https://tianqi.moji.com/weather/china/sichuan/gulin-county'
  return new Promise((resolve, reject) => {
    request.get(url).end((err, res) => {
      if (err) {
        console.error('请求失败，请检查url')
        return
      }
      const $ = cheerio.load(res.text)
      // 图标
      const icon = $('.wea_weather span img').attr('src')
      // 天气
      const weather = $('.wea_weather b').text()
      // 温度
      const temperature = $('.forecast .days li').eq(2).text()
      // 提示
      const tip = $('.wea_tips em').text()
      const weatherData = {
        icon,
        weather,
        temperature,
        tip
      }
      resolve(weatherData)
    })
  })
}

function getImgData() {
  let url = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1'  // bing每日壁纸api
  return new Promise((resolve, reject) => {
    request.get(url)
      .set('referer', 'https://cn.bing.com')
      .end((err, res) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(JSON.parse(res.text))
        resolve({
          imgUrl: "https://cn.bing.com" + JSON.parse(res.text).images[0].url.split('&')[0]
        })
      })
  })
}

function getHoneyedWords() {
  let url = 'https://api.shadiao.pro/chp' // api地址
  return new Promise((resolve, reject) => {
    request.get(url).end((err, res) => {
      if (err) {
        console.error('honeyedWords获取失败')
        return
      }
      resolve({
        text: JSON.parse(res.text)?.data?.text ?? 'love',
      })
    })
  })
}

async function renderTemplate() {  // 渲染模板
  // 获取数据
  const dayData = getDayData();
  const weatherData = await getWeatherData();
  const imgData = await getImgData();
  const honeyedWords = await getHoneyedWords();

  console.log(dayData)
  console.log(weatherData)
  console.log(imgData)
  console.log(honeyedWords)

  // 加载模板
  return new Promise((resolve, reject) => {
    const html = template(path.join(__dirname, './template.html'), {
      dayData,
      weatherData,
      imgData,
      honeyedWords
    })
    resolve(html)
  })
}

// 每天下午5点21分准时发送
schedule.scheduleJob({ hour: 13, minute: 14 }, function () {
// schedule.scheduleJob('2 * * * * *', function () {
  console.log("吉时已到:" + new Date())
  sendMail()
});
