import React from 'react'


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
        </div>
    );
  }
}

export default Lista;