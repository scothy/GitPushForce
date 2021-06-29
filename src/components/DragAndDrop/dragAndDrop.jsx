import React, { useState } from "react";
import player from "./players";
import './dragAndDrop.css';
import { useDrag, useDrop } from "react-dnd";
 

function TeamSelection (props){
  const [players, setPlayers] = useState(() =>  player);
  const [team, setTeam] = useState([]);

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const movePlayer = (item) => {
    if (item && item.type === "player") {
      //Accepting player into the team
      setTeam((_team) => [..._team, players[item.index]]);
      setPlayers((_players) => _players.filter((_, idx) => idx !== item.index));
      props.teamsLength(team)
    } else {
      //Removing a player from team
      setPlayers((_players) => [..._players, team[item.index]]);
      setTeam((_team) => _team.filter((_, idx) => idx !== item.index));
      console.log(' je suis dans le else',players)
    }
    console.log(' je suis dans le if',team)
  };

  const dragHoverTeamBG = isOver ? "bg-warning" : "bg-light";
  const dragHoverPlayerBG = isPlayerOver ? "bg-warning" : "bg-light";

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <p>Drag & Drop for choosing your profil</p>
          <div className="row justify-content-md-center">
            <div className={`col-5 border m-2 ${dragHoverPlayerBG}`}>
              <div className="bg-info row text-white">
                <div className="col font-weight-bold" id="tag-modal">Available Applicants</div>
              </div>
              <ul className="list-group py-2 h-100" ref={removeFromTeamRef}>
                {players.map((player, idx) => (
                  <Player
                    {...player}
                    key={player.id}
                    index={idx}
                    playerType="player"
                    onDropPlayer={movePlayer}
                  />
                ))}
              </ul>
            </div>
            <div className={`col-5 border m-2 ${dragHoverTeamBG}`}>
              <div className="bg-success row text-white">
                <div className="col font-weight-bold" id="tag-modal">Profil choosed</div>
              </div>
              <ul className="list-group py-2 h-100" ref={addToTeamRef}>
                {team.map((player, idx) => (
                  <Player
                    {...player}
                    key={player.id}
                    index={idx}
                    playerType="team"
                    onDropPlayer={movePlayer}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Player = ({
  name,
  age,
  nationality,
  photo,
  index,
  playerType,
  onDropPlayer,
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: playerType,
      index,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <li className="list-group-item my-1 p-2" ref={dragRef}>
      <div className="card border-0">
        <div className="row no-gutters">
          <div className="col-md-1">
            <img
              src={photo}
              className="img-thumbnail border-secondary rounded-circle"
              alt='test'
            />
          </div>
          <div className="col-md-9">
            <div className="card-body py-1 px-2 text-left">
              <h5 className="card-title d-inline">{name}</h5>
              <p className="card-text d-inline">, {nationality}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TeamSelection;