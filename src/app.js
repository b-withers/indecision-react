console.log('app.js is running!');

const app = {
    title: 'indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
    </div>
);





const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

