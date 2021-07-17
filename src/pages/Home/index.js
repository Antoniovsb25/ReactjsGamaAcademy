import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'

function App(props) {

  const [usuario, setUsuario] = React.useState('')

  function handlePesquisa() {
    console.log(usuario)
    axios.get(`https://api.github.com/users/${usuario}/repos`).then((response) => {
      const repositories = response.data
      const repositoriesName = repositories.map(repo => repo.name)
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      console.log(repositoriesName)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <S.Container>
    <S.Input className="usuarioInput" placeholder="usernameGithub" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
    <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}
export default App;
