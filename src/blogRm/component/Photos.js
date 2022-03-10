import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchPhotos} from '../actions'
import Albums from './Albums'

export class Photos extends Component {

    componentDidMount(){
        this.props.fetchPhotos()
    }

    renderList = () =>{
        return this.props.photos.map(photo => {
            return (
                <div className = "item" key = {photo.id}>
                    <div className ="left floated content">
                        <img alt ={photo.id} src ={photo.thumbnailUrl} />
                    </div>
                    <div className ="content">
                        <div className ="description">
                            <h2>{photo.title}</h2>
                             
                        </div>
                        <div>
                            <Albums id = {photo.albumId}/>
                        </div>
                    </div>

                </div>
            )
        })
    }

    render() {
        console.log(this.props.photos);
        return (
            <div className ="ui relaxed divided list">
                {this.renderList()}

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {photos:state.photos}
}

export default connect (mapStateToProps,{fetchPhotos})(Photos)
