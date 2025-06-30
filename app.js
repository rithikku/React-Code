// const heading = React.createElement("h1", 
//      {id:"heading", xyz: "abc"}, 
//      "Welcome to React!");

/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm H1 Tag!</h1>
 *          <h2>I'm H1 Tag!</h2>
 *      </div>
 * </div> 
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"children"}, [
        React.createElement("h1", {}, "i'm H1 Tag!"), 
        React.createElement("h2", {}, "I'm H2 Tag!"),
    ]),
    React.createElement("div", {id:"children2"}, [
        React.createElement("h1", {}, "i'm H1 Tag!"), 
        React.createElement("h2", {}, "I'm H2 Tag!"),
    ])
]);

//JSX

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 