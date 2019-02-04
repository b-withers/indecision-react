console.log('app.js is running!');



let count = 0;
const addOne = () => {
    console.log("addOne");
}

const minusOne = () => {
    console.log("minusOne");
}

const reset = () => {
    console.log("reset");
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <p><button onClick={addOne}>+1</button></p>
        <p><button onClick={minusOne}>-1</button></p>
        <p><button onClick={reset}>reset</button></p>
    </div>
);


console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);