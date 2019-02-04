console.log('app.js is running!');

const app = {
    title: 'indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

//e is for prevent default
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const option = e.target.elements.option.value;

    if (option) {
        //pushes form entry into array
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const reset = () => {
    app.options = [];
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={reset}>remove all</button>
            <ol>
            {
                app.options.map((items) => {
                    return <li key={items}>{items}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();




