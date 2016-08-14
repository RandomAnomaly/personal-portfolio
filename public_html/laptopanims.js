/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var animLength = 1000;

$(document).ready(function () {
    // Apply page piling
    $('#pagepiling').pagepiling({
    });

    var paths = document.querySelectorAll('#section1 path');

    for (var i = 0; i < paths.length; i++) {
        var element = paths[i];
        var length = element.getTotalLength();
        element.style.strokeDasharray = length;
        element.style.strokeDashoffset = length;
    }

    var orangeLight = document.querySelector('.statusLightsOrange');
    window.setInterval(flashLight(orangeLight, 'orange'), 1000);
    
    var whiteLight = document.querySelector('.statusLightsWhite');
    window.setInterval(flashLight(whiteLight, 'white'),500);
    
    var greenLight = document.querySelector('.statusLightsGreen');
    window.setInterval(flashLight(greenLight, 'green'),1500);
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function flashLight(element, color) {
    return function () {
        var e = element;
        var c = color;
        
        (e.style.fill === 'black') ? e.style.fill = c : e.style.fill = 'black';
    }
}