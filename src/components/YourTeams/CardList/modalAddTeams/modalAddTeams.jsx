
import React, {useState}from 'react'
import { Modal, Button } from 'antd';

export default function ModalAddTeams  (props)  {
   
 
   

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    props.onCancel(false);
  };

  return (
    <>
      <Modal
        title="Title"
        visible={props.visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={()=> props.onCancel(false)}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

 