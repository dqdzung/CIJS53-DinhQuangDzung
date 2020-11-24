// forEach()
// map()
// filter()
// findIndex()

const checkPrime = (num) => {
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        return false;
    }
}
return num > 1;
}

const filterPrime = (array) => {
return array.filter(checkPrime);
}
