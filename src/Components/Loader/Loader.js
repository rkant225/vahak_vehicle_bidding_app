import React from 'react'

const Loader = (props) => {
    const {isLoading} = props;
    return (
        <>
            {isLoading && 
                <div className="loader-container">
                    <div className="loader">
                        <div className="loader-dot loader-dot-1"></div>
                        <div className="loader-dot loader-dot-2"></div>
                        <div className="loader-dot loader-dot-3"></div>
                    </div>
                </div>
            }
        </>
    )
}

export default Loader;