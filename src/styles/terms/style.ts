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

export const PrivacyTitle = styled.h1`
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;
export const SubSectionTitle = styled.h3`
  font-size: 14px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  font-size: 14px;
  padding-bottom: 20px;
`;

export const ListItem = styled.li`
  font-size: 14px;
`;
