import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import axios from 'axios';
import Map from '../Map/Map';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const getDNREndpoints = () => {
    console.log( 'in getDNREndpoints' );
    axios.get('/api/dnr')
      .then( response => {
        console.log( response );
      })
  }

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          {/* <button onClick = {() => getDNREndpoints()}>Get DNR API routes</button> */}
          <Map />
          {/* <br />
          <small>
            <a 
              href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed" 
              style="color:#0000FF;text-align:left" 
              target="_blank"
            >
              See map bigger
            </a>
          </small> */}

          <p>
            Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
            Suspendisse posuere dapibus maximus. Aliquam vitae felis libero. In
            vehicula sapien at semper ultrices. Vivamus sed feugiat libero. Sed
            sagittis neque id diam euismod, ut egestas felis ultricies. Nullam
            non fermentum mauris. Sed in enim ac turpis faucibus pretium in sit
            amet nisi.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
