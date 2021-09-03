import React from 'react'
import { ErrorImage, ErrorPageContainer } from './styled'
import error from "../../assets/error.jpg"
import { Typography } from '@material-ui/core'

export const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error}/>
            <Typography color={"primary"} variant={"h4"} align={"center"}> Erro 404 - Págima não encontrada</Typography>
        </ErrorPageContainer>
    )
}
export default ErrorPage