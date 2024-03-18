function calculateArea(shape) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    try {
        switch (shape) {
            case "circle":
                if (args.length !== 1 || typeof args[0] !== "number" || args[0] <= 0) {
                    throw new Error("Invalid Arguments for Circle. Provide a Single Positive Number as Radius.");
                }
                return Math.PI * args[0] * args[0];
            case "rectangle":
                if (args.length !== 2 || typeof args[0] !== "number" || typeof args[1] !== "number" || args[0] <= 0 || args[1] <= 0) {
                    throw new Error("Invalid Arguments for Rectangle. Provide Two Positive Numbers as Width and Height.");
                }
                return args[0] * args[1];
            case "triangle":
                if (args.length !== 2 || typeof args[0] !== "number" || typeof args[1] !== "number" || args[0] <= 0 || args[1] <= 0) {
                    throw new Error("Invalid Arguments for Triangle. Provide Two Positive Numbers as Base and Height.");
                }
                return 0.5 * args[0] * args[1];
            default:
                throw new Error("Invalid Shape Provided!");
        }
    }
    catch (error) {
        console.error(error.message);
        return NaN;
    }
}
console.log("Area of Circle:", calculateArea("circle", -5));
console.log("Area of Rectangle:", calculateArea("rectangle", 4, 6));
console.log("Area of Triangle:", calculateArea("triangle", 3, 7));
