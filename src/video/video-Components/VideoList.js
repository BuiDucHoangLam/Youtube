import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const videosList = videos.map((video)=>{
        return <VideoItem key ={video.id.videoId} onVideoSelect ={onVideoSelect} video ={video}/>
    })
    return (
        <div>
            Results: {videos.length} videos.
            {videosList}
        </div>
    )
}

export default VideoList
