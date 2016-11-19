var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function init() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
}
init();

function start_game() {
    setInterval(function () {
        add_sguare()
    }, 500)
}

function add_sguare() {
    var x = Math.random()*620;
    var y = Math.random()*460;
    var width = 20;
    var height = 20;

    ctx.fillRect(x, y, width, height);
}






// var currentPos = 0;
//
// function start_game() {
//     console.log("asdf")
// }
// setInterval(start_game, 1000);
//
//
// function animate() {
//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
//     // ctx.fillRect(320, currentPos, 20, 20);
//
//
//
//
//     // ctx.fillRect(32, currentPos, 20, 20);
//     ctx.fillRect(Math.random()*200, Math.random()*200, 20, 20);
//
//     // currentPos += 2;
//     // if(currentPos >= canvas.clientHeight) {
//     //     currentPos = 0;
//     // }
//
//     //requestAnimationFrame(animate);
// }
//
// document.body.onload = animate;
