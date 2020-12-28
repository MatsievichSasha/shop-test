import React, { useEffect, useState, useRef } from "react";
import firebase from "firebase/app";
import "firebase/auth";

let styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  },

  loginForm: {
    width: "300px",
  },
};


const firebaseConfig = {
  apiKey: "AIzaSyB8rziyfFjaTGMgxTTHA25AYFQ196shCvA",
  authDomain: "test-shop-01.firebaseapp.com",
  databaseURL: "https://test-shop-01-default-rtdb.firebaseio.com",
  projectId: "test-shop-01",
  storageBucket: "test-shop-01.appspot.com",
  messagingSenderId: "729583535519",
  appId: "1:729583535519:web:10828ad0bb4cb0120469aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function Authorization() {
  /* const [user, setUser] = useState({ email: "", password: "" }); */
  const [hasAccount, sethasAccount] = useState(false)
  const [product, setProduct] = useState('')
  const [baseProd, setBaseProduct] = useState({})
  /*   const [key, setKey] = useState('')
    const [value, setValue] = useState('') */

  const emailRef = useRef()
  const passwordRef = useRef()
  const keyRef = useRef()
  const valueRef = useRef()



  /*   useEffect(() => {
      const db = firebase.database();
      const product = db.ref('product')
      product.on('value', (elem) => setProduct(elem.val())
      )
    }); */

  const inputChange = ({ target: { value, id } }) => {

    console.log(id, value )
    
  };

  /*   const signup = (email, password) => {
     return firebase
       .auth()
       .createUserWithEmailAndPassword(email, password)
       .then((response) => {
         setUser(response.user);
         return response.user;
       });
   }; */

  function signIn(e) {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then(() => sethasAccount((prev) => !prev))
      .catch(error => console.log(error))
  }

  function signUp(e) {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then(() => sethasAccount((prev) => !prev))
      .catch(error => console.log(error))
  }

  function sendData() {
    const db = firebase.database()
    db.ref(keyRef.current.value).push(valueRef.current.value)
    alert('your data was writing')
  }

  /*   useEffect(() => {
      const db = firebase.database()
      const products = db.ref('motorbike')
      products.on('value', (elem) => setBaseProduct( elem.val()))
    },[]) */

  /*   function signUp() {
      console.log(emailRef.current.value, passwordRef.current.value)
    }  */

  return (
    <>
      {hasAccount ?
        <div>
          <p>{product}</p>
          <input
            id='firstinput'
            onChange={inputChange}
            ref={keyRef} />
          <input
            id='secondinput'
            onChange={inputChange}
            ref={valueRef} />
          <button
            onClick={sendData}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Save
            </button>
          {JSON.stringify(baseProd)}
          {Object.keys(baseProd).map((elem) => {
            return <div>{baseProd[elem]}</div>
          })}
        </div>
        :
        <div style={styles.wrapper}>
          <div style={styles.loginForm}>
            <form onSubmit={signIn} >
              <h2 className="text-center">Log in</h2>
              <div className="form-group">
                <input
                  id="email"
                  ref={emailRef}
                  onChange={inputChange}
                  type="email"
                  className="form-control"
                  placeholder="email"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  id="password"
                  ref={passwordRef}
                  onChange={inputChange}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required="required"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Log in
            </button>
              </div>
              <div className="clearfix">
                <label className="pull-left checkbox-inline">
                  <input type="checkbox" /> Remember me
            </label>
                <a className="pull-right">Forgot Password?</a>
              </div>
            </form>
            <p className="text-center">
              <a>Create an Account</a>
            </p>
          </div>
        </div>}
    </>
  );
}
