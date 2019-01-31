'use strict';

console.log('app.js is running!');

//JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecsion App'
    ),
    React.createElement(
        'p',
        null,
        'this is some info'
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'Brady Withers'
    ),
    React.createElement(
        'p',
        null,
        'Age: 39'
    ),
    React.createElement(
        'p',
        null,
        'Location: Utah'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
