
/*
微信小程序 老爷花苑 解锁隐藏内容 A+脚本
hostname  =  *.ddly666.top
[rewrite_local]  
^http[s]?:\/\/((*.ddly666.top))(/wp-json/wp/v2/posts/*).+$ url script-response-body .js
*/
var obj = JSON.parse($response.body);
    obj.data.: = ,
    $done({body: JSON.stringify(obj)});
