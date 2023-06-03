import { configureStore } from '@reduxjs/toolkit'
import ClientAccountDetailReducer from '../Redux/Client/ClientAccountDetailSlice/ClientAccountDetailSlice'
// import postsReducer from '../features/posts/postsSlice'
// import usersReducer from '../features/users/usersSlice'
// // import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    ClientAccountDetails: ClientAccountDetailReducer
    // posts: postsReducer,
    // users: usersReducer
    // // counter: counterReducer
  }
})