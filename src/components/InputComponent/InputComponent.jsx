import React from 'react';
import { Input } from './style';

function InputComponent(props) {
  return (
    <Input type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
  )
}

export default InputComponent;