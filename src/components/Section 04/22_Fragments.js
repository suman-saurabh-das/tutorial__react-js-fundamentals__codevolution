/* [25] Fragments */

import React from 'react'

function Fragments() {
    return (
        <React.Fragment>
            <h3>React Fragment</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto illo eveniet modi repudiandae ipsam praesentium nisi? Vitae laboriosam nesciunt aperiam quisquam omnis assumenda reiciendis excepturi enim! Quis, similique quisquam.</p>
        </React.Fragment>
    )
}

export default Fragments

/*
    JSX expressions must have a single parent element, i.e. we can return only a single element from a functional or class component. If we want to group together multiple components, we can do so via a react fragment, without affecting DOM.
*/
