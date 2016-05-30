var yuansu = "";
function danmu() {
   
    $("#danmu1").text("当前通过" +(tiaojian+1)+ "关!");
    $("#danmu2").text("恭喜获得元素技能,单击鼠标可使用！");
    $("#danmu1").fadeIn("show");
    $("#danmu2").fadeIn("show");
    $("#danmu1").fadeOut(4500);
    $("#danmu2").fadeOut(4500);
};
function danmus() {
    if (tiaojian==0) {
        $("#danmu3").text("游戏开始,祝您路途愉快！");
    }
    $("#danmu3").text("前方高能,请注意躲避子弹！");
    $("#danmu3").fadeIn("show");
    $("#danmu3").fadeOut(4500);
};
function danmuss() {
    $("#danmu3").text("游戏开始,祝您路途愉快！");
    $("#danmu3").fadeIn("show");
    $("#danmu3").fadeOut(4500);
};
function danmusss() {
    $("#danmu3").text("击碎宝箱，有机会升级武器！");
    $("#danmu3").fadeIn("show");
    $("#danmu3").fadeOut(4500);
};
function danmussss() {
    $("#danmu3").text("注意！别让敌军越界了！");
    $("#danmu3").fadeIn("show");
    $("#danmu3").fadeOut(4500);
};
function danmusssss() {
    $("#ZJM").fadeIn("show");
    $("#CZ").click(function () {
        $("#CZDiv").fadeIn("show");
        $("#CZDiv").fadeOut(10000);
    });
  
};