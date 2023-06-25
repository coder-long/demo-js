// 使用 Mock
const Mock = require('mockjs');
const fs = require('fs');

const data = Mock.mock({
  /**
   * @name 属性值是字符串-String
   * 'name|count': string
   * name 属性名
   * count 重复次数
   * 'name|min-max': string
   * min-max 重复次数随机（大于等于min，小于等于max）
   *
   */
  'str|7': '以使其更易于阅读 7次。',
  'str1|1-6': '以使其更易于阅读 1-6随机次。',
  /**
   * @name 属性值是数字-Number
   * 'name|+1': number 属性值自动+1，初始值为number
   *
   * 'name|min-max': number
   * 生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
   *
   * 'name|min-max.dmin-dmax': number
   * 生成一个浮点数 整数部分大于等于min，小于等于max;小数部分保留dmin 到 dmax 位。
   * 'name|count.dmin-dmax': number
   * count 默认整数
   * 'name|min-max.count': number
   * count 默认保留位数
   */
  'number|+1': 2,
  'number1|1-7': 2.1,

  'float|1-8.1-9': 1,
  'float1|88.1-19': 1,
  'float2|1-8.3': 1,
  'float3|99.3': 1,
  /**
   * @name 属性值是布尔型-Boolean
   * 'name|1': boolean
   * 随机生成一个布尔值，true和false生成概率为1/2
   * 'name|min-max': value
   * 随机生成一个布尔值，value 的概率为min/(min+max), !value 的概率为max/(min+max)
   */
  'bool|1': true,
  'bool1|1-7': true,
  /**
   * @name 属性值是对象-Object
   *  'name|count': object
   * 从属性值 object 中随机选取 count 个属性。
   *
   * 'name|min-max': object
   * 从属性值 object 中随机选取 min-max 个属性。
   */
  'obj|1': {
    'id': 'aaa',
    'id1': 'bbb',
    'id2': 'ccc',
    'id3': 'ddd',
  },
  'obj1|2': {
    'id': 'aaa',
    'id1': 'bbb',
    'id2': 'ccc',
    'id3': 'ddd',
  },
  'obj2|2-3': {
    'id': 'aaa',
    'id1': 'bbb',
    'id2': 'ccc',
    'id3': 'ddd',
    'id4': 'eee',
  },
  /**
   * @name 属性值是数组-Array
   * 'name|1': array
   * 从array中 随机 选取一个值作为最终值
   *
   * 'name|+1': array
   * 从array中 顺序 选取一个值作为最终值
   *
   * 'name|min-max': array
   *  生成一个数组，数组内容重复次数在min-max之间
   *
   * 'name|count': array
   * 生成一个数组，数组内容重复次数为count
   */
  'arr|1': ['2', '3', '@string'],
  'arr1|1': [{ name: 2 }, { name: 3 },],
  'arr2|+1': ['2', '3'],
  'arr3|2-9': [2, 3],
  'list|10': [
    {
      'id|+1': 1,
      'uid': '@guid',
      'name': '@cname',
      'age|18-35': 1,
      'email': '@email',
      'phone': /^1[3-9]\d{9}$/
    }
  ],
  'helong|1-5': '反向生成,',
  /**
   * @name 属性值是正则表达式-RegExp 反向生成
   * 'name': regexp
   * 根据正则表达式 regexp 反向生成 可以匹配它的字符串。
   * 用于生成自定义格式的字符串。
   */
  'Reg': /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
  /**
   * @name 占位符-DPD
   */
  'DPD': '@helong',
  'date': '@date',
  'string': '@string',
  'image': '@image',
  'dataPlaceholder': {
    /**
     * Basic
     * Random.boolean( min?, max?, current? )
     * Random.natural( min?, max? )
     * Random.integer( min?, max? )
     * Random.float( min?, max?, dmin?, dmax? )
     * Random.character( pool? )
     * Random.string( pool?, min?, max? )
     * Random.range(start?, stop, step?)
     */
    'Basic': {
      'bool': '@boolean',
      'integer': '@integer',
      'natural': '@natural',
      'float': '@float',
      'character': '@character',
      'string': '@string(10)',
      'range': '@range(2)',
    },
    /**
     * Date
     * Random.date( format? )
     * Random.time( format? )
     * Random.datetime( format? )
     * Random.now( unit?, format? )
     */
    'Date': {
      'date': '@date("yyyy/MM/dd HH:mm:ss")',
      'time': '@time("A HH:mm:ss")',
      'datetime': '@datetime',
      'now-y': '@now(year)',
      'now-M': '@now(month)',
      'now-d': '@now(day)',
      'now-H': '@now(hour)',
      'now-m': '@now(minute)',
      'now-s': '@now(seconds)',
    },
    /**
     * Image
     * Random.image( size?, background?, foreground?, format?, text? )
     */
    'image': '@image',
    /**
     * Color
     * Random.color()
     * Random.hex()
     * Random.rgb()
     * Random.rgba()
     * Random.hsl()
     */
    'Color': {
      'color': '@color',
      'hex': '@hex',
      'rgb': '@rgb',
      'rgba': '@rgba',
      'hsl': '@hsl',
    },
    /**
     * Text
     * Random.paragraph( min?, max? )
     * Random.sentence( min?, max? )
     * Random.word( min?, max? )
     * Random.title( min?, max? )
     *
     * Random.cparagraph( min?, max? )
     * Random.csentence( min?, max? )
     * Random.cword( min?, max? )
     * Random.ctitle( min?, max? )
     */
    'Text': {
      'paragraph': '@paragraph(3)',
      'sentence': '@sentence(15)',
      'word': '@word',
      'title': '@title',
      'cparagraph': '@cparagraph(3)',
      'csentence': '@csentence(15)',
      'cword': '@cword',
      'ctitle': '@ctitle',
    },
    /**
     * Name
     * Random.first()
     * Random.last()
     * Random.name( middle? )
     *
     * Random.cfirst()
     * Random.clast()
     * Random.cname()
     */
    'Name': {
      'first': '@first',
      'lasr': '@last',
      'name': '@name',
      'cfirst': '@cfirst',
      'clast': '@clast',
      'cname': '@cname',
    },
    /**
     * Web
     * Random.url()
     * Random.domain()
     * Random.protocol()
     * Random.tld()
     * Random.email()
     * Random.ip()
     */
    'Web': {
      'url': '@url',
      'domain': '@domain',
      'protocol': '@protocol',
      'tld': '@tld',
      'email': '@email',
      'ip': '@ip',
    },
    /**
     * Address
     * Random.region()
     * Random.province()
     * Random.city( prefix? )
     * Random.zip()
     */
    'Address': {
      'region': '@region',
      'province': '@province',
      'city': '@city',
      'zip': '@zip',
    },
    /**
     * Helper
     * Random.capitalize( word ) 单词首字母大写
     * Random.upper( str ) 大写
     * Random.lower( str ) 小写
     * Random.pick( arr ) 挑选
     * Random.shuffle( arr ) 洗牌
     */
    'Helper': {
      'capitalize': '@capitalize("hello")',
      'upper': '@upper("aaaa")',
      'lower': '@lower("BBBBBB")',
      'pick': '@pick([1,2,3,4,])',
      'shuffle': '@shuffle([3,4,5,7,8,1])',
    },
    /**
     * Miscellaneous
     * Random.guid()
     * Random.id()
     * Random.increment( step? )
     */
    'Miscellaneous': {
      'guid': '@guid',
      'id': '@id',
      'increment': '@increment',
    },
  },
  /**
   * @name  属性值是函数-Function
   * 'name': function
   * 执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性'name' 所在的对象。
   *
   */
  'func': function () {
    return 'func'
  },
  'func1': function () {
    return this.date
  },
});


// 输出结果
fs.writeFileSync('mock/MockData.json', JSON.stringify(data, null, 4));

