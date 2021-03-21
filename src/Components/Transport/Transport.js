
import { useEffect, useState } from 'react';
import { Navbar, Nav  } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../fakeData/FakeData';
import Map from './Map';

const Transport = () => {
     const [transports, setTransports] = useState([]);
    
     useEffect( () => {
         const transport = fakeData;
         console.log(transport);
         

         
     },[])
     

    return (
        <div>
             <div className="container">
            
            <Map></Map>
        </div>
        </div>
    );
};

export default Transport;