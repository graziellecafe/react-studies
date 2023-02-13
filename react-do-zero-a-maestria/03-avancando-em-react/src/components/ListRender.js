import React, { useState } from 'react'

const ListRender = () => {
    const [list, setList] = useState(["Matheus", "Pedro", "Josias", "Maria", "Grazielle"]); 

    const [users] = useState([
        { id: 1, name: "Grazielle", age: 28}, 
        { id: 2, name: "Gabriela", age: 25}, 
        { id: 3, name: "Scar", age: 23}
    ]); 

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li >{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender