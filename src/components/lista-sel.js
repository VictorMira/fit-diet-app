import React from 'react'
import Input from '../components/input'


class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>  
        <label>
          Sexo
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Seleccione Uno</option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
          </select>
        </label>
        <Input tipo='Peso' unidad='kgs'/>
        <Input tipo='Estatura' unidad='cms'/>
        <Input tipo='Edad' unidad='años'/>
        </div>
    );
  }
}

export default Lista;