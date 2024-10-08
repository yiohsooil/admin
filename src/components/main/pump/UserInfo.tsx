import React from 'react';
import { Styled } from '../../../styles/main/pump';
import dayjs from 'dayjs';

interface UserInfoProps {
  name: string;
  pumpSerial: number;
  birthDate: string | number;
}

const UserInfo = ({ name, pumpSerial, birthDate }: UserInfoProps) => {
  return (
    <Styled.UserInfoContainer>
      <Styled.TextWrapper>
        <Styled.LabelText>날짜</Styled.LabelText>
        <Styled.ValueText>{dayjs().format('YYYY-MM-DD')}</Styled.ValueText>
      </Styled.TextWrapper>
      <Styled.TextWrapper>
        <Styled.LabelText>성명</Styled.LabelText>
        <Styled.ValueText>{name}</Styled.ValueText>
      </Styled.TextWrapper>
      <Styled.TextWrapper>
        <Styled.LabelText>펌프</Styled.LabelText>
        <Styled.ValueText>{pumpSerial}</Styled.ValueText>
      </Styled.TextWrapper>
      <Styled.TextWrapper>
        <Styled.LabelText>생년월일</Styled.LabelText>
        <Styled.ValueText>{birthDate}</Styled.ValueText>
      </Styled.TextWrapper>
    </Styled.UserInfoContainer>
  );
};

export default UserInfo;
