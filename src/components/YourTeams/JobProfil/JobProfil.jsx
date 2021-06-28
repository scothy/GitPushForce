import React from "react";
import "./JobProfil.css";

const JobProfil = (props) => {
    return (
        <div id="jobprofil">
            <img id="profil-picture" src={props.picture} alt={props.prenom}></img>
            <div id="profil-content">
            <p className="profil-p" id="name">{props.prenom} {props.nom}</p>
            <p className="profil-p">{props.job}</p>
            </div>
        </div>
    )
}

export default JobProfil;
