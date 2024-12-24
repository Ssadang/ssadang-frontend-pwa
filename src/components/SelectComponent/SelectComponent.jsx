import React from 'react';
import { Option, Select } from './style';

function SelectComponent(props) {
  const options = Object.entries(props.options);

  return (
    <Select name={props.name} value={props.value} onChange={props.onChange}>
      <Option hidden>{props.placeholder}</Option>
      {
        options.map(([key, label]) => {
          return (
            <Option key={key} value={key}>{label}</Option>
          )
        })
      }
    </Select>
  );
}

export default SelectComponent;
