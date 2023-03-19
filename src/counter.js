import React, { Component } from "react"

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount

        }

    }

    render() {
        console.log("render counter")
        return (
            <>
                <h1>A simple Counter in React</h1>
                <button onClick={() => this.changeCount(+1)}>+</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.changeCount(-1)}>-</button>
            </>

        )
    }

    //asynchronous
    // changeCount(amount) {
    //     this.setState({ count: this.state.count + amount })
    // }

    //synchronous
    changeCount(amount) {
        this.setState(prevState => {
            return { count: prevState.count + amount }
        })
    }
}