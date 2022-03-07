// 3 Test action, initState và reduce xem cách hoạt động

// const actions = [
//   {
//     type: "change_speed",
//     payload: 3
//     // speed: 3, lastSpeed: 1
//   },
//   {
//     type: "turn_off",
//     // speed: 0, lastSpeed: 3
//   },
//   {
//     type: "turn_on",
//     // speed: 3, lastSpeed: 3
//   }
// ]

// const initState = {
//   speed: 0,
//   lastSpeed: 1
// }

// let a = reduce(actions, (state, action) => {
//   switch(action.type)
//     {
//       case "change_speed":
//         return {
//           ...state,
//           speed: action.payload
//         }
//       case "turn_off":
//         return {
//           ...state,
//           speed: 0,
//           lastSpeed: state.speed
//         }
//       case "turn_on":
//         return {
//           ...state,
//           speed: state.lastSpeed,
//         }
//     }
// }, initState)

// console.log(a)