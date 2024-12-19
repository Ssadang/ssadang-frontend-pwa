import React from 'react';
import { Option, Select } from './style';

function SelectComponent(props) {
  return (
    <Select name={props.name} value={props.value} onChange={props.onChange}>
      {
        Object.keys(props.options).map(key => {
          return (
            <Option key={key} value={key}>
              {props.options[key]}
            </Option>
          );
        })
      }
    </Select>
  );
}

export default SelectComponent;
