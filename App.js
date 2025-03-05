import React from "react"
import {createRoot} from "react-dom/client"
/*
*
*
<div id = 'parent'>
    <div id = 'child'>
        <h1>Hello World!</h1>
    </div>
</div>
*
ReactElement is an object and converts into tags that the browser understands.
*
*/
const heading = React.createElement(
    'div', 
    {id: 'parent'}, 
    [React.createElement(
        'div', 
        {id: 'child'}, 
        [React.createElement(
            'h1', 
            {}, 
            'Hello Praneetha!!'), 
        React.createElement(
            'h2', 
            {}, 
            'Hello World!')]), 
    React.createElement(
        'div', 
        {id: 'child2'}, 
        [React.createElement(
            'h1', 
            {}, 
            'Hello World!'), 
        React.createElement(
            'h2', 
            {}, 
            'Hello World!')])]); //Object
const root = createRoot(document.getElementById('root'));
root.render(heading); //Converts heading object into h1 tag