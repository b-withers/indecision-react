'use strict';

console.log('app.js is running!');

var app = {
    title: 'indecision app',
    subtitle: 'When you can decide what to eat, watch, do, clean, anything... Let me decide!',
    options: []
};

//adds item from the input to the array
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

//empties array
var reset = function reset() {
    app.options = [];
    renderApp();
};

//generates / picks the random item from the array
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
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
            React.createElement(
                'button',
                { disabled: app.options.length < 2, onClick: onMakeDecision },
                'Pick for me!'
            )
        ),
        React.createElement(
            'p',
            null,
            React.createElement(
                'button',
                { onClick: reset },
                'remove all'
            )
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (items) {
                return React.createElement(
                    'li',
                    { key: items },
                    items
                );
            })
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
