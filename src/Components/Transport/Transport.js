
import {  useState } from 'react';

import { useParams } from 'react-router';
import fakeData from '../fakeData/FakeData';
import Description from './Description';
import GoogleMap from './GoogleMap';

const Transport = () => {

     
     const {Id} =useParams();
     const id = parseInt(Id);
     console.log(Id)
     const transport = fakeData;
     
     const vehicles = transport.filter( tr => tr.id === id );

    //  for (let i = 0; i < transport.length; i++) {
    //      const vehicle = transport[i];
    //      if( vehicle.id === id ){
    //         setVehicles(vehicle)
    //      }
    
     
    //  useEffect( () => {
    //      const transport = fakeData;
         
                
    //  },[])
     

    return (
        <div className="container my-5">
            <hr style={{marginBottom:"10px"}} />
        <div className="row">
            <div className="col-md-4">
               {
                   vehicles.map( transport => <Description transport={transport} key={transport.id} ></Description> )
               }
            </div>
            <div style={{height:"90vh"}} className="col-md-8">
            <GoogleMap></GoogleMap>
            </div>
        </div>
        </div>
    );
};

export default Transport;