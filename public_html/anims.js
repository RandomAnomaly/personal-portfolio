/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var enterSpeed = 1;
var exitSpeed = 0.5;

var display = {
    applyStyleToSvgPath: function (path, styles) {
        var pathStyles = path.style;

        pathStyles.transition = styles.transition;
        pathStyles.strokeDashoffset = styles.offset;

        if (styles.array) {
            pathStyles.strokeDasharray = styles.array;
        }
    },
    applyStyleToSvgPathArray: function (pathArray, style) {
        for (var i = 0; i < pathArray.length; i += 1) {
            var element = pathArray[i];
            display.applyStyleToSvgPath(element, style);
        }
    }
};

var laptop = {
    flashLight: function (element, color) {
        return function () {
            var e = element;
            var c = color;
            (e.style.fill === 'black') ? e.style.fill = c : e.style.fill = 'black';
        };
    },
    clearLaptop: function () {
        var paths = document.querySelectorAll('#section2 path');
        for (var i = 0; i < paths.length; i++) {
            var element = paths[i];
            var length = element.getTotalLength();
            var styles = {transition: "stroke-dashoffset " + exitSpeed + "s linear",
                offset: length, array: length};
            display.applyStyleToSvgPath(element, styles);
        }
    },
    animateInLaptop: function () {
        var paths = document.querySelectorAll('#section2 path');
        var style = {transition: "stroke-dashoffset " + enterSpeed + "s linear", offset: 0};
        display.applyStyleToSvgPathArray(paths, style);
    },
    initialiseLaptop: function () {
        var orangeLight = document.querySelector('.statusLightsOrange');
        window.setInterval(laptop.flashLight(orangeLight, 'orange'), 1000);

        var whiteLight = document.querySelector('.statusLightsWhite');
        window.setInterval(laptop.flashLight(whiteLight, 'white'), 500);

        var greenLight = document.querySelector('.statusLightsGreen');
        window.setInterval(laptop.flashLight(greenLight, 'green'), 1500);
    }
};

var tachy = {
    clearTachy: function () {
        var paths = document.querySelectorAll('#section3 path');
        for (var i = 0; i < paths.length; i++) {
            var element = paths[i];
            var length = element.getTotalLength();
            var styles = {transition: "stroke-dashoffset " + exitSpeed + "s linear",
                offset: length, array: length};
            display.applyStyleToSvgPath(element, styles);
        }
    },
    animateInTachy: function () {
        var paths = document.querySelectorAll('#section3 path');
        var style = {transition: "stroke-dashoffset " + enterSpeed + "s linear", offset: 0};
        display.applyStyleToSvgPathArray(paths, style);
    }
};

$(document).ready(function () {
    laptop.initialiseLaptop();
    laptop.clearLaptop();
    tachy.clearTachy();
    // Apply page piling
    $('#pagepiling').pagepiling({
        onLeave: function (index, nextIndex, direction) {

            // enter latop screen
            if (nextIndex === 2) {
                laptop.animateInLaptop();
            }
            // leave laptop screen
            if (index === 2) {
                laptop.clearLaptop();
            }

            //enter tachy screen
            if (nextIndex === 3) {
                tachy.animateInTachy();
            }
            //leave tachy screen
            if (index === 3) {
                tachy.clearTachy();
            }
        }
    });
});