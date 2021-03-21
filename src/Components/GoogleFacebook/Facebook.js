import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './style.css'
import { FaFacebook } from 'react-icons/fa';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Facebook = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({})

    const handleFbSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const user = {
                name: displayName,
                email: email
            }
            setUser(result);
            setLoggedInUser(result);
            history.replace(from);
        }).catch((error) => {
            
  });
    }
    return (
        <div>
            <button onClick={handleFbSignIn} className="btn google-sign btn-lg" href="/"> <FaFacebook className="mb-1 mr-3 text-primary" /> Continue with Facebook</button>
            
        </div>
    );
};

export default Facebook;