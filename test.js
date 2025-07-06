import React, { Component } from "react"; // importing react
import ReactDOM from "react-dom/client"; // importing react Dom

// React.createElement => ReactElement-JS Object => HTMLElement(render)


// JSX - Easier to create react element, merge js and html together, not HTML in javascript

// JSX (transpiled/ converted before it reaches to javascript Engine) - Through PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)


// React Element
const heading = (
<h1 className="head">
    Namaste React using JSX
    </h1>
    )
console.log(heading);


// React Component 
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component
const HeadingComponent2 = () => (<h1 className="heading">Namaste Another React Functional Component</h1>);


const TitleComponent = () => (
    <div>
        <h1 className="head">Namaste React Title Component</h1>
    </div>
)


// Component Compositions
const HeadingComponent = () => (
    <div id="container">
        {/* Put React element inside Functional Component */}
        {heading}

        <TitleComponent/> 
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

 
const root = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM takes the object and convert into the HTMLElement and push it to the browser, replace everything that is inside into the root

root.render(<HeadingComponent />); 