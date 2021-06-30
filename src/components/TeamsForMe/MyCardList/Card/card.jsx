import React,{useState} from 'react'
import './card.css'
import { Col } from "react-bootstrap";
import { Button, Modal, Input, notification  } from 'antd';
import ListGroup from 'react-bootstrap/ListGroup'
import AOS from 'aos';
import 'aos/dist/aos.css';

const { TextArea } = Input;
 
 

export default function Card(props) {
    let data = props.searchProfil
    const [isModalVisible, setIsModalVisible] = useState(false);
    
      const openNotification = placement => {
        notification.success({
          message: `Notification ${placement}`,
          description:
            'Your apply is successfully send. Good Luck !',
          placement,
        });
      };

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
        openNotification('bottomRight')
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    return (
        <>
        
            <Col xs={12} sm={6} md={6} lg={4} style={{marginBottom:"4%"}}>
        <div className="card-container" id="card2" style={{backgroundColor:props.color}} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
         <h2 id="project-name">{props.teamName}</h2>
         
        
        <div style={{width:'100%', overflow:'auto'}}>
        <h2 id="project-name">is looking for :</h2>
            <ListGroup>
        {data && data.map((elem, index) => {
            return (

                <ListGroup.Item className='eleme'  style={{margin:'2%'}} key={index} > < p className='elem' >{elem}</p> </ListGroup.Item>
            )
            
          })}
   
</ListGroup>
        </div>
        <div className='description'>
        <h2 id="project-name">Description</h2>
         <p style={{ margin:'auto', padding:'2%', textAlign:'center'}}>{props.descriptionProject}</p>
         <Button type="primary" id="button-modal" onClick={showModal}>Apply</Button>
         
        </div>
   </div>
        </Col>
        <Modal title={props.teamName} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Describe your profil</p>
        <TextArea rows={4} />
      </Modal>
      </>
        
    )
}

AOS.init();