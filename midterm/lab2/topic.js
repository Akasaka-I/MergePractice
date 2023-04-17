var topic = [
    "我會隨日期變動喔!",
    "我們都會跟著第一條一起改變",
    "我們都會跟著第一條一起改變",
    "我們都會跟著第一條一起改變",
    "我們都會跟著第一條一起改變",
    "測試新增資料",
    "停課"
]

var startDate = new Date(); 
function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

