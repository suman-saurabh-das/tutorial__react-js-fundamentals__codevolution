/* [36], [37] Render props */

import React, { Component } from 'react'

class HoverCounter2 extends Component {
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
            // <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        )
    }
}

export default HoverCounter2
