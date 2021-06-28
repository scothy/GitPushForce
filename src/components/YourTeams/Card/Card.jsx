import React, {useState, useEffect} from 'react';
import './Card.css';
import profil from '../../../data.js';
import JobProfil from "../JobProfil/JobProfil";
import { Col } from "react-bootstrap";
import { Select } from 'antd';
const { Option } = Select;


export default function Card(props) {
// ne pas oublier le status via back-end
const [status, setStatus] = useState('En cours');

    return (
      <Col xs={12} sm={6} md={6} lg={4} style={{marginBottom:"4%"}}>
        <div className="card-container" style={{backgroundColor:props.color}}>
         <h2 id="project-name">{props.nomProjet}</h2>
         <h3 id="project-description">{props.description}</h3>
          <div id='jobprofil-container'>
          {profil.map((elem, index) => {
            return <JobProfil key={index} 
            picture={elem.picture}
            prenom={elem.prenom}
            nom={elem.nom}
            job={elem.job} />;
          })}
            </div>
            <h2 id="statut-projet">{props.status}</h2>
            <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Selectionnez un statut"
    value={status}
    onChange={(value) => {setStatus(value)}}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  > 
    <Option value="En cours">En cours</Option>
    <Option value="Terminé">Terminé</Option>
  </Select>
        </div>
        </Col>
    )
}
