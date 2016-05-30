
//攻击的方法
function Kick() {

    //循环子弹对象
    zidanDiv = $(".zidanDiv");
    for (var zidan = 0; zidan < zidanDiv.size() ; zidan++) {
        //循环小飞机对象
        var newFeiJi = $(".newFeiJi");
        for (var FeiJi = 0; FeiJi < newFeiJi.size() ; FeiJi++) {
            //打到小飞机
            if (zidanDiv[zidan].offsetLeft >= newFeiJi[FeiJi].offsetLeft
                //左右边距攻击范围
                && zidanDiv[zidan].offsetLeft <= newFeiJi[FeiJi].offsetLeft + 70
                //限制上边距的攻击范围
                && zidanDiv[zidan].offsetTop >= newFeiJi[FeiJi].offsetTop + 60
                //限制子弹攻击到的范围
                && zidanDiv[zidan].offsetTop <= newFeiJi[FeiJi].offsetTop + 80) {
                Boxs.play();
                $(newFeiJ).remove();
                FenShu += 40;
            }
            //删除多余的子弹
            if (zidanDiv[zidan].offsetTop < newFeiJi[FeiJi].offsetTop
                && zidanDiv[zidan].offsetLeft <= newFeiJi[FeiJi].offsetLeft + 60
                && zidanDiv[zidan].offsetLeft >= newFeiJi[FeiJi].offsetLeft) {
                $(zidanDiv[zidan]).css("background-image", "url('Img/游戏背景.jpg')")
                $(zidanDiv[zidan]).remove();
                newFeiJ = newFeiJi[FeiJi];
            }
            //循环大飞机对象   
            var newDaFeiJi = $(".newDaFeiJi");
            var str = newFeiJi[FeiJi].offsetTop;
            kill(str);
            for (var DaFeiJi = 0; DaFeiJi < newDaFeiJi.size() ; DaFeiJi++) {
                //打到大飞机
                if (zidanDiv[zidan].offsetLeft >= newDaFeiJi[DaFeiJi].offsetLeft
                    //左右边距攻击范围
                    && zidanDiv[zidan].offsetLeft <= newDaFeiJi[DaFeiJi].offsetLeft + 180
                    //限制上边距的攻击范围
                    && zidanDiv[zidan].offsetTop >= newDaFeiJi[DaFeiJi].offsetTop + 113
                    //限制子弹攻击到的范围
                    && zidanDiv[zidan].offsetTop <= newDaFeiJi[DaFeiJi].offsetTop + 140) {
                    cishu1+=1;
                }
                //删除多余的子弹
                if (zidanDiv[zidan].offsetTop < newDaFeiJi[DaFeiJi].offsetTop + 90
                    && zidanDiv[zidan].offsetLeft <= newDaFeiJi[DaFeiJi].offsetLeft + 110
                    && zidanDiv[zidan].offsetLeft >= newDaFeiJi[DaFeiJi].offsetLeft) {
                    $(zidanDiv[zidan]).css("background-image", "url('Img/游戏背景.jpg')")
                    $(zidanDiv[zidan]).remove();
                    newDaFeiJ = newDaFeiJi[DaFeiJi];
                }
                if (cishu1 >= 200) {
                    Box.play();
                    $(newDaFeiJ).remove();
                    FenShu += 100;
                    cishu1 = 0;                
                }
                var MyFeiJi = document.getElementById("MyDiv");
                //循环中飞机对象   
                var newZhongFeiJi = $(".newZhongFeiJi");
                var str = newDaFeiJi[DaFeiJi].offsetTop;
                kill(str);
                for (var ZhongFeiJi = 0; ZhongFeiJi < newZhongFeiJi.size() ; ZhongFeiJi++) {
                    //打到中飞机
                    if (zidanDiv[zidan].offsetLeft >= newZhongFeiJi[ZhongFeiJi].offsetLeft
                        //左右边距攻击范围
                        && zidanDiv[zidan].offsetLeft <= newZhongFeiJi[ZhongFeiJi].offsetLeft + 100
                        //限制上边距的攻击范围
                        && zidanDiv[zidan].offsetTop >= newZhongFeiJi[ZhongFeiJi].offsetTop + 80
                        //限制子弹攻击到的范围
                        && zidanDiv[zidan].offsetTop <= newZhongFeiJi[ZhongFeiJi].offsetTop + 100) {
                        Boxs.play();
                        cishu += 1;
                       
                    }
                    //删除多余的子弹
                    if (zidanDiv[zidan].offsetTop < newZhongFeiJi[ZhongFeiJi].offsetTop + 40
                        && zidanDiv[zidan].offsetLeft <= newZhongFeiJi[ZhongFeiJi].offsetLeft + 100
                        && zidanDiv[zidan].offsetLeft >= newZhongFeiJi[ZhongFeiJi].offsetLeft) {
                        $(zidanDiv[zidan]).css("background-image", "url('Img/游戏背景.jpg')")
                        $(zidanDiv[zidan]).remove();
                        newZhongFeiJ = newZhongFeiJi[ZhongFeiJi];
                        
                    }
                    if (cishu >= 100) {
                        $(newZhongFeiJ).remove();
                        FenShu += 200;
                        cishu = 0;
                    }
                    //我方阵亡
                    var str = newZhongFeiJi[ZhongFeiJi].offsetTop;
                    kill(str);
                }
            }
        }
        var newBaoXian = $(".newBaoXian");
        for (var BaoXian = 0; BaoXian < newBaoXian.size() ; BaoXian++) {
            //打到中飞机
            if (zidanDiv[zidan].offsetLeft >= newBaoXian[BaoXian].offsetLeft
                //左右边距攻击范围
                && zidanDiv[zidan].offsetLeft <= newBaoXian[BaoXian].offsetLeft + 50
                //限制上边距的攻击范围
                && zidanDiv[zidan].offsetTop >= newBaoXian[BaoXian].offsetTop + 60
                //限制子弹攻击到的范围
                && zidanDiv[zidan].offsetTop <= newBaoXian[BaoXian].offsetTop + 80) {
                $(newBaoXian[BaoXian]).remove();
                shenji = 1;
            }
        }
        //循环BOSS对象   
        var Boss = $(".BOSS");
        for (var bx = 0; bx < Boss.size() ; bx++) {
            //删除多余的子弹
            if (zidanDiv[zidan].offsetTop < Boss[bx].offsetTop + 170
                && zidanDiv[zidan].offsetLeft <= Boss[bx].offsetLeft + 130
                && zidanDiv[zidan].offsetLeft >= Boss[bx].offsetLeft) {
                $("#Bossyellow").css("width", "-=1px;");
                var bossW = document.getElementById("Bossyellow").offsetWidth;
                if (bossW <= 5) {
                    $("#BOSS_HP").css("width", "-=1px;");
                    var bossR = document.getElementById("BOSS_HP").offsetWidth;
                    if (bossR <= 5) {
                        danmu();
                        Boxs.play();
                        $(Boss).remove();
                        setInterval("jiaHP()", 20);
                        tiaojian += 1;
                        FenShu += 1000;
                      
                    }
                }
                $(zidanDiv[zidan]).remove();
                Bosse = Boss[bx];
            }
            //循环BOSS子弹  
            var BossZiDan = $(".Bosszidan");
            var MyDivs = document.getElementById("MyDiv");
            for (var ZiDan = 0; ZiDan < BossZiDan.size() ; ZiDan++) {
                //删除多余的子弹
                if (BossZiDan[ZiDan].offsetTop >= MyDivs.offsetTop - 10
                    && BossZiDan[ZiDan].offsetTop <= MyDivs.offsetTop + 60
                    && BossZiDan[ZiDan].offsetLeft <= MyDivs.offsetLeft + 100
                    && BossZiDan[ZiDan].offsetLeft >= MyDivs.offsetLeft-10) {
                    $("#MyHp").css("width", "-=5px;");
                    var w = document.getElementById("MyHp").offsetWidth;
                    if (w<=3) {
                        kill(900);
                    }
                    $(BossZiDan[ZiDan]).remove();
                }
            }
        }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (FenShu >= 0 && guanka == 0) {
            danmuss();
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 1000);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 11000);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 10000);
            guanka = 1;
        } else if (FenShu >= 6000 && guanka == 1) {
            //BOSS出来时只生成小飞机
            clearInterval(DFJ);
            clearInterval(ZFJ);
            //生成BOSS
            JB.play();
            danmus();
            setTimeout("Boss()", BossTime);
            //生成BOSS子弹
            setTimeout("BOSSzidan()", 3000);
            //BOSS子弹速度
            setInterval("BossZiDanSD()", 100);
            //飞机类型
            FeiJiType = 1;
            //BOSS类型
            BossType = 0;
            //关卡数
            guanka++;
            setInterval("fen()", 100);
        } else if (tiaojian == 1 && guanka == 2) {
            clearInterval(DFJ);
            clearInterval(ZFJ);
            clearInterval(XFJ);
            FeiJiType = 2;
            BossType = 1;
            guanka = 3;
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 1000);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 10000);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 9000);
            // $("#waiDiv").css("background-image", "url('Img/场景3.jpg')");
        } else if (FenShu >= 28000 && tiaojian == 1 && guanka == 3) {
            //关闭中飞机
            clearInterval(ZFJ);
            //生成BOSS
            JB.play();
            danmus();
            setTimeout("Boss()", BossTime);
            guanka = 4;
        } else if (tiaojian == 2 && guanka == 4) {
            clearInterval(DFJ);
            clearInterval(ZFJ);
            clearInterval(XFJ);
            FeiJiType = 3;
            BossType = 2;
            guanka = 5;
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 1000);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 9000);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 8000);
        } else if (tiaojian == 2 && guanka == 5 && FenShu >= 42000) {
            //关闭重启飞机
            clearInterval(ZFJ);
            clearInterval(XFJ);
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 1700);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 10000);
            //生成BOSS
            JB.play();
            danmus();
            setTimeout("Boss()", BossTime);
            guanka = 6;
        } else if (tiaojian == 3 && guanka == 6) {
            clearInterval(DFJ);
            clearInterval(ZFJ);
            clearInterval(XFJ);
            FeiJiType = 4;
            BossType = 3;
            guanka = 7;
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 1000);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 8000);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 7000);
        } else if (tiaojian == 3 && guanka == 7 && FenShu >= 52000) {
            //关闭重启飞机
            clearInterval(ZFJ);
            clearInterval(XFJ);
            clearInterval(DFJ);
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 2000);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 10000);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 9000);
            //生成BOSS
            JB.play();
            danmus();
            setTimeout("Boss()", BossTime);
            guanka = 8;
        } else if (tiaojian == 4 && guanka == 8) {
            clearInterval(DFJ);
            clearInterval(ZFJ);
            clearInterval(XFJ);
            FeiJiType = 5;
            BossType = 4;
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 1000);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 6000);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 5000);
            guanka = 9;
        } else if (tiaojian == 4 && guanka == 9 && FenShu >= 60000) {
            //关闭重启飞机
            clearInterval(ZFJ);
            clearInterval(XFJ);
            clearInterval(DFJ);
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 1400);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 9000);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 7000);
            //生成BOSS
            JB.play();
            danmus();
            setTimeout("Boss()", BossTime);
            guanka = 10;
        } else if (tiaojian == 5 && guanka == 10) {
            clearInterval(DFJ);
            clearInterval(ZFJ);
            clearInterval(XFJ);
            FeiJiType = 5;
            BossType = 5;
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 1000);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 6500);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 5500);
            guanka = 11;
        } else if (tiaojian == 5 && guanka == 11 && FenShu >= 68000) {
            guanka = 12;
            //关闭重启飞机
            clearInterval(ZFJ);
            clearInterval(XFJ);
            clearInterval(DFJ);
            //生成敌人小飞机
            XFJ = setInterval("newAi()", 6000);
            //生成敌人中飞机
            ZFJ = setInterval("newZhongAi()", 8500);
            //生成敌人大飞机
            DFJ = setInterval("newDaAi()", 6500);
            //生成BOSS
            JB.play();
            danmus();
            setTimeout("Boss()", BossTime);
        } else if (tiaojian == 6) {
            if (alert("您已经通关游戏结束，总分:" + FenShu + "\n（点击确定重新开始）")) {

            } else {
                location.replace(location.href);
                FenShu = 0;
                return;
            }
            tiaojian = 111;
        }
    }

}


//加血
function jiaHP() {
    var bossR = document.getElementById("BOSS_HP").offsetWidth;
    if (bossR <= 5) {
        $("#BOSS_HP").css("width", "+=550px;");
        $("#Bossyellow").css("width", "+=550px;");
        if (bossR >= 550) {
            $("#BOSS_HP").css("width", "550px;");
            $("#Bossyellow").css("width", "550px;");
        }

    }

}

//计算分数
function fen() {

    $("#tx").text("分数:" + FenShu);
}

//阵亡的方法
function kill(str) {
    if (str >= 850 && FenShu != 0) {
        $("#MyDiv").html("<img src='image/本方飞机爆炸.gif' />");
        if (alert("游戏结束，总分:" + FenShu + "\n（点击确定重新开始）")) {

        } else {
            location.replace(location.href);
            FenShu = 0;
            return;
        }
    } else {
        return;
    }
}