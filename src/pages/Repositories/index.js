import React, { useEffect, useState } from 'react'
import * as S from './styled'

export default function Repositories() {
    const [repositories, setRepositories] = React.useState([])
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        repositoriesName = JSON.parse(repositoriesName) //transformando ele de novo em objeto
        setRepositories(repositoriesName)
        localStorage.clear()
    }, [])//quando não passo nada para monitorar, ele vai fazer ao renderizar

    return (
        <S.Container>
        <S.Title>Repositórios</S.Title>
        <S.List>
            {repositories.map((repos) => {
                return (
                    <S.ListItem>Nome do repositório: { repos }</S.ListItem>
                )
            })}
        </S.List>
        </S.Container>
    )
}
