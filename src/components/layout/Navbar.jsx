import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function Navbar() {
  const navlinks = [
    { path: '/', title: 'Home' },
    { path: '/quem-somos', title: 'Quem somos?' },
    { path: '/area-de-atuacao', title: 'Área de Atuação' },
    { path: '/acoes', title: 'Ações' },
    { path: '/artigos', title: 'Artigos' },
    { path: '/contato', title: 'Contato' },
    { path: '/associe-se', title: 'Associe-se' },
  ];

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal">
        {navlinks.map((link, index) => (
          <Menu.Item key={index.toString()}>
            <Link to={link.path}>{link.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
}

export default Navbar;
