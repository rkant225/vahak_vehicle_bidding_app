import React, { useContext, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Loader from '../Loader/Loader'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {BiddingContext} from '../../App';

const wait =(ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const StepOne = (props) => {

    const {history} = props;
    const biddingContext = useContext(BiddingContext);
    const {biddingData, setBiddingData} = biddingContext;

    const initialValues = {
        source: biddingData.source || '',
        destination: biddingData.destination || '',
        carType: biddingData.carType || '',
        numberOfTravelers: biddingData.numberOfTravelers || 0,
    };

    const validationSchema = Yup.object({
        source: Yup.string().required('Source is Required.'),
        destination: Yup.string().required('Destination is Required.'),
        carType: Yup.string().required('Car type is Required.'),
    });

    const handleFormSubmission = async (formData)=>{
        setBiddingData({...biddingData, isLoading : true});
        await wait(2000);
        setBiddingData({...biddingData, isLoading : false});

        console.log('FormData', formData);
        const {carType, destination, source, numberOfTravelers} = formData;

        setBiddingData({...biddingData, carType, destination, source, numberOfTravelers})

        sessionStorage.setItem('biddingData', JSON.stringify({...biddingData, carType, destination, source, numberOfTravelers}));
        history.push('/step-two')
    }

    const formik = useFormik({
        initialValues : initialValues,
        validationSchema: validationSchema,
        onSubmit: handleFormSubmission,
    });

    return (
        <div className="step-container">
            <form className="form" onSubmit={formik.handleSubmit}>

                <TextField name="source" className="text-box-small" variant="outlined" label="Source *" value={formik.values.source} onChange={formik.handleChange} error={formik.touched.source && Boolean(formik.errors.source)} helperText={formik.touched.source && formik.errors.source}/>

                <TextField name="destination" className="text-box-small" variant="outlined" label="Destination *" value={formik.values.destination} onChange={formik.handleChange} error={formik.touched.destination && Boolean(formik.errors.destination)} helperText={formik.touched.destination && formik.errors.destination}/>

                <FormControl variant="outlined" className="dropdown"  error={formik.touched.carType && Boolean(formik.errors.carType)}>
                    <InputLabel >Enter car type *</InputLabel>
                    <Select name="carType" label="Enter car type *" value={formik.values.carType} onChange={formik.handleChange}>
                        <MenuItem value={""}>Please Select</MenuItem>
                        <MenuItem value={"HachBack"}>HachBack</MenuItem>
                        <MenuItem value={"Sudan"}>Sudan</MenuItem>
                        <MenuItem value={"SUV"}>SUV</MenuItem>
                    </Select>
                    <FormHelperText>{formik.touched.carType && formik.errors.carType}</FormHelperText>
                </FormControl>

                <TextField name="numberOfTravelers" className="text-box-large" variant="outlined" label="Number of Travellers" value={formik.values.numberOfTravelers} onChange={formik.handleChange} error={formik.touched.numberOfTravelers && Boolean(formik.errors.numberOfTravelers)} helperText={formik.touched.numberOfTravelers && formik.errors.numberOfTravelers} />

                <Button className="button" variant="contained" color="primary" type="submit">
                    Enter bid details
                </Button>
            </form>
        </div>
    )
}

export default StepOne;