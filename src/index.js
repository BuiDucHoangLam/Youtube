// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import { createStore,applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import App from './blog/components/App'
// import reducers from './blog/reducers'

// const store = createStore(reducers,applyMiddleware(thunk))

// ReactDOM.render (
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//     document.querySelector('#root'))

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './blogRm/reducers'
import App from './video/video-Components/App'

const store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.querySelector("#root")
)

// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Provider,connect} from 'react-redux'
// import {createStore,combineReducers} from 'redux'

// const initialValue = 0
// const increment = () => ({type:'increment',payload:1})
// const decrement = () => ({type:'decrement',payload:-1})

// const Counter = count =>{
//     return (
//         <div>
//             <button onClick = {count.increment}>increment</button>
//             <button onClick = {count.decrement}>decrement</button>
//             Current Count: {count.count}
//         </div>
//     )
// }

// const countReducer = (count=initialValue,action) =>{
//     switch (action.type) {
//         case 'increment':
//         case 'decrement':
//             return count + action.payload
//         default:
//             return count;
//     }
// }

// const store = combineReducers({
//     count:countReducer
// })

// const mapStateToProps = state =>{
//     return ({count:state.count})
// }

// const WrapperCount = connect(mapStateToProps,{
//     increment,decrement
// })(Counter)

// ReactDOM.render(
//     <Provider store = {createStore(store)}>
//         <WrapperCount />
//     </Provider>,
//     document.querySelector('#root')
// )

