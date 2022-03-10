import jsonPlaceHolder from '../api/jsonPlaceHolder'
import _ from 'lodash'

export const fetchPhotos = () => async (dispatch) => {
    const response = await jsonPlaceHolder.get('/photos')
    dispatch({type:'FETCH_PHOTOS',payload:response.data})
}

// export const fetchAlbums = (id) => async (dispatch) => {
//     const response = await jsonPlaceHolder.get(`/albums/${id}`)
//     dispatch({type:'FETCH_ALBUMS',payload:response.data})
// }

const _fetchAlbums= _.memoize(async(id,dispatch)=>{
    const response = await jsonPlaceHolder.get(`/albums/${id}`)
    dispatch({type:"FETCH_ALBUMS",payload:response.data})
})

export const fetchAlbums = id => dispatch => _fetchAlbums(id,dispatch)

const _fetchUsers = _.memoize(async(id,dispatch)=>{
    const response = await jsonPlaceHolder.get(`/users/${id}`)
    dispatch ({type:"FETCH_USERS",payload:response.data})
})

export const fetchUsers = id => dispatch => _fetchUsers(id,dispatch)