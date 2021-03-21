import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import Google from '../GoogleFacebook/Google'
import './signin.css'
import Facebook from '../GoogleFacebook/Facebook';
import firebase from "firebase/app";
import firebaseConfig from '../GoogleFacebook/firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
 export const LoginInfo = createContext();
const SignIn = () => {
  // privet route
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email:'',
    password:'',
    photo:''
  });

  const handleBlur = (event) => {
    let isFieldValid = true;
  if(event.target.name === 'email'){
    isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
  }
  if(event.target.name === 'password'){
    const password = event.target.value.length > 6;
    const isPasswordValid = /\d{1}/i.test(event.target.value);
    isFieldValid = password && isPasswordValid;
  }
  if(isFieldValid){
    const newUserInfo = {...user};
    newUserInfo[event.target.name]= event.target.value;
    setUser(newUserInfo);
  }
  }
  const handleSubmit = (event) => {
    
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(res.user);
            history.replace(from);
      })
      .catch((error) => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }

    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then( res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(res.user);
            history.replace(from);
       console.log('sign in user information' , res.user)
      })
      .catch((error) => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }
    event.preventDefault();
  }
    
    return (
      <LoginInfo.Provider value={[user, setUser]}>
        <div className="container ">
           
           {/* login form */}
           <div className="form">
               <h2> {
                 newUser ? "Create an account" : "Log in"
                 } </h2>

                <form onSubmit={handleSubmit}>
                {
                  newUser && <input type="text" className="input-box" name="name" onBlur={handleBlur} placeholder="Your name" />
                }
                    <br/>
                <input type="text" className="input-box" name="email" onBlur={handleBlur} placeholder="Your email address" required />
                <br/>
                <input type="password" className="input-box"  name="password" onBlur={handleBlur} placeholder="Your password" required />
                {
                  newUser && <input type="password" className="input-box"  name="password" onBlur={handleBlur} placeholder="Confirm password" required />
                }
                <br/>
                <input className="input-submit" type="submit" value={"Sign up"}/>
                </form>
                <p style={{color:'red'}}>{user.error}</p>
                {
                    user.success && <p style={{color:'green'}}>User {newUser ?'created': 'Logged in'} successfully</p>
                }
               <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
               <label>{newUser ?'Already have an account?': "Don't have an account?"}</label>
               
           </div>
           <div className="text-center">
           <Google></Google>
           <Facebook></Facebook>
           </div>
        </div>
        </LoginInfo.Provider>
    );
};

export default SignIn;