# Login Form using React and Node.js

## Firebase.js
Used firebase as backend to store user `email` and `password`.

```javascript
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxLJuI_plEFyAFeAa7mIRQpMZJYkGI1NE",
  authDomain: "login-form-5017b.firebaseapp.com",
  projectId: "login-form-5017b",
  storageBucket: "login-form-5017b.appspot.com",
  messagingSenderId: "23885697754",
  appId: "1:23885697754:web:4259944e061e2e6be3cbe3",
  measurementId: "G-Z1DV6JWMLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };

```
![firebase](image-2.png)
## Login.js
The code for the login page
```javascript
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import { app } from "./firebase"; 
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app); 
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {        
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error logging in user:", errorCode, errorMessage);
      });
  };

  return (
    <div className="login-container">
      <div className="title"><h1>Login Form:</h1></div>
      <div className="loginform">
        <form onSubmit={handleSubmit}>
          <div>
            <label id="email" htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

```
![Login page](image.png)

```css
body{
    background-color: antiquewhite;
}
form{
    padding: 25px;
    margin: 10px;
    background-color: rgb(89, 226, 226);
    border-radius: 10px;
    width: 30%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1),
    0 0 10px rgba(0, 0, 0, .2),
    0 0 15px rgba(0, 0, 0, .2);
    
}
.title{
    display: flex;    
    justify-content: center;
    margin-top:10vh;
}
.loginform{
    display: flex;    
    justify-content: center;
   
}
label{
    margin-right: 10px;
}
input{
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px;
    margin: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}
input:focus {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    outline: none; 
}
button{
    border: 1px solid white;
    border-radius: 5px;    
    padding: 5px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
}
button:focus {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    outline: none; 
}
#email{
    margin-right: 40px;
}
```

## Home.js
```javascript
import React from 'react';
import './home.css';

function Home() {
  return (
    <h1>Welcome Home !!!</h1>
  );
}

export default Home;  

```


## Output:
+ If the login is **success**

![home page](image-1.png)

+ If the login is **wrong**

![alt text](image-3.png)