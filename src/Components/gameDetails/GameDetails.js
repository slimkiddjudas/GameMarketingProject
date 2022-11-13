import React, { useContext, useState } from 'react'
import AppContext from '../../Context/AppContext'

export default function GameDetails() {

    const {selectedGame} = useContext(AppContext)

    const [currentImage, setCurrentImage] = useState(selectedGame.image)

    const handleChangeNextImage = () => {
      setCurrentImage(selectedGame.image2)
    }

    const handleChangePreviousImage = () => {
      setCurrentImage(selectedGame.image)
    }

  return (
    <div>
        <h2>GameDetails</h2>
        <p>Name : {selectedGame.gameName}</p>
        <p>Price : {selectedGame.price}TL</p>
        <p>Description : {selectedGame.description}</p>
        <p>Image : </p>
        <p><button onClick={handleChangePreviousImage} >Previous</button> <button onClick={handleChangeNextImage}>Next</button></p>
        <img src={currentImage} ></img>
    </div>
  )
}
