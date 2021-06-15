import React from 'react'
import { useContext } from 'react';
import {BiddingContext} from '../../App';
import JourneyDetails from '../StepTwo/JourneyDetails';
import BiddingDetails from '../StepThree/BiddingDetails';
import Button from '@material-ui/core/Button';


const wait =(ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const StepFour = (props) => {
    const {history} = props;
    const biddingContext = useContext(BiddingContext);
    const {biddingData, setBiddingData} = biddingContext;
    

    const submitBid = async ()=>{
        sessionStorage.clear();

        setBiddingData({...biddingData, isLoading : true})
        await wait(1000);
        setBiddingData({...biddingData, isLoading : false})

        window.location.href = '/home';
    }

    return (
        <div className="step-container">
            <JourneyDetails/>            
            <BiddingDetails/>            
            

            <div style={{marginTop : '2rem'}}>
                <Button id="otp-button" className="button" variant="contained" color="primary" onClick={submitBid}>
                    Submit Bid
                </Button>
            </div>

        </div>
    )
}

export default StepFour;