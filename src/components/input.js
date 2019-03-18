import React from 'react'

function inputField (props){
return (
  <div>
    <label for={props.tipo}>{props.tipo}</label>
      <input type='number' id={props.tipo} name={props.tipo} placeholder={`Ingrese su ${props.tipo}`}/>
      {props.unidad}
  </div>
)
}

export default inputField;
