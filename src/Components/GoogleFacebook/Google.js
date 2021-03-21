import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './style.css'
import { FcGoogle } from 'react-icons/fc';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Google = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({})

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const user = {
                name: displayName,
                email: email
            }
            setUser(user);
            console.log(displayName, email);
            setLoggedInUser(result.user);
            history.replace(from);
        }).catch((error) => {
            console.log(error.message);
  });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn google-sign btn-lg mb-3" href="/"> <FcGoogle className="mb-1 mr-3" /> Continue with google</button>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    );
};

export default Google;