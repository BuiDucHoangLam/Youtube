import axios from 'axios'

const KEY = 'AIzaSyAWHtGL1JtpxV0SvOVl2VBoCY1UpYFGStg'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        key:`${KEY}`,
        type:'video'
    }
})

