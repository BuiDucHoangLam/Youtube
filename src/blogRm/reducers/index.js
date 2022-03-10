import {combineReducers} from 'redux'
import PhotosReducer from './PhotosReducer'
import AlbumsReducer from './AlbumsReducer'
import UsersReducer from './UsersReducer'

export default combineReducers({
    photos:PhotosReducer,
    albums:AlbumsReducer,
    users:UsersReducer,
})