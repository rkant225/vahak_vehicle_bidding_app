import React from 'react'
import { useContext } from 'react';
import {BiddingContext} from '../../App';
import { useHistory } from 'react-router';

const BiddingDetails = () => {
    const history = useHistory();
    const biddingContext = useContext(BiddingContext);
    const {biddingData, setBiddingData} = biddingContext;
    const {biddingAmount, mobileNo, userName, remark} = biddingData;


    return (
        <div className="journey-details-container">
            <div className="journey-details-header">BID DETAILS</div>
            <div className="journey-details-edit-button" onClick={()=>{history.push('/step-two')}}>Edit</div>

            <div className="journey-details-source-destination-container" style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', marginTop : '1rem'}}>

                <div className="bid-details-source-destination">
                    +91-{mobileNo}
                    <br/>
                    {userName}
                    <br/>
                    {remark || "No remark provided."} 
                </div>
                
                <div className="fixed-price-container">
                    <i class="fas fa-rupee-sign"></i>
                    <b className="fixed-price-amount">{biddingAmount}</b>
                    <div className="fixed-price-text">Fixed price</div>
                </div>
            </div>
        </div>
    )
}

export default BiddingDetails;