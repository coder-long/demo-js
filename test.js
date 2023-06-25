const backgroundImageUrl = "background-image: url('https://aigc-t2p.cdn.bcebos.com/artist-long/25697880_0_final.png?x-bce-process=style%2Fr_m&md5hash=5754aeecc818cdc74becb23b350a84f3&timestamp=1686128252');"
const matchResult = backgroundImageUrl.split('("')[1].split('")')[0]
// const imageUrl = matchResult[1];
console.log(matchResult);
