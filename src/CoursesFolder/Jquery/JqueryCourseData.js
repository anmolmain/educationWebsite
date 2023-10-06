var JqueryCourseData = [
    {
        "topic_name": "Introduction to jQuery",
        "topic_description": "jQuery is a fast, small, and feature-rich JavaScript library that makes it easy to manipulate HTML documents, handle events, create animations, and more.",
        "subtopics": [
            {
                "subtopic_name": "Including jQuery",
                "example_code": "<script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>"
            },
            {
                "subtopic_name": "Document Ready",
                "example_code": "$(document).ready(function() {\n  // jQuery code here\n});"
            },
            {
                "subtopic_name": "Selecting Elements",
                "example_code": "var element = $('#element-id');"
            },
            {
                "subtopic_name": "Chaining",
                "example_code": "$('#element-id').addClass('active').slideDown();"
            }
        ]
    },
    {
        "topic_name": "DOM Manipulation",
        "topic_description": "jQuery simplifies working with the Document Object Model (DOM) by providing methods to create, modify, and remove elements.",
        "subtopics": [
            {
                "subtopic_name": "Creating Elements",
                "example_code": "var newDiv = $('<div>');"
            },
            {
                "subtopic_name": "Modifying Content",
                "example_code": "$('#element-id').html('New content');"
            },
            {
                "subtopic_name": "Adding and Removing Classes",
                "example_code": "$('#element-id').addClass('highlighted');\n$('#element-id').removeClass('inactive');"
            },
            {
                "subtopic_name": "Changing CSS Properties",
                "example_code": "$('#element-id').css('color', 'red');"
            }
        ]
    },
    {
        "topic_name": "Events Handling",
        "topic_description": "jQuery simplifies event handling, allowing you to attach event listeners to elements and perform actions when events occur.",
        "subtopics": [
            {
                "subtopic_name": "Click Event",
                "example_code": "$('#button-id').click(function() {\n  // Code to run on click\n});"
            },
            {
                "subtopic_name": "Mouse Events",
                "example_code": "$('#element-id').mouseenter(function() {\n  // Code for mouseenter\n});"
            },
            {
                "subtopic_name": "Keyboard Events",
                "example_code": "$('#input-id').keyup(function(event) {\n  // Code for keyup event\n});"
            },
            {
                "subtopic_name": "Event Delegation",
                "example_code": "$('#parent-element').on('click', '.child-element', function() {\n  // Code for delegated click\n});"
            }
        ]
    },
    {
        "topic_name": "AJAX Requests",
        "topic_description": "jQuery simplifies making AJAX requests to fetch data from a server and update a webpage without requiring a full page reload.",
        "subtopics": [
            {
                "subtopic_name": "GET Request",
                "example_code": "$.get('https://api.example.com/data', function(data) {\n  // Handle data\n});"
            },
            {
                "subtopic_name": "POST Request",
                "example_code": "$.post('https://api.example.com/submit', { key: 'value' }, function(response) {\n  // Handle response\n});"
            },
            {
                "subtopic_name": "AJAX Error Handling",
                "example_code": "$.ajax({\n  url: 'https://api.example.com/data',\n  success: function(data) {\n    // Handle data\n  },\n  error: function(error) {\n    // Handle error\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Animations",
        "topic_description": "jQuery provides easy-to-use methods for creating animations and transitions on HTML elements.",
        "subtopics": [
            {
                "subtopic_name": "Fade In and Out",
                "example_code": "$('#element-id').fadeIn();\n$('#element-id').fadeOut();"
            },
            {
                "subtopic_name": "Slide Up and Down",
                "example_code": "$('#element-id').slideUp();\n$('#element-id').slideDown();"
            },
            {
                "subtopic_name": "Custom Animations",
                "example_code": "$('#element-id').animate({\n  opacity: 0.5,\n  left: '+=50px'\n}, 1000);"
            }
        ]
    },
    {
        "topic_name": "Form Handling",
        "topic_description": "jQuery simplifies form handling, allowing you to validate forms, submit data, and interact with form elements.",
        "subtopics": [
            {
                "subtopic_name": "Form Submission",
                "example_code": "$('#my-form').submit(function(event) {\n  event.preventDefault(); // Prevent form submission\n  // Handle form data\n});"
            },
            {
                "subtopic_name": "Form Validation",
                "example_code": "$('#email-input').blur(function() {\n  // Validate email input\n});"
            },
            {
                "subtopic_name": "Getting and Setting Form Values",
                "example_code": "var username = $('#username-input').val();\n$('#password-input').val('new-password');"
            }
        ]
    },
    {
        "topic_name": "DOM Traversal",
        "topic_description": "jQuery provides methods for navigating and selecting elements in the DOM tree, making it easy to find and manipulate elements.",
        "subtopics": [
            {
                "subtopic_name": "Parent and Children",
                "example_code": "$('#child-element').parent();\n$('#parent-element').children();"
            },
            {
                "subtopic_name": "Siblings",
                "example_code": "$('#sibling-element').siblings();"
            },
            {
                "subtopic_name": "Filtering",
                "example_code": "$('li').filter('.active');"
            },
            {
                "subtopic_name": "Traversing Up and Down",
                "example_code": "$('#element-id').next();\n$('#element-id').prev();"
            }
        ]
    },
    {
        "topic_name": "Plugins and Extensions",
        "topic_description": "jQuery can be extended with plugins and extensions to add additional functionality and features to your web applications.",
        "subtopics": [
            {
                "subtopic_name": "Using a Plugin",
                "example_code": "<script src=\"jquery-plugin.js\"></script>"
            },
            {
                "subtopic_name": "Creating a Simple Plugin",
                "example_code": "(function($) {\n  $.fn.myPlugin = function(options) {\n    // Plugin code here\n  };\n})(jQuery);"
            }
        ]
    },
    {
        "topic_name": "Event Handling Best Practices",
        "topic_description": "Best practices for efficiently handling events in jQuery to improve performance and maintainability.",
        "subtopics": [
            {
                "subtopic_name": "Event Delegation",
                "example_code": "$('#parent-element').on('click', '.child-element', function() {\n  // Code for delegated click\n});"
            },
            {
                "subtopic_name": "Throttling and Debouncing",
                "example_code": "var throttledFunction = $.throttle(1000, myFunction);\nvar debouncedFunction = $.debounce(500, myFunction);"
            }
        ]
    },
    {
        "topic_name": "Common jQuery UI Widgets",
        "topic_description": "An overview of common jQuery UI widgets like accordions, tabs, datepickers, and more.",
        "subtopics": [
            {
                "subtopic_name": "Accordion",
                "example_code": "$('#accordion').accordion();"
            },
            {
                "subtopic_name": "Tabs",
                "example_code": "$('#tabs').tabs();"
            },
            {
                "subtopic_name": "Datepicker",
                "example_code": "$('#datepicker').datepicker();"
            },
            {
                "subtopic_name": "Dialog",
                "example_code": "$('#dialog').dialog();"
            }
        ]
    },
    {
        "topic_name": "AJAX with JSON",
        "topic_description": "How to make AJAX requests to fetch JSON data from a server and handle the response.",
        "subtopics": [
            {
                "subtopic_name": "Fetching JSON",
                "example_code": "$.getJSON('https://api.example.com/data.json', function(data) {\n  // Handle JSON data\n});"
            },
            {
                "subtopic_name": "Sending JSON Data",
                "example_code": "$.ajax({\n  url: 'https://api.example.com/submit-json',\n  type: 'POST',\n  contentType: 'application/json',\n  data: JSON.stringify({ key: 'value' }),\n  success: function(response) {\n    // Handle JSON response\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Event Binding and Unbinding",
        "topic_description": "How to bind and unbind event handlers in jQuery for better control over event handling.",
        "subtopics": [
            {
                "subtopic_name": "Binding Events",
                "example_code": "$('#element-id').bind('click', function() {\n  // Code to run on click\n});"
            },
            {
                "subtopic_name": "Unbinding Events",
                "example_code": "$('#element-id').unbind('click');"
            }
        ]
    },
    {
        "topic_name": "Promises and Deferred Objects",
        "topic_description": "Working with promises and deferred objects in jQuery for asynchronous operations and chaining.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Promise",
                "example_code": "var promise = $.ajax('https://api.example.com/data');"
            },
            {
                "subtopic_name": "Chaining Promises",
                "example_code": "promise.then(function(data) {\n  // Handle data\n}).fail(function(error) {\n  // Handle error\n});"
            },
            {
                "subtopic_name": "Deferred Objects",
                "example_code": "var deferred = $.Deferred();\nvar promise = deferred.promise();\ndeferred.resolve(data);"
            }
        ]
    },
    {
        "topic_name": "Using Plugins",
        "topic_description": "How to use jQuery plugins to enhance the functionality of your web applications.",
        "subtopics": [
            {
                "subtopic_name": "Plugin Initialization",
                "example_code": "$('#element-id').myPlugin();"
            },
            {
                "subtopic_name": "Customizing Plugin Options",
                "example_code": "$('#element-id').myPlugin({ option1: 'value1', option2: 'value2' });"
            }
        ]
    },
    {
        "topic_name": "Managing Data with jQuery",
        "topic_description": "Working with data in jQuery, including data attributes, storage, and serialization.",
        "subtopics": [
            {
                "subtopic_name": "Data Attributes",
                "example_code": "$('#element-id').data('key', 'value');\nvar value = $('#element-id').data('key');"
            },
            {
                "subtopic_name": "LocalStorage",
                "example_code": "localStorage.setItem('key', 'value');\nvar storedValue = localStorage.getItem('key');"
            },
            {
                "subtopic_name": "JSON Serialization",
                "example_code": "var jsonData = JSON.stringify({ key: 'value' });\nvar jsonObject = JSON.parse(jsonData);"
            }
        ]
    },
    {
        "topic_name": "Handling Errors",
        "topic_description": "How to handle errors and exceptions gracefully in jQuery applications.",
        "subtopics": [
            {
                "subtopic_name": "Try-Catch",
                "example_code": "try {\n  // Code that may throw an error\n} catch (error) {\n  // Handle error\n}"
            },
            {
                "subtopic_name": "Error Callbacks",
                "example_code": "$.ajax({\n  url: 'https://api.example.com/data',\n  success: function(data) {\n    // Handle data\n  },\n  error: function(error) {\n    // Handle error\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Optimizing jQuery Code",
        "topic_description": "Tips and techniques to optimize jQuery code for better performance.",
        "subtopics": [
            {
                "subtopic_name": "Caching Elements",
                "example_code": "var $element = $('#element-id');\n$element.addClass('highlighted');\n$element.fadeIn();"
            },
            {
                "subtopic_name": "Minifying jQuery",
                "example_code": "Use a minified version of jQuery for production to reduce file size."
            }
        ]
    },
    {
        "topic_name": "jQuery Mobile",
        "topic_description": "An overview of jQuery Mobile for building mobile-friendly web applications.",
        "subtopics": [
            {
                "subtopic_name": "Mobile UI Elements",
                "example_code": "Use jQuery Mobile UI components for touch-friendly interfaces."
            },
            {
                "subtopic_name": "Responsive Design",
                "example_code": "Design responsive layouts for mobile devices using jQuery Mobile."
            }
        ]
    },
    {
        "topic_name": "Advanced jQuery Techniques",
        "topic_description": "Advanced jQuery techniques for handling complex scenarios and dynamic web applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Deferreds for AJAX",
                "example_code": "var deferred = $.ajax('https://api.example.com/data');\ndeferred.done(function(data) {\n  // Handle data\n});"
            },
            {
                "subtopic_name": "Working with JSONP",
                "example_code": "$.getJSON('https://api.example.com/data?callback=?', function(data) {\n  // Handle JSONP data\n});"
            }
        ]
    },
    {
        "topic_name": "AJAX with JSON",
        "topic_description": "How to make AJAX requests to fetch JSON data from a server and handle the response.",
        "subtopics": [
            {
                "subtopic_name": "Fetching JSON",
                "example_code": "$.getJSON('https://api.example.com/data.json', function(data) {\n  // Handle JSON data\n});"
            },
            {
                "subtopic_name": "Sending JSON Data",
                "example_code": "$.ajax({\n  url: 'https://api.example.com/submit-json',\n  type: 'POST',\n  contentType: 'application/json',\n  data: JSON.stringify({ key: 'value' }),\n  success: function(response) {\n    // Handle JSON response\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Event Binding and Unbinding",
        "topic_description": "How to bind and unbind event handlers in jQuery for better control over event handling.",
        "subtopics": [
            {
                "subtopic_name": "Binding Events",
                "example_code": "$('#element-id').bind('click', function() {\n  // Code to run on click\n});"
            },
            {
                "subtopic_name": "Unbinding Events",
                "example_code": "$('#element-id').unbind('click');"
            }
        ]
    },
    {
        "topic_name": "Promises and Deferred Objects",
        "topic_description": "Working with promises and deferred objects in jQuery for asynchronous operations and chaining.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Promise",
                "example_code": "var promise = $.ajax('https://api.example.com/data');"
            },
            {
                "subtopic_name": "Chaining Promises",
                "example_code": "promise.then(function(data) {\n  // Handle data\n}).fail(function(error) {\n  // Handle error\n});"
            },
            {
                "subtopic_name": "Deferred Objects",
                "example_code": "var deferred = $.Deferred();\nvar promise = deferred.promise();\ndeferred.resolve(data);"
            }
        ]
    },
    {
        "topic_name": "Using Plugins",
        "topic_description": "How to use jQuery plugins to enhance the functionality of your web applications.",
        "subtopics": [
            {
                "subtopic_name": "Plugin Initialization",
                "example_code": "$('#element-id').myPlugin();"
            },
            {
                "subtopic_name": "Customizing Plugin Options",
                "example_code": "$('#element-id').myPlugin({ option1: 'value1', option2: 'value2' });"
            }
        ]
    },
    {
        "topic_name": "Managing Data with jQuery",
        "topic_description": "Working with data in jQuery, including data attributes, storage, and serialization.",
        "subtopics": [
            {
                "subtopic_name": "Data Attributes",
                "example_code": "$('#element-id').data('key', 'value');\nvar value = $('#element-id').data('key');"
            },
            {
                "subtopic_name": "LocalStorage",
                "example_code": "localStorage.setItem('key', 'value');\nvar storedValue = localStorage.getItem('key');"
            },
            {
                "subtopic_name": "JSON Serialization",
                "example_code": "var jsonData = JSON.stringify({ key: 'value' });\nvar jsonObject = JSON.parse(jsonData);"
            }
        ]
    },
    {
        "topic_name": "Handling Errors",
        "topic_description": "How to handle errors and exceptions gracefully in jQuery applications.",
        "subtopics": [
            {
                "subtopic_name": "Try-Catch",
                "example_code": "try {\n  // Code that may throw an error\n} catch (error) {\n  // Handle error\n}"
            },
            {
                "subtopic_name": "Error Callbacks",
                "example_code": "$.ajax({\n  url: 'https://api.example.com/data',\n  success: function(data) {\n    // Handle data\n  },\n  error: function(error) {\n    // Handle error\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Optimizing jQuery Code",
        "topic_description": "Tips and techniques to optimize jQuery code for better performance.",
        "subtopics": [
            {
                "subtopic_name": "Caching Elements",
                "example_code": "var $element = $('#element-id');\n$element.addClass('highlighted');\n$element.fadeIn();"
            },
            {
                "subtopic_name": "Minifying jQuery",
                "example_code": "Use a minified version of jQuery for production to reduce file size."
            }
        ]
    },
    {
        "topic_name": "jQuery Mobile",
        "topic_description": "An overview of jQuery Mobile for building mobile-friendly web applications.",
        "subtopics": [
            {
                "subtopic_name": "Mobile UI Elements",
                "example_code": "Use jQuery Mobile UI components for touch-friendly interfaces."
            },
            {
                "subtopic_name": "Responsive Design",
                "example_code": "Design responsive layouts for mobile devices using jQuery Mobile."
            }
        ]
    },
    {
        "topic_name": "Advanced jQuery Techniques",
        "topic_description": "Advanced jQuery techniques for handling complex scenarios and dynamic web applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Deferreds for AJAX",
                "example_code": "var deferred = $.ajax('https://api.example.com/data');\ndeferred.done(function(data) {\n  // Handle data\n});"
            },
            {
                "subtopic_name": "Working with JSONP",
                "example_code": "$.getJSON('https://api.example.com/data?callback=?', function(data) {\n  // Handle JSONP data\n});"
            }
        ]
    },
    {
        "topic_name": "Form Submission with AJAX",
        "topic_description": "Learn how to submit forms using AJAX in jQuery for seamless data transfer without page reloading.",
        "subtopics": [
            {
                "subtopic_name": "AJAX Form Submission",
                "example_code": "$('form').submit(function(event) {\n  event.preventDefault();\n  $.ajax({\n    type: 'POST',\n    url: 'submit.php',\n    data: $(this).serialize(),\n    success: function(response) {\n      // Handle response\n    }\n  });\n});"
            },
            {
                "subtopic_name": "Form Validation",
                "example_code": "$('form').validate({\n  rules: {\n    username: 'required',\n    password: 'required'\n  },\n  submitHandler: function(form) {\n    // Handle form submission\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Handling JSONP Requests",
        "topic_description": "Understand JSONP (JSON with Padding) for making cross-domain requests in jQuery.",
        "subtopics": [
            {
                "subtopic_name": "JSONP Basics",
                "example_code": "$.ajax({\n  url: 'https://api.example.com/data?callback=?',\n  dataType: 'jsonp',\n  success: function(data) {\n    // Handle data\n  }\n});"
            },
            {
                "subtopic_name": "JSONP Callback Function",
                "example_code": "function processData(data) {\n  // Process data\n}\n$.ajax({\n  url: 'https://api.example.com/data?callback=processData',\n  dataType: 'jsonp'\n});"
            }
        ]
    },
    {
        "topic_name": "LocalStorage and SessionStorage",
        "topic_description": "Use localStorage and sessionStorage in jQuery to store data on the client-side browser.",
        "subtopics": [
            {
                "subtopic_name": "Storing Data",
                "example_code": "localStorage.setItem('username', 'john');\nsessionStorage.setItem('token', 'abc123');"
            },
            {
                "subtopic_name": "Retrieving Data",
                "example_code": "var username = localStorage.getItem('username');\nvar token = sessionStorage.getItem('token');"
            },
            {
                "subtopic_name": "Removing Data",
                "example_code": "localStorage.removeItem('username');\nsessionStorage.clear();"
            }
        ]
    },
    {
        "topic_name": "jQuery UI Widgets",
        "topic_description": "Integrate jQuery UI widgets for enhanced user interface elements.",
        "subtopics": [
            {
                "subtopic_name": "Datepicker Widget",
                "example_code": "$('#datepicker').datepicker();"
            },
            {
                "subtopic_name": "Sortable Widget",
                "example_code": "$('#sortable-list').sortable();"
            },
            {
                "subtopic_name": "Accordion Widget",
                "example_code": "$('#accordion').accordion();"
            }
        ]
    },
    {
        "topic_name": "Lazy Loading Images",
        "topic_description": "Implement lazy loading of images in jQuery for improved web page performance.",
        "subtopics": [
            {
                "subtopic_name": "Lazy Load Plugin",
                "example_code": "Add a lazy load plugin to load images as they come into view."
            },
            {
                "subtopic_name": "Image Placeholder",
                "example_code": "Display a placeholder image until the actual image loads."
            }
        ]
    },
    {
        "topic_name": "Web Animation with jQuery",
        "topic_description": "Create interactive animations on web elements using jQuery for engaging user experiences.",
        "subtopics": [
            {
                "subtopic_name": "Animate Method",
                "example_code": "$('#element').animate({\n  opacity: 0.5,\n  left: '+=50px'\n}, 1000);"
            },
            {
                "subtopic_name": "Easing Effects",
                "example_code": "$('#element').animate({\n  left: '+=100px'\n}, {\n  duration: 1000,\n  easing: 'easeOutBounce'\n});"
            }
        ]
    },
    {
        "topic_name": "Handling Errors in AJAX",
        "topic_description": "Learn how to handle errors gracefully when making AJAX requests in jQuery.",
        "subtopics": [
            {
                "subtopic_name": "Error Callback",
                "example_code": "$.ajax({\n  url: 'https://api.example.com/data',\n  success: function(data) {\n    // Handle success\n  },\n  error: function(xhr, status, error) {\n    // Handle error\n  }\n});"
            },
            {
                "subtopic_name": "HTTP Status Codes",
                "example_code": "Handle different HTTP status codes (e.g., 404, 500) in the error callback."
            }
        ]
    },
    {
        "topic_name": "Data Visualization with jQuery",
        "topic_description": "Use jQuery for creating interactive charts and graphs to visualize data.",
        "subtopics": [
            {
                "subtopic_name": "Charting Libraries",
                "example_code": "Integrate jQuery charting libraries for data visualization."
            },
            {
                "subtopic_name": "Interactive Charts",
                "example_code": "Create interactive charts with tooltips and zoom features."
            }
        ]
    },
    {
        "topic_name": "Content Preloading",
        "topic_description": "Preload content and assets using jQuery for faster page rendering.",
        "subtopics": [
            {
                "subtopic_name": "Image Preloading",
                "example_code": "Preload images to reduce content loading time."
            },
            {
                "subtopic_name": "Asset Caching",
                "example_code": "Cache frequently used assets for improved performance."
            }
        ]
    },
    {
        "topic_name": "Handling Keyboard Events",
        "topic_description": "Capture and handle keyboard events in jQuery for user interactions and shortcuts.",
        "subtopics": [
            {
                "subtopic_name": "Keydown Event",
                "example_code": "$(document).keydown(function(event) {\n  if (event.which === 13) {\n    // Enter key pressed\n  }\n});"
            },
            {
                "subtopic_name": "Combination Key Shortcuts",
                "example_code": "$(document).keydown(function(event) {\n  if (event.ctrlKey && event.keyCode === 83) {\n    // Ctrl + S shortcut\n    event.preventDefault();\n  }\n});"
            }
        ]
    }
];

export default JqueryCourseData;