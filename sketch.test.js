
const sum = require('./sketch');

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
    expect(sum(1, 2)).toBe(3);
}


test('second test', sumTest2);

function sumTest2() {
    expect(sum(2, 2)).toBe(4);
}