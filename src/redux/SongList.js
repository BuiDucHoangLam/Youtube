import React from 'react'
import { connect } from 'react-redux'
import {selectedSong} from './action'

class SongList extends React.Component {

    SongProvider = () =>{
    return this.props.songs.map((song)=>{
        return (
            <div key={song.title} className ="item">
                <div className ="right floated content">
                    <button className ="ui button primary" onClick ={()=> this.props.selectedSong(song)}> Selected</button>
                </div>
                <div className ="content">
                    {song.title}
                    
                </div>
            </div>
         )
        })
    }
    render(){
        return (
        <div className ="ui divided list">
            {this.SongProvider()}
        </div>
    )
    }
    
}

const mapStateToProps = (state) => {
    return (
        {songs:state.songs}
    )
}

export default connect (mapStateToProps,{selectedSong})(SongList)

