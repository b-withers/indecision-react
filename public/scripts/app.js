'use strict';

console.log('app.js is running!');

var app = {
    title: 'indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

//e is for prevent default
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    var option = e.target.elements.option.value;

    if (option) {
        //pushes form entry into array
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var reset = function reset() {
    app.options = [];
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'remove all'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item One'
            ),
            React.createElement(
                'li',
                null,
                'Item Two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
