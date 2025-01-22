const resettableIterable = {
    arr: [1, 2, 3],
    reset() {
        this.index = 0;
    },
    [Symbol.iterator]() {
        this.reset();
        return {
            arr: this.arr,
            index: this.index,
            next() {
                if (this.index < this.arr.length) {
                    return { value: this.arr[this.index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};
const iterator = resettableIterable[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
resettableIterable.reset();
console.log(iterator.next().value);
