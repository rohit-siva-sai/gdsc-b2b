import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';

const Attachment = () => {
    const [fileList,setFileList] = useState([])
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)
    console.log('sssa',fileList);
    
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </div>
    );
  return (
    <div>
       <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        // onPreview={handlePreview}
        onChange={handleChange}
        className='w-full'
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
    </div>
  )
}

export default Attachment
