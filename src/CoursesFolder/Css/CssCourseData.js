export var subjectName = "CSS"
var cssTopics = [
    {
        "topic_name": "Selectors",
        "topic_description": "Selectors in CSS are patterns used to select and style HTML elements. They include class, ID, element, and attribute selectors.",
        "subtopics": [
            {
                "subtopic_name": "Class Selector",
                "example_code": ".class-name {\n  property: value;\n}"
            },
            {
                "subtopic_name": "ID Selector",
                "example_code": "#id-name {\n  property: value;\n}"
            },
            {
                "subtopic_name": "Element Selector",
                "example_code": "element-name {\n  property: value;\n}"
            },
            {
                "subtopic_name": "Attribute Selector",
                "example_code": "[attribute=value] {\n  property: value;\n}"
            }
        ]
    },
    {
        "topic_name": "Box Model",
        "topic_description": "The CSS Box Model defines an element's dimensions, including content, padding, border, and margin, influencing layout and spacing.",
        "subtopics": [
            {
                "subtopic_name": "Margin and Padding",
                "example_code": "element {\n  margin: 10px;\n  padding: 20px;\n}"
            },
            {
                "subtopic_name": "Border",
                "example_code": "element {\n  border: 1px solid #000;\n  box-sizing: border-box;\n}"
            },
            {
                "subtopic_name": "Width and Height",
                "example_code": "element {\n  width: 100px;\n  height: 100px;\n}"
            },
            {
                "subtopic_name": "Background",
                "example_code": "element {\n  background-color: #F0F0F0;\n  background-image: url('image.jpg');\n}"
            }
        ]
    },
    {
        "topic_name": "Flexbox",
        "topic_description": "Flexbox is a layout model in CSS that simplifies the arrangement of elements in a container, providing control over alignment and distribution.",
        "subtopics": [
            {
                "subtopic_name": "Flex Container",
                "example_code": ".container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}"
            },
            {
                "subtopic_name": "Flex Items",
                "example_code": ".item {\n  flex: 1;\n}"
            },
            {
                "subtopic_name": "Aligning Items",
                "example_code": ".item {\n  align-self: flex-start;\n}"
            },
            {
                "subtopic_name": "Ordering Items",
                "example_code": ".item {\n  order: 2;\n}"
            }
        ]
    },
    {
        "topic_name": "Transitions and Animations",
        "topic_description": "Transitions and animations in CSS allow for smooth and interactive user experiences, enabling gradual property changes and keyframe animations.",
        "subtopics": [
            {
                "subtopic_name": "Transition Property",
                "example_code": "element {\n  transition: property duration timing-function;\n}"
            },
            {
                "subtopic_name": "Keyframes Animation",
                "example_code": "@keyframes animation-name {\n  0% { property: value; }\n  100% { property: value; }\n}"
            },
            {
                "subtopic_name": "Animating Properties",
                "example_code": "element {\n  animation: animation-name duration timing-function infinite alternate;\n}"
            },
            {
                "subtopic_name": "Easing Functions",
                "example_code": "element {\n  transition-timing-function: ease-in-out;\n}"
            }
        ]
    },
    {
        "topic_name": "Positioning",
        "topic_description": "CSS positioning allows elements to be placed in specific locations relative to their containing elements or the viewport.",
        "subtopics": [
            {
                "subtopic_name": "Relative Positioning",
                "example_code": "element {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}"
            },
            {
                "subtopic_name": "Absolute Positioning",
                "example_code": "element {\n  position: absolute;\n  top: 0;\n  right: 0;\n}"
            },
            {
                "subtopic_name": "Fixed Positioning",
                "example_code": "element {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}"
            },
            {
                "subtopic_name": "Z-Index",
                "example_code": "element {\n  position: relative;\n  z-index: 2;\n}"
            }
        ]
    },
    {
        "topic_name": "Typography",
        "topic_description": "Typography in CSS involves styling text content, including font family, size, weight, and color to enhance readability and aesthetics.",
        "subtopics": [
            {
                "subtopic_name": "Font Family",
                "example_code": "element {\n  font-family: 'Arial', sans-serif;\n}"
            },
            {
                "subtopic_name": "Font Size",
                "example_code": "element {\n  font-size: 16px;\n}"
            },
            {
                "subtopic_name": "Font Weight",
                "example_code": "element {\n  font-weight: bold;\n}"
            },
            {
                "subtopic_name": "Text Color",
                "example_code": "element {\n  color: #333;\n}"
            }
        ]
    },
    {
        "topic_name": "Layout Techniques",
        "topic_description": "CSS layout techniques involve designing the structure and positioning of elements for optimal web page layout and design.",
        "subtopics": [
            {
                "subtopic_name": "Floats",
                "example_code": "element {\n  float: left;\n}"
            },
            {
                "subtopic_name": "Clearfix",
                "example_code": ".clearfix::after {\n  content: '';\n  display: table;\n  clear: both;\n}"
            },
            {
                "subtopic_name": "Position: Sticky",
                "example_code": "element {\n  position: sticky;\n  top: 20px;\n}"
            },
            {
                "subtopic_name": "Grid Layout",
                "example_code": ".container {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}"
            }
        ]
    },
    {
        "topic_name": "Responsive Design",
        "topic_description": "Responsive design techniques in CSS ensure web pages adapt to various screen sizes and devices for a consistent user experience.",
        "subtopics": [
            {
                "subtopic_name": "Media Queries",
                "example_code": "@media (max-width: 768px) {\n  /* CSS for smaller screens */\n}"
            },
            {
                "subtopic_name": "Viewport Meta Tag",
                "example_code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            },
            {
                "subtopic_name": "Fluid Layouts",
                "example_code": "element {\n  width: 100%;\n  max-width: 100%;\n}"
            },
            {
                "subtopic_name": "Flexible Images",
                "example_code": "img {\n  max-width: 100%;\n  height: auto;\n}"
            }
        ]
    },
    {
        "topic_name": "CSS Preprocessors",
        "topic_description": "CSS preprocessors like Sass, Less, and Stylus enhance CSS development with variables, functions, and more, improving code organization and maintainability.",
        "subtopics": [
            {
                "subtopic_name": "Sass",
                "example_code": "$primary-color: #007bff;\n\n.element {\n  color: $primary-color;\n}"
            },
            {
                "subtopic_name": "Less",
                "example_code": "@primary-color: #007bff;\n\n.element {\n  color: @primary-color;\n}"
            },
            {
                "subtopic_name": "Stylus",
                "example_code": "primary-color = #007bff\n\n.element\n  color primary-color"
            },
            {
                "subtopic_name": "Benefits of Preprocessors",
                "example_code": "/* Code is more maintainable and reusable */"
            }
        ]
    },
    {
        "topic_name": "CSS Grid",
        "topic_description": "CSS Grid Layout is a powerful two-dimensional grid system that simplifies complex layouts and alignment of elements.",
        "subtopics": [
            {
                "subtopic_name": "Grid Container",
                "example_code": ".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}"
            },
            {
                "subtopic_name": "Grid Items",
                "example_code": ".item {\n  grid-column: span 2;\n}"
            },
            {
                "subtopic_name": "Grid Template Areas",
                "example_code": ".container {\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'footer footer';\n}"
            },
            {
                "subtopic_name": "Grid Gap",
                "example_code": ".container {\n  gap: 20px;\n}"
            }
        ]
    },
    {
        "topic_name": "Transforms and Transitions",
        "topic_description": "CSS transforms and transitions enable developers to create interactive and visually appealing animations and effects on web elements.",
        "subtopics": [
            {
                "subtopic_name": "Transform Functions",
                "example_code": "element {\n  transform: translate(50px, 50px) rotate(45deg) scale(1.5);\n}"
            },
            {
                "subtopic_name": "Transition Properties",
                "example_code": "element {\n  transition: property1 0.3s ease-in-out, property2 1s linear;\n}"
            },
            {
                "subtopic_name": "Transition Timing Functions",
                "example_code": "element {\n  transition-timing-function: ease-in-out;\n}"
            },
            {
                "subtopic_name": "Hover Effects",
                "example_code": "element:hover {\n  /* CSS for hover state */\n}"
            }
        ]
    },
    {
        "topic_name": "Pseudo-Classes and Pseudo-Elements",
        "topic_description": "CSS pseudo-classes and pseudo-elements provide powerful ways to style elements based on user interactions and element structure.",
        "subtopics": [
            {
                "subtopic_name": ":hover",
                "example_code": "element:hover {\n  /* CSS for hover state */\n}"
            },
            {
                "subtopic_name": ":nth-child",
                "example_code": "li:nth-child(even) {\n  /* CSS for even list items */\n}"
            },
            {
                "subtopic_name": "::before and ::after",
                "example_code": "element::before {\n  content: 'Before';\n}"
            },
            {
                "subtopic_name": ":not",
                "example_code": "p:not(.special) {\n  /* CSS for paragraphs that don't have the 'special' class */\n}"
            }
        ]
    },
    {
        "topic_name": "CSS Variables (Custom Properties)",
        "topic_description": "CSS variables, also known as custom properties, allow for dynamic and reusable styling by defining values that can be used throughout a stylesheet.",
        "subtopics": [
            {
                "subtopic_name": "Declaring Variables",
                "example_code": ":root {\n  --primary-color: #007bff;\n}"
            },
            {
                "subtopic_name": "Using Variables",
                "example_code": "element {\n  color: var(--primary-color);\n}"
            },
            {
                "subtopic_name": "Changing Variables with JavaScript",
                "example_code": "document.documentElement.style.setProperty('--primary-color', '#FF5733');"
            },
            {
                "subtopic_name": "Fallback Values",
                "example_code": "element {\n  color: var(--primary-color, #333);\n}"
            }
        ]
    },
    {
        "topic_name": "CSS Best Practices",
        "topic_description": "Following best practices in CSS development ensures maintainable, efficient, and clean code for a better web development experience.",
        "subtopics": [
            {
                "subtopic_name": "Use Meaningful Class Names",
                "example_code": ".header {\n  /* Bad */\n}\n\n.navbar {\n  /* Good */\n}"
            },
            {
                "subtopic_name": "Avoid !important",
                "example_code": "element {\n  color: red !important;\n}"
            },
            {
                "subtopic_name": "Minimize the Use of IDs",
                "example_code": "element {\n  /* Avoid using #id */\n}"
            },
            {
                "subtopic_name": "Keep CSS DRY",
                "example_code": "/* Don't Repeat Yourself */"
            }
        ]
    },
    {
        "topic_name": "CSS Frameworks",
        "topic_description": "CSS frameworks like Bootstrap, Foundation, Bulma, and Tailwind CSS provide pre-designed styles and components for faster web development.",
        "subtopics": [
            {
                "subtopic_name": "Bootstrap",
                "example_code": "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">"
            },
            {
                "subtopic_name": "Foundation",
                "example_code": "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/foundation/6.3.1/foundation.min.css\">"
            },
            {
                "subtopic_name": "Bulma",
                "example_code": "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css\">"
            },
            {
                "subtopic_name": "Tailwind CSS",
                "example_code": "<link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\">"
            }
        ]
    },
    {
        "topic_name": "CSS in Practice",
        "topic_description": "Applying CSS in practical scenarios involves creating navigation menus, styling buttons, designing card components, and ensuring responsive layouts.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Navigation Menu",
                "example_code": "<nav>\n  <ul>\n    <li><a href=\"#\">Home</a></li>\n    <li><a href=\"#\">About</a></li>\n    <li><a href=\"#\">Services</a></li>\n  </ul>\n</nav>"
            },
            {
                "subtopic_name": "Styling Buttons",
                "example_code": "<button class=\"btn btn-primary\">Submit</button>"
            },
            {
                "subtopic_name": "Designing a Card Component",
                "example_code": "<div class=\"card\">\n  <img src=\"card-image.jpg\" alt=\"Card Image\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Card Title</h5>\n    <p class=\"card-text\">Card content goes here.</p>\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Responsive Layout",
                "example_code": "@media (max-width: 768px) {\n  /* CSS for smaller screens */\n}"
            }
        ]
    },
    {
        "topic_name": "Responsive Web Design",
        "topic_description": "Responsive web design is an approach to web development that makes web pages render well on a variety of devices and window or screen sizes.",
        "subtopics": [
            {
                "subtopic_name": "Media Queries",
                "example_code": "@media (max-width: 768px) {\n  /* CSS for smaller screens */\n}"
            },
            {
                "subtopic_name": "Viewport Meta Tag",
                "example_code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            },
            {
                "subtopic_name": "Flexible Grids",
                "example_code": ".container {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}"
            },
            {
                "subtopic_name": "Responsive Images",
                "example_code": "img {\n  max-width: 100%;\n  height: auto;\n}"
            }
        ]
    },
    {
        "topic_name": "JavaScript Fundamentals",
        "topic_description": "JavaScript is a versatile and essential programming language for web development, allowing for dynamic and interactive web pages.",
        "subtopics": [
            {
                "subtopic_name": "Variables and Data Types",
                "example_code": "let variableName = 'Hello, World!';"
            },
            {
                "subtopic_name": "Functions",
                "example_code": "function functionName() {\n  // Code here\n}"
            },
            {
                "subtopic_name": "Conditional Statements",
                "example_code": "if (condition) {\n  // Code to execute if condition is true\n} else {\n  // Code to execute if condition is false\n}"
            },
            {
                "subtopic_name": "Loops",
                "example_code": "for (let i = 0; i < 5; i++) {\n  // Code to repeat\n}"
            }
        ]
    },
    {
        "topic_name": "Web APIs",
        "topic_description": "Web APIs (Application Programming Interfaces) enable interaction between web applications and external services or data sources.",
        "subtopics": [
            {
                "subtopic_name": "Fetching Data with Fetch API",
                "example_code": "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => {\n    // Process data\n  });"
            },
            {
                "subtopic_name": "Manipulating the DOM",
                "example_code": "document.getElementById('elementId').textContent = 'New Text';"
            },
            {
                "subtopic_name": "Geolocation API",
                "example_code": "if ('geolocation' in navigator) {\n  navigator.geolocation.getCurrentPosition(position => {\n    // Handle location data\n  });\n}"
            },
            {
                "subtopic_name": "LocalStorage and SessionStorage",
                "example_code": "localStorage.setItem('key', 'value');\nlet storedValue = localStorage.getItem('key');"
            }
        ]
    },
    {
        "topic_name": "Single Page Applications (SPAs)",
        "topic_description": "Single Page Applications are web applications that load a single HTML page and dynamically update content as the user interacts with the app.",
        "subtopics": [
            {
                "subtopic_name": "Routing in SPAs",
                "example_code": "const router = new VueRouter({\n  routes: [\n    { path: '/', component: Home },\n    { path: '/about', component: About }\n  ]\n});"
            },
            {
                "subtopic_name": "State Management",
                "example_code": "const store = new Vuex.Store({\n  state: {\n    count: 0\n  },\n  mutations: {\n    increment(state) {\n      state.count++;\n    }\n  }\n});"
            },
            {
                "subtopic_name": "API Integration",
                "example_code": "axios.get('/api/data')\n  .then(response => {\n    // Handle API response\n  });"
            },
            {
                "subtopic_name": "Authentication and Authorization",
                "example_code": "if (user.isAuthenticated) {\n  // Allow access to protected routes\n}"
            }
        ]
    },
    {
        "topic_name": "Web Accessibility (A11y)",
        "topic_description": "Web accessibility is the practice of ensuring that web content is usable by people with disabilities, providing equal access to information and functionality.",
        "subtopics": [
            {
                "subtopic_name": "Semantic HTML",
                "example_code": "<button type=\"button\">Submit</button>"
            },
            {
                "subtopic_name": "ARIA Roles and Attributes",
                "example_code": "<div role=\"tabpanel\" aria-labelledby=\"tab1\">Tab content goes here.</div>"
            },
            {
                "subtopic_name": "Keyboard Navigation",
                "example_code": "element.addEventListener('keydown', event => {\n  if (event.key === 'Enter') {\n    // Handle Enter key press\n  }\n});"
            },
            {
                "subtopic_name": "Testing with Screen Readers",
                "example_code": "Use screen reader software to test website accessibility."
            }
        ]
    },
]

// console.log(cssTopics[0]);
export default cssTopics;