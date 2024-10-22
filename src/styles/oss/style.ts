import styled from '@emotion/styled';
import { Theme } from '../theme';

export const Container = styled.div`
  padding: 20px;
  line-height: 1.6;
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${Theme.colors.blackOverlay10};
  box-sizing: border-box;

  & p {
    font-size: 16px;
  }

  & p strong {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 10;
    max-width: 768px;
    border: none;
  }

  @media (max-width: 480px) {
    padding: 10;
    max-width: 480px;
    border: none;
  }
`;

export const Header = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const ListWrapper = styled.div``;

export const ListItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${Theme.colors.white};
  border-radius: 6px;
`;

export const Link = styled.a`
  color: ${Theme.colors.blue500}
  text-decoration: none;
  fontweight: bold;
  word-wrap: break-word;
`;
