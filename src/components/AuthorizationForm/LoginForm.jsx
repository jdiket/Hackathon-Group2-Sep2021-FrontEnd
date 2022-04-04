import { useState } from 'react';
import styled from 'styled-components';
import * as usersService from '../../utilities/services/users-service';

export const LoginForm = ({ setUser }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <LoginFormStyled>
      <form className="form-container" autoComplete="off" onSubmit={handleSubmit} >
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">LOG IN</button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  & .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & input {
      margin-bottom: 1.25rem;
    }
  }
`;