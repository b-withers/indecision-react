console.log('app.js is running!');

const app = {
    title: 'indecision app',
    subtitle: 'When you can decide what to eat, watch, do, clean, anything... Let me decide!',
    options: []
};

//adds item from the input to the array
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

//empties array
const reset = () => {
    app.options = [];
    renderApp();
};

//generates / picks the random item from the array
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p><button disabled={app.options.length < 2} onClick={onMakeDecision}>Pick for me!</button></p>
            <p><button onClick={reset}>remove all</button></p>
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




