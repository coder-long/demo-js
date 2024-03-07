(function () {
  // Key
  const KEY = "51aa9fcb4dcf672049c56ce995b437c0";

  function getCurrentCity() {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'get',
        data: {
          key: KEY,
        },
        url: 'https://restapi.amap.com/v3/ip',
        success: function (data) {
          resolve({ position: data });
        },
        error: function (error) {
          reject(error);
        }
      })
    })
  };

  function getWeather(adcode, type) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'get',
        data: {
          key: KEY,
          city: adcode,
          extensions: type,
        },
        url: 'https://restapi.amap.com/v3/weather/weatherInfo',
        success: function (data) {
          resolve({ [type]: data });
        },
        error: function (error) {
          reject(error);
        }
      })
    })
  };

  async function handler() {
    const { position: { status = '', adcode = '', province = '', city = '' } } = await getCurrentCity();
    const { all: weatherAll } = await getWeather(adcode, 'all');
    const { base: weatherBase } = await getWeather(adcode, 'base');

    const { forecasts = [] } = weatherAll;
    const { lives = [] } = weatherBase;
    return {
      weatherAll,
      weatherBase
    }

  };


  // 实况天气数据信息
  const lives = {
    province: '省份名',
    city: '城市名',
    adcode: '区域编码',
    weather: '天气现象（汉字描述）',
    temperature: '实时气温，单位：摄氏度',
    winddirection: '风向描述',
    windpower: '风力级别，单位：级',
    humidity: '空气湿度',
    reporttime: '数据发布的时间',
  };

  // 预报天气信息数据
  const forecast_casts = {
    date: '日期',
    week: '星期几',
    dayweather: '白天天气现象',
    nightweather: '晚上天气现象',
    daytemp: '白天温度',
    nighttemp: '晚上温度',
    daywind: '白天风向',
    nightwind: '晚上风向',
    daypower: '白天风力',
    nightpower: '晚上风力',
  };

  document.addEventListener('alpine:init', () => {
    Alpine.data('lives', () => ({
      liveslist: [],

      async init() {

        const { weatherBase } = await handler();

        this.liveslist = weatherBase.lives || [];

        console.log('lives', weatherBase);
      }
    }));

    Alpine.data('forecast', () => ({
      forecastslist: [],
      async init() {

        const { weatherAll } = await handler();

        this.forecastslist = weatherAll.forecasts || [];

        console.log('forecast', weatherAll.forecasts);
      },

    }));
  });

})();