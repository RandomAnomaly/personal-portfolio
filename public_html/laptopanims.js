/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var animLength = 1000;

$(document).ready(function () {
    // Apply page piping
    $('#pagepiling').pagepiling();

    var paths = document.querySelectorAll('#section1 path');

    for (var i = 0; i < paths.length; i++) {
        var element = paths[i];
        var length = element.getTotalLength();
        console.log(length);
        element.style.strokeDasharray = length;
        element.style.strokeDashoffset = length;
    }




});