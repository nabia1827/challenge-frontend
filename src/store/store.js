import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/authReducer'
//import { appReducer } from './reducers/appReducer'

export default configureStore({
  reducer: {
    auth: authReducer,
    //app:appReducer,
    
  },
})