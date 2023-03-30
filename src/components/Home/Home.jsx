import React, { useEffect, useState } from "react";
import Player from "../Player/Player";

const Home = ({ handleAddCart, localData }) => {
  const [getNewData, setNewData] = useState(localData);
  useEffect(() => {
    const getDataFromLocal = JSON.parse(localStorage.getItem("player"));
    getDataFromLocal ? setNewData(getDataFromLocal) : "";
  }, [localData]);

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hnmahamud/players_api/main/players.json"
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="row container">
      <div className="player-container col-md-8">
        <h2>Player List</h2>
        <p>All player are :{players.length}</p>
        <Player players={players} handleAddCart={handleAddCart} />
      </div>

      <div className="card-container col-md-4">
        <h2>Player Summary</h2>
        <p>Selected Players :</p>
        <p>Total Price : পরে হিসাব হবে।</p>
        <div className="position-sticky top-0">
          {getNewData
            ? getNewData.map((data) => <SetupPlayerToCart data={data} />)
            : ""}
        </div>
      </div>
    </div>
  );
};

function SetupPlayerToCart({ data }) {
  const { name, picture, price } = data;
  return (
    <div className="align-items-center p-2 d-flex justify-content-around w-100 my-1 custom-card">
      <p className="mb-0">{name}</p>
      <img src={picture} alt="" width={"50px"} />
      <p className="mb-0">price :{price} </p>
    </div>
  );
}

export default Home;
