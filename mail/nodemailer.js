/**
 * @see https://nodemailer.com/transports/sendmail/
 * 
 * 
 * ubuntu sendmail config @see https://www.cnblogs.com/chencoolandclear/p/16842896.html
 */

const nodemailer = require('nodemailer');
const path = require('path');
const template = require('art-template');

let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail',
});

const html = template(path.join(__dirname, './sendmail.html'), {
    dayData: {
        countDay: 123,
    },
    weatherData: {
        temperature: 23,
        weather: 'qing',
        tip: 'sdfs',
    },
    honeyedWords: {
        text: 'fskdfksdf',
    }
})

// no-reply@insurancebycovermore.com
transporter.sendMail({
    from: 'helong@lnb000445chn.ciandt.cn',// 2935842944@qq.com helong@lnb000445chn.ciandt.cn
    to: 'helong@ciandt.com,2935842944@qq.com',//yinghao@ciandt.com,
    subject: 'Message',
    text: 'I hope this message gets delivered!11111',
    html: html,
}, (err, info) => {
    console.log(err, info);
});
