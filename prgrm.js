function* infiniteSequence() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const generator = infiniteSequence();
for (let i = 0; i < 5; i++) {
    console.log(generator.next().value);
}
