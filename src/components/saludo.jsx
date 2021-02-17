import React from 'react';


export default class Saludo extends React.Component{

    userGreeting(){
        return <h1>Bienvenido</h1>;
    }

    guestGreeting(){
        return <h1>Vuelve pronto</h1>;
    }

    render(){
        const isLoggedIn = this.props.isLoggedIn;

        if(isLoggedIn){
            return this.userGreeting();
        } else {
            return this.guestGreeting();
        }
    }


}