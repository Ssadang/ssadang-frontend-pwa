import React, { useEffect, useState } from 'react';
import { FileLabel, FilePreview, FilePreviewImg, Input } from './style';
import { IoCloudUploadOutline } from "react-icons/io5";
import { s3Upload } from '../../hooks/s3Upload';

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
    s3Upload(file);
  }

  const handleFileClick = () => {
    // 미리보기 클릭 시 파일 선택 input을 클릭하도록 설정
    document.getElementById(props.name).click();
  };

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
        <FilePreview onClick={handleFileClick}>
          <FilePreviewImg src={filePreview} alt='filePreviewImg' />
        </FilePreview>
      }
    </> 
  )
}

export default InputComponent;