import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="/login" method="post">
          <div className="input-group">
            <input type="email" placeholder="Email ID" id="email" name="email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" id="password" name="password" required />
          </div>
          <div className="input-group">
           <center> <button type="submit">Login</button> </center>
          </div>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
