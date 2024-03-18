function calculateArea(shape) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    switch (shape) {
        case "circle":
            return Math.PI * args[0] * args[0];
        case "rectangle":
            return args[0] * args[1];
        case "triangle":
            return 0.5 * args[0] * args[1];
        default:
            throw new Error("Invalid Shape Provided!");
    }
}
// Examples
console.log("Area of Circle:", calculateArea("circle", 5));
console.log("Area of Rectangle:", calculateArea("rectangle", 4, 6));
console.log("Area of Triangle:", calculateArea("triangle", 3, 7));
