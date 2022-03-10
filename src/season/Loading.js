import React from 'react'

const Loading = (props) => {
    return (
        <div class="ui segment">
            
            <div className="ui active dimmer">
            <div className="ui large text loader">{props.message}</div>
            

        </div>
</div>
    )
}

Loading.defaultProps = {
    message:'alo 1234'
}

export default Loading
