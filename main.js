var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.addEventListener("touchstart", my_touchstart);

var width = screen.width;
var height = screen.height;
var new_width = width - 70;
var new_height = height - 30;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
}
function my_touchstart(e) {
    console.log("My Touch start");
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    console.log("my_touchmove");
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    var color = document.getElementById("color").value;
    var line_width = document.getElementById("width").value;
    var radius = document.getElementById("radius").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.arc(current_x, current_y, radius, 0, 360);
    ctx.stroke();
}
