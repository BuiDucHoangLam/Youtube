import Season from './season/Season'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './season/Loading'
const Message = (props) => {
  return (
    <div>
      <div>{props.header}</div>
      <p>{props.mesContent}</p>

    </div>
  )
}

const Segment = ({children}) => {
  return (
    <div className ='alo123'> {children}</div>
  )
}

class App extends React.Component{
    state = {lat: null, errorMessage : '',time:null}


  componentDidMount() {
    

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude}),
      error => {this.setState({errorMessage: error.message})}
    )

    
    setInterval(()=>{
      this.setState({time:new Date().toLocaleTimeString()})
    })
    
  }

  renderContent () {
    return (this.state.lat && !this.state.errorMessage)
    ? <Season lat = {this.state.lat} time= {this.state.time}/>
    : (!this.state.lat && this.state.errorMessage)
    ? <div>{this.state.errorMessage}</div>
    : <Loading message = "fuck uuuu"/>
  }

  render(){
  return (
  <div>
    <div className ="border red"> { this.renderContent() }</div>
  
  </div>
  )
  }
}

ReactDOM.render (<App/> ,document.querySelector('#root'))