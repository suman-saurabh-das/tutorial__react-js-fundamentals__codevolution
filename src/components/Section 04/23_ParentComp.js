/* [26] Pure Components, [27] Memo */

import React from 'react'
import { Component } from 'react'
// import { PureComponent } from 'react'

// import PureComp from './23_PureComp'
// import RegularComp from './23_RegularComp'
import MemoComp from './24_MemoComp'

class ParentComp extends Component {
    // export class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Saurabh',
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'Saurabh' })
        }, 2000)
    }

    render() {
        console.log('Parent component rendered');
        return (
            <div>
                <h4>Parent Component</h4>
                {/* <PureComp name={this.state.name} /> */}
                {/* <RegularComp name={this.state.name} /> */}

                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp

/*
    If the parent component does not re-render, its child components will also not re-render.
*/
