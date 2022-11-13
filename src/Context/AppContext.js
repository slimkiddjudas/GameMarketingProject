import { createContext, useState } from "react";
import data from "../Data/Data"
import userData from "../Data/UserData";

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [users, setUsers] = useState(userData)

    const [games, setGames] = useState(data)

    const [selectedGame, setSelectedGame] = useState({id:0, gameName:"", price:"", description:"", image:""})

    const [cartList, setCartList] = useState([])

    const values = {
        appName:"Game Marketing",
        games,
        setGames,
        selectedGame,
        setSelectedGame,
        cartList,
        setCartList,
        users,
        setUsers
    }

    return(
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext
