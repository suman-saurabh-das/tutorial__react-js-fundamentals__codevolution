/* [26] Pure Components */

import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log('Regular component rendered');
        return (
            <div>
                <h4>Regular Component - {this.props.name}</h4>
            </div>
        )
    }
}

export default RegularComp
