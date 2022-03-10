import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends Component {
    state = {videos: [], selectedVideo: null}

    componentDidMount() {
        this.onTermSubmit('flowers')
    }

    onTermSubmit = async term => {
        
        const response = await youtube.get('/search',{
            params:{q:term}
        })

        this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
    }

    onVideoSelect = (video) => {
        console.log('From Search!',video);
        this.setState({selectedVideo: video})
    }
    render() {
        return (
            <div className="container">
                <SearchBar onSearchSubmit = {this.onTermSubmit}/>
                <div className="ui grid">
                    <div className ="ui row">
                        <div className = "eleven wide column"> <VideoDetail video = {this.state.selectedVideo} /></div>
                        <div className = "five wide column"> <VideoList videos = {this.state.videos} onVideoSelect={this.onVideoSelect}/>    </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default App
