function findSecondMax(arr) {
    let max = arr[0];
    let secondMax = null;

    for (const num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num < max && (secondMax === null || num > secondMax)) {
            secondMax = num;
        }
    }

    return secondMax;
}

const numbers = [9, 8, 3, 5, 6, 2, 7, 9];

console.log(findSecondMax(numbers)); // 8
