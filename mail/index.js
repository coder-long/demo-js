/**
 * @see https://www.npmjs.com/package/sendmail
 */

const sendmail = require('sendmail')();

// no-reply@accounts.google.com

sendmail({
  from: 'no-reply@insurancebycovermore.com',
  to: 'yinghao@ciandt.com',//    helong@ciandt.com, yinghao@ciandt.com,
  subject: 'test sendmail',
  html: `
    <h1> Mail of test sendmail CID </h1>
    </br> 
    <img style="max-width:100%;width:160px;background: red;display:block;" src="cid:testimg" alt="logo" width="160" border="0" />
    <img style="max-width:100%;width:600px;background: red;display:block;" src="cid:testimg1" alt="logo" width="160" border="0" />
    `,
  attachments: [
    {
      // filename: 'bbbbb.png',
      path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIQSURBVHgB7dzhTcJAGIfxF+MAugEjsIGM4AaWSZjBCcQR3KBO4AjtBrjB+TatXwg1d32ulbb/X9KQAAbukcIB5TbBmQx2Z4IoIKSAkAJCCgjdW36nnvO3vu1tGqVvdc9lhWW0yT2N2bhr5/vNFH7yZtM4+N042fX7kXW82oUhBYQUEFJASAEhMo0pffvw7Tvh+gebRvnHZZf34cG3J9+ebYiQ7su3rS1MMybfqpAoNWAT78EWqhlbN8ZRAlZhgY+8S13Ec2yUlBeR0mf3tS2cj7F5Tn+N/oMQb2crEdrnwygp74Ufu//OKsR2id6F++L57RRhvgqDNJGGFBBSQEgBIQWEcnwnUlv/9yC3rjYoeh7Y913HUsV20S4MKSCkgJACQgoI4WmMv1jt/eTF5undJxelATnmgVvLfLzJhD4N0i4MKSCkgJACQgoIKSCkgJACQmMcZJ4bPaJrbyO+U7r5gH0Hi8fqPhcdLaB2YUgBIQWEFBBSQEgBIQWEFBBSQEgBIQWEFBBSQEgBIQWEbv7zwNgDHf+LHoGQAkIKCCkgpICQficC6ffCV4R2XYhzzHVTduHV/GLdEsaaEnCux0EPET/WkGZvC+dj3KUESQ1YhQUvfdLFq1KCDFm5qFlT5bikkKFdK+YYEtaL+UVXsCytXTtrzq/OzQvG1to1tJJlXwJ0bfROBFJASAEhBYQUEPoBT0bU9QeOFzMAAAAASUVORK5CYII=',
      cid: 'testimg' //same cid value as in the html img src
    },
    {
      // filename: 'bbbbb.png',
      path: 'https://sprint11md6139nzv1.dev.insurancebytravelinsurancepartners.com/sites/g/files/xfwnwa5003326dev/files/beachsmall.jpg',
      cid: 'testimg1' //same cid value as in the html img src
    },
  ],
}, function (err, reply) {
  console.log('err------------', err && err.stack);
  console.dir(reply);
});

