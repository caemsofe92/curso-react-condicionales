import React from 'react';
import './App.css';
import LoginButton from './components/login-button';
import LogoutButton from './components/logout-button';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      estaLogueado: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({estaLogueado: !this.state.estaLogueado});
  }

  render(){
    const { estaLogueado } = this.state;

    return (
      <div>

        {estaLogueado ? <LoginButton click={()=> this.handleClick()}/> : <LogoutButton click={()=> this.handleClick()}/>}
        <button onClick={()=> this.handleClick()}>Cambiar</button>
      </div>
    );
  }
}

export default App;
