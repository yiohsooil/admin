import React from 'react';
import Styled from '../styles/login';
import LoginTitle from '../components/login/LoginTitle';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <LoginTitle />
        <LoginForm />
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default Login;
