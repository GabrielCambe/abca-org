import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const { Header } = Layout;

function Navbar() {
  const { authUser, logOut } = useAuth();

  const constantNavlinks = [
    { path: '/', title: 'Home' },
    { path: '/quem-somos', title: 'Quem somos?' },
    { path: '/area-de-atuacao', title: 'Área de Atuação' },
    { path: '/acoes', title: 'Ações' },
    { path: '/artigos', title: 'Artigos' },
    { path: '/contato', title: 'Contato' },
  ];

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal">
        {constantNavlinks.map((link, index) => (
          <Menu.Item key={index.toString()} style={{ ...link.style }}>
            <Link to={link.path}>{link.title}</Link>
          </Menu.Item>
        ))}

        {authUser &&
          (authUser.role === 'GESTAO' ? (
            <Menu.Item key={(constantNavlinks.length + 1).toString()}>
              <Link to="/area-gestao">Área Gestão</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key={(constantNavlinks.length + 1).toString()}>
              <Link to="/area-associade">Área Associade</Link>
            </Menu.Item>
          ))}

        {!authUser && (
          <Menu.Item
            key={(constantNavlinks.length + 2).toString()}
            style={{ marginLeft: 'auto' }}
          >
            <Link to="/associe-se">Associe-se</Link>
          </Menu.Item>
        )}

        {authUser ? (
          <Menu.Item
            key={(constantNavlinks.length + 3).toString()}
            onClick={() => logOut()}
            style={{ marginLeft: 'auto' }}
          >
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item key={(constantNavlinks.length + 3).toString()}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
}

export default Navbar;
