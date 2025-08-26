import { useState, useEffect, useRef } from "react";
import axios from "axios"

import sol from "../../public/images/sol.png";
import chuva from "../../public/images/chuva.png";
import nuvem from "../../public/images/nebuloso.png";
import "./App.css";

function App() {
  const [clima, setClima] = useState(null);
  const [temp, setTemp] = useState(null);

   const imagens = {
    Clear: sol,
    Rain: chuva,
    Clouds: nuvem,
  };

  const apiKey = "e84ed6d73294a4a874405b59f0a21926";
  const idCidade = "3448439" //São Paulo

  const inputRef = useRef()

   async function searchCity() {
      console.log(inputRef.current.value)
      const city = inputRef.current.value

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`

      const data = await axios.get(url)

      console.log(data)
    }


  return (
    <div >




      <div className="caixa">
          <input ref={inputRef} type="text" placeholder="Digite o nome da sua cidade" />
          <button onClick={searchCity}></button>

         <h1>Localização</h1>
        <img src={imagens[clima]} alt={clima} className="iconeClima" />
        <h1>{temp}</h1>
      </div>
       
       <div className="caixa2">
          <ul>
            <li>seg.</li>
            <li>ter.</li>
            <li>qua.</li>
            <li>qui.</li>
            <li>sex.</li>
            <li>sáb.</li>
            <li>dom.</li>
          </ul>
       </div>





    </div>
    
  )
}

export default App
