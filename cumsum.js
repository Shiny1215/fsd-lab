function* cumulativeSum(array) {
    let sum = 0;
    for (const num of array) {
        sum += num;
        yield sum;
    }
    return sum;
}

const array = [10, 20, 30];
const cumSumGen = cumulativeSum(array);

for (const value of cumSumGen) {
    console.log(value);
}

const finalSum = cumSumGen.return().value;
console.log(finalSum);
