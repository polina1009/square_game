var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var score = 0;
var game_timeout;

var sq_size = 35;// размер квадратика

// создаю функцию, которая очищает поле canvas

function init() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
}
init();

// создаю масив, в который кладутся все созданые квадратики

var squares = [];

function start_game() {
    stop_game();

    score = 0;
    document.getElementById("score").innerHTML = 0;

    // запускаем создание квадратиков

    function add_square_at_random_time() {
        var time_delay = Math.floor(Math.random()*3000+200);// задержка от 200ms
        add_sguare();

        // game_timeout - нужен, чтоб потом остановить игру

        game_timeout = setTimeout(function() {
            add_square_at_random_time();
        }, time_delay);
    }

    add_square_at_random_time();
}

function stop_game() {
    clearTimeout(game_timeout);

    for (i = 0; i < squares.length; i++) {
        // удаляем квадратик
        cancelAnimationFrame(squares[i].animation_id);
        ctx.clearRect(squares[i].left_b-1, squares[i].top_b-1, sq_size+2, sq_size+2);
        squares.splice(i--, 1);
    }
}

function add_sguare() {
    var x = Math.floor(Math.random()*(620-sq_size));
    var y = 0;//Math.floor(Math.random()*(460-sq_size));
    var width = sq_size;
    var height = sq_size;
    var speed = Math.floor((Math.random()*3)+1);

    var r_color = Math.floor(Math.random()*255);
    var g_color = Math.floor(Math.random()*255);
    var b_color = Math.floor(Math.random()*255);

    // задает цвет для ВСЕГО canvas

    ctx.fillStyle=`rgb(${r_color}, ${g_color}, ${b_color})`;
    ctx.fillRect(x, y, width, height);

    var square_borders = {
        left_b: x,
        top_b: y,
        right_b: x+sq_size,
        bottom_b: y+sq_size
    }

    // создаю для проверки того, что клик произошел внутри квадратика

    squares.push(square_borders);

    // запускаем движение

    function animate_square() {
        ctx.clearRect(square_borders.left_b-1, square_borders.top_b-1, sq_size+2, sq_size+2);
        ctx.fillRect(square_borders.left_b, square_borders.top_b+speed, sq_size, sq_size);

        square_borders.top_b += speed;

        if(square_borders.top_b >= canvas.clientHeight) {
            square_borders.top_b = 0;
        }

        // записываю актуальные значения для ВСЕХ границ квадратика

        square_borders.bottom_b = square_borders.top_b+sq_size;
        square_borders.right_b = square_borders.left_b+sq_size;

        square_borders.animation_id = requestAnimationFrame(animate_square);
    }
    animate_square();
}

document.getElementById('canvas').onclick = function(event) {

    // координаты клика

    var click_x = event.offsetX;
    var click_y = event.offsetY;

    // перебираю квадратики и проверяю не совершался ли клик внутри одного из них

    for (i = 0; i < squares.length; i++) {
         if (click_x >= squares[i].left_b && click_x <= squares[i].right_b && click_y >= squares[i].top_b && click_y <= squares[i].bottom_b) {

             // удаляем квадратик

             cancelAnimationFrame(squares[i].animation_id);
             ctx.clearRect(squares[i].left_b-1, squares[i].top_b-1, sq_size+2, sq_size+2);
             squares.splice(i--, 1);

             // увеличиваем счетчик

             score++;
             document.getElementById("score").innerHTML = score;
         }
    }
}