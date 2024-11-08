// Спосіб 1: Function Expression
const calculateArea = function(width, height) {
  return width * height;
};
const area1 = calculateArea(5, 10);
console.log(area1); // Виведе 50

// Спосіб 2: Arrow Function
const calculateAreaArrow = (width, height) => width * height;
const area2 = calculateAreaArrow(5, 10);
console.log(area2); // Виведе 50
