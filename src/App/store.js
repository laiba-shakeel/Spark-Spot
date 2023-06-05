import { configureStore } from '@reduxjs/toolkit'
import ClientAccountDetailReducer from '../Redux/Client/AccountDetail/AccountDetailSlice'
// import thunkMiddleware from 'redux-thunk';
// import postsReducer from '../features/posts/postsSlice'
// import usersReducer from '../features/users/usersSlice'
// // import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    AccountDetails: ClientAccountDetailReducer
    // posts: postsReducer,
    // users: usersReducer
    // // counter: counterReducer
  },
  // middleware: [thunkMiddleware],
})