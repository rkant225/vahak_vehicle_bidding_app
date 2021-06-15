import React, { useEffect, useState } from 'react';
import vahakLogo from '../../Assets/vahakLogo.PNG';
import { useHistory } from 'react-router';

const Header = (props) => {
    const {history} = props;

    const [stepName, setStepName] = useState("");

    const updateStepName = () =>{
        const pathName = history.location.pathname;
        switch(pathName){
            case "/":
            case "/home":
            case "/step-one":
                setStepName("Place Your Bid (1/4 step)");
                break;
            case "/step-two":
                setStepName("Place Your Bid (2/4 step)");
                break;
            case "/step-three":
                setStepName("Place Your Bid (3/4 step)");
                break;
            case "/step-four":
                setStepName("Place Your Bid (4/4 step)");
                break;
        }
    }

    useEffect(()=>{
        updateStepName();
    }, [props.match])


    return (
        <div>
            <img className="logo" src={vahakLogo} onClick={()=>{history.push('/home')}}/>
            <div className="step-name">{stepName}</div>
        </div>
    )
}

export default Header;