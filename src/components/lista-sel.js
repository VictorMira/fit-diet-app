import React from 'react'


class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genero: '',
      peso: '',
      estatura: '',
      edad: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { genero, peso, estatura, edad } = this.state;
    return (
        <div>
            <label>Sexo</label>
              <select value={genero} onChange={this.handleChange}>
                <option value="">Seleccione Uno</option>
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
              </select>
        <div>
          <label for='peso'>Peso</label>
          <input type='number' value={peso} id='peso' name='peso' placeholder='Ingrese su Peso' onChange={this.handleChange}/>
          <span> kgs</span>
        </div>
        <div>
          <label for='estatura'>Estatura</label>
          <input type='number' value={estatura} id='estatura' name='estatura' placeholder='Ingrese su Estatura' onChange={this.handleChange}/>
          <span> cms</span>
        </div>
        <div>
          <label for='edad'>Edad</label>
          <input type='number' value={edad} id='edad' name='edad' placeholder='Ingrese su Edad' onChange={this.handleChange}/>
          <span> años</span>
        </div>
        
        <p>Su peso es {this.state.peso} kgs</p>
        <p>Su estatura es {this.state.estatura} cms</p>
        <p>Su edad es {this.state.edad} años</p>
        </div>
    );
  }
}

export default Lista;