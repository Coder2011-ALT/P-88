var canvas = new fabric.Canvas('myCanvas');
var blockWidth = 30;
var blockHeight = 30;
var playerY = 10;
var playerX = 10;
var playerImg = " ";
var blockImg = " ";

function player_update() {
    fabric.Image.fromURL("images/player.png", function (Img) {
        playerImg = Img;
        playerImg.scaleToWidth(150);
        playerImg.scaleToHeight(140);
        playerImg.set({
            top: playerY,
            left: playerX
        });

        canvas.add(playerImg);
    });
}

function new_Image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        blockImg = Img;
        blockImg.scaleToWidth(blockWidth);
        blockImg.scaleToHeight(blockHeight);
        blockImg.set({
            top: playerY,
            left: playerX
        });

        canvas.add(blockImg);
    });
}

window.addEventListener("keydown", keyDown)

function keyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("Increase Size");
        blockHeight += 10;
        blockWidth += 10;
        document.getElementById("currentWidth").innerHTML = blockWidth;
        document.getElementById("currentHeight").innerHTML = blockHeight;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("Decrease Size");
        blockHeight -= 10;
        blockWidth -= 10;
        document.getElementById("currentWidth").innerHTML = blockWidth;
        document.getElementById("currentHeight").innerHTML = blockHeight;
    }

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

    if (keyPressed == "66") {
        new_Image("hulkd_body.png");
        console.log("B");
    }
    if (keyPressed == "70") {
        new_Image("thor_face.png");
        console.log("F");
    }
    if (keyPressed == "76") {
        new_Image("spiderman_legs.png");
        console.log("L");
    }
    if (keyPressed == "82") {
        new_Image("ironman_right_hand.png");
        console.log("R");
    }
    if (keyPressed == "72") {
        new_Image("captain_america_left_hand.png");
        console.log("H");
    }
}

function up() {

}
function down() {

}
function left() {

}
function right() {

}