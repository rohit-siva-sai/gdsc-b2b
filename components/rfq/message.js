import React from 'react'
import { Button, message, Space } from 'antd';

const Message = ({value="success"}) => {
    const [messageApi, contextHolder] = message.useMessage()
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'This is a success message',
          style: {
            marginTop: '20vh',
          },
        });
      };
      const error = () => {
        messageApi.open({
          type: 'error',
          content: 'This is an error message',
        });
      };
  return (
    <div>
       <Button onClick={success}>Success</Button>
    </div>
  )
}

export default Message
