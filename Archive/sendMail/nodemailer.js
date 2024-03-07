/**
 * @see https://nodemailer.com/transports/sendmail/
 */

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
});

// no-reply@insurancebycovermore.com
transporter.sendMail({
    from: '2935842944@qq.com',// 2935842944@qq.com
    to: 'helong@ciandt.com,',//yinghao@ciandt.com,
    subject: 'Message',
    text: 'I hope this message gets delivered!',
}, (err, info) => {
    console.log(err,info);
});
