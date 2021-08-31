export const goToLogin = (history) => {
    history.push("/login")
}
//função para ir para página de login. history passado 
//como parâmetro la linha 1 porque aqui não sabe o que é ele
//então quando eu quiser mudar de página eu só passo a função em 
//qualquer outro arquivo

export const goToCadastro = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/")
}


export const goToPost = (history) => {
    history.push("/post")
}