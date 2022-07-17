// 1. test lại reduce method của mảng

let sum = [1, 2, 3,4].reduce((sum, num) => {
    return sum + num;
}, 0)
console.log(sum)