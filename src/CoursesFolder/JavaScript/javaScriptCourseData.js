export var subjectName = "Javascript"
var javaScriptData = [
    {
        "topic_name": "Variables and Data Types",
        "topic_description": "JavaScript variables can store data of different types, including numbers, strings, and objects.",
        "subtopics": [
            {
                "subtopic_name": "Declaring Variables",
                "example_code": "let variableName = 'Hello, World!';"
            },
            {
                "subtopic_name": "Data Types",
                "example_code": "let num = 42;\nlet str = 'Hello';\nlet bool = true;"
            },
            {
                "subtopic_name": "Type Conversion",
                "example_code": "let numStr = '42';\nlet num = parseInt(numStr);"
            }
        ]
    },
    {
        "topic_name": "Functions",
        "topic_description": "Functions in JavaScript are reusable blocks of code that can take parameters and return values.",
        "subtopics": [
            {
                "subtopic_name": "Defining Functions",
                "example_code": "function functionName() {\n  // Code here\n}"
            },
            {
                "subtopic_name": "Function Parameters",
                "example_code": "function greet(name) {\n  return 'Hello, ' + name;\n}"
            },
            {
                "subtopic_name": "Arrow Functions",
                "example_code": "const add = (a, b) => a + b;"
            }
        ]
    },
    {
        "topic_name": "Conditional Statements",
        "topic_description": "Conditional statements allow you to execute different code based on specified conditions.",
        "subtopics": [
            {
                "subtopic_name": "if Statement",
                "example_code": "if (condition) {\n  // Code to execute if condition is true\n}"
            },
            {
                "subtopic_name": "else Statement",
                "example_code": "if (condition) {\n  // Code if true\n} else {\n  // Code if false\n}"
            },
            {
                "subtopic_name": "Switch Statement",
                "example_code": "switch (value) {\n  case 1:\n    // Code for case 1\n    break;\n  case 2:\n    // Code for case 2\n    break;\n  default:\n    // Default code\n}"
            }
        ]
    },
    {
        "topic_name": "Loops",
        "topic_description": "Loops allow you to repeatedly execute code until a specified condition is met.",
        "subtopics": [
            {
                "subtopic_name": "for Loop",
                "example_code": "for (let i = 0; i < 5; i++) {\n  // Code to repeat\n}"
            },
            {
                "subtopic_name": "while Loop",
                "example_code": "let i = 0;\nwhile (i < 5) {\n  // Code to repeat\n  i++;\n}"
            },
            {
                "subtopic_name": "forEach Loop",
                "example_code": "array.forEach(item => {\n  // Code for each item\n});"
            }
        ]
    },
    {
        "topic_name": "Arrays",
        "topic_description": "Arrays are ordered lists of values that can be accessed by index.",
        "subtopics": [
            {
                "subtopic_name": "Creating Arrays",
                "example_code": "let fruits = ['apple', 'banana', 'cherry'];"
            },
            {
                "subtopic_name": "Accessing Elements",
                "example_code": "let firstFruit = fruits[0];"
            },
            {
                "subtopic_name": "Array Methods",
                "example_code": "fruits.push('orange');\nfruits.pop();\nfruits.length;"
            }
        ]
    },
    {
        "topic_name": "Objects",
        "topic_description": "Objects in JavaScript store collections of key-value pairs.",
        "subtopics": [
            {
                "subtopic_name": "Creating Objects",
                "example_code": "let person = {\n  firstName: 'John',\n  lastName: 'Doe'\n};"
            },
            {
                "subtopic_name": "Accessing Properties",
                "example_code": "let firstName = person.firstName;"
            },
            {
                "subtopic_name": "Object Methods",
                "example_code": "person.sayHello = function() {\n  return 'Hello, ' + this.firstName;\n};"
            }
        ]
    },
    {
        "topic_name": "DOM Manipulation",
        "topic_description": "The Document Object Model (DOM) allows you to manipulate HTML elements and their properties.",
        "subtopics": [
            {
                "subtopic_name": "Selecting Elements",
                "example_code": "document.getElementById('elementId');\ndocument.querySelector('.className');"
            },
            {
                "subtopic_name": "Changing HTML Content",
                "example_code": "element.innerHTML = 'New content';\nelement.textContent = 'Text content';"
            },
            {
                "subtopic_name": "Event Handling",
                "example_code": "element.addEventListener('click', function() {\n  // Event handler code\n});"
            }
        ]
    },
    {
        "topic_name": "Promises and Asynchronous Programming",
        "topic_description": "Promises are used for asynchronous operations in JavaScript, such as fetching data from a server.",
        "subtopics": [
            {
                "subtopic_name": "Creating Promises",
                "example_code": "const fetchData = new Promise((resolve, reject) => {\n  // Asynchronous code\n});"
            },
            {
                "subtopic_name": "Fetching Data with fetch",
                "example_code": "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => {\n    // Process data\n  });"
            },
            {
                "subtopic_name": "Async/Await",
                "example_code": "async function getData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n  } catch (error) {\n    // Handle error\n  }\n}"
            }
        ]
    },
    {
        "topic_name": "ES6 Features",
        "topic_description": "ES6 introduced several new features and syntax enhancements to JavaScript.",
        "subtopics": [
            {
                "subtopic_name": "Arrow Functions",
                "example_code": "const add = (a, b) => a + b;"
            },
            {
                "subtopic_name": "Template Literals",
                "example_code": "const message = `Hello, ${name}`;"
            },
            {
                "subtopic_name": "Destructuring Assignment",
                "example_code": "const { firstName, lastName } = person;"
            }
        ]
    },
    {
        "topic_name": "Error Handling",
        "topic_description": "Error handling in JavaScript helps catch and handle runtime errors.",
        "subtopics": [
            {
                "subtopic_name": "try...catch Statement",
                "example_code": "try {\n  // Code that may throw an error\n} catch (error) {\n  // Handle the error\n}"
            },
            {
                "subtopic_name": "Throwing Custom Errors",
                "example_code": "throw new Error('Custom error message');"
            },
            {
                "subtopic_name": "Handling Promise Errors",
                "example_code": "fetch('https://api.example.com/data')\n  .catch(error => {\n    // Handle fetch error\n  });"
            }
        ]
    },
    {
        "topic_name": "Modules",
        "topic_description": "JavaScript modules help organize and encapsulate code into reusable components.",
        "subtopics": [
            {
                "subtopic_name": "Exporting Modules",
                "example_code": "export const functionName = () => {...};"
            },
            {
                "subtopic_name": "Importing Modules",
                "example_code": "import { functionName } from './module.js';"
            },
            {
                "subtopic_name": "Default Exports",
                "example_code": "export default function() {...};\nimport myFunction from './module.js';"
            }
        ]
    },
    {
        "topic_name": "Local Storage",
        "topic_description": "Local storage allows you to store data on the user's device for persistent storage.",
        "subtopics": [
            {
                "subtopic_name": "Storing Data",
                "example_code": "localStorage.setItem('key', 'value');"
            },
            {
                "subtopic_name": "Retrieving Data",
                "example_code": "const data = localStorage.getItem('key');"
            },
            {
                "subtopic_name": "Removing Data",
                "example_code": "localStorage.removeItem('key');"
            }
        ]
    },
    {
        "topic_name": "Regular Expressions",
        "topic_description": "Regular expressions (regex) are patterns used for string matching and manipulation.",
        "subtopics": [
            {
                "subtopic_name": "Creating Regex",
                "example_code": "/pattern/;"
            },
            {
                "subtopic_name": "Matching Strings",
                "example_code": "const text = 'Hello, World!';\nconst pattern = /Hello/;\nconst result = text.match(pattern);"
            },
            {
                "subtopic_name": "Replacing Strings",
                "example_code": "const text = 'Hello, World!';\nconst pattern = /Hello/;\nconst replacement = 'Hi';\nconst result = text.replace(pattern, replacement);"
            }
        ]
    },
    {
        "topic_name": "JSON",
        "topic_description": "JSON (JavaScript Object Notation) is a lightweight data interchange format.",
        "subtopics": [
            {
                "subtopic_name": "Parsing JSON",
                "example_code": "const jsonString = '{\"name\":\"John\",\"age\":30,\"city\":\"New York\"}';\nconst data = JSON.parse(jsonString);"
            },
            {
                "subtopic_name": "Stringifying JSON",
                "example_code": "const data = { name: 'John', age: 30, city: 'New York' };\nconst jsonString = JSON.stringify(data);"
            }
        ]
    },
    {
        "topic_name": "Date and Time",
        "topic_description": "JavaScript provides date and time manipulation capabilities.",
        "subtopics": [
            {
                "subtopic_name": "Creating Date Objects",
                "example_code": "const currentDate = new Date();"
            },
            {
                "subtopic_name": "Getting Date Components",
                "example_code": "const year = currentDate.getFullYear();\nconst month = currentDate.getMonth();\nconst day = currentDate.getDate();"
            },
            {
                "subtopic_name": "Formatting Dates",
                "example_code": "const formattedDate = currentDate.toLocaleDateString();"
            }
        ]
    },
    {
        "topic_name": "Promises and Asynchronous Programming",
        "topic_description": "Promises are used for asynchronous operations in JavaScript, such as fetching data from a server.",
        "subtopics": [
            {
                "subtopic_name": "Creating Promises",
                "example_code": "const fetchData = new Promise((resolve, reject) => {\n  // Asynchronous code\n});"
            },
            {
                "subtopic_name": "Fetching Data with fetch",
                "example_code": "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => {\n    // Process data\n  });"
            },
            {
                "subtopic_name": "Async/Await",
                "example_code": "async function getData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n  } catch (error) {\n    // Handle error\n  }\n}"
            }
        ]
    },
    {
        "topic_name": "ES6 Features",
        "topic_description": "ES6 introduced several new features and syntax enhancements to JavaScript.",
        "subtopics": [
            {
                "subtopic_name": "Arrow Functions",
                "example_code": "const add = (a, b) => a + b;"
            },
            {
                "subtopic_name": "Template Literals",
                "example_code": "const message = `Hello, ${name}`;"
            },
            {
                "subtopic_name": "Destructuring Assignment",
                "example_code": "const { firstName, lastName } = person;"
            }
        ]
    },
    {
        "topic_name": "Error Handling",
        "topic_description": "Error handling in JavaScript helps catch and handle runtime errors.",
        "subtopics": [
            {
                "subtopic_name": "try...catch Statement",
                "example_code": "try {\n  // Code that may throw an error\n} catch (error) {\n  // Handle the error\n}"
            },
            {
                "subtopic_name": "Throwing Custom Errors",
                "example_code": "throw new Error('Custom error message');"
            },
            {
                "subtopic_name": "Handling Promise Errors",
                "example_code": "fetch('https://api.example.com/data')\n  .catch(error => {\n    // Handle fetch error\n  });"
            }
        ]
    },
    {
        "topic_name": "Modules",
        "topic_description": "JavaScript modules help organize and encapsulate code into reusable components.",
        "subtopics": [
            {
                "subtopic_name": "Exporting Modules",
                "example_code": "export const functionName = () => {...};"
            },
            {
                "subtopic_name": "Importing Modules",
                "example_code": "import { functionName } from './module.js';"
            },
            {
                "subtopic_name": "Default Exports",
                "example_code": "export default function() {...};\nimport myFunction from './module.js';"
            }
        ]
    },
    {
        "topic_name": "Local Storage",
        "topic_description": "Local storage allows you to store data on the user's device for persistent storage.",
        "subtopics": [
            {
                "subtopic_name": "Storing Data",
                "example_code": "localStorage.setItem('key', 'value');"
            },
            {
                "subtopic_name": "Retrieving Data",
                "example_code": "const data = localStorage.getItem('key');"
            },
            {
                "subtopic_name": "Removing Data",
                "example_code": "localStorage.removeItem('key');"
            }
        ]
    },
    {
        "topic_name": "Regular Expressions",
        "topic_description": "Regular expressions (regex) are patterns used for string matching and manipulation.",
        "subtopics": [
            {
                "subtopic_name": "Creating Regex",
                "example_code": "/pattern/;"
            },
            {
                "subtopic_name": "Matching Strings",
                "example_code": "const text = 'Hello, World!';\nconst pattern = /Hello/;\nconst result = text.match(pattern);"
            },
            {
                "subtopic_name": "Replacing Strings",
                "example_code": "const text = 'Hello, World!';\nconst pattern = /Hello/;\nconst replacement = 'Hi';\nconst result = text.replace(pattern, replacement);"
            }
        ]
    },
    {
        "topic_name": "JSON",
        "topic_description": "JSON (JavaScript Object Notation) is a lightweight data interchange format.",
        "subtopics": [
            {
                "subtopic_name": "Parsing JSON",
                "example_code": "const jsonString = '{\"name\":\"John\",\"age\":30,\"city\":\"New York\"}';\nconst data = JSON.parse(jsonString);"
            },
            {
                "subtopic_name": "Stringifying JSON",
                "example_code": "const data = { name: 'John', age: 30, city: 'New York' };\nconst jsonString = JSON.stringify(data);"
            }
        ]
    },
    {
        "topic_name": "Date and Time",
        "topic_description": "JavaScript provides date and time manipulation capabilities.",
        "subtopics": [
            {
                "subtopic_name": "Creating Date Objects",
                "example_code": "const currentDate = new Date();"
            },
            {
                "subtopic_name": "Getting Date Components",
                "example_code": "const year = currentDate.getFullYear();\nconst month = currentDate.getMonth();\nconst day = currentDate.getDate();"
            },
            {
                "subtopic_name": "Formatting Dates",
                "example_code": "const formattedDate = currentDate.toLocaleDateString();"
            }
        ]
    }
    // Add more topics and subtopics as needed
];

// console.log(javaScriptData[0]);
export default javaScriptData;
