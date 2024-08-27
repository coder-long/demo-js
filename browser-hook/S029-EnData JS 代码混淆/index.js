
// https://www.endata.com.cn/BoxOffice/BO/Year/index.html
const CryptoJS = require('crypto-js');
const axios = require('axios').default;
const fs = require('fs');

var _0x4da59e = {
  'bUIIa': function _0x2a2af9(_0x779387, _0x4a4fec) {
    return _0x779387 + _0x4a4fec;
  }
};

var _0x9843d3 = function (x, _, r) { return 0 == _ ? x[_0x2246("0x254", "4VZ$")](r) : "" + x[_0x2246("0x255", "GL3Q")](0, _) + x.substr(_0x4da59e[_0x2246("0x256", "DK[&")](_, r)) };

var _0x9843d3 = function (_0x29d556, _0xcc6df, _0x3d7020) {
  if (0x0 == _0xcc6df)
    return _0x29d556['substr'](_0x3d7020);
  var _0x48914b;
  _0x48914b = '' + _0x29d556['substr'](0x0, _0xcc6df);
  return _0x48914b += _0x29d556['substr'](_0x4da59e['bUIIa'](_0xcc6df, _0x3d7020));
};
function shell(_0xa0c834) {
  var _0x51eedc = {
    'pKENi': function _0x2f627(_0x5b6f5a, _0x440924) {
      return _0x5b6f5a === _0x440924;
    },
    'wnfPa': 'ZGz',
    'VMmle': '7|1|8|9|5|2|3|6|0|4',
    'GKWFf': function _0x1a4e13(_0x40cfde, _0x16f3c2) {
      return _0x40cfde == _0x16f3c2;
    },
    'MUPgQ': function _0x342f0d(_0x19038b, _0x4004d6) {
      return _0x19038b >= _0x4004d6;
    },
    'hLXma': function _0x55adaf(_0x45a871, _0x161bdf) {
      return _0x45a871 + _0x161bdf;
    },
    'JdOlO': function _0x13e00a(_0x5899a9, _0x4bb34d) {
      return _0x5899a9 + _0x4bb34d;
    },
    'qrTpg': function _0x1198fb(_0x55b317, _0x22e1db, _0x1b091a) {
      return _0x55b317(_0x22e1db, _0x1b091a);
    },
    'pdmMk': function _0xe2b022(_0x4af286, _0x4c2fd4) {
      return _0x4af286 - _0x4c2fd4;
    },
    'xVKWW': function _0x1094a3(_0x5f3627, _0x2a0ac5, _0x3ad2e5) {
      return _0x5f3627(_0x2a0ac5, _0x3ad2e5);
    }
  };
  if (_0x51eedc['pKENi']('tgg', _0x51eedc['wnfPa'])) {
    this['_append'](a);
    return this['_process']();
  } else {
    var _0x492a62 = _0x51eedc['VMmle']['split']('|')
      , _0x356b01 = 0x0;
    while (!![]) {
      switch (_0x492a62[_0x356b01++]) {
        case '0':
          _0x554c90 = CryptoJS['DES']['decrypt']({
            'ciphertext': CryptoJS['enc']['Hex']['parse'](_0xa0c834)
          }, _0x2cf8ae, {
            'iv': _0x554c90,
            'mode': CryptoJS['mode']['ECB'],
            'padding': CryptoJS['pad']['Pkcs7']
          })['toString'](CryptoJS['enc']['Utf8']);
          continue;
        case '1':
          if (_0x51eedc['GKWFf'](null, _0xa0c834) || _0x51eedc['MUPgQ'](0x10, _0xa0c834['length']))
            return _0xa0c834;
          continue;
        case '2':
          _0xa0c834 = _0x9843d3(_0xa0c834, _0x2cf8ae, 0x8);
          continue;
        case '3':
          _0x2cf8ae = CryptoJS['enc']['Utf8']['parse'](_0x554c90);
          continue;
        case '4':
          return _0x554c90['substring'](0x0, _0x51eedc['hLXma'](_0x554c90['lastIndexOf']('}'), 0x1));
        case '5':
          _0x554c90 = _0xa0c834['substr'](_0x2cf8ae, 0x8);
          continue;
        case '6':
          _0x554c90 = CryptoJS['enc']['Utf8']['parse'](_0x554c90);
          continue;
        case '7':
          // if (!navigator || !navigator['userAgent'])
          // return '7777';
          continue;
        case '8':
          var _0x554c90 = _0x51eedc['JdOlO'](_0x51eedc['qrTpg'](parseInt, _0xa0c834[_0x51eedc['pdmMk'](_0xa0c834['length'], 0x1)], 0x10), 0x9)
            , _0x2cf8ae = _0x51eedc['xVKWW'](parseInt, _0xa0c834[_0x554c90], 0x10);
          continue;
        case '9':
          _0xa0c834 = _0x9843d3(_0xa0c834, _0x554c90, 0x1);
          continue;
      }
      break;
    }
  }
}


(async () => {
  const response = await axios.post(
    'https://www.endata.com.cn/API/GetData.ashx',
    new URLSearchParams({
      'year': '2024',
      'MethodName': 'BoxOffice_GetYearInfoData'
    }),
    {
      headers: {
        'Accept': 'text/plain, */*; q=0.01',
        'Accept-Language': 'zh,zh-CN;q=0.9,en-US;q=0.8,en;q=0.7,zh-HK;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://www.endata.com.cn',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"'
      }
    }
  );
  console.log(response.data, '\n' + shell(response.data));
  JSON.parse(shell(response.data));

  fs.writeFileSync('./data.json', JSON.stringify(JSON.parse(shell(response.data)), null, 2));

  const response1 = await axios.post(
    'https://www.endata.com.cn/API/GetData.ashx',
    new URLSearchParams({
      'rowNum1': '1',
      'rowNum2': '20',
      'date': '2024-06-29',
      'MethodName': 'BoxOffice_GetCinemaDayBoxOffice'
    }),
    {
      headers: {
        'Accept': 'text/plain, */*; q=0.01',
        'Accept-Language': 'zh,zh-CN;q=0.9,en-US;q=0.8,en;q=0.7,zh-HK;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://www.endata.com.cn',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"'
      }
    }
  );

  fs.writeFileSync('./data1.json', JSON.stringify(JSON.parse(shell(response.data)), null, 2));

})();