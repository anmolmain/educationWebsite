export var subjectName = "React";
var ReactData = [
  {
    "topic_name": "React Components",
    "topic_description": "React components are the building blocks of a React application. They are reusable, self-contained UI elements that manage their own state and can be composed to create complex user interfaces.",
    "subtopics": [
      {
        "subtopic_name": "Functional Components",
        "example_code": `
function MyComponent() {
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}`
      },
      {
        "subtopic_name": "Class Components",
        "example_code": `
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        {/* JSX content */}
      </div>
    );
  }
}`
      },
      {
        "subtopic_name": "Props",
        "example_code": `
function Greeting(props) {
  return <div>Hello, {props.name}!</div>;
}

<Greeting name="John" />`
      },
      {
        "subtopic_name": "State",
        "example_code": `
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
      </div>
    );
  }
}`
      }
    ]
  },
  {
    "topic_name": "JSX",
    "topic_description": "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It's the primary way to define React elements and their structure.",
    "subtopics": [
      {
        "subtopic_name": "Element Rendering",
        "example_code": `
const element = <h1>Hello, React!</h1>;
ReactDOM.render(element, document.getElementById('root'));`
      },
      {
        "subtopic_name": "JSX Expressions",
        "example_code": `
const name = 'Alice';
const element = <p>Hello, {name}</p>;
ReactDOM.render(element, document.getElementById('root'));`
      },
      {
        "subtopic_name": "Self-Closing Tags",
        "example_code": `
const image = <img src="image.jpg" alt="Image" />;`
      }
    ]
  },
  {
    "topic_name": "Props and PropTypes",
    "topic_description": "Props are used to pass data from parent components to child components. PropTypes allow you to specify the expected data types for props, helping catch potential bugs.",
    "subtopics": [
      {
        "subtopic_name": "Passing Props",
        "example_code": `
function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

<Welcome name="John" />;`
      },
      {
        "subtopic_name": "PropTypes Validation",
        "example_code": `
import PropTypes from 'prop-types';

function Greeting(props) {
  return <p>Hello, {props.name}</p>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};`
      },
      {
        "subtopic_name": "Default Props",
        "example_code": `
function Greeting(props) {
  return <p>Hello, {props.name}</p>;
}

Greeting.defaultProps = {
  name: 'Guest',
};`
      }
    ]
  },
  {
    "topic_name": "State and setState",
    "topic_description": "State allows you to manage component-specific data that can change over time. The `setState` method is used to update the state of a component.",
    "subtopics": [
      {
        "subtopic_name": "Initializing State",
        "example_code": `
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
}`
      },
      {
        "subtopic_name": "Updating State",
        "example_code": `
class Counter extends React.Component {
  // ...

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
}`
      },
      {
        "subtopic_name": "Async State Updates",
        "example_code": `
class Counter extends React.Component {
  // ...

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }
}`
      }
    ]
  },
  {
    "topic_name": "Lifecycle Methods",
    "topic_description": "React components go through various lifecycle stages, such as mounting, updating, and unmounting. Lifecycle methods provide hooks to execute code at specific points in a component's lifecycle.",
    "subtopics": [
      {
        "subtopic_name": "componentDidMount",
        "example_code": `
class MyComponent extends React.Component {
  componentDidMount() {
    // Executed after component is added to the DOM
  }

  // ...
}`
      },
      {
        "subtopic_name": "componentDidUpdate",
        "example_code": `
class MyComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // Executed after component updates
  }

  // ...
}`
      },
      {
        "subtopic_name": "componentWillUnmount",
        "example_code": `
class MyComponent extends React.Component {
  componentWillUnmount() {
    // Executed before component is removed from the DOM
  }

  // ...
}`
      }
    ]
  },
  {
    "topic_name": "Event Handling",
    "topic_description": "React allows you to handle events like clicks, input changes, and more using event handlers defined within your components.",
    "subtopics": [
      {
        "subtopic_name": "Handling Click Events",
        "example_code": `
class MyComponent extends React.Component {
  handleClick() {
    // Handle click event
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}`
      },
      {
        "subtopic_name": "Handling Input Changes",
        "example_code": `
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleChange}
      />
    );
  }
}`
      }
    ]
  },
  {
    "topic_name": "Conditional Rendering",
    "topic_description": "React allows you to conditionally render components or elements based on certain conditions or user interactions.",
    "subtopics": [
      {
        "subtopic_name": "Using Conditional (Ternary) Operators",
        "example_code": `
function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}`
      },
      {
        "subtopic_name": "Using `if` Statements",
        "example_code": `
function Greeting(props) {
  if (props.isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}`
      }
    ]
  },
  {
    "topic_name": "Lists and Keys",
    "topic_description": "When rendering dynamic lists of elements in React, it's important to use unique keys to help React efficiently update and reorder elements.",
    "subtopics": [
      {
        "subtopic_name": "Rendering Lists",
        "example_code": `
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return <ul>{listItems}</ul>;
}`
      },
      {
        "subtopic_name": "Keys and Reconciliation",
        "example_code": `
function TodoList(props) {
  const todos = props.todos;
  const todoItems = todos.map((todo) =>
    <Todo key={todo.id} todo={todo} />
  );
  return <ul>{todoItems}</ul>;
}`
      }
    ]
  },
  {
    "topic_name": "Forms and Controlled Components",
    "topic_description": "React provides a way to create controlled form components where the form elements' values are controlled by React state.",
    "subtopics": [
      {
        "subtopic_name": "Input Elements",
        "example_code": `
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}`
      }
    ]
  },
  {
    "topic_name": "React Router",
    "topic_description": "React Router is a popular library for adding client-side routing to your React applications, enabling navigation between different views or pages.",
    "subtopics": [
      {
        "subtopic_name": "Installing and Setup",
        "example_code": `
// Install React Router using npm or yarn
npm install react-router-dom

// Import necessary components and set up routes
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Define routes using <Route> components
<Router>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
  <Route path="/" exact component={Home} />
  <Route path="/about" component={About} />
</Router>`
      },
      {
        "subtopic_name": "Navigating Between Routes",
        "example_code": `
// Use <Link> components to navigate between routes
<Link to="/about">About</Link>

// Programmatically navigate using history
this.props.history.push('/about');`
      }
    ]
  },
  {
    "topic_name": "React Context",
    "topic_description": "React Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's often used for managing application-level state.",
    "subtopics": [
      {
        "subtopic_name": "Creating a Context",
        "example_code": `
// Create a context
const MyContext = React.createContext();`
      },
      {
        "subtopic_name": "Providing and Consuming Context",
        "example_code": `
// Provide context value at a higher level
<MyContext.Provider value={/* value */}>
  {/* Child components can consume the context */}
  <MyContext.Consumer>
    {value => /* render something based on value */}
  </MyContext.Consumer>
</MyContext.Provider>;`
      }
    ]
  },
  {
    "topic_name": "Redux",
    "topic_description": "Redux is a state management library for React applications. It helps manage the state of your application in a predictable and centralized manner.",
    "subtopics": [
      {
        "subtopic_name": "Installing Redux",
        "example_code": `
// Install Redux using npm or yarn
npm install redux react-redux

// Create a Redux store and configure it
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);`
      },
      {
        "subtopic_name": "Actions and Reducers",
        "example_code": `
// Define actions and reducers
const increment = () => ({ type: 'INCREMENT' });

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};`
      },
      {
        "subtopic_name": "Connecting React Components",
        "example_code": `
// Connect React components to the Redux store
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = {
  increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);`
      }
    ]
  },
  {
    "topic_name": "React Hooks",
    "topic_description": "React Hooks allow functional components to use state and other React features without writing a class. They provide a more concise and readable way to manage state and side effects.",
    "subtopics": [
      {
        "subtopic_name": "useState Hook",
        "example_code": `
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`
      },
      {
        "subtopic_name": "useEffect Hook",
        "example_code": `
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`
      }
    ]
  },
  {
    "topic_name": "Styling in React",
    "topic_description": "Styling in React can be done using CSS, CSS modules, or popular CSS-in-JS libraries like styled-components or Emotion.",
    "subtopics": [
      {
        "subtopic_name": "CSS Stylesheets",
        "example_code": `
import './MyComponent.css';

function MyComponent() {
  return <div className="my-component">Styled with CSS</div>;
}`
      },
      {
        "subtopic_name": "CSS Modules",
        "example_code": `
import styles from './MyComponent.module.css';

function MyComponent() {
  return <div className={styles.myComponent}>Styled with CSS Modules</div>;
}`
      },
      {
        "subtopic_name": "Styled-Components",
        "example_code": `
import styled from 'styled-components';

const Wrapper = styled.div\`
  background-color: lightgray;
\`;

function MyComponent() {
  return <Wrapper>Styled with styled-components</Wrapper>;
}`
      }
    ]
  },
  {
    "topic_name": "Error Handling",
    "topic_description": "React provides error boundaries, a way to gracefully handle errors that occur within the component tree and prevent the entire application from crashing.",
    "subtopics": [
      {
        "subtopic_name": "Error Boundary Component",
        "example_code": `
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}`
      },
      {
        "subtopic_name": "Using Error Boundary",
        "example_code": `
<ErrorBoundary>
  <ComponentWithError />
</ErrorBoundary>`
      }
    ]
  },
  {
    "topic_name": "React Testing",
    "topic_description": "Testing is an essential part of building reliable React applications. Tools like Jest and React Testing Library are commonly used for testing React components and applications.",
    "subtopics": [
      {
        "subtopic_name": "Setting up Testing Environment",
        "example_code": `
// Install Jest and React Testing Library
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

// Configure Jest in package.json or jest.config.js
{
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
}`            },
      {
        "subtopic_name": "Writing Component Tests",
        "example_code": `
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders the component', () => {
  render(<MyComponent />);
  const element = screen.getByText('Hello, React!');
  expect(element).toBeInTheDocument();
});`
      }
    ]
  },
  {
    "topic_name": "React Router",
    "topic_description": "React Router is a popular library for adding client-side routing to your React applications, enabling navigation between different views or pages.",
    "subtopics": [
      {
        "subtopic_name": "Installing and Setup",
        "example_code": `
// Install React Router using npm or yarn
npm install react-router-dom

// Import necessary components and set up routes
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Define routes using <Route> components
<Router>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
  <Route path="/" exact component={Home} />
  <Route path="/about" component={About} />
</Router>`
      },
      {
        "subtopic_name": "Navigating Between Routes",
        "example_code": `
// Use <Link> components to navigate between routes
<Link to="/about">About</Link>

// Programmatically navigate using history
this.props.history.push('/about');`
      }
    ]
  },
  {
    "topic_name": "React Context",
    "topic_description": "React Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's often used for managing application-level state.",
    "subtopics": [
      {
        "subtopic_name": "Creating a Context",
        "example_code": `
// Create a context
const MyContext = React.createContext();`
      },
      {
        "subtopic_name": "Providing and Consuming Context",
        "example_code": `
// Provide context value at a higher level
<MyContext.Provider value={/* value */}>
  {/* Child components can consume the context */}
  <MyContext.Consumer>
    {value => /* render something based on value */}
  </MyContext.Consumer>
</MyContext.Provider>;`
      }
    ]
  },
  {
    "topic_name": "Redux",
    "topic_description": "Redux is a state management library for React applications. It helps manage the state of your application in a predictable and centralized manner.",
    "subtopics": [
      {
        "subtopic_name": "Installing Redux",
        "example_code": `
// Install Redux using npm or yarn
npm install redux react-redux

// Create a Redux store and configure it
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);`
      },
      {
        "subtopic_name": "Actions and Reducers",
        "example_code": `
// Define actions and reducers
const increment = () => ({ type: 'INCREMENT' });

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};`
      },
      {
        "subtopic_name": "Connecting React Components",
        "example_code": `
// Connect React components to the Redux store
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = {
  increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);`
      }
    ]
  },
  {
    "topic_name": "React Hooks",
    "topic_description": "React Hooks allow functional components to use state and other React features without writing a class. They provide a more concise and readable way to manage state and side effects.",
    "subtopics": [
      {
        "subtopic_name": "useState Hook",
        "example_code": `
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`
      },
      {
        "subtopic_name": "useEffect Hook",
        "example_code": `
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`
      }
    ]
  },
  {
    "topic_name": "Styling in React",
    "topic_description": "Styling in React can be done using CSS, CSS modules, or popular CSS-in-JS libraries like styled-components or Emotion.",
    "subtopics": [
      {
        "subtopic_name": "CSS Stylesheets",
        "example_code": `
import './MyComponent.css';

function MyComponent() {
  return <div className="my-component">Styled with CSS</div>;
}`
      },
      {
        "subtopic_name": "CSS Modules",
        "example_code": `
import styles from './MyComponent.module.css';

function MyComponent() {
  return <div className={styles.myComponent}>Styled with CSS Modules</div>;
}`
      },
      {
        "subtopic_name": "Styled-Components",
        "example_code": `
import styled from 'styled-components';

const Wrapper = styled.div\`
  background-color: lightgray;
\`;

function MyComponent() {
  return <Wrapper>Styled with styled-components</Wrapper>;
}`
      }
    ]
  },
  {
    "topic_name": "Error Handling",
    "topic_description": "React provides error boundaries, a way to gracefully handle errors that occur within the component tree and prevent the entire application from crashing.",
    "subtopics": [
      {
        "subtopic_name": "Error Boundary Component",
        "example_code": `
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}`
      },
      {
        "subtopic_name": "Using Error Boundary",
        "example_code": `
<ErrorBoundary>
  <ComponentWithError />
</ErrorBoundary>`
      }
    ]
  },
  {
    "topic_name": "React Testing",
    "topic_description": "Testing is an essential part of building reliable React applications. Tools like Jest and React Testing Library are commonly used for testing React components and applications.",
    "subtopics": [
      {
        "subtopic_name": "Setting up Testing Environment",
        "example_code": `
// Install Jest and React Testing Library
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

// Configure Jest in package.json or jest.config.js
{
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
}`            },
      {
        "subtopic_name": "Writing Component Tests",
        "example_code": `
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders the component', () => {
  render(<MyComponent />);
  const element = screen.getByText('Hello, React!');
  expect(element).toBeInTheDocument();
});`
      }
    ]
  }
];

// console.log(JSON.stringify(reactCheatSheet, null, 2));
export default ReactData;