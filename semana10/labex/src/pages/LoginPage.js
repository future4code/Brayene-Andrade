import React, { useEffect } from "react"



export const LoginPage = () => {
    const {data, request} = useData()
    const getInfoAdmin = async () => {
        let email = "astrodev@gmail.com", password = "123456"
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labex/bray-andrade-lovelace/login"
        const body = {
            email,
            password
        }
        const header = {
            header: {
                ContentType: "application/json"
            }
        }
        const method = 'post'
        request(url,body,header,method)
        console.log(data)
    }

        useEffect(() => getInfoAdmin(), [request])



return (
    
    <div>
        <input placeholder={"E-mail"} />
        <input placeholder={"Senha"} />
        <br/>
        <link to={"/"}>Voltar</link>
        <link to={"AdminHome"} onClick={getInfoAdmin}>Entrar</link>
    </div>
)

};