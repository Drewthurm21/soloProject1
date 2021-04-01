// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './signup.css'

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirmation Password field must match the Password field']);
  };

  return (
    <div className='signup-form-container'>
      <h2>Signup</h2>
      <form>
        <div className='info-box'>
          <input
            type="text" value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div className='info-box'>
          <input
            type="text" value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>
            Username
          </label>
        </div>
        <div className='info-box'>
          <input
            type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>
            Password
          </label>
        </div>
        <div className='info-box'>
          <input
            type="password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>
            Confirm Password
          </label>
        </div>
        <p onClick={handleSubmit}> Submit
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </p>
      </form>
    </div>
  );

}

export default SignupForm;