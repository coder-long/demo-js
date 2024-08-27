
const CryptoJS = require('crypto-js');
const axios = require('axios').default;
const fs = require('fs');

const lF = "zxcvbnmlkjhgfdsaqwertyuiop0987654321QWERTYUIOPLKJHGFDSAZXCVBNM", fne = lF + "-@#$%^&*+!";
function qu(e = []) {
  return e.map(t => fne[t]).join("")
}

function dne(e, t) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * e + 1, 10);
    case 2:
      return parseInt(Math.random() * (t - e + 1) + e, 10);
    default:
      return 0
  }
}

function hne(e) {
  return [...Array(e)].map(() => lF[dne(0, 61)]).join("")
}

function pne(e) {
  let t = "";
  return typeof e == "object" ? t = Object.keys(e).map(n => `${n}=${e[n]}`).sort().join("&") : typeof e == "string" && (t = e.split("&").sort().join("&")),
    t
}

function t1(e = {}) {
  const { p: t, t: n, n: u, k: o } = e
    , r = pne(t);
  return uK(u + o + decodeURIComponent(r) + n)
}

function Ai(e) {
  let t;
  switch (e) {
    case "base":
      t = "/ggzy-portal/base/";
      break;
    case "search":
      t = "/ggzy-portal/search/";
      break;
    case "yhzx":
      t = "/ggzy-yhzx/";
      break;
    case "stat":
      t = "/ggzy-portal/center/apis/stat/";
      break;
    case "mhyy":
      t = "/ggzy-portal/mhyy/config/";
      break;
    case "mhyy-org":
      t = "/ggzy-yhzx/mhyy-org/apis/";
      break;
    case "qrcode":
      t = "/ggzy-portal/qrcode-apis/";
      break;
    default:
      t = "/ggzy-portal/center/apis/";
      break
  }
  const n = FU.create({
    baseURL: t,
    ...Nne
  });
  function u(o) {
    _o.inc();
    const r = dr()
      , { params: s, url: i } = o
      , a = Date.now()
      , l = hne(16)
      , c = "k8tUyS$m"
      , d = {
        'X-Dgi-Req-App': 'ggzy-portal',
        'X-Dgi-Req-Nonce': l,
        'X-Dgi-Req-Timestamp': a
      };
    if (o.method.toLowerCase() === "get") {
      (s == null ? void 0 : s.siteCode) === void 0 && !i.includes("?siteCode=") && (s ? o.params.siteCode = r.currentSite : o.params = {
        siteCode: r.currentSite
      });
      const p = t1({
        p: s,
        t: a,
        n: l,
        k: c
      });
      d['X-Dgi-Req-Signature'] = p
    } else {
      const p = t1({
        p: sC.stringify(o.data, {
          allowDots: !0
        }),
        t: a,
        n: l,
        k: c
      });
      d['X-Dgi-Req-Signature'] = p,
        e === "mhyy" && (o.data ? o.data.noSiteCode ? delete o.data.noSiteCode : o.data.siteCode === void 0 && (o.data.siteCode = r.currentSite) : o.data = {
          siteCode: r.currentSite
        })
    }
    const f = rp("token");
    return f && (d.token = f),
      o.headers = {
        ...d,
        ...o.headers
      },
      o
  }
  return n.interceptors.request.use(u, Hne),
    n.interceptors.response.use(jne, Vne),
    n
}


const response = await axios.get('https://ygp.gdzwfw.gov.cn/ggzy-portal/base/columns/tree', {
  params: {
    'siteCode': '44'
  },
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh,zh-CN;q=0.9,en-US;q=0.8,en;q=0.7,zh-HK;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Cookie': '_horizon_uid=ec453994-cc9f-4b1e-a336-dd60275b84fb; _horizon_sid=812b0fe2-e23f-47b5-97e3-7be73b1fc156',
    'Pragma': 'no-cache',
    'Referer': 'https://ygp.gdzwfw.gov.cn/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'X-Dgi-Req-App': 'ggzy-portal',
    'X-Dgi-Req-Nonce': '72RocVuGbGEs2HfO',
    'X-Dgi-Req-Signature': 'c3f87776bab1f9ae1cfc7f7555da492c608dfa763de917c50177d4638a330c86',
    'X-Dgi-Req-Timestamp': '1721291525428',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"'
  }
});

console.log(response.data);