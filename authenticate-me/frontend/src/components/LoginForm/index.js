import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './login.css'


export const LoginForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (errors.length > 1) return

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form>
        <div className='info-box'>
          <input
            type="text"
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <label>
            Username
          </label>
        </div>
        <div className='info-box'>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>
            Password
          </label>
        </div>
        <p onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </p>
      </form>
    </div>
  )
}

export default LoginForm;