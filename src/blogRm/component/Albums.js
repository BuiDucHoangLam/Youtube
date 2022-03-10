import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchAlbums} from '../actions'
import Users from './Users'

export class Albums extends Component {
    componentDidMount(){
        this.props.fetchAlbums(this.props.id)
    }
    
    render() {
        console.log(this.props.album);
        const {album } = this.props
        if(!album)
            return <div>Loading...</div>
        return (
            <div className ="header">
                Album: {album.title}
                <Users id = {album.userId} />
            </div>
        )
    }
}

const mapStateToProps = (state,appropriate) => {
    return {album:state.albums.find(album => album.id === appropriate.id)}
}

export default connect(mapStateToProps,{fetchAlbums})(Albums)
