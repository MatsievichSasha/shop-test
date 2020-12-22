import React, { useEffect, useState } from "react";
import firebase from "firebase";

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

export default function Authorization() {
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    const db = firebase.database();
    console.log(db);
  });

  const inputChange = (event) => {
    setUser((prev) => {
      let id = event.target.id;
      return {
        ...prev,
        [id]: event.target.value,
      };
    });
  };

  console.log("login", user);

/*   const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  }; */

  const signUp = () => {
    const {email, password} = user
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
    }
  return (
    <div style={styles.wrapper}>
      <div style={styles.loginForm}>
        <form>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              id="email"
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
               onSubmit={signUp}
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
    </div>
  );
}
