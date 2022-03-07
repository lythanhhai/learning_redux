// 4. tạo redux store.

const { createStore } = require("redux")

const changeSpeed = "change_speed"
const turnOff = "turn_off"
const turnOn = "turn_on"

const change_speed = (speed) => {
  return {
    type: changeSpeed,
    payload: speed
  }
}

const turn_off = () => {
  return {
    type: turnOff,
  }
}

const turn_on = () => {
  return {
    type: turnOn,
  }
}

const initState = {
  speed: 0,
  lastSpeed: 1
}

const reducer =  (state = initState, action) => {
  console.log(action)
  switch(action.type)
    {
      case "change_speed":
        return {
          ...state,
          speed: action.payload
        }
      case "turn_off":
        return {
          ...state,
          speed: 0,
          lastSpeed: state.speed
        }
      case "turn_on":
        return {
          ...state,
          speed: state.lastSpeed,
        }
      default:
        return state
    }
}

const store = createStore(reducer)

// C1
// console.log(store.getState())
// store.dispatch({ type:"change_speed", payload: 3})
// console.log(store.getState())
// store.dispatch({ type:"change_speed", payload: 2})
// console.log(store.getState())
// store.dispatch({ type:"turn_off"})
// console.log(store.getState())
// store.dispatch({ type:"turn_on"})
// console.log(store.getState())

// 2.
console.log(store.getState())
store.dispatch(change_speed(3))
console.log(store.getState())
store.dispatch(change_speed(2))
console.log(store.getState())
store.dispatch(turn_off())
console.log(store.getState())
store.dispatch(turn_on())
console.log(store.getState())