import React from 'react'
import { useContext } from 'react';
import {BiddingContext} from '../../App';
import JourneyDetails from './JourneyDetails';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const wait =(ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const MOBILE_NUMBER_REGEX = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const StepTwo = (props) => {
    const {history} = props;
    const biddingContext = useContext(BiddingContext);
    const {biddingData, setBiddingData} = biddingContext;
    const {biddingAmount} = biddingData;

    const initialValues = {
        biddingAmount: biddingData.biddingAmount || '',
        mobileNo: biddingData.mobileNo || '',
        userName: biddingData.userName || '',
        remark: biddingData.remark || '',
    };

    const validationSchema = biddingData.isAuthenticated ?  Yup.object({}) :  Yup.object({
        mobileNo: Yup.string().matches(MOBILE_NUMBER_REGEX, 'Mobile number is not valid').required('Mobile number is Required.').min(10, "Too short").max(10, "Too long"),
        userName: Yup.string().required('Name is Required.'),
    });

    const handleFormSubmission = async (formData)=>{
        setBiddingData({...biddingData, isLoading : true});
        await wait(2000);
        setBiddingData({...biddingData, isLoading : false});

        console.log('FormData', formData);
        const {biddingAmount, mobileNo, userName, remark} = formData;

        setBiddingData({...biddingData, biddingAmount, mobileNo, userName, remark})

        sessionStorage.setItem('biddingData', JSON.stringify({...biddingData, biddingAmount, mobileNo, userName, remark}));
        if(biddingData.isAuthenticated){
            history.push('/step-four')
        } else {
            history.push('/step-three')
        }
    }

    const formik = useFormik({
        initialValues : initialValues,
        validationSchema: validationSchema,
        onSubmit: handleFormSubmission,
    });

    return (
        <div className="step-container">
            <JourneyDetails/>            
            <form onSubmit={formik.handleSubmit} style={{padding : '2rem'}}>
                <div className="textbox-bidding-amount-container">
                    <i class="fas fa-rupee-sign"></i>
                    {/* <input name="biddingAmount" type="number" className="textbox-bidding-amount" placeholder="0.0" value={biddingAmount} onChange={(e)=>{setBiddingData({...biddingData, biddingAmount : e.target.value})}}/> */}
                    <input name="biddingAmount" type="number" className="textbox-bidding-amount" placeholder="0.0" value={formik.values.biddingAmount} onChange={ (e)=>{setBiddingData({...biddingData, biddingAmount : e.target.value}); formik.handleChange(e)}}/>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" />
                    <span>Rate is Negotiable</span>
                </div>

                
                    {!biddingData.isAuthenticated &&
                        <>
                            <TextField name="mobileNo" type="number" className="" variant="outlined" label="Enter your 10 digit mobile number *" value={formik.values.mobileNo} onChange={formik.handleChange} error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)} helperText={formik.touched.mobileNo && formik.errors.mobileNo} style={{width : '100%'}}/>
                            <div className="get-updates-checkbox-container">
                                <input type="checkbox" />
                                <span>Get updates on </span>
                                <span className="whatsapp" style={{color : '#40C351'}}>
                                    <i class="fab fa-whatsapp" style={{marginRight : '.5rem'}}></i>
                                    <span>Whatsapp</span>
                                </span>
                            </div>
                            <TextField name="userName" className="text-box-large" variant="outlined" label="Enter your name *" value={formik.values.userName} onChange={formik.handleChange} error={formik.touched.userName && Boolean(formik.errors.userName)} helperText={formik.touched.userName && formik.errors.userName}/>
                        </>
                    }

                    <TextField name="remark" className="text-box-large" variant="outlined" label="Enter remarks (optional)" value={formik.values.remark} onChange={formik.handleChange} error={formik.touched.remark && Boolean(formik.errors.remark)} helperText={formik.touched.remark && formik.errors.remark}/>

                    <Button className="button" variant="contained" color="primary" disabled={biddingAmount <= 0} type="submit">
                        Next
                    </Button>
                </form>

        </div>
    )
}

export default StepTwo;