import React, { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState(0);

    function Adicionar(){
        setContador(contador + 1);
    }
    function Subtrair(){
        setContador(contador - 1);
    }

  return (
    <>
    <div>Se liga</div>
    <div>
        <h1>{contador}</h1>
    </div>
    <div>
        <button onClick={Adicionar}>+1</button>
        <button onClick={Subtrair}>-1</button>
    </div>
    </>
  )
}

export default Contador