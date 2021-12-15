import React from 'react';
import { Select } from 'antd';

import { StyledSelect } from './styles';

export function UserRoleSelect({ ...props }) {
  const user_role_list = [
    { value: 'GESTAO', name: 'Gestão' },
    { value: 'ASSOCIADE', name: 'Associade' },
  ];

  return (
    <StyledSelect {...props} showArrow>
      {user_role_list.map((user_role, index) => (
        <Select.Option key={index.toString()} value={user_role.value}>
          {user_role.name}
        </Select.Option>
      ))}
    </StyledSelect>
  );
}

export function UserTypeSelect({ ...props }) {
  const user_type_list = [
    { value: 'PROFISSIONAL', name: 'Profissional' },
    { value: 'ASPIRANTE', name: 'Aspirante' },
  ];

  return (
    <StyledSelect {...props} showArrow>
      {user_type_list.map((user_type, index) => (
        <Select.Option key={index.toString()} value={user_type.value}>
          {user_type.name}
        </Select.Option>
      ))}
    </StyledSelect>
  );
}

export function UFSelect({ ...props }) {
  const UF_list = [
    { name: 'Rondônia', code: 'RO' },
    { name: 'Acre', code: 'AC' },
    { name: 'Amazonas', code: 'AM' },
    { name: 'Roraima', code: 'RR' },
    { name: 'Pará', code: 'PA' },
    { name: 'Amapá', code: 'AP' },
    { name: 'Tocantins', code: 'TO' },
    { name: 'Maranhão', code: 'MA' },
    { name: 'Piauí', code: 'PI' },
    { name: 'Ceará', code: 'CE' },
    { name: 'Rio Grande do Norte', code: 'RN' },
    { name: 'Paraíba', code: 'PB' },
    { name: 'Pernambuco', code: 'PE' },
    { name: 'Alagoas', code: 'AL' },
    { name: 'Sergipe', code: 'SE' },
    { name: 'Bahia', code: 'BA' },
    { name: 'Minas Gerais', code: 'MG' },
    { name: 'Espírito Santo', code: 'ES' },
    { name: 'Rio de Janeiro', code: 'RJ' },
    { name: 'São Paulo', code: 'SP' },
    { name: 'Paraná', code: 'PR' },
    { name: 'Santa Catarina', code: 'SC' },
    { name: 'Rio Grande do Sul', code: 'RS' },
    { name: 'Mato Grosso do Sul', code: 'MS' },
    { name: 'Mato Grosso', code: 'MT' },
    { name: 'Goiás', code: 'GO' },
    { name: 'Distrito Federal', code: 'DF' },
  ];

  return (
    <StyledSelect {...props} showArrow>
      {UF_list.map((uf, index) => (
        <Select.Option key={index.toString()} value={uf.code}>
          {uf.name}
        </Select.Option>
      ))}
    </StyledSelect>
  );
}
