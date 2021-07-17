import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

export default function Repositories(props) {
    const [repositories, setRepositories] = React.useState([])
    const history = useHistory()
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        //Atualizando a pagina, a pesquisa retornará null, logo, voltaremos a pagina inicial
        //Validação dos dados passados pelo usuário, tratamento de erro
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName) //transformando ele de novo em objeto
            setRepositories(repositoriesName)
            localStorage.clear()
        } else {
            history.push('/')
        }
        
    }, [])//quando não passo nada para monitorar, ele vai fazer ao renderizar

    return (
        <S.Container>
        <S.Title>Listagem de repositórios do usuário</S.Title>
        <S.List>
            {repositories.map((repos) => {
                return (
                    <S.ListItem>{ repos }</S.ListItem>
                )
            })}
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}
