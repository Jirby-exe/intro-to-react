const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),  // arg 1 - element created | arg 2 - attributes passed into child
        React.createElement("h2", {}, animal), // arg 3 - children
        React.createElement("h2", {}, breed)
    ]);
};


const App = () => { // Component (func) -> returns a result of 'React.createElement'
    return React.createElement("div", { id: "header" },
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "strega nona",
                animal: "cat",
                breed: "short hair"
            }),
            React.createElement(Pet, {
                name: "sadie",
                animal: "dog",
                breed: "bichon"
            }),
            React.createElement(Pet, {
                name: "vega",
                animal: "cat",
                breed: "long hair"
            })
        ]);
};


ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
); //arg 1 - what to render | arg 2 - where to render