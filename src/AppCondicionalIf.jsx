import React from 'react';
import './App.css';
import Saludo from './components/saludo';
import LoginButton from './components/login-button';
import LogoutButton from './components/logout-button';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLogguedIn: false
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick(){
    this.setState({isLogguedIn: true});
  }

  handleLogoutClick(){
    this.setState({isLogguedIn: false});
  }

  render(){
    const { isLogguedIn } = this.state;

    let boton;

    if(isLogguedIn){
      boton = <LogoutButton clic={()=>this.handleLogoutClick()} />
    }else{
      boton = <LoginButton clic={()=>this.handleLoginClick()} />
    }

    return (
      <div>
        <Saludo isLoggedIn={isLogguedIn}/>
        {boton}
      </div>
    );
  }
}

export default App;
