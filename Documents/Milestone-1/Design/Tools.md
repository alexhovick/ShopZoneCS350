### Below is a guide into the language we will be using, whcih is JSX.

#### 1. JSX Syntax:
JSX allows you to write HTML-like code within your JavaScript. It's not actual HTML, but a syntax extension that gets transpiled into JavaScript code that browsers can understand. JSX elements resemble HTML elements.

    const element = <h1>Hello, JSX!</h1>;

#### 2. Embedding Expressions:
You can embed JavaScript expressions within JSX using curly braces {}. This allows you to insert dynamic values and variables into your JSX elements.

    const name = "Alice";
    const greeting = <p>Hello, {name}!</p>;

#### 3. JSX and HTML Differences:
While JSX resembles HTML, there are a few key differences:

* You use className instead of class for adding CSS classes to elements.
* Self-closing tags must end with a slash, like &lt;br />.
* JSX attributes are camelCase, like onClick and onChange.
* JSX doesn't support some HTML attributes like for (use htmlFor instead) and style expects an object with camelCase properties.

#### 4. JSX Elements as Expressions:
JSX elements can be treated as expressions. You can store them in variables, return them from functions, and use them just like you would with any other JavaScript value.

    const header = <h1>Hello, JSX!</h1>;

    function getGreeting(name) {
        return <p>Hello, {name}!</p>;
    }

#### 5. Rendering JSX:
To render JSX elements to the DOM, you typically use ReactDOM.render() from the react-dom package. You provide the JSX element you want to render and a DOM element where it should be rendered.

    import React from 'react';
    import ReactDOM from 'react-dom';

    const element = <h1>Hello, JSX!</h1>;
    ReactDOM.render(element, document.getElementById('root'));

#### 6. Components and JSX:
Components are the building blocks of a React application. You can create custom components using JSX. A component can return JSX, which can include other components.

    import React from 'react';

    function Greeting(props) {
        return <p>Hello, {props.name}!</p>;
    }

#### 7. Fragments:
If you want to return multiple adjacent JSX elements from a component without introducing an additional parent element, you can use fragments. Fragments allow you to group elements without adding extra nodes to the DOM.


    import React from 'react';

    function MyComponent() {
        return (
        <>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </>
        );
    }

These are some of the basic concepts of JSX. JSX makes working with React and creating dynamic user interfaces more intuitive and efficient by allowing you to combine JavaScript and HTML-like syntax in a single file.