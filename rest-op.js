function calculateTotal(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
const result = calculateTotal(10, 20, 30, 40);
console.log(result);
