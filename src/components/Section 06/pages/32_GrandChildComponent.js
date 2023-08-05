/* [38], [39] & [40] Context */

import React, { Component } from 'react'
import { UserConsumer } from '../32_UserContext'

class GrandChildComponent extends Component {
    render() {
        return (
            <UserConsumer>
                {(username) => {
                    return <h3>Grand child component - Name {username}</h3>
                }}
            </UserConsumer>
        )
    }
}

export default GrandChildComponent
