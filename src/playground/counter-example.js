let count = 0;

const addOne = () => {
    count ++;
    renderCounterApp();
};

const minusOne = () => {
    count --;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <p><button onClick={addOne}>+1</button></p>
            <p><button onClick={minusOne}>-1</button></p>
            <p><button onClick={reset}>reset</button></p>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();