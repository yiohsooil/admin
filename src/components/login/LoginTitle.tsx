import React from 'react';
import { Styled } from '../../styles/login';
import anydana from '../../assets/anydana.svg';
import plus from '../../assets/plus.svg';
import { Constants } from '../../constants/login';

const LoginTitle = () => {
  return (
    <Styled.Tilte>
      <Styled.ImgWrapper>
        <Styled.Img src={anydana} alt="Anydana" height={30} />
        <Styled.Img src={plus} alt="Plus" height={20} />
      </Styled.ImgWrapper>
      <Styled.TextWrapper>{Constants.Login.PASSWORD}</Styled.TextWrapper>
    </Styled.Tilte>
  );
};

export default LoginTitle;
