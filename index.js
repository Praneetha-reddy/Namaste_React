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
    ), React.createElement(
        'div',
        {id: 'child2'},
        [React.createElement('h1', null, 'H1 tag'),
        React.createElement('h2', null, 'H2 tag')]
    )]
);
const rootReact = ReactDOM.createRoot(document.getElementById('root'));
rootReact.render(element);