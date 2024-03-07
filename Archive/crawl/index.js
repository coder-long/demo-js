// 1.Import module ES/CJS
const xCrawl = require('x-crawl');
const colors = require('colors');

// import xCrawl from 'x-crawl';

const URL = 'https://www.youtube.com/'

// 2.Create a crawler instance
const myXCrawl = xCrawl({ maxRetry: 116, intervalTime: { max: 3000, min: 2000 } })

// 3.Set the crawling task
/*
  Call the startPolling API to start the polling function,
  and the callback function will be called every other day
*/
myXCrawl.startPolling({ d: 1 }, async (count, stopPolling) => {
  // Call crawlPage API to crawl Page
  const res = await myXCrawl.crawlPage({
    targets: [
      // 'https://www.airbnb.cn/s/experiences',
      // 'https://www.airbnb.cn/s/plus_homes',
      'https://yige.baidu.com/',
    ],
    viewport: { width: 1920, height: 1080 },
    maxRetry: 122
  });

  console.log('rrrrrrrrrrrrrrrrrrrrrrrrr res'.green, res);

  // Store the image URL to targets
  const targets = []
  // const elSelectorMap = ['._fig15y', '._aov0j6']
  const elSelectorMap = ['.home-explore .exploration-header + div > div:first-child']
  for (const item of res) {
    const { id } = item
    const { page } = item.data

    // Wait for the page to load
    await new Promise((r) => setTimeout(r, 300))

    // Gets the URL of the page image
    const urls = await page.$$eval(`${elSelectorMap[id - 1]} .picPreview`, (imgEls) => {
      // return imgEls.map((item) => item.src)
      return imgEls.map((item) => item.style.split('("')[1].split('")')[0]);
    })
    targets.push(...urls)
    console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuu urls'.blue, urls);

    // Close page
    page.close()
  }

  console.log('tttttttttttttttttttttttttttttttt targets'.yellow, targets);

  // Call the crawlFile API to crawl pictures
  myXCrawl.crawlFile({ targets, storeDirs: __dirname + '/upload' })
});

const myXCrawl1 = xCrawl()

myXCrawl1
  .crawlPage({
    url: URL,
    viewport: { width: 1920, height: 1080 },
  })
  .then(async (res) => {
    const { browser, page } = res.data

    // 获取页面渲染后的截图
    await page.screenshot({ path: __dirname + '/upload1/page.png' })

    console.log('获取屏幕截图完毕')

    browser.close()
  })