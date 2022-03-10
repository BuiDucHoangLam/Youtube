import React from 'react'
import {connect} from 'react-redux'

const SongDetail = ({song}) => {
    if(song === null){
        return <div> </div>
    }
    return (
        <div>
            <h3>Detail</h3>
            <div>
                {song.title}
                <br/>
                {song.duration}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return (
        {song:state.selectedSong}
    )
}

export default connect(mapStateToProps)(SongDetail)


