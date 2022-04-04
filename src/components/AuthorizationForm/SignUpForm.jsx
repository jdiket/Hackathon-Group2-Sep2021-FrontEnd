import styled from 'styled-components';
import { signUp } from '../../utilities/services/users-service';

export const SignUpForm = () => {
  let state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    isShelter:false,
  };
  const disable = state.password !== state.confirm;

  const handleChange = (e) => {
    console.log(e)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  return (
    <SignUpFormStyled>
      <form className='form-container' autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={state.name} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" value={state.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={state.password} onChange={handleChange} required />
        <label>Confirm</label>
        <input type="password" name="confirm" value={state.confirm} onChange={handleChange} required />
        <label>Are you creating an account for a shelter?</label>
        <input type="checkbox" name="isShelter" value={state.isShelter} onChange={handleChange} />
        <button type="submit" disabled={disable}>SIGN UP</button>
      </form>
      <p className="error-message">&nbsp;{state.error}</p>
    </SignUpFormStyled>
  );
}

const SignUpFormStyled = styled.div`
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