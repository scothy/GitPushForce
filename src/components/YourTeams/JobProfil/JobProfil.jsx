import React,{useState} from "react";
import TeamSelection from '../../DragAndDrop/dragAndDrop'
import {  Modal, Button} from 'antd';
import "./JobProfil.css";

const JobProfil = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const[teamValue, setTeamValue]= useState()
    const showModal = () => {
        setIsModalVisible(true);
      };
      const handleOk = () => {
        setIsModalVisible(false);
        console.log(teamValue)
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    return (
        <>
        <div id="jobprofil">
            <img id="profil-picture" src={ props.status ? props.picture : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} alt={props.prenom}></img>
            <div id="profil-content">
            <p className="profil-p" id="name">{props.job}</p>
            <p className="profil-p"> {props.status ?  `${props.prenom} ${props.nom}` :  "Looking for" }</p>
            </div>
            {props.status ? null : <Button type="primary" size={"small"} style={{width:'20%'}} onClick={showModal}>See</Button>  }
           
           
        </div>
        <Modal title={
            <h3 style={{textAlign:'center'}}>Choose your member</h3>
        } visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{ width:'100vw'}}>
        <TeamSelection teamsLength={value => setTeamValue(value)}/>
      </Modal>
        </>
    )
}


export default JobProfil;
