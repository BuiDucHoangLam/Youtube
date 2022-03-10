import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:05'},
        {title: 'All Star', duration: '3:05'},
        {title: 'I want it that way', duration: '3:55'},
    ]
}

const songSelectedReducer = (song=null,actions) => {
    switch (actions.type) {
        case 'selectedSong':
            return actions.payload
    }
    return song
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:songSelectedReducer
})