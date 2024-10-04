import React from 'react';
import { Outlet } from 'react-router-dom';
import { Styled } from '../styles/layout';
import SideMenu from './SideMenu';

const Layout = () => {
  return (
    <Styled.Container>
      <SideMenu />
      <Outlet />
    </Styled.Container>
  );
};

export default Layout;
