import React from 'react'
import * as S from './styled'
import useGetDetails from '../../routes/useGetDetails'

const Card = ({title, release_date, img}) => {

    const getDetails = () => {
        return
    }


    return (
        <S.Card>

            <img src={`https://image.tmdb.org/t/p/original${img}`}/>
            <h3>{title}</h3>
            <h3>{release_date}</h3>
        
            <button onClick={getDetails}>More details</button>

        </S.Card>
    )
}

export default Card
