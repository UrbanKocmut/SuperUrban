'use strict';
var canvas;

function init() {
    canvas = document.getElementById("canvas").getContext("2d");
}

function update() {
    window.requestAnimationFrame(update);
}


window.onload = function () {
    init();
    update();
}