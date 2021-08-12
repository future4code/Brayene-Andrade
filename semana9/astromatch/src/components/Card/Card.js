import React from "react"
import {CardContainer, RoundImg} from './styled.card'

export const ProfileItem = () => {
    return (
        <CardContainer>
            <RoundImg src={"https://bit.ly/37EVDDY"}>
                <h2>Nome do match</h2>
            </RoundImg>
        </CardContainer>
    )
}