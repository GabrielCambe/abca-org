import React from 'react';
import { Layout as AntdLayout } from 'antd';

import Navbar from './Navbar';

const { Content } = AntdLayout;

function Layout({ children }) {
  return (
    <AntdLayout style={{ maxHeight: '100vh' }}>
      <Navbar />
      <AntdLayout>
        <Content style={{ padding: '0 50px', marginTop: 64, overflow: 'auto' }}>
          {children}
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;
