import { useState } from 'react';
import styled from 'styled-components';
import { LoginForm, SignUpForm } from '../components'

export const AuthPage = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <AuthPageStyled>
      <button
        className='toggle' 
        onClick={() => setShowLogin(!showLogin)
        }> {showLogin ? <span>Need to register?</span> : <span>Need to login?</span>}
      </button>
      { showLogin 
        ? <LoginForm setUser={setUser} /> 
        : <SignUpForm setUser={setUser} />
      }
    </AuthPageStyled>
  );
}

const AuthPageStyled = styled.div`
  min-height: calc(100vh - 7.6rem);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  & .toggle {
    padding: 1rem;
    font-size: 14px;
    text-transform: uppercase;
    width: 180px;
  }
`;