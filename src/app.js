console.log('app.js is running!');

//JSX - Javascript XML
var template = (
<div>
    <h1>Indecsion App</h1>
    <p>this is some info</p>
</div>
);

var templateTwo = (
    <div>
    <p>Brady Withers</p>
    <p>Age: 39</p>
    <p>Location: Utah</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);