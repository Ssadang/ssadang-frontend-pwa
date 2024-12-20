import React, { useEffect, useState } from 'react';
import { FileLabel, FilePreview, FilePreviewImg, Input } from './style';
import { IoCloudUploadOutline } from "react-icons/io5";

function InputComponent(props) {
  const [ filePreview, setFilePreview ] = useState(null);

  const FileOnChangeHandler = (e) => {
    const file = e.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  // useEffect(() => {
  //   console.log(filePreview);
  // }, [filePreview])


  return (
    <>
      <Input 
        type={props.type} 
        name={props.name} 
        value={props.value} 
        onChange={(e) => {
          props.onChange(e);
          if(props.type === 'file') FileOnChangeHandler(e);
        }
        }
        id={props.name}
        placeholder={props.placeholder}
      />
      {
        props.type === 'file' && !filePreview &&
        <FileLabel htmlFor={props.name}><IoCloudUploadOutline /></FileLabel>
      }
      {
        filePreview && 
        <FilePreview>
          <FilePreviewImg src={filePreview} alt='filePreviewImg' />
        </FilePreview>
      }
    </> 
  )
}

export default InputComponent;