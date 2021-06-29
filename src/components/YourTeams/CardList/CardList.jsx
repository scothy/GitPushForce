import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
// import teams from "../../../teams";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  Modal,
  Input,
  Space,
  Typography,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import "./CardList.css";
const { Title } = Typography;
const { RangePicker } = DatePicker;

 
const colorCard = ['#C2496D', '#BCC53F', '#E65D37']
const { TextArea } = Input;
export default function CardList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [team, setTeam] = useState({});
  const [skills, setSkills] = useState([]);
  


  const options = [];

for (let i = 0; i < skills.length; i++) {
  const value = `${skills[i].toString(36)}`;
  options.push({
    value,
    disabled: i === 10,
  });
}
 
  
  useEffect(() => {
    
    resquestApi()
    resquestSkills()
  },[]);  
  
  const resquestApi = async () => {
    const endpoint =  "http://localhost:5000/team/user/1";
    try {
      const resquest = await fetch(`${endpoint}`);
      const json = await resquest.json();
      await  setTeam(json);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };


  const resquestSkills = async () => {
    const endpoint =  "http://localhost:5000/job/";
    
    try {
      const resquest = await fetch(`${endpoint}`);
      const json = await resquest.json();
      let array = []
      json.forEach(element => array.push(element.name))
       setSkills(array)
    } catch (e) {
      console.log(`Error : ${e}.`);
  }
};

  const handleOk = () => {
   
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setIsModalVisible(false);
  };
  const handleChange = (value) => {
    console.log(value);
  };

  const priceValue = (value) => {
    console.log("changed", value);
  };
  const priceValue2 = (value) => {
    console.log("changed", value);
  };
  return (
    <Container style={{ marginTop: "4%" }}>
      <div id="teams">
        <h1> Your Teams</h1>
        <UsergroupAddOutlined
          style={{ fontSize: "40px", cursor: "pointer" }}
          onClick={showModal}
        />
      </div>
      <hr></hr>
      <Row className="justify-content-center">
        {Object.keys(team).length !== 0  &&  team.teams.map((elem, index) => {   
          return( <Card
            key={index}
            nomProjet={elem.name}
            description={elem.description}
            status={elem.status}
            color={colorCard[Math.floor(Math.random() * 3)]
            } />)
        })}
      </Row>
      <Modal
        title="Créer une équipe"
        visible={isModalVisible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Créer"
      >
     
        <Space direction="vertical" style={{ width: "100%" }}>
          <Title level={5}>Project's Name</Title>
          <Input placeholder="Name" />
          <Title level={5}>Describe your project</Title>
          <TextArea rows={4} placeholder="Description..." />
          <Title level={5}>Choose your members</Title>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            options={options}
            onChange={handleChange}
          />
          <Title level={5}>Date</Title>
          <RangePicker />
          <Title level={5}>Price</Title>

          <div
            style={{
              display: "flex-start",
              alignItems: "center",

              justifyContent: "start",
            }}
          >
            <InputNumber
              defaultValue={100}
              min={0}
              max={10000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              onChange={priceValue}
            /> -
            <InputNumber
              defaultValue={100}
              min={0}
              max={10000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              onChange={priceValue2}
            />
          </div>
        </Space>
      </Modal>

    </Container>
  );
};