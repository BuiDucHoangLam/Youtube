import React from 'react'
import './Season.css'
const getSeason = (lat,month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const showSeason = {
    summer: {
        text: "It's so hot",
        icon: 'sun'
    },
    winter: {
        text: "It's so cold",
        icon: 'snowflake'
    }
}

export const Season = ({lat,time}) => {
    
    const season = getSeason(lat,new Date().getMonth())
    const {text,icon} = showSeason[season]

    return (
        <div className ={`season-display ${season}`}>
            <i className = {`icon-left massive ${icon} icon`}/>
            <h1>{text} -{time} - {lat} </h1>
            
            <i className = {`icon-right massive ${icon} icon`}/>
        </div>
    ) 
}

export default Season