import React from 'react';


export default class LogoutButton extends React.Component{

    render(){
       return <button onClick={this.props.clic}>Cerrar sesión</button>;
    }
}