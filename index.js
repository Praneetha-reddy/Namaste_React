import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement(
    'div',
    {id: 'parent'} , 
    [React.createElement(
        'div',
        {id: 'child1'},
        [React.createElement('h1', null, 'H1 tag'),
        React.createElement('h2', null, 'H2 tag')]
    )]
);
//JSX - It is syntactic sugar for React.createElement
//JS engine does not understand JSX, it needs to be converted to JS using Babel.
//JSX is transpiled to React.createElement calls by Babel.
const heading = <h1>Namaste React using JSX</h1>
const rootReact = ReactDOM.createRoot(document.getElementById('root'));
rootReact.render(heading);