"use strict"

/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

function createRectangle(left, top, width, height, stylesMap) {
    var rectangle = createShape(left, top, width, height, stylesMap);

    rectangle.renderShape = function(canvasCtx) {
        canvasCtx.fillRect(this.left, this.top, this.width, this.height);
    }

    return rectangle;
}

registerPrototypalShape('Rectangle', createRectangle);

function createCircle(left, top, width, height, stylesMap) {
    var circle = createShape(left, top, width, height, stylesMap);

    circle.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(this.left, this.top, this.width / 2, 0, 2 * Math.PI);
        canvasCtx.fill();
        canvasCtx.stroke();
    }

    return circle;
}

registerPrototypalShape('Circle', createCircle);

function createText(left, top, right, width, height, stylesMap) {
    var text = createShape(left, top, width, height, stylesMap);

    text.renderShape = function (canvasCtx) {
        canvasCtx.font="20px Verdana";
        var canvas = document.getElementById("shapes-canvas");
        var gradient = canvasCtx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop("0", "blue");
        gradient.addColorStop("0.33", "green");
        gradient.addColorStop("0.67", "yellow");
        gradient.addColorStop("1.0", "orange");
        canvasCtx.fillStyle = gradient;
        canvasCtx.fillText("Hello!", this.left, this.top);
    }

    return text;
}

registerPrototypalShape('Text', createText);
