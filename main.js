var canvas = new fabric.canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;


player_x = 10;
player_y = 10;

var player_object = "";
var block_image_objects = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);

        player_object.scaleToHeight(140);

        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_objects = Img;
        block_image_objects.scaleToWidth(block_image_width);
        block_image_objects.scaleToHeight(block_image_height);

        block_image_objects.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_objects);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("CurWidth").innerHTML = block_image_width;
        document.getElementById("CurHeight").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keypressed == '77') {
        console.log("m and shift pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("CurWidth").innerHTML = block_image_width;
        document.getElementById("CurHeight").innerHTML = block_image_height;
    }

    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '83') {
       new_image('Spidey.jpg');
    }

    if (keypressed == '84') {
        new_image('thorhand.jpg');
    }
  if (keypressed == '') {

  }

}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;

        console.log(block_image_height);
        console.log(player_x, player_y);

        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;

        console.log(block_image_height);
        console.log(player_x, player_y);

        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 700) {
        player_x = player_x + block_image_height;
        console.log(block_image_height);
        console.log(player_x, player_y);

        canvas.remove(player_object);

        player_update();
    }
}

function left() {
    if (player_x <= 700) {
        player_x = player_x - block_image_height;
        console.log(block_image_height);
        console.log(player_x, player_y);

        canvas.remove(player_object);

        player_update();
    }
}


