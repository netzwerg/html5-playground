$(document).ready(function () {
    var tiltedLeft = false, tiltedRight = false;
    $('body').keydown(function (evt) {
        var xOrigin, zAngle;
        switch (evt.keyCode) {
            case 37: // left
                if (tiltedRight) {
                    xOrigin = 400;
                    zAngle = "-0";
                    tiltedRight = false
                } else if (tiltedLeft == false) {
                    xOrigin = 200;
                    zAngle = -90;
                    tiltedLeft = true
                }
                break;
            case 39: // right
                if (tiltedLeft) {
                    xOrigin = 200;
                    zAngle = "-0";
                    tiltedLeft = false
                } else if (tiltedRight == false) {
                    xOrigin = 400;
                    zAngle = 90;
                    tiltedRight = true
                }
                break;
        }
        var cube = $('#cube')[0];
        cube.style["-webkit-transform-origin"] = xOrigin + "px 400px";
        cube.style["-webkit-transform"] = "rotateZ(" + zAngle + "deg)";
    });
});