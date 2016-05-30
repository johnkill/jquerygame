var x = 0;
var y = 0;
function go() {
    y += 0.5;
    $("#waiDiv").css({ "background-position-x": x + "px", "background-position-y": y + "px" });
}
$(function () {
    setInterval("go()", 10);
})
