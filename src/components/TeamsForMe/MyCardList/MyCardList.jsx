import React from "react";
import "./MyCardList.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import teamForMe from "./teamForMe";
import Card from './Card/card'
 
const colorCard = ['#C2496D', '#BCC53F', '#E65D37']
 

const MyCardList = () => {
    return (
        <Container >
         <div id="teams">
     
         <h1> Teams are looking for you</h1>
       
      </div>
      <hr></hr>
      <Row className="justify-content-center"  >
      {teamForMe.map((elem, index) => {
            return <Card 
            key={index} 
            teamName={elem.teamName}
            searchProfil={elem.searchProfil}
            descriptionProject={elem.descriptionProject}
            status={elem.status}
            color={colorCard[Math.floor(Math.random()*3)]}
             />
          })}
          </Row>
        </Container>
    )
}

export default MyCardList;
 