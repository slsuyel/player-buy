import React from "react";
import "./Player.css";
const Player = ({ players ,handleAddCart}) => {

  return (
    <div className="player-card">
      {players.map((player) => (
        <SinglePlayer player={player} handleAddCart={handleAddCart} key={player.id} />
      ))}
    </div>
  );
};

const SinglePlayer = ({ player,handleAddCart }) => {
  const { name, age, job, picture, price } = player;
  return (
    <div className="card p-1 shadow">
      <h3 className="font-monospace fs-5 ms-2 mt-1 text-primary">{name}</h3>
      <img
        src={picture}
        alt=""
        className="img-fluid img-thumbnail m-auto player-img"
        width={"200px"}
      />
      <div className="lh-1 me-3 text-lg-end text-primary">
        <p>age :{age}</p>
        <p>Category : {job}</p>
        <p>Price : {price}</p>
      </div>
      <div className="d-flex justify-content-around mb-3">
        <button
          onClick={() => {
            handleAddCart(player);
          }}
          className="btn btn-primary"
        >
          add cart
        </button>
        {/* <button className="btn btn-danger">remove cart</button> */}
      </div>
    </div>
  );
};

export default Player;
