function checkPrimeNum(num) {
    if (num <= 1000) {
        if ((num == 1) || (num == 0)) {
            console.log(`Число ${num} не является ни простым, ни составным!`);
            return 0;
        }
        let counter = 0;
        for (let i = 2; i < Math.floor(num / 2 + 1); i++) {
            if (num % i == 0) {
                counter += 1;
            }
        }
        if (counter <= 0) {
            console.log(`Число ${num} простое!`);
        } else {
            console.log(`Число ${num} не является простым!`);
        }


    } else {
        console.log('Введенные Вами данные неверны!')
    }
}

checkPrimeNum(28)