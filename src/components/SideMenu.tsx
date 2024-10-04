import React from 'react';
import { Styled } from '../styles/sidemenu';
import anydanaplus from '../assets/anydanaplus.svg';
import { Link } from 'react-router-dom';

export default function SideMenu() {
  return (
    <Styled.Container>
      <Styled.Tilte>
        <Styled.Img src={anydanaplus} />
      </Styled.Tilte>
      <Styled.MenuList>
        <Styled.MenuListItem>
          <Link to={'/'}>고객 관리</Link>
        </Styled.MenuListItem>
      </Styled.MenuList>
    </Styled.Container>
  );
}
