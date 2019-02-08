class IndecisionApp extends React.Component {
    render () {
        return (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
        );
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>Indecision App</h1>
            <h2>When you can decide what to eat, watch, do, clean, anything... Let me decide!</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
            <button>What Should I do</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
                Options Component Here
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
            Option component Here
            </div>
        )
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
            AddOption component here
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));