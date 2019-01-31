console.log('app.js is running!');

const movie = {
    title: "Lord of the Rings",
    genre: "Fantasy",
    characters: ["Frodo", "Bilbo"]
}

const template = (
<div>
    <h1>{movie.title}</h1>
    {movie.genre && <p>{movie.genre}</p>}
    <p>{movie.characters.length > 1 ? 'There are more than one Character' :  'There is only one Character'}</p>
</div>
);

const user = {
    name: "Brady W",
    age: 39,
    location: "Home Office"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
};

const templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'No Username'}</h1>
    {(user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);

const appRoot1 = document.getElementById('app1');
const appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot1);
ReactDOM.render(templateTwo, appRoot2);