import React, { useState } from 'react'

const ManageData = () => {
    // primeiro valor é um valor definido e o segundo valor é uma funcao
    const [number, setNumber] = useState(10);  

  return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar variável</button>
    </div>
  )
}

export default ManageData