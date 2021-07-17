import React, { useState } from 'react'
import './App.css';
import axios from 'axios'


function Home() {

  const [usuario, setUsuario] = React.useState('')

  function handlePesquisa() {
    console.log(usuario)
    axios.get(`https://api.github.com/users/${usuario}/repos`).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
    <input className="usuarioInput" placeholder="usernameGithub" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}
export default Home;
