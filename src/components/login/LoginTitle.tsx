import React from 'react';
import { Styled } from '../../styles/login';
import anydana from '../../assets/anydana.svg';
import plus from '../../assets/plus.svg';

const LoginTitle = () => {
  return (
    <Styled.Tilte>
      <Styled.ImgWrapper>
        <Styled.Img src={anydana} alt="Anydana" height={30} />
        <Styled.Img src={plus} alt="Plus" height={20} />
      </Styled.ImgWrapper>
      <Styled.TextWrapper>관리자 로그인</Styled.TextWrapper>
    </Styled.Tilte>
  );
};

export default LoginTitle;
