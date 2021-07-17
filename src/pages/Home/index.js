import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function App(props) {

  const [usuario, setUsuario] = React.useState('')
  const [erro, setErro] = React.useState(false)
  const history = useHistory()

  function handlePesquisa() {

    console.log(usuario)
    axios.get(`https://api.github.com/users/${usuario}/repos`).then((response) => {
      const repositories = response.data
      const repositoriesName = repositories.map(repo => repo.name)
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false)
      history.push('/repositories')

    }).catch((erro) => {
      console.log(erro)
      setErro(true)
      alert('usuário inválido! Verifique o nome digitado.')
    })
  }

  return (
    <S.HomeContainer>
      <h1>Digite o usuário do Github:</h1>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="usernameGithub" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        { erro ? <S.ErrorMsg>ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
      </S.Content>
    </S.HomeContainer>
    
  );
}
export default App;
