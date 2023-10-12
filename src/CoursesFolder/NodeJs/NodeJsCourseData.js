export var subjectName = "Node.Js"
var NodeJsCourseData = [
    {
        "topic_name": "Modules in Node.js",
        "topic_description": "Node.js uses a module system to organize code into reusable files. You can create your own modules and use built-in ones.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Module",
                "example_code": "/* mymodule.js */\n\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n\nmodule.exports = greet;"
            },
            {
                "subtopic_name": "Using a Module",
                "example_code": "const mymodule = require('./mymodule');\nconst message = mymodule('Alice');\nconsole.log(message); // Hello, Alice!"
            },
            {
                "subtopic_name": "Built-in Modules",
                "example_code": "const fs = require('fs');\nconst http = require('http');\nconst path = require('path');"
            }
        ]
    },
    {
        "topic_name": "Asynchronous Programming",
        "topic_description": "Node.js is designed for asynchronous programming using callbacks, promises, and async/await.",
        "subtopics": [
            {
                "subtopic_name": "Using Callbacks",
                "example_code": "fs.readFile('file.txt', (err, data) => {\n  if (err) throw err;\n  console.log(data.toString());\n});"
            },
            {
                "subtopic_name": "Using Promises",
                "example_code": "const readFileAsync = util.promisify(fs.readFile);\nreadFileAsync('file.txt')\n  .then(data => console.log(data.toString()))\n  .catch(err => console.error(err));"
            },
            {
                "subtopic_name": "Using async/await",
                "example_code": "const readData = async () => {\n  try {\n    const data = await readFileAsync('file.txt');\n    console.log(data.toString());\n  } catch (err) {\n    console.error(err);\n  }\n};\nreadData();"
            }
        ]
    },
    {
        "topic_name": "File System Operations",
        "topic_description": "Perform various file operations like creating, reading, writing, and deleting files using the 'fs' module.",
        "subtopics": [
            {
                "subtopic_name": "Reading a File",
                "example_code": "const fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});"
            },
            {
                "subtopic_name": "Writing to a File",
                "example_code": "const fs = require('fs');\nconst content = 'Hello, Node.js!';\nfs.writeFile('output.txt', content, (err) => {\n  if (err) throw err;\n  console.log('File saved.');\n});"
            },
            {
                "subtopic_name": "Deleting a File",
                "example_code": "const fs = require('fs');\nfs.unlink('file.txt', (err) => {\n  if (err) throw err;\n  console.log('File deleted.');\n});"
            }
        ]
    },
    {
        "topic_name": "Working with Directories",
        "topic_description": "Manipulate directories, including creating, reading, renaming, and deleting directories.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Directory",
                "example_code": "const fs = require('fs');\nfs.mkdir('mydir', (err) => {\n  if (err) throw err;\n  console.log('Directory created.');\n});"
            },
            {
                "subtopic_name": "Reading a Directory",
                "example_code": "const fs = require('fs');\nfs.readdir('mydir', (err, files) => {\n  if (err) throw err;\n  console.log('Files in directory:', files);\n});"
            },
            {
                "subtopic_name": "Renaming a Directory",
                "example_code": "const fs = require('fs');\nfs.rename('mydir', 'newdir', (err) => {\n  if (err) throw err;\n  console.log('Directory renamed.');\n});"
            }
        ]
    },
    {
        "topic_name": "File and Directory Information",
        "topic_description": "Retrieve information about files and directories, such as file size, permissions, and timestamps.",
        "subtopics": [
            {
                "subtopic_name": "File Stats",
                "example_code": "const fs = require('fs');\nfs.stat('file.txt', (err, stats) => {\n  if (err) throw err;\n  console.log('File size:', stats.size, 'bytes');\n  console.log('Is directory?', stats.isDirectory());\n  console.log('Last modified:', stats.mtime);\n});"
            },
            {
                "subtopic_name": "Directory Stats",
                "example_code": "const fs = require('fs');\nfs.stat('mydir', (err, stats) => {\n  if (err) throw err;\n  console.log('Is directory?', stats.isDirectory());\n});"
            },
            {
                "subtopic_name": "File Permissions",
                "example_code": "const fs = require('fs');\nfs.chmod('file.txt', 0o755, (err) => {\n  if (err) throw err;\n  console.log('Permissions changed.');\n});"
            }
        ]
    },
    {
        "topic_name": "HTTP Server",
        "topic_description": "Node.js can create HTTP servers for building web applications and APIs.",
        "subtopics": [
            {
                "subtopic_name": "Creating an HTTP Server",
                "example_code": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello, World!');\n});\n\nconst port = 3000;\nserver.listen(port, () => {\n  console.log(`Server running at http://localhost:${port}/`);\n});"
            },
            {
                "subtopic_name": "Handling Routes",
                "example_code": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  if (req.url === '/') {\n    res.writeHead(200, { 'Content-Type': 'text/plain' });\n    res.end('Home Page');\n  } else if (req.url === '/about') {\n    res.writeHead(200, { 'Content-Type': 'text/plain' });\n    res.end('About Page');\n  } else {\n    res.writeHead(404, { 'Content-Type': 'text/plain' });\n    res.end('Not Found');\n  }\n});"
            },
            {
                "subtopic_name": "Handling POST Requests",
                "example_code": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  if (req.method === 'POST') {\n    let body = '';\n    req.on('data', (chunk) => {\n      body += chunk;\n    });\n    req.on('end', () => {\n      console.log('Received POST data:', body);\n      res.end('Data received.');\n    });\n  }\n});"
            }
        ]
    },
    {
        "topic_name": "Express.js Framework",
        "topic_description": "Express.js is a popular Node.js framework for building web applications and APIs. It simplifies routing, middleware, and more.",
        "subtopics": [
            {
                "subtopic_name": "Installing Express.js",
                "example_code": "const express = require('express');\nconst app = express();"
            },
            {
                "subtopic_name": "Creating Routes",
                "example_code": "app.get('/', (req, res) => {\n  res.send('Home Page');\n});\n\napp.get('/about', (req, res) => {\n  res.send('About Page');\n});"
            },
            {
                "subtopic_name": "Middleware",
                "example_code": "app.use(express.json());\napp.use(express.urlencoded({ extended: true }));"
            }
        ]
    },
    {
        "topic_name": "Database Integration",
        "topic_description": "Node.js can connect to various databases such as MongoDB, MySQL, and PostgreSQL.",
        "subtopics": [
            {
                "subtopic_name": "Using MongoDB with Mongoose",
                "example_code": "const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });"
            },
            {
                "subtopic_name": "Using MySQL with Sequelize",
                "example_code": "const Sequelize = require('sequelize');\nconst sequelize = new Sequelize('database', 'username', 'password', { dialect: 'mysql' });"
            }
        ]
    },
    {
        "topic_name": "Authentication and Authorization",
        "topic_description": "Implement user authentication and authorization in Node.js applications using libraries like Passport.js.",
        "subtopics": [
            {
                "subtopic_name": "Using Passport.js",
                "example_code": "const passport = require('passport');\nconst LocalStrategy = require('passport-local').Strategy;\n\npassport.use(new LocalStrategy((username, password, done) => {\n  // Verify user credentials\n}));"
            },
            {
                "subtopic_name": "JWT Authentication",
                "example_code": "const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: 123 }, 'secretKey');"
            }
        ]
    },
    {
        "topic_name": "WebSocket Communication",
        "topic_description": "Implement real-time communication in Node.js using WebSocket libraries like Socket.io.",
        "subtopics": [
            {
                "subtopic_name": "Using Socket.io",
                "example_code": "const http = require('http');\nconst server = http.createServer(app);\nconst io = require('socket.io')(server);"
            },
            {
                "subtopic_name": "Handling WebSocket Events",
                "example_code": "io.on('connection', (socket) => {\n  console.log('A user connected');\n  socket.on('chat message', (message) => {\n    io.emit('chat message', message);\n  });\n  socket.on('disconnect', () => {\n    console.log('A user disconnected');\n  });\n});"
            }
        ]
    },
    {
        "topic_name": "RESTful APIs",
        "topic_description": "Build RESTful APIs in Node.js for creating, reading, updating, and deleting resources.",
        "subtopics": [
            {
                "subtopic_name": "Creating API Endpoints",
                "example_code": "app.get('/api/posts', (req, res) => {\n  // Retrieve and send a list of posts\n});\n\napp.post('/api/posts', (req, res) => {\n  // Create a new post\n});"
            },
            {
                "subtopic_name": "Authentication",
                "example_code": "const authenticate = (req, res, next) => {\n  // Implement authentication logic\n  next();\n};\n\napp.use('/api', authenticate);"
            },
            {
                "subtopic_name": "Validation",
                "example_code": "const validate = (req, res, next) => {\n  // Implement request validation\n  next();\n};\n\napp.use('/api', validate);"
            }
        ]
    },
    {
        "topic_name": "Error Handling",
        "topic_description": "Implement error handling strategies in Node.js applications to handle unexpected issues gracefully.",
        "subtopics": [
            {
                "subtopic_name": "Custom Error Handling Middleware",
                "example_code": "app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something went wrong!');\n});"
            },
            {
                "subtopic_name": "Handling 404 Errors",
                "example_code": "app.use((req, res) => {\n  res.status(404).send('Not Found');\n});"
            }
        ]
    },
    {
        "topic_name": "Testing Node.js Applications",
        "topic_description": "Write unit and integration tests for Node.js applications using testing frameworks like Mocha and Jest.",
        "subtopics": [
            {
                "subtopic_name": "Using Mocha",
                "example_code": "const assert = require('assert');\ndescribe('Array', () => {\n  it('should return -1 when the value is not present', () => {\n    assert.equal([1, 2, 3].indexOf(4), -1);\n  });\n});"
            },
            {
                "subtopic_name": "Using Jest",
                "example_code": "test('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});"
            }
        ]
    },
    {
        "topic_name": "Promises and Async/Await",
        "topic_description": "Learn about Promises and Async/Await in JavaScript for handling asynchronous operations effectively.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Promise",
                "example_code": "const fetchData = () => {\n  return new Promise((resolve, reject) => {\n    // Perform an async operation\n  });\n};"
            },
            {
                "subtopic_name": "Using Async/Await",
                "example_code": "const fetchData = async () => {\n  try {\n    const data = await fetchData();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n};"
            }
        ]
    },
    {
        "topic_name": "Event Emitters",
        "topic_description": "Node.js provides Event Emitters for building custom event-driven architectures.",
        "subtopics": [
            {
                "subtopic_name": "Creating an Event Emitter",
                "example_code": "const EventEmitter = require('events');\nclass MyEmitter extends EventEmitter {}\nconst myEmitter = new MyEmitter();"
            },
            {
                "subtopic_name": "Listening for Events",
                "example_code": "myEmitter.on('event', () => {\n  console.log('Event occurred');\n});"
            },
            {
                "subtopic_name": "Emitting Events",
                "example_code": "myEmitter.emit('event');"
            }
        ]
    },
    {
        "topic_name": "Child Processes",
        "topic_description": "Run child processes in Node.js to execute external commands or scripts.",
        "subtopics": [
            {
                "subtopic_name": "Using 'child_process' Module",
                "example_code": "const { exec } = require('child_process');\nexec('ls -l', (error, stdout, stderr) => {\n  if (error) {\n    console.error(`Error: ${error.message}`);\n    return;\n  }\n  if (stderr) {\n    console.error(`Stderr: ${stderr}`);\n    return;\n  }\n  console.log(`Result: ${stdout}`);\n});"
            }
        ]
    },
    {
        "topic_name": "Debugging Node.js",
        "topic_description": "Learn debugging techniques for Node.js applications using built-in and third-party tools.",
        "subtopics": [
            {
                "subtopic_name": "Using 'console' Module",
                "example_code": "console.log('Debugging message');"
            },
            {
                "subtopic_name": "Debugging with 'inspect'",
                "example_code": "node inspect myscript.js\nchrome://inspect\n// Debugging in Chrome DevTools"
            }
        ]
    },
    {
        "topic_name": "Deployment and Hosting",
        "topic_description": "Deploy Node.js applications to production servers and choose a hosting provider.",
        "subtopics": [
            {
                "subtopic_name": "Deploying on Heroku",
                "example_code": "// Install Heroku CLI\nheroku login\nheroku create\nheroku git:remote -a your-app-name\n// Deploy using Git\ngit push heroku master"
            },
            {
                "subtopic_name": "Choosing a Hosting Provider",
                "example_code": "AWS, Google Cloud, Azure, DigitalOcean, etc."
            }
        ]
    },
    {
        "topic_name": "File System (fs) Module",
        "topic_description": "The 'fs' module in Node.js provides functions for interacting with the file system, allowing you to read, write, and manipulate files and directories.",
        "subtopics": [
            {
                "subtopic_name": "Reading Files",
                "example_code": "const fs = require('fs');\n\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log(data);\n});"
            },
            {
                "subtopic_name": "Writing Files",
                "example_code": "const fs = require('fs');\n\nfs.writeFile('file.txt', 'Hello, Node.js!', (err) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log('File written successfully.');\n});"
            },
            {
                "subtopic_name": "Working with Directories",
                "example_code": "const fs = require('fs');\n\nfs.mkdir('myfolder', (err) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log('Directory created.');\n});"
            },
            {
                "subtopic_name": "File and Directory Operations",
                "example_code": "const fs = require('fs');\n\nfs.rename('oldfile.txt', 'newfile.txt', (err) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log('File renamed.');\n});"
            }
        ]
    },
    {
        "topic_name": "Event Loop",
        "topic_description": "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. The event loop is central to this architecture.",
        "subtopics": [
            {
                "subtopic_name": "Understanding the Event Loop",
                "example_code": "// Node.js event loop pseudocode\nwhile (true) {\n  if (events) {\n    executeEventHandlers();\n  }\n  if (timers) {\n    processTimers();\n  }\n}"
            },
            {
                "subtopic_name": "Event Loop Phases",
                "example_code": "1. Timers\n2. Pending Callbacks\n3. Idle, Prepare\n4. Poll\n5. Check\n6. Close Callbacks"
            },
            {
                "subtopic_name": "Callbacks and Promises",
                "example_code": "Node.js supports callbacks and Promises to handle asynchronous operations efficiently."
            }
        ]
    },
    {
        "topic_name": "Buffer",
        "topic_description": "The 'Buffer' class in Node.js is used to work with binary data directly. It is particularly useful when dealing with streams or handling binary data from files or network protocols.",
        "subtopics": [
            {
                "subtopic_name": "Creating Buffers",
                "example_code": "const buffer = Buffer.from('Hello, Node.js!');"
            },
            {
                "subtopic_name": "Working with Buffers",
                "example_code": "const buffer = Buffer.alloc(5);\nbuffer.write('Node.js');\nconsole.log(buffer.toString()); // 'Node.'"
            },
            {
                "subtopic_name": "Buffer Operations",
                "example_code": "Buffers can be sliced, copied, and concatenated to manipulate binary data."
            }
        ]
    },
    {
        "topic_name": "Streams",
        "topic_description": "Streams are a powerful feature in Node.js for handling data flow. They can be readable, writable, or duplex, and are used in scenarios like reading large files or network communication.",
        "subtopics": [
            {
                "subtopic_name": "Readable Streams",
                "example_code": "const fs = require('fs');\nconst readStream = fs.createReadStream('largefile.txt');\nreadStream.pipe(response); // Send data to an HTTP response"
            },
            {
                "subtopic_name": "Writable Streams",
                "example_code": "const fs = require('fs');\nconst writeStream = fs.createWriteStream('output.txt');\nrequest.pipe(writeStream); // Write data from an HTTP request"
            },
            {
                "subtopic_name": "Transform Streams",
                "example_code": "Streams that modify or transform data as it passes through."
            },
            {
                "subtopic_name": "Piping Streams",
                "example_code": "Stream data can be easily piped from a readable stream to a writable stream."
            }
        ]
    },
    {
        "topic_name": "NPM (Node Package Manager)",
        "topic_description": "NPM is the default package manager for Node.js. It allows you to easily manage and share JavaScript libraries and packages with the Node.js community.",
        "subtopics": [
            {
                "subtopic_name": "Installing Packages",
                "example_code": "npm install package-name"
            },
            {
                "subtopic_name": "Creating 'package.json'",
                "example_code": "npm init"
            },
            {
                "subtopic_name": "Managing Dependencies",
                "example_code": "npm install --save package-name"
            },
            {
                "subtopic_name": "Running Scripts",
                "example_code": "npm run script-name"
            }
        ]
    },
    {
        "topic_name": "Async/Await",
        "topic_description": "Async/Await is a modern way to handle asynchronous operations in Node.js, making the code more readable and maintainable.",
        "subtopics": [
            {
                "subtopic_name": "Using 'async' Functions",
                "example_code": "async function fetchData() {\n  const data = await getDataFromAPI();\n  console.log(data);\n}"
            },
            {
                "subtopic_name": "Error Handling with 'try...catch'",
                "example_code": "async function fetchData() {\n  try {\n    const data = await getDataFromAPI();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}"
            }
        ]
    },
    {
        "topic_name": "Node.js Modules",
        "topic_description": "Node.js allows you to modularize your code by using built-in or custom modules. This promotes code reusability and maintainability.",
        "subtopics": [
            {
                "subtopic_name": "Creating Custom Modules",
                "example_code": "module.exports = { myFunction };"
            },
            {
                "subtopic_name": "Importing Modules",
                "example_code": "const myModule = require('./my-module');"
            },
            {
                "subtopic_name": "Core Modules",
                "example_code": "Node.js includes many core modules for common tasks like 'http', 'fs', and 'path'."
            }
        ]
    },
    {
        "topic_name": "WebSockets",
        "topic_description": "WebSockets enable real-time, bidirectional communication between clients and servers. They are often used in applications that require instant data updates or chat functionality.",
        "subtopics": [
            {
                "subtopic_name": "Creating a WebSocket Server",
                "example_code": "const WebSocket = require('ws');\nconst wss = new WebSocket.Server({ port: 8080 });"
            },
            {
                "subtopic_name": "WebSocket Client",
                "example_code": "const WebSocket = require('ws');\nconst ws = new WebSocket('ws://server-address');"
            },
            {
                "subtopic_name": "Handling WebSocket Events",
                "example_code": "ws.on('message', (message) => {\n  console.log(`Received: ${message}`);\n});"
            }
        ]
    },
    {
        "topic_name": "Middleware",
        "topic_description": "Middleware functions in Node.js are used in web frameworks like Express.js to perform tasks such as request processing, authentication, and error handling.",
        "subtopics": [
            {
                "subtopic_name": "Using Middleware in Express.js",
                "example_code": "app.use((req, res, next) => {\n  // Middleware logic here\n  next(); // Call the next middleware or route handler\n});"
            },
            {
                "subtopic_name": "Custom Middleware",
                "example_code": "const customMiddleware = (req, res, next) => {\n  // Custom middleware logic\n  next();\n};"
            }
        ]
    },
    {
        "topic_name": "Caching",
        "topic_description": "Caching in Node.js can improve application performance by storing and reusing frequently accessed data instead of fetching it repeatedly.",
        "subtopics": [
            {
                "subtopic_name": "In-Memory Caching",
                "example_code": "const cache = new Map();\n\nfunction getData(key) {\n  if (cache.has(key)) {\n    return cache.get(key);\n  }\n  const data = fetchDataFromDatabase(key);\n  cache.set(key, data);\n  return data;\n}"
            },
            {
                "subtopic_name": "Using External Caches",
                "example_code": "Node.js applications can also use external caching systems like Redis or Memcached."
            }
        ]
    },
    {
        "topic_name": "Authentication and Authorization",
        "topic_description": "Implementing user authentication and authorization is essential for securing Node.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Passport.js",
                "example_code": "Passport.js is a popular authentication middleware for Node.js applications."
            },
            {
                "subtopic_name": "JWT (JSON Web Tokens)",
                "example_code": "JWTs are commonly used for token-based authentication and authorization."
            }
        ]
    },
    {
        "topic_name": "Testing in Node.js",
        "topic_description": "Testing is crucial for ensuring the reliability and correctness of Node.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Mocha Testing Framework",
                "example_code": "Mocha is a widely used testing framework for Node.js."
            },
            {
                "subtopic_name": "Chai Assertion Library",
                "example_code": "Chai is often used in combination with Mocha for assertions."
            },
            {
                "subtopic_name": "Testing with 'assert'",
                "example_code": "Node.js provides the built-in 'assert' module for basic assertions."
            }
        ]
    },
    {
        "topic_name": "Promises and Async/Await",
        "topic_description": "Promises and async/await are used to handle asynchronous operations in Node.js.",
        "subtopics": [
            {
                "subtopic_name": "Creating Promises",
                "example_code": "const myPromise = new Promise((resolve, reject) => {\n  // Promise logic\n});"
            },
            {
                "subtopic_name": "Using Promises",
                "example_code": "myPromise\n  .then((result) => {\n    // Handle success\n  })\n  .catch((error) => {\n    // Handle error\n  });"
            }
        ]
    },
    {
        "topic_name": "Environment Variables",
        "topic_description": "Environment variables are used to configure Node.js applications and keep sensitive information secure.",
        "subtopics": [
            {
                "subtopic_name": "Accessing Environment Variables",
                "example_code": "const apiKey = process.env.API_KEY;"
            },
            {
                "subtopic_name": "Setting Environment Variables",
                "example_code": "API_KEY=myapikey node myscript.js"
            }
        ]
    },
    {
        "topic_name": "Package.json Scripts",
        "topic_description": "The 'scripts' section in 'package.json' allows you to define custom commands for various tasks.",
        "subtopics": [
            {
                "subtopic_name": "Running Custom Scripts",
                "example_code": "npm run my-script"
            },
            {
                "subtopic_name": "Pre and Post Hooks",
                "example_code": "You can define pre and post hooks for scripts."
            }
        ]
    },
    {
        "topic_name": "Timers",
        "topic_description": "Node.js provides timer functions for scheduling code execution in the future.",
        "subtopics": [
            {
                "subtopic_name": "setTimeout",
                "example_code": "setTimeout(() => {\n  console.log('Delayed function executed.');\n}, 2000);"
            },
            {
                "subtopic_name": "setInterval",
                "example_code": "setInterval(() => {\n  console.log('Repeated function executed.');\n}, 1000);"
            }
        ]
    },
    {
        "topic_name": "Process Object",
        "topic_description": "The 'process' object in Node.js provides information about the current Node.js process and allows interaction with it.",
        "subtopics": [
            {
                "subtopic_name": "Command Line Arguments",
                "example_code": "Access command line arguments using 'process.argv'."
            },
            {
                "subtopic_name": "Exit Codes",
                "example_code": "Exit the process with a specific exit code using 'process.exit(code)'."
            }
        ]
    },
    {
        "topic_name": "Web APIs with 'http' and 'https'",
        "topic_description": "Node.js can be used to create HTTP and HTTPS servers for building web APIs.",
        "subtopics": [
            {
                "subtopic_name": "Creating an HTTP Server",
                "example_code": "const http = require('http');\nconst server = http.createServer((req, res) => {\n  // Request handling logic\n});\nserver.listen(8080);"
            },
            {
                "subtopic_name": "Creating an HTTPS Server",
                "example_code": "const https = require('https');\nconst fs = require('fs');\nconst options = {\n  key: fs.readFileSync('key.pem'),\n  cert: fs.readFileSync('cert.pem')\n};\nconst server = https.createServer(options, (req, res) => {\n  // Request handling logic\n});\nserver.listen(8443);"
            }
        ]
    },
    {
        "topic_name": "Child Processes",
        "topic_description": "Node.js can spawn child processes to execute system commands and interact with them.",
        "subtopics": [
            {
                "subtopic_name": "Spawning Child Processes",
                "example_code": "const { spawn } = require('child_process');\nconst child = spawn('ls', ['-l']);"
            },
            {
                "subtopic_name": "Interacting with Child Processes",
                "example_code": "Child processes can communicate with the parent process using stdio."
            }
        ]
    }
];

// console.log(NodeJsCourseData[0]);
export default NodeJsCourseData;
