import logo from './logo.svg';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import StepOne from './Components/StepOne/StepOne'
import StepTwo from './Components/StepTwo/StepTwo'
import StepThree from './Components/StepThree/StepThree'
import StepFour from './Components/StepFour/StepFour'
import Header from './Components/Header/Header'
import NotFound from './Components/NotFound/NotFound'
import Loader from './Components/Loader/Loader'
import './App.css';
import React, { useState } from 'react';

export const BiddingContext = React.createContext();

function App() {
  const [biddingData, setBiddingData] = useState(JSON.parse(sessionStorage.getItem("biddingData")) || {isLoading : false, biddingAmount : 0});

  return (
    <div className="app">
      <BiddingContext.Provider value={{biddingData : biddingData, setBiddingData : setBiddingData}}>
        <BrowserRouter>
          <Route render={(props)=><Header {...props}/>}/>
          <Switch>
            <Route path="/" exact render={(props)=><StepOne {...props}/>}/>
            <Route path="/home" exact render={(props)=><StepOne {...props}/>}/>
            <Route path="/step-one" exact render={(props)=><StepOne {...props}/>}/>

            <Route path="/step-two" exact render={(props)=><StepTwo {...props}/>}/>
            <Route path="/step-three" exact render={(props)=><StepThree {...props}/>}/>
            <Route path="/step-four" exact render={(props)=><StepFour {...props}/>}/>
            <Route render={(props)=><NotFound {...props}/>}/>
          </Switch>
        </BrowserRouter>
        <Loader isLoading={biddingData.isLoading}/>
      </BiddingContext.Provider>
    </div>
  );
}

export default App;
