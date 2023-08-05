/* [38], [39] & [40] Context */

import React, { Component } from 'react'
import GrandChildComponent from './32_GrandChildComponent'
import UserContext from '../32_UserContext'

class ChildComponent extends Component {
    // We can also replace the ChildComponent.contextType = UserContext by the following
    static contextType = UserContext
    render() {
        return (
            <div>
                <h3>Child component - Name {this.context}</h3>
                <GrandChildComponent />
            </div>
        )
    }
}

// ChildComponent.contextType = UserContext
export default ChildComponent
