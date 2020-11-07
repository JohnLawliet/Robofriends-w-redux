import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true })
    }

    render(){
        return this.state.ErrorBoundary ? 
        <h1>OOOOOOOPPS This is not good </h1> :
        this.props.children
    }
}

export default ErrorBoundary;