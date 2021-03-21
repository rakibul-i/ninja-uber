import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar/NavBar';
import './Home.css'
import fakeData from '../fakeData/FakeData'
import Cart from '../card/Cart';


const Home = () => {
    const [transports, setTransports] = useState([]);
    
    useEffect( () => {
        const transport = fakeData;
        setTransports(transport)
    },[])
    return (
        <div className="container-fluid home">
         
         <div className="container">
         <div className="row">
         {
             transports.map( tr => <Cart transport={tr} key={tr.id} ></Cart> )
         }
         </div>
         </div>
        </div>
    );
};

export default Home;