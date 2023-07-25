/* [22] Component Updating Lifecycle Methods */

import React, { Component } from 'react'
import LifecycleD from './21_LifecycleD'

export class LifecycleC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'parent'
        }
        console.log('LifecycleC -> constructor()')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleC -> getDerivedStateFromProps()')
        return null
    }

    componentDidMount() {
        console.log('LifecycleC -> componentDidMount()')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleC -> shouldComponentUpdate()')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleC -> getSnapshotBeforeUpdate()')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleC -> componentDidUpdate()')
    }

    handleClick = () => {
        this.setState({ name: 'parent component' })
    }

    render() {
        console.log('LifecycleC -> render()')
        return (
            <div>
                <h3>Lifecycle C</h3>
                <LifecycleD />
                <button onClick={this.handleClick}>Update State</button>
            </div>
        )
    }
}

export default LifecycleC
