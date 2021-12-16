import React from 'react';
import { Form, Button } from 'antd';

import { useAuth } from '../../../contexts/AuthContext';
import { StyledInput } from '../styles';

export default function LoginForm() {
  const { logIn } = useAuth();
  const [form] = Form.useForm();

  const onFinish = (values) => logIn(values);
  const fields = [
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Senha' },
  ];

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      {fields.map((field, index) => (
        <Form.Item key={index.toString()} label={field.label} name={field.name}>
          {field.component || <StyledInput />}
        </Form.Item>
      ))}
      <Button type="primary" onClick={() => form.submit()}>
        Login
      </Button>
    </Form>
  );
}
