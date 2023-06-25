const XLSX = require("xlsx")

/**
 * @data 表格数据 data = [{}] 默认为[[]] 数据结构 二维数组
 * @ExcelTitle 表格标题 默认 [ '模板Excel' ]
 * @ExcelHeader 表头信息 默认 [ '编号', '姓名', '性别', '年龄', '备注' ]
 * @sheetName sheet（表）名称 默认 ‘学生信息’
 * @ExcelName 文件名称 默认 ‘学生信息模板’
 */
const ExportExcel = (
  data = [[]],
  ExcelTitle = ['学生信息模板Excel'],
  ExcelHeader = ['编号', '姓名', '性别', '年龄', '备注'],
  sheetName = '学生信息',
  ExcelName = '学生信息模板'
) => {

  // (1)将数据源转成我们需要的二维数组
  const body = data

  // (2)定义表头
  const header = [ExcelTitle, ExcelHeader]

  // (3)将定义好的表头添加到 body 中
  body.unshift(...header)

  // (4)创建虚拟的 workbook
  const workbook = XLSX.utils.book_new()

  // (5)将二维数组转成 sheet
  const sheet = XLSX.utils.aoa_to_sheet(body)

  // (6)设置单元格合并 { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }, 即为一个规则，s:开始位置, e:结束位置, r:行, c:列
  // 可根据实际情况调整，此处偷懒，没有想很复杂表格
  const merges = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: ExcelHeader.length - 1 } },
  ]

  // (7)将merges添加到sheet中，设置合并单元格
  sheet['!merges'] = merges

  // (8)设置行列宽高并添加到sheet中
  const cols = [{ wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }]
  const rows = [{ hpx: 30 }]
  sheet['!cols'] = cols
  sheet['!rows'] = rows

  // (9)向workbook中添加 sheet
  XLSX.utils.book_append_sheet(workbook, sheet, sheetName)

  // (10)导出Excel
  XLSX.writeFile(workbook, ExcelName + '.xlsx')
}

ExportExcel(

  [
    ['编号', '姓3名', '性别h', '年龄h', '备注'],
    ['编23号', '姓dfg名', '性别', '年cb龄', '备a注'],
    ['编号tre', '姓名gh', '性别', '年,龄', '备注sa'],
  ]

)

// export default ExportExcel