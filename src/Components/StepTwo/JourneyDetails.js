import React from 'react'
import { useContext } from 'react';
import {BiddingContext} from '../../App';
import { useHistory } from 'react-router';

const JourneyDetails = () => {
    const history = useHistory();
    const biddingContext = useContext(BiddingContext);
    const {biddingData, setBiddingData} = biddingContext;
    const {source, destination, carType} = biddingData;

    return (
        <div className="journey-details-container">
            <div className="journey-details-header">JOURNEY DETAILS</div>
            <div className="journey-details-edit-button" onClick={()=>{history.push('/step-one')}}>Edit</div>
            <div className="journey-details-source-destination-container">
                <div className="journey-details-source-destination">
                    {source} - {destination}, {carType}
                </div>
            </div>
        </div>
    )
}

export default JourneyDetails;