/* [38], [39] & [40] Context */

import React, { Component } from 'react'
import ChildComponent from './32_ChildComponent'

class ParentComponent extends Component {
    render() {
        return (
            <ChildComponent />
        )
    }
}

export default ParentComponent

/*
    Our goal is to get data from the App.js component to the GrandChildComponent using context
    
    Steps to implement context
    1. Create the context.
    2. Provide a context value.
    3. Consume the context value.
*/
