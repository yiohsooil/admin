import React from 'react';
import { Styled } from '../../../styles/main/pump';
import dayjs from 'dayjs';
import { Constants } from '../../../constants/table';

interface UserInfoProps {
  name: string;
  pumpSerial: number;
  birthDate: string | number;
}

const UserInfo = ({ name, pumpSerial, birthDate }: UserInfoProps) => {
  return (
    <Styled.UserInfoContainer>
      <Styled.TextWrapper>
        <Styled.LabelText>{Constants.TABLE.DATE}</Styled.LabelText>
        <Styled.ValueText>{dayjs().format('YYYY-MM-DD')}</Styled.ValueText>
      </Styled.TextWrapper>
      <Styled.TextWrapper>
        <Styled.LabelText>{Constants.TABLE.NAME}</Styled.LabelText>
        <Styled.ValueText>{name}</Styled.ValueText>
      </Styled.TextWrapper>
      <Styled.TextWrapper>
        <Styled.LabelText>{Constants.TABLE.PUMP}</Styled.LabelText>
        <Styled.ValueText>{pumpSerial}</Styled.ValueText>
      </Styled.TextWrapper>
      <Styled.TextWrapper>
        <Styled.LabelText>{Constants.TABLE.BIRTHDATE}</Styled.LabelText>
        <Styled.ValueText>{birthDate}</Styled.ValueText>
      </Styled.TextWrapper>
    </Styled.UserInfoContainer>
  );
};

export default UserInfo;
