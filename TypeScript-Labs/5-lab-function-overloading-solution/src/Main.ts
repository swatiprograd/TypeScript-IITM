function calculateArea(shape: "circle", radius: number): number;
function calculateArea(shape: "rectangle", width: number, height: number): number;
function calculateArea(shape: "triangle", base: number, height: number): number;
function calculateArea(shape: string, ...args: any[]): number {
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