/* [05] Functional Components */

import React from 'react';

/* Normal Function */
// function Greet() {
//     return <h3>This is a Functional Component</h3>
// }

/* Default export */
// export default Greet

/* Named export along with Arrow function */
export const Greet = () => <h2>This is a Functional Component</h2>

/*
    Naming convention of components : PascalCase

    Firstly, We need to import React from "react".
    Create a normal function which will return the HTML (JSX).
    But it is preferred to use arrow functions instead of normal function.
    Now we need to export our component and import it in App.js
*/
