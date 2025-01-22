// Question 10:
// Given the following array of arrays:
// const matrix = [[1, 2], [3, 4], [5, 6]]
// Use array destructuring to extract the values 3 and 5 from the inner arrays.

const matrix = [[1, 2], [3, 4], [5, 6]];
const [, [value1], [value2]] = matrix;
console.log(value1);
console.log(value2);
