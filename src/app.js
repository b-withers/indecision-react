console.log('app.js is running!');

var movie = {
    title: "Lord of the Rings",
    genre: "Fantasy",
    characters: ["Frodo", "Bilbo"]
}

//JSX - Javascript XML
var template = (
<div>
    <h1>{movie.title}</h1>
    {movie.genre && <p>{movie.genre}</p>}
    <p>{movie.characters.length > 1 ? 'There are more than one Character' :  'There is only one Character'}</p>
</div>
);

var user = {
    name: "Brady W",
    age: 39,
    location: "Home Office"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
};

var templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'No Username'}</h1>
    {(user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);