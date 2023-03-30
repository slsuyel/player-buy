import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
function App() {
  const [localData, setLocaldata] = useState("");
  const handleAddCart = ( player) => {
    const { id, job, name, picture,price } = player;

    const playerDetails = { id, job, name, picture,price };
    const preveousPlayerInLocal = JSON.parse(localStorage.getItem("player"));
    let storeCart = [];

    if (preveousPlayerInLocal) {
      const isThisAlreadyAdded = preveousPlayerInLocal.find(
        (player) => player.id == id
      );

      if (isThisAlreadyAdded) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already Added",
        });
      } else {
        storeCart.push(...preveousPlayerInLocal, playerDetails);
        localStorage.setItem("player", JSON.stringify(storeCart));
        setLocaldata(storeCart);
      }
    } else {
      storeCart.push(playerDetails);
      localStorage.setItem("player", JSON.stringify(storeCart));
      setLocaldata(storeCart);
    }
  };

  return (
    <div className="App">
      <Header />
      <Home handleAddCart={handleAddCart} localData={localData} />
    </div>
  );
}

export default App;
