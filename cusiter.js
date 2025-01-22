const reverseIterable = {
    arr: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let index = this.arr.length - 1;
        return {
            next: () => {
                if (index >= 0) {
                    return { value: this.arr[index--], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};
for (const value of reverseIterable) {
    console.log(value);
}
