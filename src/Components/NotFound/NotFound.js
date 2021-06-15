import React from 'react'

function NotFound(props) {
    const {history} = props;
    return (
        <div className="not-found-container">
            <div className="not-found-message">It seems that you are lost.</div>
            <button className="not-found-button" onClick={()=>{history.push('/home')}}>Home</button>
        </div>
    )
}

export default NotFound;
