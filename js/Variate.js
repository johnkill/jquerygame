//记录宝箱类型
var BaoXianType = 0;
//坐标调整
var zuobiaoY = 350;
//记录打到飞机的次数
var cishu = 0;
var XFJ;//小飞机
var DFJ;//大飞机
var ZFJ;//中飞机
//升级子弹
var shenji = 0;
//计算分数
var FenShu = 0;
//小飞机
var newFeiJ;
//中飞机
var newZhongFeiJ;
//大飞机
var newDaFeiJ;
var cishu1 = 0;
var cishu = 0;
//小飞机出场速度
var FeiJSuDu = 5;
//中飞机出场速度
var ZhongFeiJSuDu = 1.5;
//大飞机出场速度
var DaFeiJSuDu = 1;
//子弹
var zidanDiv;
//出场飞机类型
var FeiJiType = 0;
//BOSS出场时间
var BossTime = 1000;
//开枪声音
var kicks = new Audio("MP3/机枪声音.mp3");
//警报声音
var JB = new Audio("MP3/警报.mp3");
//小飞机爆炸
var Box = new Audio("MP3/飞机爆炸.mp3");
//大飞机爆炸
var Boxs = new Audio("MP3/大爆炸.mp3");
//背景音乐
var beijin = new Audio("MP3/背景音乐.mp3");
//机枪
var jiqiang = new Audio("MP3/机枪.mp3");
//背景音乐
var huojian = new Audio("MP3/火箭发射.mp3");
//关卡
var guanka = 0;
//过关条件
var tiaojian = 0
//生成敌人小飞机
var XFJ;
//生成敌人中飞机
var ZFJ;
//生成敌人大飞机
var DFJ;
//宝箱提示
var typeB = 0;