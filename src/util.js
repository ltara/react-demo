const formatterTime = (value) => {
  value = Number(value)
  if (value < 1000) {
    return '刚刚'
  }
  if (value >= 1000 && value < 60_000) {
    return Math.round(value / 1000) + '秒前'
  }
  if (value >= 60_000 && value < 3_600_000) {
    return Math.round(value / 60_000) + '分钟前'
  }
  if (value >= 3_600_000 && value < 86_400_000) {
    return Math.round(value / 3_600_000) + '小时前'
  }
  if (value >= 86_400_000 && value < 2_592_000_000) {
    return Math.round(value / 86_400_000) + '天前'
  }
  if (value >= 2_592_000_000 && value < 31_104_000_000) {
    return Math.round(value / 2_592_000_000) + '月前'
  }
  if (value >= 31_104_000_000) {
    return Math.round(value / 31_104_000_000) + '年前'
  }
}


export {
  formatterTime
}