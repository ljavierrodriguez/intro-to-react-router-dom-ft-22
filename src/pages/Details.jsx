import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    const [character, setCharacter] = useState(null)
    const [error, setError] = useState(null)
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        console.log(id)
        getCharacterById("https://rickandmortyapi.com/api/character", id);
    }, [id])

    const getCharacterById = (url, id) => {
        fetch(`${url}/${id}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setCharacter(data)
                    setError(null)
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div>Details</div>
            {
                !!error && (
                    <span style={{ color: 'red' }}>{error}</span>
                )
            }
            <h3>{character && character.name}</h3>
            <button onClick={() => navigate('/')}>Regresar</button>
        </>
    )
}

export default Details