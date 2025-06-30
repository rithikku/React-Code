/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm H1 Tag!</h1>
 *          <h2>I'm H2 Tag!</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm H1 Tag!</h1>
 *          <h2>I'm H2 Tag!</h2>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement("div", {id:"parent"},
            [React.createElement("div", {id:"child"},[
            React.createElement("h1", {}, "I'm H1 Tag!"),
            React.createElement("h2", {}, "I'm H1 Tag!"),
            ]),
            React.createElement("div", {id:"child"},[
            React.createElement("h1", {}, "I'm H1 Tag!"),
            React.createElement("h2", {}, "I'm H1 Tag!"),
            ])
])

const roots = ReactDOM.createRoot(document.getElementById("root"));

roots.render(parent)