export var subjectName = "Mongo DB"
var MongoDbData = [
    {
        "topic_name": "Introduction to MongoDB",
        "topic_description": "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is known for its scalability and high performance, making it a popular choice for modern web applications and microservices.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Database",
                "example_code": "use mydb;"
            },
            {
                "subtopic_name": "Creating a Collection",
                "example_code": "db.createCollection('mycollection');"
            },
            {
                "subtopic_name": "Inserting Documents",
                "example_code": "db.mycollection.insertOne({\n  name: 'John',\n  age: 30\n});"
            },
            {
                "subtopic_name": "Querying Documents",
                "example_code": "db.mycollection.find({ name: 'John' });"
            }
        ]
    },
    {
        "topic_name": "CRUD Operations",
        "topic_description": "MongoDB supports CRUD (Create, Read, Update, Delete) operations for managing data. You can easily create, retrieve, update, and delete documents in your collections.",
        "subtopics": [
            {
                "subtopic_name": "Inserting Documents",
                "example_code": "db.mycollection.insertOne({...});"
            },
            {
                "subtopic_name": "Querying Documents",
                "example_code": "db.mycollection.find({...});"
            },
            {
                "subtopic_name": "Updating Documents",
                "example_code": "db.mycollection.updateOne({...}, { $set: {...} });"
            },
            {
                "subtopic_name": "Deleting Documents",
                "example_code": "db.mycollection.deleteOne({...});"
            }
        ]
    },
    {
        "topic_name": "Indexing",
        "topic_description": "Indexes in MongoDB improve query performance. By creating indexes on fields that are frequently queried, you can significantly speed up data retrieval.",
        "subtopics": [
            {
                "subtopic_name": "Creating an Index",
                "example_code": "db.mycollection.createIndex({ field: 1 });"
            },
            {
                "subtopic_name": "Listing Indexes",
                "example_code": "db.mycollection.getIndexes();"
            },
            {
                "subtopic_name": "Dropping an Index",
                "example_code": "db.mycollection.dropIndex('index_name');"
            }
        ]
    },
    {
        "topic_name": "Aggregation Framework",
        "topic_description": "MongoDB's aggregation framework allows for advanced data processing and analysis. You can perform operations such as filtering, grouping, and sorting on your data.",
        "subtopics": [
            {
                "subtopic_name": "Aggregation Pipeline",
                "example_code": "db.mycollection.aggregate([\n  { $match: { field: value } },\n  { $group: { _id: '$field', total: { $sum: 1 } } }\n]);"
            },
            {
                "subtopic_name": "Aggregation Operators",
                "example_code": "db.mycollection.aggregate([\n  { $project: { field1: 1, field2: 1 } }\n]);"
            }
        ]
    },
    {
        "topic_name": "Schema Design",
        "topic_description": "MongoDB's flexible schema allows for dynamic data modeling. You can embed documents within other documents or use references to establish relationships between data.",
        "subtopics": [
            {
                "subtopic_name": "Embedding Documents",
                "example_code": "db.mycollection.insertOne({\n  name: 'John',\n  address: {\n    city: 'New York',\n    state: 'NY'\n  }\n});"
            },
            {
                "subtopic_name": "Referencing Documents",
                "example_code": "db.orders.insertOne({\n  order_id: 1,\n  customer_id: ObjectId('customer_id_here')\n});"
            }
        ]
    },
    {
        "topic_name": "Transactions",
        "topic_description": "MongoDB supports multi-document transactions for data consistency. You can start a transaction, perform multiple operations, and then commit or roll back the transaction.",
        "subtopics": [
            {
                "subtopic_name": "Starting a Transaction",
                "example_code": "session.startTransaction();"
            },
            {
                "subtopic_name": "Committing a Transaction",
                "example_code": "session.commitTransaction();"
            },
            {
                "subtopic_name": "Rolling Back a Transaction",
                "example_code": "session.abortTransaction();"
            }
        ]
    },
    {
        "topic_name": "Security",
        "topic_description": "Securing MongoDB with authentication and access control is crucial to protect your data. You can enable authentication and create users with specific privileges.",
        "subtopics": [
            {
                "subtopic_name": "Enabling Authentication",
                "example_code": "security:\n  authorization: 'enabled'"
            },
            {
                "subtopic_name": "Creating Users",
                "example_code": "db.createUser({\n  user: 'username',\n  pwd: 'password',\n  roles: ['readWrite', 'dbAdmin']\n});"
            }
        ]
    },
    {
        "topic_name": "Backup and Restore",
        "topic_description": "Regularly backing up your MongoDB data is essential for disaster recovery. You can create backups using 'mongodump' and restore them with 'mongorestore'.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Backup",
                "example_code": "mongodump --db mydb --out /path/to/backup/"
            },
            {
                "subtopic_name": "Restoring from Backup",
                "example_code": "mongorestore --db mydb /path/to/backup/mydb/"
            }
        ]
    },
    {
        "topic_name": "MongoDB Atlas",
        "topic_description": "MongoDB Atlas is a cloud database service for MongoDB. It offers managed database clusters, automated backups, and seamless scalability.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Cluster",
                "example_code": "Sign up for MongoDB Atlas and create a cluster through the web interface."
            },
            {
                "subtopic_name": "Connecting to Atlas",
                "example_code": "Use the connection string provided by Atlas to connect your application."
            }
        ]
    },
    {
        "topic_name": "Advanced Topics",
        "topic_description": "MongoDB offers advanced features like geospatial indexing, text search, and change streams. These features can enhance the functionality of your applications.",
        "subtopics": [
            {
                "subtopic_name": "Geospatial Indexing",
                "example_code": "db.locations.createIndex({ location: '2dsphere' });"
            },
            {
                "subtopic_name": "Text Search",
                "example_code": "db.articles.createIndex({ content: 'text' });"
            },
            {
                "subtopic_name": "Change Streams",
                "example_code": "const changeStream = db.collection('mycollection').watch();"
            }
        ]
    },
    {
        "topic_name": "Replication",
        "topic_description": "MongoDB replication provides high availability by maintaining multiple copies of data in a replica set. It ensures data redundancy and automatic failover in case of node failures.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Replica Set",
                "example_code": "rs.initiate();"
            },
            {
                "subtopic_name": "Adding Replica Set Members",
                "example_code": "rs.add('mongo2.example.com:27017');"
            },
            {
                "subtopic_name": "Monitoring Replica Set",
                "example_code": "rs.status();"
            }
        ]
    },
    {
        "topic_name": "Sharding",
        "topic_description": "MongoDB sharding allows horizontal scaling of data across multiple servers or clusters. It is suitable for handling large datasets and heavy workloads.",
        "subtopics": [
            {
                "subtopic_name": "Enabling Sharding",
                "example_code": "sh.enableSharding('mydb');"
            },
            {
                "subtopic_name": "Sharding a Collection",
                "example_code": "sh.shardCollection('mydb.mycollection', { shardKey: 1 });"
            },
            {
                "subtopic_name": "Balancing Shards",
                "example_code": "sh.startBalancer();"
            }
        ]
    },
    {
        "topic_name": "Backup Strategies",
        "topic_description": "MongoDB backup strategies involve regular data backups to prevent data loss and ensure business continuity. Choose the right backup method based on your needs.",
        "subtopics": [
            {
                "subtopic_name": "Full Backups",
                "example_code": "mongodump --db mydb --out /path/to/backup/"
            },
            {
                "subtopic_name": "Incremental Backups",
                "example_code": "mongodump --db mydb --collection mycollection --query '{ timestamp: { $gte: new Date() } }' --out /path/to/incremental/"
            },
            {
                "subtopic_name": "Automated Backup Solutions",
                "example_code": "Use MongoDB Atlas Backup or third-party backup solutions."
            }
        ]
    },
    {
        "topic_name": "Geospatial Queries",
        "topic_description": "MongoDB supports geospatial indexing and queries, making it ideal for location-based applications. You can find nearby locations, calculate distances, and more.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Geospatial Index",
                "example_code": "db.locations.createIndex({ location: '2dsphere' });"
            },
            {
                "subtopic_name": "Finding Nearby Locations",
                "example_code": "db.locations.find({ location: { $near: { $geometry: { type: 'Point', coordinates: [longitude, latitude] }, $maxDistance: 1000 } } });"
            },
            {
                "subtopic_name": "Calculating Distances",
                "example_code": "db.locations.aggregate([{ $geoNear: { near: { type: 'Point', coordinates: [longitude, latitude] }, distanceField: 'distance', spherical: true } }]);"
            }
        ]
    },
    {
        "topic_name": "Data Encryption",
        "topic_description": "MongoDB provides data encryption at rest and in transit to protect sensitive data. You can configure encryption options for enhanced security.",
        "subtopics": [
            {
                "subtopic_name": "Encryption at Rest",
                "example_code": "Enable encryption at rest in MongoDB configuration settings."
            },
            {
                "subtopic_name": "Encryption in Transit",
                "example_code": "Use TLS/SSL for secure communication between MongoDB clients and servers."
            },
            {
                "subtopic_name": "Key Management",
                "example_code": "Manage encryption keys with a secure key management system."
            }
        ]
    },
    {
        "topic_name": "Change Streams",
        "topic_description": "MongoDB change streams allow real-time monitoring of database changes. Applications can react to changes and trigger actions based on events.",
        "subtopics": [
            {
                "subtopic_name": "Listening to Change Events",
                "example_code": "const changeStream = db.collection('mycollection').watch();"
            },
            {
                "subtopic_name": "Filtering Change Events",
                "example_code": "const changeStream = db.collection('mycollection').watch([{ $match: { operationType: 'insert' } }]);"
            },
            {
                "subtopic_name": "Reacting to Changes",
                "example_code": "changeStream.on('change', (change) => { /* Handle change event */ });"
            }
        ]
    },
    {
        "topic_name": "MongoDB Charts",
        "topic_description": "MongoDB Charts is a visualization tool for creating charts and dashboards directly from MongoDB data. It allows users to gain insights and visualize data trends.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Chart",
                "example_code": "Use the MongoDB Charts web interface to design and create charts."
            },
            {
                "subtopic_name": "Embedding Charts",
                "example_code": "Embed charts and dashboards in your web applications for data visualization."
            },
            {
                "subtopic_name": "Data Source Configuration",
                "example_code": "Connect MongoDB Charts to your MongoDB cluster as a data source."
            }
        ]
    },
    {
        "topic_name": "MongoDB Stitch",
        "topic_description": "MongoDB Stitch is a serverless platform that simplifies backend development for MongoDB applications. It provides authentication, functions, and hosting.",
        "subtopics": [
            {
                "subtopic_name": "User Authentication",
                "example_code": "Implement user authentication and access control with MongoDB Stitch."
            },
            {
                "subtopic_name": "Serverless Functions",
                "example_code": "Create serverless functions for application logic without managing servers."
            },
            {
                "subtopic_name": "Web Hosting",
                "example_code": "Host static websites and web applications with MongoDB Stitch hosting."
            }
        ]
    },
    {
        "topic_name": "MongoDB Performance Tuning",
        "topic_description": "Optimizing MongoDB performance is crucial for applications with heavy workloads. Performance tuning involves index optimization, query profiling, and more.",
        "subtopics": [
            {
                "subtopic_name": "Index Optimization",
                "example_code": "Analyze query patterns and create appropriate indexes for faster queries."
            },
            {
                "subtopic_name": "Query Profiling",
                "example_code": "Use the MongoDB profiler to identify slow queries and optimize them."
            },
            {
                "subtopic_name": "Connection Pooling",
                "example_code": "Configure connection pooling settings to manage database connections efficiently."
            }
        ]
    },
    {
        "topic_name": "MongoDB Atlas",
        "topic_description": "MongoDB Atlas is a cloud-based database service that offers fully managed MongoDB clusters. It simplifies database deployment, scaling, and maintenance.",
        "subtopics": [
            {
                "subtopic_name": "Creating an Atlas Cluster",
                "example_code": "Sign up for MongoDB Atlas and create a new cluster with the desired specifications."
            },
            {
                "subtopic_name": "Scaling Clusters",
                "example_code": "Easily scale MongoDB Atlas clusters to handle increased workloads."
            },
            {
                "subtopic_name": "Backup and Restore",
                "example_code": "Configure automated backups and restore data with MongoDB Atlas."
            }
        ]
    },
    {
        "topic_name": "Security Best Practices",
        "topic_description": "Ensuring the security of MongoDB databases is essential to protect sensitive data. Follow security best practices to minimize vulnerabilities.",
        "subtopics": [
            {
                "subtopic_name": "Authentication and Authorization",
                "example_code": "Implement user authentication and role-based access control (RBAC)."
            },
            {
                "subtopic_name": "Network Security",
                "example_code": "Configure firewalls, VPC peering, and network encryption for added security."
            },
            {
                "subtopic_name": "Audit Logs",
                "example_code": "Enable MongoDB auditing to monitor database activities and detect security threats."
            }
        ]
    },
    {
        "topic_name": "MongoDB Aggregation",
        "topic_description": "MongoDB aggregation framework allows you to perform advanced data transformations and computations on your data. It is powerful for data analysis and reporting.",
        "subtopics": [
            {
                "subtopic_name": "Aggregation Pipeline",
                "example_code": "Use the aggregation pipeline to process and transform data with multiple stages."
            },
            {
                "subtopic_name": "Aggregation Operators",
                "example_code": "Leverage a wide range of aggregation operators for various data manipulations."
            },
            {
                "subtopic_name": "Grouping and Summarizing",
                "example_code": "Group documents by a specific field and calculate aggregated values."
            }
        ]
    },
    {
        "topic_name": "MongoDB Community Edition",
        "topic_description": "MongoDB Community Edition is the free and open-source version of MongoDB. It offers powerful database capabilities without licensing costs.",
        "subtopics": [
            {
                "subtopic_name": "Installation",
                "example_code": "Download and install MongoDB Community Edition from the official website."
            },
            {
                "subtopic_name": "Limitations",
                "example_code": "Understand the limitations of the Community Edition, such as lack of some enterprise features."
            },
            {
                "subtopic_name": "Community Support",
                "example_code": "Engage with the MongoDB community for support, resources, and discussions."
            }
        ]
    },
    {
        "topic_name": "Database Authentication",
        "topic_description": "MongoDB provides authentication mechanisms to secure access to databases. It ensures that only authorized users can perform operations.",
        "subtopics": [
            {
                "subtopic_name": "Enabling Authentication",
                "example_code": "Enable authentication in MongoDB configuration settings."
            },
            {
                "subtopic_name": "Creating User Accounts",
                "example_code": "db.createUser({ user: 'myuser', pwd: 'mypassword', roles: ['readWrite'] });"
            },
            {
                "subtopic_name": "Role-Based Access Control",
                "example_code": "Assign roles to users to control their access privileges."
            }
        ]
    },
    {
        "topic_name": "Data Modeling",
        "topic_description": "Effective data modeling is crucial for MongoDB performance. It involves designing document structures and relationships to meet application requirements.",
        "subtopics": [
            {
                "subtopic_name": "Embedding vs. Referencing",
                "example_code": "Choose between embedding related data in a single document or referencing data in separate documents."
            },
            {
                "subtopic_name": "Normalization",
                "example_code": "Apply normalization techniques to reduce data redundancy and improve query efficiency."
            },
            {
                "subtopic_name": "Schema Design Best Practices",
                "example_code": "Follow best practices for schema design to optimize performance and scalability."
            }
        ]
    },
    {
        "topic_name": "MongoDB Compass",
        "topic_description": "MongoDB Compass is a graphical user interface (GUI) for MongoDB that simplifies database management, query building, and data visualization.",
        "subtopics": [
            {
                "subtopic_name": "Installation and Setup",
                "example_code": "Download and install MongoDB Compass to interact with your MongoDB databases."
            },
            {
                "subtopic_name": "Query Builder",
                "example_code": "Use the query builder to construct complex queries visually."
            },
            {
                "subtopic_name": "Schema Analysis",
                "example_code": "Analyze the structure of your data collections and indexes."
            }
        ]
    },
    {
        "topic_name": "MongoDB Aggregation",
        "topic_description": "MongoDB aggregation framework allows you to perform advanced data transformations and computations on your data. It is powerful for data analysis and reporting.",
        "subtopics": [
            {
                "subtopic_name": "Aggregation Pipeline",
                "example_code": "Use the aggregation pipeline to process and transform data with multiple stages."
            },
            {
                "subtopic_name": "Aggregation Operators",
                "example_code": "Leverage a wide range of aggregation operators for various data manipulations."
            },
            {
                "subtopic_name": "Grouping and Summarizing",
                "example_code": "Group documents by a specific field and calculate aggregated values."
            }
        ]
    },
    {
        "topic_name": "Text Search",
        "topic_description": "MongoDB provides text indexing and search capabilities, making it suitable for applications that require full-text search functionality.",
        "subtopics": [
            {
                "subtopic_name": "Text Index Creation",
                "example_code": "Create a text index on one or more fields for text search."
            },
            {
                "subtopic_name": "Text Search Query",
                "example_code": "Perform text search queries using the $text operator."
            },
            {
                "subtopic_name": "Text Search Options",
                "example_code": "Configure text search options, such as language and case sensitivity."
            }
        ]
    },
    {
        "topic_name": "MongoDB Charts",
        "topic_description": "MongoDB Charts is a visualization tool for creating charts and dashboards directly from MongoDB data. It allows users to gain insights and visualize data trends.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Chart",
                "example_code": "Use the MongoDB Charts web interface to design and create charts."
            },
            {
                "subtopic_name": "Embedding Charts",
                "example_code": "Embed charts and dashboards in your web applications for data visualization."
            },
            {
                "subtopic_name": "Data Source Configuration",
                "example_code": "Connect MongoDB Charts to your MongoDB cluster as a data source."
            }
        ]
    },
    {
        "topic_name": "MongoDB Stitch",
        "topic_description": "MongoDB Stitch is a serverless platform that simplifies backend development for MongoDB applications. It provides authentication, functions, and hosting.",
        "subtopics": [
            {
                "subtopic_name": "User Authentication",
                "example_code": "Implement user authentication and access control with MongoDB Stitch."
            },
            {
                "subtopic_name": "Serverless Functions",
                "example_code": "Create serverless functions for application logic without managing servers."
            },
            {
                "subtopic_name": "Web Hosting",
                "example_code": "Host static websites and web applications with MongoDB Stitch hosting."
            }
        ]
    },
    {
        "topic_name": "MongoDB Performance Tuning",
        "topic_description": "Optimizing MongoDB performance is crucial for applications with heavy workloads. Performance tuning involves index optimization, query profiling, and more.",
        "subtopics": [
            {
                "subtopic_name": "Index Optimization",
                "example_code": "Analyze query patterns and create appropriate indexes for faster queries."
            },
            {
                "subtopic_name": "Query Profiling",
                "example_code": "Use the MongoDB profiler to identify slow queries and optimize them."
            },
            {
                "subtopic_name": "Connection Pooling",
                "example_code": "Configure connection pooling settings to manage database connections efficiently."
            }
        ]
    },
    {
        "topic_name": "MongoDB Atlas",
        "topic_description": "MongoDB Atlas is a cloud-based database service that offers fully managed MongoDB clusters. It simplifies database deployment, scaling, and maintenance.",
        "subtopics": [
            {
                "subtopic_name": "Creating an Atlas Cluster",
                "example_code": "Sign up for MongoDB Atlas and create a new cluster with the desired specifications."
            },
            {
                "subtopic_name": "Scaling Clusters",
                "example_code": "Easily scale MongoDB Atlas clusters to handle increased workloads."
            },
            {
                "subtopic_name": "Backup and Restore",
                "example_code": "Configure automated backups and restore data with MongoDB Atlas."
            }
        ]
    },
    {
        "topic_name": "Security Best Practices",
        "topic_description": "Ensuring the security of MongoDB databases is essential to protect sensitive data. Follow security best practices to minimize vulnerabilities.",
        "subtopics": [
            {
                "subtopic_name": "Authentication and Authorization",
                "example_code": "Implement user authentication and role-based access control (RBAC)."
            },
            {
                "subtopic_name": "Network Security",
                "example_code": "Configure firewalls, VPC peering, and network encryption for added security."
            },
            {
                "subtopic_name": "Audit Logs",
                "example_code": "Enable MongoDB auditing to monitor database activities and detect security threats."
            }
        ]
    },
    {
        "topic_name": "MongoDB Community Edition",
        "topic_description": "MongoDB Community Edition is the free and open-source version of MongoDB. It offers powerful database capabilities without licensing costs.",
        "subtopics": [
            {
                "subtopic_name": "Installation",
                "example_code": "Download and install MongoDB Community Edition from the official website."
            },
            {
                "subtopic_name": "Limitations",
                "example_code": "Understand the limitations of the Community Edition, such as lack of some enterprise features."
            },
            {
                "subtopic_name": "Community Support",
                "example_code": "Engage with the MongoDB community for support, resources, and discussions."
            }
        ]
    },
    {
        "topic_name": "MongoDB Transactions",
        "topic_description": "MongoDB supports multi-document transactions, allowing you to perform multiple operations in a single transaction for data consistency.",
        "subtopics": [
            {
                "subtopic_name": "Starting a Transaction",
                "example_code": "Start a new transaction using the 'startSession' method."
            },
            {
                "subtopic_name": "Committing a Transaction",
                "example_code": "Commit a transaction to save changes to the database."
            },
            {
                "subtopic_name": "Rolling Back a Transaction",
                "example_code": "Roll back a transaction to discard changes and maintain data consistency."
            }
        ]
    },
    {
        "topic_name": "Change Streams",
        "topic_description": "Change streams in MongoDB allow you to track real-time changes to data collections. They are useful for building reactive applications.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Change Stream",
                "example_code": "Create a change stream on a collection to monitor changes."
            },
            {
                "subtopic_name": "Listening to Changes",
                "example_code": "Listen to changes in the change stream to react to updates in real time."
            },
            {
                "subtopic_name": "Filtering Changes",
                "example_code": "Apply filters to change streams to receive updates for specific documents."
            }
        ]
    },
    {
        "topic_name": "MongoDB Text Indexes",
        "topic_description": "Text indexes in MongoDB enable text search capabilities, allowing you to search for text within documents efficiently.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Text Index",
                "example_code": "Create a text index on one or more fields for text search."
            },
            {
                "subtopic_name": "Text Search Queries",
                "example_code": "Perform text search queries using the '$text' operator."
            },
            {
                "subtopic_name": "Sorting Text Search Results",
                "example_code": "Sort text search results based on relevance."
            }
        ]
    },
    {
        "topic_name": "MongoDB Time-to-Live (TTL) Indexes",
        "topic_description": "TTL indexes in MongoDB allow you to automatically remove documents from a collection after a specified period, making them useful for managing time-sensitive data.",
        "subtopics": [
            {
                "subtopic_name": "Creating a TTL Index",
                "example_code": "Create a TTL index on a field with a specified expiration time."
            },
            {
                "subtopic_name": "Automated Document Expiration",
                "example_code": "Documents with expired TTL are automatically removed from the collection."
            },
            {
                "subtopic_name": "Use Cases",
                "example_code": "Common use cases include managing session data and logs."
            }
        ]
    },
    {
        "topic_name": "MongoDB Geospatial Indexes",
        "topic_description": "Geospatial indexes in MongoDB enable spatial queries, allowing you to perform location-based searches on geospatial data.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Geospatial Index",
                "example_code": "Create a geospatial index on a field containing location data."
            },
            {
                "subtopic_name": "Geospatial Queries",
                "example_code": "Perform queries to find nearby locations or locations within a specific area."
            },
            {
                "subtopic_name": "Geospatial Index Types",
                "example_code": "MongoDB supports 2D and 2DSphere indexes for geospatial data."
            }
        ]
    },
    {
        "topic_name": "MongoDB and Node.js",
        "topic_description": "MongoDB is commonly used with Node.js to build JavaScript-based applications. The MongoDB Node.js driver simplifies database interactions.",
        "subtopics": [
            {
                "subtopic_name": "Installing the MongoDB Node.js Driver",
                "example_code": "Use npm or yarn to install the 'mongodb' package."
            },
            {
                "subtopic_name": "Connecting to MongoDB",
                "example_code": "Establish a connection to your MongoDB database using the driver."
            },
            {
                "subtopic_name": "CRUD Operations",
                "example_code": "Perform Create, Read, Update, and Delete operations in Node.js."
            }
        ]
    },
    {
        "topic_name": "MongoDB and Express.js",
        "topic_description": "Express.js is a popular Node.js framework often used with MongoDB to build web applications. It simplifies route handling and middleware integration.",
        "subtopics": [
            {
                "subtopic_name": "Setting Up Express.js",
                "example_code": "Initialize an Express.js application and configure routes."
            },
            {
                "subtopic_name": "Connecting to MongoDB",
                "example_code": "Establish a connection to your MongoDB database in Express.js."
            },
            {
                "subtopic_name": "RESTful API Development",
                "example_code": "Create RESTful APIs for CRUD operations with MongoDB."
            }
        ]
    },
    {
        "topic_name": "MongoDB and Mongoose",
        "topic_description": "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It simplifies schema creation, validation, and query building.",
        "subtopics": [
            {
                "subtopic_name": "Installing Mongoose",
                "example_code": "Use npm or yarn to install the 'mongoose' package."
            },
            {
                "subtopic_name": "Defining Schemas",
                "example_code": "Create schemas to define the structure of your MongoDB documents."
            },
            {
                "subtopic_name": "Querying with Mongoose",
                "example_code": "Use Mongoose to perform database queries with a fluent API."
            }
        ]
    },
    {
        "topic_name": "MongoDB and Python",
        "topic_description": "Python developers can interact with MongoDB using the PyMongo library. PyMongo provides a Pythonic way to work with MongoDB databases.",
        "subtopics": [
            {
                "subtopic_name": "Installing PyMongo",
                "example_code": "Use pip to install the 'pymongo' package."
            },
            {
                "subtopic_name": "Connecting to MongoDB",
                "example_code": "Establish a connection to your MongoDB database using PyMongo."
            },
            {
                "subtopic_name": "CRUD Operations",
                "example_code": "Perform Create, Read, Update, and Delete operations in Python with PyMongo."
            }
        ]
    },
    {
        "topic_name": "MongoDB and Java",
        "topic_description": "Java developers can use the official MongoDB Java driver to interact with MongoDB databases. The driver provides asynchronous and synchronous APIs.",
        "subtopics": [
            {
                "subtopic_name": "Adding the MongoDB Java Driver",
                "example_code": "Include the MongoDB Java driver in your Java project using Maven or Gradle."
            },
            {
                "subtopic_name": "Connecting to MongoDB",
                "example_code": "Establish a connection to your MongoDB database using the Java driver."
            },
            {
                "subtopic_name": "Document Mapping with POJOs",
                "example_code": "Map MongoDB documents to Plain Old Java Objects (POJOs) for easy manipulation."
            }
        ]
    },
    {
        "topic_name": "MongoDB and C# (.NET)",
        "topic_description": "C# developers can use the MongoDB .NET Driver to work with MongoDB databases. The driver supports both synchronous and asynchronous operations.",
        "subtopics": [
            {
                "subtopic_name": "Installing the MongoDB .NET Driver",
                "example_code": "Use NuGet to install the 'MongoDB.Driver' package in your C# project."
            },
            {
                "subtopic_name": "Connecting to MongoDB",
                "example_code": "Establish a connection to your MongoDB database using the .NET Driver."
            },
            {
                "subtopic_name": "LINQ Queries",
                "example_code": "Perform LINQ queries on MongoDB collections for expressive data retrieval."
            }
        ]
    }
];

// console.log(mongodbCheatSheet[0]);
export default MongoDbData;
