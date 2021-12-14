import React from 'react';
import { Layout as AntdLayout } from 'antd';

import Navbar from './Navbar';

const { Content } = AntdLayout;

function Layout({ children }) {
  return (
    <AntdLayout>
      <Navbar />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>{children}</Content>
    </AntdLayout>
  );
}

export default Layout;
