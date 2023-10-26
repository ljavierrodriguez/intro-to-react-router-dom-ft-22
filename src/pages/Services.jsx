import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Services = () => {

    const params = useParams()

    useEffect(() => {

        if(params.valor){
            console.log(params.valor)
        }

    }, [params])

    return (
        <>
            <div>Services</div>
            {
                params.valor && (
                    <h1>Services {params.valor}</h1>
                )
            }
            <Link to={`/services/${1}`}>Service 1</Link> <br />
            <Link to={`/services/${2}`}>Service 2</Link> <br />
            <Link to={`/services/${3}`}>Service 3</Link> <br />
        </>
    )
}

export default Services