import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUsers} from '../actions'

export class Users extends Component {
    componentDidMount(){
        this.props.fetchUsers(this.props.id)
    }

    render() {
        const {user} = this.props
        if(!user)
            return <div>Loading...</div>
        return (
            <div className ="header">
                User: {user.name}
            </div>
        )
    }
}

const mapStateToProps =(state,appropriate) => {
    return {user: state.users.find(user=>user.id === appropriate.id)}
}

export default connect (mapStateToProps,{fetchUsers})(Users)
