interface Coordinate {
  x: number;
  y: number;
}

// overload signatures
// accepts string
function parseCoordinate(str: string): Coordinate;
//accepts object
function parseCoordinate(obj: Coordinate): Coordinate;
// accepts two numbers
function parseCoordinate(x: number, y: number): Coordinate;
// implementation
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      if (value !== undefined) { // <- add guard so value is string, not string | undefined
        coord[key as "x" | "y"] = parseInt(value, 10);
      }
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
// object literal with key and value
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate("x:12,y:22"));