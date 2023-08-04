/* [36], [37] Render props */

import React, { Component } from 'react'

class ClickCounter2 extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { count: 0 }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => ({ count: prevState.count + 1 }))
    // }

    render() {
        // const { count } = this.state
        const { count, incrementCount } = this.props
        return (
            // <button onClick={this.incrementCount}>Clicked {count} times</button>
            <button onClick={incrementCount}>Clicked {count} times</button>
        )
    }
}

export default ClickCounter2
