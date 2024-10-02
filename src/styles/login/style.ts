import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #333;
  box-sizing: border-box;
`;

export const InnerContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
`;

export const Tilte = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Img = styled.img<{ height: number }>`
  height: ${({ height }) => height}px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 30px;
  box-sizing: border-box;

  &:focus-within label {
    color: #3a57e8;
  }
`;
export const Label = styled.label`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  transition: color 0.3s ease;
`;
export const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.4);

  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3a57e8;
  }
`;

export const Button = styled.input`
  width: 100%;
  background: #3a57e8;
  border: none;
  outline: none;
  color: #fff;
  padding: 10px 12px;
  box-sizing: border-box;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 4px;
`;
