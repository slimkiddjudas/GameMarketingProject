import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AdminPanel from "./Components/adminPanel/AdminPanel";
import Cart from "./Components/cart/Cart";
import GameAdd from "./Components/gameAdd/GameAdd";
import GameDetails from "./Components/gameDetails/GameDetails";
import GameList from "./Components/gameList/GameList";
import GameListUser from "./Components/gameListUser/GameListUser";
import GameUpdate from "./Components/gameUpdate/GameUpdate";
import Home from "./Components/home/Home";
import Login from "./Components/login/Login";
import RaisePrice from "./Components/raisePrice/RaisePrice";
import Register from "./Components/register/Register";
import AppContext from "./Context/AppContext";

function App() {

  const {appName} = useContext(AppContext)

  return (
    <div>
      <h1>{appName}</h1>
      <Home />
      <Routes>
        <Route path="/games" element={<GameListUser />} />
        <Route path="/games/details/:id" element={<GameDetails />} />
        <Route path="/adminpanel/games/add" element={<GameAdd />} />
        <Route path="/adminpanel/games/update/:id" element={<GameUpdate />} />
        <Route path="/adminpanel/games/raiseprices" element={<RaisePrice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/register" element={<Register />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/adminpanel/games" element={<GameList />} /> 
      </Routes>
    </div>
  );
}

export default App;
