import React, { Component } from 'react'
import {connect} from 'react-redux'

class UserHeader extends Component {

    

    render() {
        const {users} = this.props
        
        if(!users){
            return <div>Loading...</div>
        }
        return (
            <div className ="header">
                {users.name}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return ({
        users:state.users.find(user=>user.id === ownProps.id)
    })
}

export default connect(mapStateToProps)(UserHeader)