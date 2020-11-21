import React, { Component } from 'react'

class Header extends Component{
    // this means that it should work once only and never run again whatsoever in our case
    // To change this, have to modify state and use nextState. compare whether there are any changes and if there are then shouldCOmponentUpdate return true else false
    shouldComponentUpdate(nextProps, nextState){
        return false
    }

    render(){
        return <h1 className='f1'>RoboFriends</h1>
    }
}

export default Header