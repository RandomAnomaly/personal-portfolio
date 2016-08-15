/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    clearLaptop();
    clearTachy();
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
            
            //enter tachy screen
            if(nextIndex === 3){
                animateInTachy();
            }
            //leave tachy screen
            if(index === 3){
                clearTachy();
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
        var styles = { transition: "stroke-dashoffset 0.5s linear",
            offset: length, array: length };
        applyStyleToSvgPath(element, styles);
    }
}

function animateInLaptop() {
    var paths = document.querySelectorAll('#section2 path');
    var style = { transition: "stroke-dashoffset 1s linear", offset: 0 };
    applyStyleToSvgPathArray(paths, style);
}

function clearTachy(){
    var paths = document.querySelectorAll('#section3 path');
    for (var i = 0; i < paths.length; i++) {
        var element = paths[i];
        var length = element.getTotalLength();
        var styles = { transition: "stroke-dashoffset 0.5s linear",
            offset: length, array: length };
        applyStyleToSvgPath(element, styles);
    }
}

function animateInTachy() {
    var paths = document.querySelectorAll('#section3 path');
    var style = { transition: "stroke-dashoffset 1s linear", offset: 0 };
    applyStyleToSvgPathArray(paths, style);
}

function applyStyleToSvgPathArray(pathArray, style){
    for(var i = 0; i < pathArray.length; i += 1){
        var element = pathArray[i];
        applyStyleToSvgPath(element, style);
    }
}

function applyStyleToSvgPath(path, styles){
    var pathStyles = path.style;
    
    pathStyles.transition = styles.transition;
    pathStyles.strokeDashoffset = styles.offset;
    
    if(styles.array){
        pathStyles.strokeDasharray = styles.array;
    }
}