import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      messages: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({messages: ["Mensaje1", "Mensaje2", "Mensaje3"]});
  }

  render(){
    const { messages } = this.state;

    return (
      <div>
        {messages.length > 0 && <h1>Tu tienes {messages.length} mensajes sin leer</h1>}
        <button onClick={()=> this.handleClick()}>Cargar mensajes</button>
      </div>
    );
  }
}

export default App;
