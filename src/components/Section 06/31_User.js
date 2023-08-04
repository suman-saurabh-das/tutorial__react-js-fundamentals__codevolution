/* [36], [37] Render props */

import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <h3>{this.props.name(true)}</h3>
        )
    }
}

export default User
