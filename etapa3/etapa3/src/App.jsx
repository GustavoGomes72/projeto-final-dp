import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/Contador'
import Card from './components/Card'

function App() {
  return (
    <div>
    <h1>Contador top</h1>
    <Contador/>
    <div>
    <h1>Jogos que eu gosto: </h1>
    </div>
    <div class="container">
      <Card nome={"The Elder Scrolls V: Skyrim"} imagem={"https://imgs.search.brave.com/GhpDHl1BORGO-yo_mf7yAGEMCWwmdBVBD6tWFZK9ftU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFCSnpTU0JhZkwu/anBn"} genero={"RPG"} preco={37.90}/>
      <Card nome={"Assassin's Creed: Black Flag"} imagem={"https://imgs.search.brave.com/dYJxlNJepEF4BUP68I2K367D2Qp_kFgAV_Tl7gPmFX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RfbW9kdWxl/cy9oZF93ZWJwLzMw/MzFlZjc5MzAzNjku/NTYwYjQ1NDFjY2Fm/ZS5qcGc"} genero={"Aventura"} preco={57.90}/>
      <Card nome={"Victoria 3"} imagem={"https://imgs.search.brave.com/MQvKSzBJb8fIkxbJPBsEjXZPaexs5F5yNTZX3NUzP4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWxzLnBjZ2Ft/aW5nd2lraS5jb20v/ZC9kNy9WaWN0b3Jp/YV8zX2NvdmVyLmpw/Zy8zMDBweC1WaWN0/b3JpYV8zX2NvdmVy/LmpwZw"} genero={"Estratégia"} preco={109.90}/>
    </div>
    </div>
  )
}

export default App
