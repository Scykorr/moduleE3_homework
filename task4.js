const firstNum = 5,
    secondNum = 15;

function getNumList(frstNum, scndNum) {
    let currentNum = firstNum;
    let timerId = setInterval(function () {
        console.log(currentNum);
        if (currentNum == scndNum) {
            clearInterval(timerId);
        }
        currentNum += 1;
    }, 1000)
}


getNumList(firstNum, secondNum)