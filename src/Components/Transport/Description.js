import React from 'react';
import './description.css'
const Description = (props) => {
    const {id, name, image, cost} = props.transport;

    return (
        <div>
            <div style={{backgroundColor:"#8080805c", padding:"20px 10px", borderRadius:"10px"}}>
            <h6>Pick From</h6>
            <input className="form-control" type="text"/>
            <h6>Pick From</h6>
            <input className="form-control" type="text"/>
            <input  className="form-control mt-4" type="submit" value="Search" />
            </div>

            <div  style={{backgroundColor:"#8080805c",marginTop:"30px",textAlign:"center", padding:"20px 10px", borderRadius:"10px"}}>
            <img style={{width:"200px", height:"200px"}} src={image} alt=""/>
            <p>{name}</p>
            <h4 className="mt-4">Cost: {cost}</h4>
            </div>
        
        </div>
    );
};

export default Description;