import { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm/LoginForm';
import SignUpForm from '../components/SignUpForm/SignUpForm';

export const AuthPage = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <AuthPageStyled>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;