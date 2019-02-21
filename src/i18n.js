Ext.onReady(function() {
Ext.Date.dayNames = ['日', '一', '二', '三', '四', '五', '六'];
  
Ext.Date.monthNames = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',  
];
Ext.Date.monthNumbers = {
  '一月': 0,
  '二月': 1,
  '三月': 2,
  '四月': 3,
  '五月': 4,
  '六月': 5,
  '七月': 6,
  '八月': 7,
  '九月': 8,
  '十月': 9,
  '十一月': 10,
  '十二月': 11,
}

Ext.Date.getShortMonthName = function(month) {
    switch (month) {
      case 0: return '一月';
      case 1: return '二月';
      case 2: return '三月';
      case 3: return '四月';
      case 4: return '五月';
      case 5: return '六月';
      case 6: return '七月';
      case 7: return '八月';
      case 8: return '九月';
      case 9: return '十月';
      case 10: return '十一月';
      case 11: return '十二月';
  }
      return null;
  };
  })