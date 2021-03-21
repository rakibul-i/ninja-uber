import React, { useEffect } from 'react';

const Map = () => {
    useEffect( () => {
        
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form className="card bg-light p-3">
                        <p>Pick From</p>
                        <input type="text"/>
                        <p>Pick To</p>
                        <input type="text"/>
                        <input className="mt-3" type="Submit" value="Seacrh" />
                    </form>
                </div>
                <div className="col-md-8">

                </div>
            </div>
        </div>
    );
};

export default Map;