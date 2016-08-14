/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    clearLaptop();
    // Apply page piling
    $('#pagepiling').pagepiling({
        
        onLeave: function(index, nextIndex, direction){
            
            // enter latop screen
            if(nextIndex === 2){
                animateInLaptop();
            }
            // leave laptop screen
            if(index === 2){
                clearLaptop();
            }
        }
    });

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
    };
}

function clearLaptop() {
    
    var paths = document.querySelectorAll('#section2 path');

    for (var i = 0; i < paths.length; i++) {
        var element = paths[i];
        var length = element.getTotalLength();
        
        element.style.transition = "stroke-dashoffset 0.5s linear";
        element.style.strokeDasharray = length;
        element.style.strokeDashoffset = length;
    }
}

function animateInLaptop() {
    
    var paths = document.querySelectorAll('#section2 path');

    for (var i = 0; i < paths.length; i++) {
        var element = paths[i];
        element.style.transition = "stroke-dashoffset 2s linear";
        element.style.strokeDashoffset = 0;
    }
}