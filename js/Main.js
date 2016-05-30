function playMp3() {
    beijin.play();
}
//敌对飞机速度  margin-left:50%; margin-top:560px; 
function zou() {
    $(".BOSS").css("margin-top", "+=1px");
    //限定BOSS位置
    $(".BOSS").each(function() {
        var boss = this;
        //判断BOOS的锁定位置
        if (boss.offsetTop >= 60) {
            $(".BOSS").css("margin-top", "60px");
        }
    });
    $(".yun").css("margin-top", "+=2px");
    $(".newFeiJi").css("margin-top", "+=" + FeiJSuDu + "px");
    $(".newZhongFeiJi").css("margin-top", "+=" + ZhongFeiJSuDu + "px");
    $(".newDaFeiJi").css("margin-top", "+=" + DaFeiJSuDu + "px");
    //宝箱
    $(".newBaoXian").css("margin-top", "+=1px");
}
//窗体加载事件
$(function() {
    var width = $(window).width();
    var height = $(window).height()
    $("#waiDiv").css({
            "height": height,
            "width": width
        })
        //生成云
    XFJ = setInterval("yun()", 8000);
    setInterval("playMp3()", 99000)
    setInterval("fen()", 100);
    //BOSS子弹
    setInterval("BOSSzidan()", 40);
    //背景音乐
    beijin.play();
    //飞机速度
    setInterval("zou()", 40);
    //生成子弹
    setInterval("zidan()", 20);
    //生成宝箱
    setInterval("BaoXian()", 15000);
    keyDown();
    //控制飞机移动
    $("#waiDiv").mousemove(function(e) {
        console.log("y" + e.pageY);
        console.log("x" + e.pageX);
        $("#MyDiv").css("margin-top", e.pageY - 20);
        $("#MyDiv").css("margin-left", e.pageX - 60);
        $("#MyDiv").css({
            cursor: "none"
        });
        //限制飞机的活动范围
        var MyDiv = document.getElementById("MyDiv");
        if (MyDiv.offsetTop <= 0) {
            $("#MyDiv").css("margin-top", "0px");
        }
        if (MyDiv.offsetTop >= height) {
            $("#MyDiv").css("margin-top", height);
        }
        if (MyDiv.offsetLeft <= 0) {
            $("#MyDiv").css("margin-left", "0px");
        }
        if (MyDiv.offsetLeft >= width) {
            $("#MyDiv").css("margin-left", width);
        }
    });

    function keyDown() {
        document.onkeydown = function(e) {
            var keycode = e.which;
            var realkey = String.fromCharCode(e.which);
            console.log(keycode);
            var divY = $("#MyDiv").offset().top;
            var divX = $("#MyDiv").offset().left;
            if (keycode == 87 || keycode == 38) {
                console.log(divX);
                console.log(divY);
                 console.log(divX+10);
                $("#MyDiv").css("margin-top", divY-10);
            }
            if (keycode == 83 || keycode == 40) {
                $("#MyDiv").css("margin-top", divY+10);
            }
            if (keycode == 65 || keycode == 37) {
                $("#MyDiv").css("margin-left", divX- 10);
            }
            if (keycode == 68 || keycode == 39) {
                $("#MyDiv").css("margin-left", divX + 10);
            }
            var MyDiv = document.getElementById("MyDiv");
            if (MyDiv.offsetTop <= 0) {
                $("#MyDiv").css("margin-top", "0px");
            }
            if (MyDiv.offsetTop >= (height-80)) {
                $("#MyDiv").css("margin-top", height-80);
            }
            if (MyDiv.offsetLeft <= 0) {
                $("#MyDiv").css("margin-left", "0px");
            }
            if (MyDiv.offsetLeft >= (width-115)) {
                $("#MyDiv").css("margin-left", width-115);
            }

        }
    };
    //我方攻击的方法
    setInterval("Kick()", 10);
});