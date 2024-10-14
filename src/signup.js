import React from 'react';
import './signup.css';

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form action="/signup" method="post">
          <div className="input-group">
            <input type="text" placeholder="Name" id="name" name="name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email ID" id="email" name="email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Re-enter Password" id="repassword" name="repassword" required />
          </div>
          <div className="input-group">
            <center><button type="submit">Sign Up</button></center>
          </div>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
