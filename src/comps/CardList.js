import React from "react";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((newMonster) => {
        return (
          <div className="card-container" key={newMonster.id}>
            <img
              alt={`monster ${newMonster.name}`}
              src={`https://robohash.org/${newMonster.id}?set=set2&size=180x180`}
            />
            <h2>{newMonster.name}</h2>
            <p1>{`Phone: ${newMonster.phone}`}</p1>
            <br />
            <p1>{`Email: ${newMonster.email}`}</p1>
          </div>
        );
      })}
    </div>
  );
};
export default CardList;
