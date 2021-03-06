let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false];

//Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10,"y": 20}';
const coordinates = JSON.parse(json);
