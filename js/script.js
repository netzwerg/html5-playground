$(document).ready(function () {
    var xAngle = 0, zAngle = 0;
    $('body').keydown(function (evt) {
        switch (evt.keyCode) {
            case 37: // left
                zAngle -= 90
                $('#cube')[0].style["-webkit-transform-origin"] = "bottom left";
                $('#cube')[0].style["-webkit-transform"] = "rotateZ(" + zAngle + "deg)";
                break;

        }
    });
});