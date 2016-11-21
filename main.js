var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var score = 0;


function init() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
}
init();

var squares = [];

function start_game() {
    score = 0;
    document.getElementById("score").innerHTML = 0;


    setInterval(function () {
        add_sguare()
    }, 2500)
}

function add_sguare() {
    var x = Math.random()*620;
    var y = Math.random()*460;
    var width = 20;
    var height = 20;

    ctx.fillRect(x, y, width, height);


    var square_borders = {
        left_b: x,
        top_b: y,
        right_b: x+20,
        bottom_b: y+20
    }

    squares.push(square_borders);
}

document.getElementById('canvas').onclick = function(event) {

    var click_x = event.offsetX;
    var click_y = event.offsetY;
    //console.log(click_x, click_y);


    for (i = 0; i < squares.length; i++) {
         if (click_x >= squares[i].left_b && click_x <= squares[i].right_b && click_y >= squares[i].top_b && click_y <= squares[i].bottom_b) {
           //console.log("Ura!!")

             //удаляем квадратик


             ctx.clearRect(squares[i].left_b-1, squares[i].top_b-1, 22, 22);
             squares.splice(i, 1);


            // увеличиваем счетчик
             score++;
             document.getElementById("score").innerHTML = score;


         }
    }


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
