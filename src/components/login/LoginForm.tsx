import React, { KeyboardEvent, RefObject, useEffect, useRef } from 'react';
import Styled from '../../styles/login';
import { useForm, SubmitHandler } from 'react-hook-form';
import { login } from '../../types';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<login.LoginFormProps>({
    mode: 'onSubmit',
  });

  const idRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: SubmitHandler<login.LoginFormProps> = (data) => {
    console.log('Data:', data);
  };

  const handleKeydown = (
    e: KeyboardEvent<HTMLInputElement>,
    ref: RefObject<HTMLInputElement | null>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      ref.current?.focus();
    }
  };

  useEffect(() => {
    if (idRef.current) {
      idRef.current.focus();
    }
  }, []);

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.InputContainer>
        <Styled.Label htmlFor="id">아이디</Styled.Label>
        <Styled.Input
          id="id"
          {...register('id')}
          ref={(e: HTMLInputElement | null) => {
            register('id').ref(e);
            idRef.current = e;
          }}
          onKeyDown={(e) => handleKeydown(e, passwordRef)}
        />
      </Styled.InputContainer>
      <Styled.InputContainer>
        <Styled.Label htmlFor="password">비밀번호</Styled.Label>
        <Styled.Input
          id="password"
          {...register('password')}
          ref={(e: HTMLInputElement | null) => {
            register('password').ref(e);
            passwordRef.current = e;
          }}
        />
      </Styled.InputContainer>
      <Styled.InputContainer>
        <Styled.Button type="submit" value="로그인" />
      </Styled.InputContainer>
    </Styled.Form>
  );
};

export default LoginForm;
