//宝箱
function BaoXian() {
    var Ram = Math.round(Math.random() * 4 + 1);
    var $BaoXian = "<div class='newBaoXian'; style=' width:20px;height:20px;position:absolute; margin-left:" + Ram + "00px; margin-top:0px; '><img src='Img/宝箱.png' /></div>";
    $("#waiDiv").append($BaoXian);
    if (typeB==0) {
        danmusss();
        typeB = 1;
    }
    $(".newBaoXian").each(function () {
        var Baox = this;
        if (Baox.offsetTop >= 700) {
            $(this).remove();
        }
    });
}
//BOSS子弹
/////////////////////////////////////////////////////////////////////////////////////////////`..........````````````.............``````````...........```````````........
function BOSSzidan() {
    //得到BOSS位置
    $(".BOSS").each(function () {
        var boss = this;
        var top = boss.offsetTop + 103;
        var left = boss.offsetLeft + 80;
        var JIANGE = 40;
        if (tiaojian == 0) {
            JIANGE = 28;
        } else if (tiaojian == 1) {
            JIANGE = 24;
        } else if (tiaojian == 2) {
            JIANGE = 22;
        } else if (tiaojian == 3) {
            JIANGE = 20;
        } else if (tiaojian == 4) {
            JIANGE = 18;
        } else if (tiaojian == 5) {
            JIANGE = 15;
        }
        var Types = Math.round(Math.random() * JIANGE + 1);
        if (Types == 1) {
            //生成子弹
            $BossZD1 = "<div class='Bosszidan'; style=' width:20px;height:20px;position:absolute; margin-left:" + (left + 100) + "px; margin-top:" + (top) + "px; '><img src='Img/BOSS子弹_" + tiaojian + ".png' name='zidan_1'; /></div>";
            $BossZD2 = "<div class='Bosszidan'; style=' width:20px;height:20px;position:absolute; margin-left:" + (left) + "px; margin-top:" + (top) + "px; '><img src='Img/BOSS子弹_" + tiaojian + ".png' name='zidan_2'; /></div>";
            $("#waiDiv").append($BossZD1);
            $("#waiDiv").append($BossZD2);
            $("[name=zidan_2]").css("margin-left", "-=2px");
            $("[name=zidan_1]").css("margin-left", "+=2px");
        }
    });
    $(".Bosszidan").each(function () {
        Bosszidan = this;
        //判断越界的子弹并删除
        if (Bosszidan.offsetTop >= 750 || Bosszidan.offsetLeft >= 600 || Bosszidan.offsetLeft <= 0) {
            $(Bosszidan).remove();
        }
    });
}
//BOSS子弹速度
function BossZiDanSD() {
    var Rams = Math.round(Math.random() * 0 + 1);
    $(".Bosszidan").css("margin-top", "+=" + Rams + "0px");
}
//单击发射子弹
$(document).click(function () {
    huojian.play();
    //我的战机
    var num1 = document.getElementById("MyDiv");
    var m_top = num1.offsetTop - 10;
    var m_left = num1.offsetLeft + 55;
    $newDiv1 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left + 50) + "px; margin-top:" + (m_top + 20) + "px; '><img src='Img/BOSS子弹_0.png' name='火箭1'; /></div>";
    $newDiv2 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left - 50) + "px; margin-top:" + (m_top + 20) + "px; '><img src='Img/BOSS子弹_0.png' name='火箭2'; /></div>";
    $newDiv3 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left + 100) + "px; margin-top:" + (m_top + 40) + "px; '><img src='Img/BOSS子弹_1.png' name='火箭3'; /></div>";
    $newDiv4 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left - 100) + "px; margin-top:" + (m_top + 40) + "px; '><img src='Img/BOSS子弹_1.png' name='火箭4'; /></div>";
    $newDiv5 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left + 80) + "px; margin-top:" + (m_top + 30) + "px; '><img src='Img/反BOSS子弹_2.png' name='火箭5'; /></div>";
    $newDiv6 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left - 80) + "px; margin-top:" + (m_top + 30) + "px; '><img src='Img/反BOSS子弹_2.png' name='火箭6'; /></div>";
    $newDiv7 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left + 120) + "px; margin-top:" + (m_top + 50) + "px; '><img src='Img/反BOSS子弹_3.png' name='火箭7'; /></div>";
    $newDiv8 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left - 120) + "px; margin-top:" + (m_top + 50) + "px; '><img src='Img/反BOSS子弹_3.png' name='火箭8'; /></div>";
    $newDiv9 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left + 140) + "px; margin-top:" + (m_top + 60) + "px; '><img src='Img/反BOSS子弹_4.png' name='火箭9'; /></div>";
    $newDiv10 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left - 140) + "px; margin-top:" + (m_top + 60) + "px; '><img src='Img/反BOSS子弹_4.png' name='火箭10'; /></div>";
    if (tiaojian == 1) {
        $("#waiDiv").append($newDiv1);
        $("#waiDiv").append($newDiv2);
    } else if (tiaojian == 2) {
        $("#waiDiv").append($newDiv1);
        $("#waiDiv").append($newDiv2);
        $("#waiDiv").append($newDiv3);
        $("#waiDiv").append($newDiv4);
    } else if (tiaojian==3) {
        $("#waiDiv").append($newDiv1);
        $("#waiDiv").append($newDiv2);
        $("#waiDiv").append($newDiv3);
        $("#waiDiv").append($newDiv4);
        $("#waiDiv").append($newDiv5);
        $("#waiDiv").append($newDiv6);
    } else if (tiaojian==4) {
        $("#waiDiv").append($newDiv1);
        $("#waiDiv").append($newDiv2);
        $("#waiDiv").append($newDiv3);
        $("#waiDiv").append($newDiv4);
        $("#waiDiv").append($newDiv5);
        $("#waiDiv").append($newDiv6);
        $("#waiDiv").append($newDiv7);
        $("#waiDiv").append($newDiv8);
    } else if (tiaojian==5) {
        $("#waiDiv").append($newDiv1);
        $("#waiDiv").append($newDiv2);
        $("#waiDiv").append($newDiv3);
        $("#waiDiv").append($newDiv4);
        $("#waiDiv").append($newDiv5);
        $("#waiDiv").append($newDiv6);
        $("#waiDiv").append($newDiv7);
        $("#waiDiv").append($newDiv8);
        $("#waiDiv").append($newDiv9);
        $("#waiDiv").append($newDiv10);
    }
});
//子弹
function zidan() {
    var as = 1;
    //我的战机
    var num1 = document.getElementById("MyDiv");
    var m_top = num1.offsetTop - 10;
    var m_left = num1.offsetLeft + 55;
    if (shenji == 1) {
        kicks.play();
        $newDiv2 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left + 25) + "px; margin-top:" + (m_top) + "px; '><img src='Img/光效子弹.png' name='LEFTS'; /></div>";
        $newDiv3 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left - 25) + "px; margin-top:" + (m_top) + "px; '><img src='Img/光效子弹.png' name='YOU'; /></div>";
        $newDiv1 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left) + "px; margin-top:" + m_top + "px; '><img src='Img/光效子弹.png' name='飞机'; /></div>";
        $("#waiDiv").append($newDiv1);
        $("#waiDiv").append($newDiv2);
        $("#waiDiv").append($newDiv3);
        $("[name=YOU]").css("margin-left", "-=1px");
        $("[name=LEFTS]").css("margin-left", "+=1px");
        setTimeout("JJ()", 10000);
    } else {
        var $newDiv1 = "<div class='zidanDiv'; style=' width:20px;height:20px;position:absolute; margin-left:" + (m_left) + "px; margin-top:" + m_top + "px; '><img src='Img/子弹光效.png' name='飞机'; /></div>";
        $("#waiDiv").append($newDiv1);
        kicks.play();
    }
    var Rams = Math.round(Math.random() * 7 + 1);
    $(".zidanDiv").css("margin-top", "-=" + Rams + "0px");
    //循环子弹对象
    $(".zidanDiv").each(function () {
        zidanDiv = this;
        //判断越界的子弹并删除
        if (zidanDiv.offsetTop <= 30) {
            $(zidanDiv).remove();
        }
    });
}
//敌方Boss
function Boss() {
    //动态生成敌方Boss
    var $newDivs = "<div class='BOSS'; style=' width:222px;height:133px;position:absolute; margin-left:160px; margin-top:0px; '><img src='Img/BOSS_" + BossType + ".png' /></div>";
    $("#waiDiv").append($newDivs);
  
}
//生成云
function yun() {
    //动态生成敌方Boss
    var $newDivs = "<div class='yun'; style=' width:300px;height:270px;position:absolute; margin-left:300px; margin-top:0px; '><img src='Img/云素材1.png' /></div>";
    var $newDivs1 = "<div class='yun'; style=' width:300px;height:270px;position:absolute; margin-left:0px; margin-top:50px; '><img src='Img/云素材1.png' /></div>";
    $("#waiDiv").append($newDivs1);
    $("#waiDiv").append($newDivs);
    $(".yun").each(function () {
        var yuns = this;
        if (yuns.offsetTop >= 390) {
            $(this).remove();
        }
    });
}
//敌对小飞机

function newAi() {
    //随机飞机位置
    var Ram = Math.round(Math.random() * 4 + 1);
    var $newDivs = "<div class='newFeiJi'; style=' width:60px;height:50px;position:absolute; margin-left:" + Ram + "00px; margin-top:0px; '><img src='Img/小飞机_" + FeiJiType + ".png' /></div>";
    $("#waiDiv").append($newDivs);
    $(".newFeiJi").each(function () {
        var newFeiJi = this;
        if (newFeiJi.offsetTop >= 800) {
            $(this).remove();
        }
        if (newFeiJi.offsetTop >= 350) {
            if (newFeiJi.offsetTop >= 200) {
                danmussss();
            }
            JB.play();
        }
    });
}
//敌对中飞机

function newZhongAi() {
    $(".newDaFeiJi").each(function () {
        newDaFeiJi = this;
        //我的战机
        var num1 = document.getElementById("MyDiv");
        //随机飞机位置
        var Ram = Math.round(Math.random() * 4 + 1);
        //获得大飞机的坐标，让中飞机从它肚子里面出来
        var top = (newDaFeiJi.offsetTop + 120);//上边距
        var Left = newDaFeiJi.offsetLeft + 30;//下边距
        //动态插入中飞机
        var $newDivs = "<div class='newZhongFeiJi'; style=' width:50px;height:60px;position:absolute; margin-left:" + Left + "px; margin-top:" + top + "px; '><img src='Img/飞机_" + FeiJiType + ".png' /></div>";
        $("#waiDiv").append($newDivs);
        //循环遍历中飞机对象,让越界的飞机消失
        $(".newZhongFeiJi").each(function () {
            newZhongFeiJi = this;
            if (newZhongFeiJi.offsetTop >= 800) {
                $(newZhongFeiJi).remove();
            }
            if (newZhongFeiJi.offsetTop >= 350) {
                if (newFeiJi.offsetTop >= 200) {
                    danmussss();
                }
                JB.play();
            }
        });
    });
}
//敌对大飞机

function newDaAi() {
    //随机飞机位置
    var Ram = Math.round(Math.random() * 4 + 1);
    //动态生成大飞机
    var $newDivs = "<div class='newDaFeiJi'; style=' width:178px;height:133px;position:absolute; margin-left:" + Ram + "00px; margin-top:0px; '><img src='Img/大飞机_" + FeiJiType + ".png' /></div>";
    $("#waiDiv").append($newDivs);
    ////循环删除越界的飞机
    $(".newDaFeiJi").each(function () {
        var newDaFeiJi = this;
        if (newDaFeiJi.offsetTop >= 800) {
            $(newDaFeiJi).remove();
        }
        if (newDaFeiJi.offsetTop >= 350) {
            if (newFeiJi.offsetTop >= 200) {
                danmussss();
            }
            JB.play();
        }
    });
}
//复位子弹
function JJ() {
    shenji = 0;
}