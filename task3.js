function getSumm(firstInpNum) {
    return function (secondInpNum) {
        return firstInpNum + secondInpNum;
    }
}

const summFunc = getSumm(2);

const summ = summFunc(3);

console.log(summ);