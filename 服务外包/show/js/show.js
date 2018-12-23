window.onload=function () {
    setInterval(showTime,1000);
};
function showTime() {
    console.log(1);
    var today=new Date();
    var tyear = today.getFullYear();
    var tmonth = today.getMonth()+1;
    var tday = today.getDate();
    var tweek;
    switch (today.getDay()) {
        case 1: tweek="星期一";break;
        case 2: tweek="星期二";break;
        case 3: tweek="星期三";break;
        case 4: tweek="星期四";break;
        case 5: tweek="星期五";break;
        case 6: tweek="星期六";break;
        case 0: tweek="星期日";break;
    }
    var thour=today.getHours();
    var tminute=today.getMinutes();
    var tseconds = today.getSeconds();
    if(thour<10)
        thour = '0'+thour;
    if(tseconds<10)
        tseconds = '0'+tseconds;
    if(tminute<10)
        tminute = '0'+tminute;
    document.getElementById('time').innerText = tyear+"年"+tmonth+"月"+ tday + "日  " + tweek +"    " + thour + ":" + tminute + ":" + tseconds;
    // console.log(tyear,tday,tmonth,tweek,thour,tseconds,tminute);
}