import React from 'react'
import { useContext } from 'react';
import {BiddingContext} from '../../App';
import JourneyDetails from '../StepTwo/JourneyDetails';
import BiddingDetails from './BiddingDetails';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const wait =(ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const StepThree = (props) => {
    const {history} = props;
    const biddingContext = useContext(BiddingContext);
    const {biddingData, setBiddingData} = biddingContext;
    const {mobileNo} = biddingData;

    const [otpDigitOne, setOtpDigitOne] = useState("");
    const [otpDigitTwo, setOtpDigitTwo] = useState("");
    const [otpDigitThree, setOtpDigitThree] = useState("");
    const [otpDigitFour, setOtpDigitFour] = useState("");
    const [otpError, setOtpError] = useState("");

    const tryToNavigateToStepFour = ()=>{
        if(`${otpDigitOne}${otpDigitTwo}${otpDigitThree}${otpDigitFour}` == '1234'){
            localStorage.setItem("isAuthenticated", true)
            history.push('/step-four')
        } else{
            setOtpError("Please enter valid OTP.")
        }
    }

    return (
        <div className="step-container">
            <JourneyDetails/>            
            <BiddingDetails/>            
            <div style={{marginTop : '1rem', width : '65%', padding : '1rem'}}>
                We’ve sent an OTP to your mobile number, Please enter it below to submit your bid.
                <br/>
                <b>{mobileNo}</b>
                <span style={{color : 'blue', marginLeft : '.5rem', cursor : 'pointer'}} onClick={()=>{history.push('/step-two')}}>Edit</span>
            </div>
            <div className="otp-inputs-container">
                <input value={otpDigitOne}  onChange={(e)=>{setOtpDigitOne(e.target.value)}} id="otp-digit-1" className="otp-textbox" maxLength="1" onFocus={(e)=>{e.target.value = ""}} onKeyUp={()=>{document.getElementById("otp-digit-2").focus()}}/>
                <input value={otpDigitTwo} onChange={(e)=>{setOtpDigitTwo(e.target.value)}} id="otp-digit-2" className="otp-textbox" maxLength="1" onFocus={(e)=>{e.target.value = ""}} onKeyUp={()=>{document.getElementById("otp-digit-3").focus()}}/>
                <input value={otpDigitThree} onChange={(e)=>{setOtpDigitThree(e.target.value)}} id="otp-digit-3" className="otp-textbox" maxLength="1" onFocus={(e)=>{e.target.value = ""}} onKeyUp={()=>{document.getElementById("otp-digit-4").focus()}}/>
                <input value={otpDigitFour} onChange={(e)=>{setOtpDigitFour(e.target.value)}} id="otp-digit-4" className="otp-textbox" maxLength="1" onFocus={(e)=>{e.target.value = ""}} onKeyUp={()=>{tryToNavigateToStepFour()}}/>
            </div>
            {otpError && <div style={{width: 'max-content', margin : 'auto', height : '1rem', color : 'red', marginBottom : '2rem'}}>{otpError}</div>}

            <div style={{width: 'max-content', margin : 'auto', height : '1rem', color : 'blue', marginBottom : '2rem', cursor : 'pointer'}}><u>Resend OTP</u></div>

            <Button id="otp-button" className="button" variant="contained" color="primary" onClick={tryToNavigateToStepFour}>
                Verify OTP
            </Button>

        </div>
    )
}

export default StepThree;