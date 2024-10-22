import styled from '@emotion/styled';
import { Theme } from '../theme';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${Theme.colors.gray900};
  box-sizing: border-box;
  background: linear-gradient(
    135deg,
    ${Theme.colors.gradientFirst} 0%,
    ${Theme.colors.gradientSecond} 50%,
    ${Theme.colors.gradientThird} 100%
  );
`;

export const InnerContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
  border: 1px solid ${Theme.colors.whiteOverlay30};
  border-radius: 16px;
  height: 400px;
  background: ${Theme.colors.whiteOverlay30};
  box-shadow: 0 4px 30px ${Theme.colors.blackOverlay10};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Tilte = styled.h1`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  font-size: 25px;
  font-weight: bold;
  margin: 0px 0 10px 0;
  box-sizing: border-box;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

export const TextWrapper = styled.div`
  color: ${Theme.colors.black};
`;

export const Img = styled.img<{ height: number }>`
  height: ${({ height }) => height}px;
`;

export const Form = styled.form`
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;

  &:focus-within label {
    color: ${Theme.colors.white};
    font-weight: bold;
  }
`;
export const Label = styled.label`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.colors.black};
  font-weight: bold;
  transition: all 0.3s ease;
`;
export const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  outline: none;
  border-radius: 4px;
  border: 1px solid ${Theme.colors.blackOverlay40};

  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${Theme.colors.mainBlue};
  }
`;

export const Button = styled.input`
  width: 400px;
  background: ${Theme.colors.loginBlue};
  border: none;
  outline: none;
  color: ${Theme.colors.white};
  padding: 14px 12px;
  box-sizing: border-box;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
`;
