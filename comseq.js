function* combineSequences(seq1, seq2) {
    const seq1Gen = seq1[Symbol.iterator]();
    const seq2Gen = seq2[Symbol.iterator]();
    while (true) {
        const seq1Next = seq1Gen.next();
        if (!seq1Next.done) yield seq1Next.value;
        const seq2Next = seq2Gen.next();
        if (!seq2Next.done) yield seq2Next.value;
        if (seq1Next.done && seq2Next.done) break;
    }
}
const arraySeq = [1, 2, 3];
function* fibSeq() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
const combined = combineSequences(arraySeq, fibSeq());
for (let i = 0; i < 6; i++) {
    console.log(combined.next().value);
}
