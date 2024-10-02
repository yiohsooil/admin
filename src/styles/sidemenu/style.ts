import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  width: 220px;
  height: 100vh;
  z-index: 1000;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Tilte = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 70px;
  padding-top: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  height: 40px;
`;

export const MenuList = styled.ul`
  padding: 20px 15px 0 15px;
`;
export const MenuListItem = styled.li`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  background-color: #3a57e8;
  border-radius: 4px;

  & a {
    text-decoration: none;
    color: #fff;
  }
`;
