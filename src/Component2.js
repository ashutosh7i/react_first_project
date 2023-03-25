//props for a class Component
import React, { Component } from 'react';

class Component2 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default Component2;
