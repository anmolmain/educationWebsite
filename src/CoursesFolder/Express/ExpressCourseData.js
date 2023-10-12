export var subjectName  = "Express"
const ExpressCourseData = [
    {
        "topic_name": "Setting Up Express.js",
        "topic_description": "Get started with Express.js by setting up a basic server and routing.",
        "subtopics": [
            {
                "subtopic_name": "Installing Express",
                "example_code": "const express = require('express');",
            },
            {
                "subtopic_name": "Creating an Express App",
                "example_code": "const app = express();",
            },
            {
                "subtopic_name": "Basic Server",
                "example_code": "app.listen(3000, () => {\n  console.log('Server is running on port 3000');\n});",
            },
            {
                "subtopic_name": "Routing",
                "example_code": "app.get('/', (req, res) => {\n  res.send('Hello, World!');\n});",
            }
        ]
    },
    {
        "topic_name": "Middleware in Express.js",
        "topic_description": "Learn about middleware and how it's used in Express.js.",
        "subtopics": [
            {
                "subtopic_name": "Using Middleware",
                "example_code": "app.use(express.json());",
            },
            {
                "subtopic_name": "Creating Custom Middleware",
                "example_code": "function customMiddleware(req, res, next) {\n  // Custom logic here\n  next();\n}",
            },
            {
                "subtopic_name": "Error Handling Middleware",
                "example_code": "app.use((err, req, res, next) => {\n  // Error handling logic\n});",
            }
        ]
    },
    {
        "topic_name": "Express Routing",
        "topic_description": "Explore routing techniques in Express.js for handling different HTTP requests.",
        "subtopics": [
            {
                "subtopic_name": "Route Parameters",
                "example_code": "app.get('/users/:id', (req, res) => {\n  const userId = req.params.id;\n  // Handle user ID\n});",
            },
            {
                "subtopic_name": "Route Handlers",
                "example_code": "app.post('/create', (req, res) => {\n  // Handle POST request\n});",
            },
            {
                "subtopic_name": "Route Chaining",
                "example_code": "app.route('/books')\n  .get((req, res) => {\n    // Get all books\n  })\n  .post((req, res) => {\n    // Add a new book\n  });",
            }
        ]
    },
    {
        "topic_name": "Middleware for Authentication",
        "topic_description": "Implement authentication middleware to secure Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Passport.js for Authentication",
                "example_code": "const passport = require('passport');\napp.use(passport.initialize());\n// Passport configuration",
            },
            {
                "subtopic_name": "Protecting Routes",
                "example_code": "function isAuthenticated(req, res, next) {\n  if (req.isAuthenticated()) {\n    return next();\n  }\n  res.redirect('/login');\n}",
            },
            {
                "subtopic_name": "Session Management",
                "example_code": "app.use(session({\n  secret: 'your-secret-key',\n  resave: false,\n  saveUninitialized: false\n}));",
            }
        ]
    },
    {
        "topic_name": "RESTful APIs with Express.js",
        "topic_description": "Build RESTful APIs using Express.js for data retrieval, creation, update, and deletion.",
        "subtopics": [
            {
                "subtopic_name": "HTTP Methods",
                "example_code": "app.get('/api/users', (req, res) => {\n  // Get all users\n});\napp.post('/api/users', (req, res) => {\n  // Create a user\n});",
            },
            {
                "subtopic_name": "API Versioning",
                "example_code": "app.use('/api/v1', apiRoutesV1);\napp.use('/api/v2', apiRoutesV2);",
            },
            {
                "subtopic_name": "Request Validation",
                "example_code": "const { body, validationResult } = require('express-validator');\napp.post('/api/users', [\n  body('name').notEmpty(),\n  body('email').isEmail()\n], (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n  // Create a user\n});",
            }
        ]
    },
    {
        "topic_name": "Database Integration",
        "topic_description": "Connect Express.js with databases for data storage and retrieval.",
        "subtopics": [
            {
                "subtopic_name": "Using MongoDB with Mongoose",
                "example_code": "const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true });",
            },
            {
                "subtopic_name": "SQL Databases (e.g., MySQL)",
                "example_code": "const mysql = require('mysql');\nconst connection = mysql.createConnection({\n  host: 'localhost',\n  user: 'user',\n  password: 'password',\n  database: 'mydb'\n});",
            },
            {
                "subtopic_name": "CRUD Operations",
                "example_code": "const User = require('../models/user');\napp.post('/api/users', (req, res) => {\n  const newUser = new User(req.body);\n  newUser.save((err, user) => {\n    if (err) {\n      return res.status(400).json({ error: err });\n    }\n    res.status(201).json({ user });\n  });\n});",
            }
        ]
    },
    {
        "topic_name": "File Uploads with Express.js",
        "topic_description": "Handle file uploads in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using multer Middleware",
                "example_code": "const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\napp.post('/upload', upload.single('file'), (req, res) => {\n  // Handle file upload\n});",
            },
            {
                "subtopic_name": "Handling File Storage",
                "example_code": "const storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, 'uploads/')\n  },\n  filename: (req, file, cb) => {\n    cb(null, Date.now() + '-' + file.originalname)\n  }\n});\nconst upload = multer({ storage: storage });",
            },
            {
                "subtopic_name": "Accessing Uploaded Files",
                "example_code": "app.get('/uploads/:filename', (req, res) => {\n  const { filename } = req.params;\n  res.sendFile(path.join(__dirname, 'uploads', filename));\n});",
            }
        ]
    },
    {
        "topic_name": "Authentication and Authorization",
        "topic_description": "Implement user authentication and authorization in Express.js apps.",
        "subtopics": [
            {
                "subtopic_name": "User Registration",
                "example_code": "app.post('/register', (req, res) => {\n  // User registration logic\n});",
            },
            {
                "subtopic_name": "User Login",
                "example_code": "app.post('/login', (req, res) => {\n  // User login logic\n});",
            },
            {
                "subtopic_name": "Access Control",
                "example_code": "function isAdmin(req, res, next) {\n  if (req.user && req.user.role === 'admin') {\n    return next();\n  }\n  res.status(403).send('Access denied.');\n}",
            }
        ]
    },
    {
        "topic_name": "Express.js and WebSocket",
        "topic_description": "Integrate WebSocket for real-time communication in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Socket.io",
                "example_code": "const http = require('http').createServer(app);\nconst io = require('socket.io')(http);\nio.on('connection', (socket) => {\n  console.log('A user connected');\n  // Socket.io logic\n});",
            },
            {
                "subtopic_name": "Real-Time Chat Application",
                "example_code": "// Building a real-time chat app with WebSocket\n// Includes message broadcasting and user tracking.",
            }
        ]
    },
    {
        "topic_name": "Error Handling",
        "topic_description": "Handle errors gracefully in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Global Error Handling",
                "example_code": "app.use((err, req, res, next) => {\n  // Error handling logic\n});",
            },
            {
                "subtopic_name": "Custom Error Handling",
                "example_code": "class CustomError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\napp.use((err, req, res, next) => {\n  if (err instanceof CustomError) {\n    return res.status(err.statusCode).json({ error: err.message });\n  }\n  res.status(500).json({ error: 'Internal Server Error' });\n});",
            }
        ]
    },
    {
        "topic_name": "Testing Express.js Apps",
        "topic_description": "Learn about testing techniques for Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Mocha and Chai",
                "example_code": "// Writing tests using Mocha and Chai\n// Includes unit testing and API testing.",
            },
            {
                "subtopic_name": "Supertest for API Testing",
                "example_code": "const request = require('supertest');\nconst app = require('../app');\ndescribe('API Testing', () => {\n  it('should return a 200 OK status', async () => {\n    const res = await request(app).get('/api/users');\n    expect(res.status).to.equal(200);\n  });\n});",
            }
        ]
    },
    {
        "topic_name": "Deployment and Hosting",
        "topic_description": "Deploy Express.js applications to production servers and cloud platforms.",
        "subtopics": [
            {
                "subtopic_name": "Heroku Deployment",
                "example_code": "// Deploying an Express.js app to Heroku\n// Includes setting environment variables and configuring the Heroku app.",
            },
            {
                "subtopic_name": "AWS, Azure, or GCP",
                "example_code": "// Deploying to cloud providers like AWS, Azure, or GCP\n// Includes containerization and serverless deployment.",
            }
        ]
    },
    {
        "topic_name": "Logging and Monitoring",
        "topic_description": "Implement logging and monitoring in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Winston for Logging",
                "example_code": "const winston = require('winston');\n// Winston configuration for logging",
            },
            {
                "subtopic_name": "Application Performance Monitoring",
                "example_code": "// Integrating APM tools for monitoring app performance",
            }
        ]
    },
    {
        "topic_name": "Scaling Express.js Apps",
        "topic_description": "Explore strategies for scaling Express.js applications to handle high traffic loads.",
        "subtopics": [
            {
                "subtopic_name": "Load Balancing",
                "example_code": "// Implementing load balancing using tools like Nginx or AWS Elastic Load Balancer (ELB)",
            },
            {
                "subtopic_name": "Caching Strategies",
                "example_code": "// Using caching mechanisms to improve response times",
            },
            {
                "subtopic_name": "Horizontal Scaling",
                "example_code": "// Scaling horizontally by adding more servers or containers",
            }
        ]
    },
    {
        "topic_name": "Security Best Practices",
        "topic_description": "Follow security best practices to protect Express.js applications from common vulnerabilities.",
        "subtopics": [
            {
                "subtopic_name": "Data Sanitization",
                "example_code": "// Implementing data sanitization techniques to prevent SQL injection and XSS attacks",
            },
            {
                "subtopic_name": "Authentication Security",
                "example_code": "// Security measures for user authentication",
            },
            {
                "subtopic_name": "Rate Limiting and DDoS Protection",
                "example_code": "// Protection against rate limiting and Distributed Denial of Service (DDoS) attacks",
            }
        ]
    },
    {
        "topic_name": "Continuous Integration and Deployment (CI/CD)",
        "topic_description": "Set up CI/CD pipelines to automate testing and deployment of Express.js apps.",
        "subtopics": [
            {
                "subtopic_name": "Using Jenkins or Travis CI",
                "example_code": "// Configuring CI/CD pipelines with Jenkins or Travis CI",
            },
            {
                "subtopic_name": "Automated Testing and Deployment",
                "example_code": "// Automated testing and deployment scripts",
            }
        ]
    },
    {
        "topic_name": "GraphQL with Express.js",
        "topic_description": "Integrate GraphQL for efficient data querying in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Apollo Server",
                "example_code": "// Setting up Apollo Server for GraphQL",
            },
            {
                "subtopic_name": "GraphQL Schema",
                "example_code": "// Defining GraphQL schemas and resolvers",
            },
            {
                "subtopic_name": "Querying with GraphQL",
                "example_code": "// Creating and executing GraphQL queries",
            }
        ]
    },
    {
        "topic_name": "Serverless Express.js",
        "topic_description": "Explore serverless architecture with Express.js for cost-effective and scalable applications.",
        "subtopics": [
            {
                "subtopic_name": "AWS Lambda Integration",
                "example_code": "// Deploying Express.js apps as AWS Lambda functions",
            },
            {
                "subtopic_name": "API Gateway Configuration",
                "example_code": "// Configuring AWS API Gateway for serverless APIs",
            }
        ]
    },
    {
        "topic_name": "Express.js and Docker",
        "topic_description": "Containerize Express.js applications using Docker for easy deployment and scaling.",
        "subtopics": [
            {
                "subtopic_name": "Dockerizing an Express App",
                "example_code": "// Creating a Docker image for Express.js apps",
            },
            {
                "subtopic_name": "Docker Compose for Microservices",
                "example_code": "// Managing multiple Express.js microservices with Docker Compose",
            }
        ]
    },
    {
        "topic_name": "Express.js Ecosystem",
        "topic_description": "Explore the Express.js ecosystem, including popular libraries and frameworks.",
        "subtopics": [
            {
                "subtopic_name": "Express.js Alternatives",
                "example_code": "// Exploring alternatives like Koa.js or Hapi.js",
            },
            {
                "subtopic_name": "Popular Middleware",
                "example_code": "// Using popular middleware like Morgan, Helmet, and CORS",
            },
            {
                "subtopic_name": "REST vs. GraphQL",
                "example_code": "// Comparing RESTful APIs with GraphQL in Express.js",
            }
        ]
    },
    {
        "topic_name": "Middleware Functions",
        "topic_description": "Learn about using middleware functions in Express.js to handle requests and responses.",
        "subtopics": [
            {
                "subtopic_name": "Creating Custom Middleware",
                "example_code": "const customMiddleware = (req, res, next) => {\n  // Custom middleware logic\n  next();\n};\napp.use(customMiddleware);",
            },
            {
                "subtopic_name": "Built-in Middleware",
                "example_code": "app.use(express.json());\napp.use(express.urlencoded({ extended: true }));",
            },
            {
                "subtopic_name": "Error Handling Middleware",
                "example_code": "app.use((err, req, res, next) => {\n  // Error handling middleware\n});",
            }
        ]
    },
    {
        "topic_name": "Database Integration",
        "topic_description": "Integrate databases like MongoDB, MySQL, or PostgreSQL with Express.js.",
        "subtopics": [
            {
                "subtopic_name": "MongoDB with Mongoose",
                "example_code": "const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true });",
            },
            {
                "subtopic_name": "MySQL with Sequelize",
                "example_code": "const Sequelize = require('sequelize');\nconst sequelize = new Sequelize('database', 'username', 'password', { dialect: 'mysql' });",
            },
            {
                "subtopic_name": "Data Models and Queries",
                "example_code": "// Defining models and executing queries with the chosen database",
            }
        ]
    },
    {
        "topic_name": "File Upload and Storage",
        "topic_description": "Handle file uploads and storage in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Multer Middleware",
                "example_code": "const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\napp.post('/upload', upload.single('file'), (req, res) => {\n  // File upload logic\n});",
            },
            {
                "subtopic_name": "Cloud Storage Integration",
                "example_code": "// Integrating cloud storage services like AWS S3 or Google Cloud Storage",
            },
            {
                "subtopic_name": "Accessing Uploaded Files",
                "example_code": "app.get('/uploads/:filename', (req, res) => {\n  const { filename } = req.params;\n  res.sendFile(path.join(__dirname, 'uploads', filename));\n});",
            }
        ]
    },
    {
        "topic_name": "Authentication and Authorization",
        "topic_description": "Implement user authentication and authorization in Express.js apps.",
        "subtopics": [
            {
                "subtopic_name": "User Registration",
                "example_code": "app.post('/register', (req, res) => {\n  // User registration logic\n});",
            },
            {
                "subtopic_name": "User Login",
                "example_code": "app.post('/login', (req, res) => {\n  // User login logic\n});",
            },
            {
                "subtopic_name": "Access Control",
                "example_code": "function isAdmin(req, res, next) {\n  if (req.user && req.user.role === 'admin') {\n    return next();\n  }\n  res.status(403).send('Access denied.');\n}",
            }
        ]
    },
    {
        "topic_name": "Express.js and WebSocket",
        "topic_description": "Integrate WebSocket for real-time communication in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Socket.io",
                "example_code": "const http = require('http').createServer(app);\nconst io = require('socket.io')(http);\nio.on('connection', (socket) => {\n  console.log('A user connected');\n  // Socket.io logic\n});",
            },
            {
                "subtopic_name": "Real-Time Chat Application",
                "example_code": "// Building a real-time chat app with WebSocket\n// Includes message broadcasting and user tracking.",
            }
        ]
    },
    {
        "topic_name": "Error Handling",
        "topic_description": "Handle errors gracefully in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Global Error Handling",
                "example_code": "app.use((err, req, res, next) => {\n  // Error handling logic\n});",
            },
            {
                "subtopic_name": "Custom Error Handling",
                "example_code": "class CustomError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n  }\n}\napp.use((err, req, res, next) => {\n  if (err instanceof CustomError) {\n    return res.status(err.statusCode).json({ error: err.message });\n  }\n  res.status(500).json({ error: 'Internal Server Error' });\n});",
            }
        ]
    },
    {
        "topic_name": "Testing Express.js Apps",
        "topic_description": "Learn about testing techniques for Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Mocha and Chai",
                "example_code": "// Writing tests using Mocha and Chai\n// Includes unit testing and API testing.",
            },
            {
                "subtopic_name": "Supertest for API Testing",
                "example_code": "const request = require('supertest');\nconst app = require('../app');\ndescribe('API Testing', () => {\n  it('should return a 200 OK status', async () => {\n    const res = await request(app).get('/api/users');\n    expect(res.status).to.equal(200);\n  });\n});",
            }
        ]
    },
    {
        "topic_name": "Deployment and Hosting",
        "topic_description": "Deploy Express.js applications to production servers and cloud platforms.",
        "subtopics": [
            {
                "subtopic_name": "Heroku Deployment",
                "example_code": "// Deploying an Express.js app to Heroku\n// Includes setting environment variables and configuring the Heroku app.",
            },
            {
                "subtopic_name": "AWS, Azure, or GCP",
                "example_code": "// Deploying to cloud providers like AWS, Azure, or GCP\n// Includes containerization and serverless deployment.",
            }
        ]
    },
    {
        "topic_name": "Logging and Monitoring",
        "topic_description": "Implement logging and monitoring in Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Using Winston for Logging",
                "example_code": "const winston = require('winston');\n// Winston configuration for logging",
            },
            {
                "subtopic_name": "Application Performance Monitoring",
                "example_code": "// Integrating APM tools for monitoring app performance\n// Includes metrics and error tracking.",
            }
        ]
    },
    {
        "topic_name": "Caching Strategies",
        "topic_description": "Optimize Express.js app performance with caching techniques.",
        "subtopics": [
            {
                "subtopic_name": "In-Memory Caching",
                "example_code": "// Implementing in-memory caching with libraries like 'memory-cache'",
            },
            {
                "subtopic_name": "CDN Integration",
                "example_code": "// Offloading content to a Content Delivery Network (CDN)",
            }
        ]
    },
    {
        "topic_name": "Scaling Express.js Apps",
        "topic_description": "Explore strategies for scaling Express.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Load Balancing",
                "example_code": "// Implementing load balancing for handling increased traffic",
            },
            {
                "subtopic_name": "Microservices Architecture",
                "example_code": "// Breaking down monolithic apps into microservices for scalability",
            }
        ]
    },
    {
        "topic_name": "Serverless Express.js",
        "topic_description": "Explore serverless architecture with Express.js for cost-effective and scalable applications.",
        "subtopics": [
            {
                "subtopic_name": "AWS Lambda Integration",
                "example_code": "// Deploying Express.js apps as AWS Lambda functions",
            },
            {
                "subtopic_name": "API Gateway Configuration",
                "example_code": "// Configuring AWS API Gateway for serverless APIs",
            }
        ]
    },
    {
        "topic_name": "Express.js and Docker",
        "topic_description": "Containerize Express.js applications using Docker for easy deployment and scaling.",
        "subtopics": [
            {
                "subtopic_name": "Dockerizing an Express App",
                "example_code": "// Creating a Docker image for Express.js apps",
            },
            {
                "subtopic_name": "Docker Compose for Microservices",
                "example_code": "// Managing multiple Express.js microservices with Docker Compose",
            }
        ]
    },
    {
        "topic_name": "Express.js Ecosystem",
        "topic_description": "Explore the Express.js ecosystem, including popular libraries and frameworks.",
        "subtopics": [
            {
                "subtopic_name": "Express.js Alternatives",
                "example_code": "// Exploring alternatives like Koa.js or Hapi.js",
            },
            {
                "subtopic_name": "Popular Middleware",
                "example_code": "// Using popular middleware like Morgan, Helmet, and CORS",
            },
            {
                "subtopic_name": "REST vs. GraphQL",
                "example_code": "// Comparing RESTful APIs with GraphQL in Express.js",
            }
        ]
    },
    {
        "topic_name": "Express.js and Web Security",
        "topic_description": "Implement security practices and protect Express.js applications from common vulnerabilities.",
        "subtopics": [
            {
                "subtopic_name": "Cross-Site Scripting (XSS) Prevention",
                "example_code": "// Implementing XSS prevention techniques",
            },
            {
                "subtopic_name": "SQL Injection Prevention",
                "example_code": "// Protecting against SQL injection attacks",
            },
            {
                "subtopic_name": "Authentication Best Practices",
                "example_code": "// Implementing secure authentication methods",
            }
        ]
    },
    {
        "topic_name": "Express.js and GraphQL",
        "topic_description": "Integrate GraphQL with Express.js to create efficient and flexible APIs.",
        "subtopics": [
            {
                "subtopic_name": "Setting Up GraphQL Server",
                "example_code": "// Setting up an Express.js server with GraphQL",
            },
            {
                "subtopic_name": "Defining GraphQL Schemas",
                "example_code": "// Defining GraphQL schemas and resolvers",
            },
            {
                "subtopic_name": "Querying with GraphQL",
                "example_code": "// Executing GraphQL queries and mutations",
            }
        ]
    }
];

//   console.log(ExpressCourseData);
export default ExpressCourseData;
