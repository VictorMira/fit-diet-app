import React from 'react'

function inputField (props){
return (
  <div>
    <label for={props.tipo}>{props.tipo}</label>
      <input type='number' value={props.valor} id={props.tipo} name={props.tipo} placeholder={`Ingrese su ${props.tipo}`}/>
      <span>{props.unidad}</span>
  </div>
)
}

export default inputField;
