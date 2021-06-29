import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import skills from "../../../skills";
import teams from "../../../teams";
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

const options = [];

for (let i = 0; i < skills.length; i++) {
  const value = `${skills[i].toString(36)}`;
  options.push({
    value,
    disabled: i === 10,
  });
}
const colorCard = ['#C2496D', '#BCC53F', '#E65D37']
const { TextArea } = Input;
function CardList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Create your teams");


  useEffect(() => {
   
      resquestApi();
    
  }, []); 

  const resquestApi = async () => {
    const cors = "";
    const endpoint ="";
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {
      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const { results } = JSON.parse(json.contents);
     console.log(results)
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
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
    <Container style={{ marginTop: "4%"}}>
      <div id="teams">
        <h1> Your Teams</h1>
        <UsergroupAddOutlined
          style={{ fontSize: "40px", cursor: "pointer" }}
          onClick={showModal}
        />
      </div>
      <hr></hr>
      <Row className="justify-content-center"  >
      {teams.map((elem, index) => {
            return <Card 
            key={index} 
            nomProjet={elem.nomProjet}
            description={elem.description}
            status={elem.status}
            color={colorCard[Math.floor(Math.random()*3)]} />
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
        {/* <p>{modalText}</p> */}
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
          <RangePicker   />
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
}

export default CardList;
