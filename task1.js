function countElements() {
    const numArr = [0, null, NaN, 0, 1, 2, 4, "str"]

    let evenElem = 0,
        oddElem = 0,
        zeroElem = 0;

    for (let i = 0; i < numArr.length; i++) {
        if (typeof numArr[i] === 'number' && !isNaN(numArr[i])) {
            if (numArr[i] === 0) {
                zeroElem += 1;
            } else if (numArr[i] % 2 === 0) {
                evenElem += 1;
            } else {
                oddElem += 1;
            }
        }
    }
    console.log('Итого в массиве\n' +
        '-------------------------------');
    console.log(`Четных элементов: ${evenElem}`);
    console.log(`Нечетных элементов: ${oddElem}`);
    console.log(`Нулей: ${zeroElem}`);
}

countElements();