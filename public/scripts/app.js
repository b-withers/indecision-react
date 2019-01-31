"use strict";

console.log('app.js is running!');

var movie = {
    title: "Lord of the Rings",
    genre: "Fantasy",
    characters: ["Frodo", "Bilbo"]

    //JSX - Javascript XML
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        movie.title
    ),
    movie.genre && React.createElement(
        "p",
        null,
        movie.genre
    ),
    React.createElement(
        "p",
        null,
        movie.characters.length > 1 ? 'There are more than one Character' : 'There is only one Character'
    )
);

var user = {
    name: "Brady W",
    age: 39,
    location: "Home Office"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'No Username'
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
