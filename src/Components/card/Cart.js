import React from 'react';
import './Card.css'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
const Cart = (props) => {
    const {name, id, image} = props.transport;

    const history = useHistory();
    const hanldeSignIn = () => {
        history.push(`/transport/${id}`)
    }
    return (
        <div className="col-md-3 col-6  mt-5 " onClick={hanldeSignIn} >
            <Card className="cart mt-5" >
                <img className="" src={image} alt=""/>
                <h3>{name}</h3>
            </Card>
        </div>
    );
};

export default Cart;