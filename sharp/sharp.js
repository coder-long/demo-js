/**
 * shap 图片格式相互转化
 */

const sharp = require('sharp');
const fs = require('fs');

console.log(__dirname);
const imgBUffer = fs.readFileSync(__dirname + '/wallhaven-j3g7yy.jpg');

const image = sharp(imgBUffer);
image
  .toFile(__dirname + '/output.webp')
  .then(info => {
    console.log('info', info);
  })
  .catch(err => {

    console.log('err', err);
  });