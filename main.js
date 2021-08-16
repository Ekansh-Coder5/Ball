var canvas = new fabric.Canvas('myCanvas');

ball_x = 10;
ball_y = 10;
hole_y = 400
hole_x = 800

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    ball_object.scaleToWidth(150);
    ball_object.scaleToHeight(140);
    ball_object.set({
    top:ball_y,
    left:ball_x
    });
    canvas.add(ball_obj);
    


    });
}

function load_img()
{
    fabric.Image.fromURL("golf-h.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:hole_y,
        left:hole_x
    });
    canvas.add(hole_obj);
    });
    new_image();
}

if((ball_x==hole_x&&ball_y==hole_y)) {
    canvas.remove(ball_obj);
    document.getElementById('hit').innerHTML = "YOU HAVE HIT THE GOAL!!";
    document.getElementById('myCanvas').style.borderColor="red";
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "38") {
        up();
        console.log("up");
    }

    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }

}

function up() {
    if (ball > 0) {
        ball_x = ball_y - block_image_height;
        console.log(ball_y + ball_x + block_image_height);
        canvas.remove(ball_obj);
        new_image();
    }
}
function down() {
    if (ball < 440) {
        ball_y = ball_y + block_image_height;
        console.log(ball_y + ball_x + block_image_height);
        canvas.remove(ball_obj);
        new_image();
    }
}
function left() {
    if (ball_x > 0) {
        ball_x = ball_x - block_image_height;
        console.log(ball_y + ball_x + block_image_height);
        canvas.remove(ball_obj);
        new_image();
    }
}
function right() {
    if (ball_x < 850) {
        ball_x = ball_x + block_image_height;
        console.log(ball_y + ball_x + block_image_height);
        canvas.remove(ball_obj);
        new_image();
    }
}