import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        getCharacters("https://rickandmortyapi.com/api/character")
    }, [])

    const getCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.log(error))
    }

    return (
        <>
        <div>Home</div>
        <ul>
            {
                !!characters &&
                characters.results.map((character) => {
                    return <li key={character.id}>{character.name} <Link to={`/details/${character.id}`}>Ver Detalle</Link></li>
                })
            }
        </ul>
        </>
    )
}

export default Home