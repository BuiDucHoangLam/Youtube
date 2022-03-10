import Map from './component/Map'
import React, { useState, useEffect } from 'react'

const WildFire = () =>{
  const [eventData,setEventData] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const fetchEvent =async () =>{
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvent()

    console.log(eventData);
  },[])

  return (
   <div>
     <h1>Hế nhô</h1>
     {!loading ? <Map eventData={eventData} /> : <h1>Loading</h1>}
   </div>
  );
}

export default WildFire;