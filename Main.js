'use strict';
var canvas;
var timer = {
    time: 0,
    x: 320,
    y: 10,
    set: function () {
        timer.time = performance.now();
    },
    draw: function () {
        var diff = performance.now() - timer.time;
        canvas.fillText("FrameTime: "+String(diff), timer.x, timer.y);
        canvas.fillText("FPS: "+String(Math.floor((1/diff)*1000)), timer.x, timer.y+10);
    }
};
var box = {
    x: 50,
    y: 50,
    width: 20,
    height: 20,
    draw: function () {
        canvas.fillRect(box.x, box.y, box.width, box.height);
    }
};
var line = {
    y: 200,
    draw: function () {
        canvas.beginPath();
        canvas.moveTo(0, line.y);
        canvas.lineTo(canvas.WIDTH, line.y);
        canvas.stroke();
    }
};
var text = {
    x: 10,
    y: 10,
    text: "NI",
    draw: function () {
        canvas.fillText(text.text, text.x, text.y);
    }
};

function init() {
    canvas = document.getElementById("canvas").getContext("2d");
    canvas.WIDTH = canvas.canvas.width;
    canvas.HEIGHT = canvas.canvas.height;
}

function draw() {
    canvas.clearRect(0, 0, canvas.WIDTH, canvas.HEIGHT);
    line.draw();
    box.draw();
    text.draw();
}

function update() {
    timer.set();
    draw();
    timer.draw();
    window.requestAnimationFrame(update);
}


function keyHandler(event) {
    switch (event.keyCode) {
        case 37:
            text.text = "LEFT";
            break;
        case 38:
            text.text = "UP";
            break;
        case 39:
            text.text = "RIGHT";
            break;
        case 40:
            text.text = "DOWN";
            break;
    }
}

window.onload = function () {
    init();
    update();
}
window.addEventListener("keydown", keyHandler);