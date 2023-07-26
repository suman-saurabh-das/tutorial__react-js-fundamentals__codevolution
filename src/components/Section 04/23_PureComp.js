/* [26] Pure Components */

import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Pure component rendered');
        return (
            <div>
                <h4>Pure Component - {this.props.name}</h4>
            </div>
        )
    }
}

export default PureComp

/*
    A pure component implements shouldComponentUpdate with a shallow prop and state comparison.
    SC of prevState/prevProps with currentState/currentProps -- is different (true) --> Re-render component.

    Shallow Comparison

    Primitive Types -
    a (SC) b returns true if a and b have the same value and are of the same type.
    e.g. string 'Saurabh' (SC) string 'Saurabh' returns true.

    Complex Types -
    a (SC) b returns true if a and b reference the exact same object.
*/
