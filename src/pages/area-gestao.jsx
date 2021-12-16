import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

import { useFirebase } from '../contexts/FirebaseContext';

export default function AreaGestao() {
  const { firestoreList } = useFirebase();
  const [preUsers, setPreUsers] = useState([]);
  const getPreUsers = async () =>
    setPreUsers(await firestoreList('/pre_users', 'role == ASSOCIADE'));

  useEffect(() => {
    getPreUsers();
  }, []);

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Nome',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Sobrenome',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Papel',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'UF de Residência',
      dataIndex: 'uf_of_residence',
      key: 'uf_of_residence',
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      // title: 'Confirmar Associação',
      key: 'action',
      render: (text, record) => (
        <Button type="primary" size="small">
          Confirmar Associação
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={preUsers} pagination={false} />;
}
