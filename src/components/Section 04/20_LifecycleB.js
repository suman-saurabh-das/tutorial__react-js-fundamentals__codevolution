/* [21] Component Mounting Lifecycle Methods */

import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'child'
        }
        console.log('LifecycleB -> constructor()')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB -> getDerivedStateFromProps()');
        return null
    }

    componentDidMount() {
        console.log('LifecycleB -> componentDidMount()');
    }

    render() {
        console.log('LifecycleB -> render()');
        return (
            <div>
                <h3>Lifecycle B</h3>
            </div>
        )
    }
}

export default LifecycleB
