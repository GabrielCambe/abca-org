import React from 'react';
import { Form, Button } from 'antd';

import { useFirebase } from '../../../contexts/FirebaseContext';
import { UserTypeSelect, UFSelect } from './selects';

import { StyledInput } from '../styles';

export default function PreUserAssociationForm() {
  const { firestorePost } = useFirebase();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    firestorePost('/pre_users', values, { role: 'ASSOCIADE' });
    form.resetFields();
  };

  const fields = [
    { name: 'email', label: 'Email' },
    { name: 'first_name', label: 'Nome' },
    { name: 'last_name', label: 'Sobrenome' },
    { name: 'cpf', label: 'CPF' },
    {
      name: 'type',
      label: 'Tipo de Associação',
      component: <UserTypeSelect />,
    },
    { name: 'phone', label: 'Telefone' },
    { name: 'birth_date', label: 'Data de Nascimento' },
    { name: 'pseudonym', label: 'Pseudônimo' },
    { name: 'porfolio_url', label: 'Link para Portfolio' },
    {
      name: 'uf_of_birth',
      label: 'UF de Nascimento',
      component: <UFSelect />,
    },
    {
      name: 'uf_of_residence',
      label: 'UF de Residência',
      component: <UFSelect />,
    },
  ];

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      {fields.map((field, index) => (
        <Form.Item key={index.toString()} label={field.label} name={field.name}>
          {field.component || <StyledInput />}
        </Form.Item>
      ))}
      <Button type="primary" onClick={() => form.submit()}>
        Enviar
      </Button>
    </Form>
  );
}
