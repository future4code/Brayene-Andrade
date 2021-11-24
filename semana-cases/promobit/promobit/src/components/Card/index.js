import React from 'react'
import * as S from './styled'

const Card = ({title, release_date, img}) => {
    return (
        <S.Card>

            <img src={`https://image.tmdb.org/t/p/original${img}`}/>
            <h3>{title}</h3>
            <h3>{release_date}</h3>
        
            <button>More details</button>

        </S.Card>
    )
}

export default Card
