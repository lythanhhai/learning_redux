// 2. triển khai reduce method bằng tự code lại

// function reduce(arr, callback, initValue)
// {
//     if (initValue == undefined)
//     {
//         initValue = arr[0];
//         arr = arr.slice(1)
//     }
//     for(const i of arr)
//     {
//         initValue = callback(initValue, i)
//     }
//     return initValue
// }

// console.log(reduce([1, 2, 3, 4], (sum, num) => {
//     return sum + num
// }, 0))