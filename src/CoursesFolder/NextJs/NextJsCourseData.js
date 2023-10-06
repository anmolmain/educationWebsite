const NextjsCourseData = [
    {
        "topic_name": "Next.js Overview",
        "topic_description": "Next.js is a popular React framework for building server-rendered React applications. It provides features like server-side rendering, routing, and automatic code splitting.",
        "subtopics": [
            {
                "subtopic_name": "Installation",
                "example_code": "npx create-next-app my-nextjs-app"
            },
            {
                "subtopic_name": "Folder Structure",
                "example_code": "pages/  // Route pages\npublic/  // Static files\nstyles/  // Global styles\ncomponents/  // Reusable components"
            },
            {
                "subtopic_name": "Routing",
                "example_code": "<Link href=\"/about\"><a>About</a></Link>"
            },
            {
                "subtopic_name": "Fetching Data",
                "example_code": "export async function getServerSideProps(context) {\n  // Fetch data from an API or database\n  const data = await fetchData();\n  return {\n    props: { data },\n  };\n}"
            }
        ]
    },
    {
        "topic_name": "Pages and Routing",
        "topic_description": "Next.js uses the 'pages' directory for routing. Each file in 'pages' becomes a route, and dynamic routes can be created using square brackets.",
        "subtopics": [
            {
                "subtopic_name": "Creating Pages",
                "example_code": "pages/index.js  // The default route\npages/about.js  // The '/about' route\npages/[slug].js  // Dynamic route"
            },
            {
                "subtopic_name": "Nested Routes",
                "example_code": "pages/blog/index.js  // Nested route for '/blog'\npages/blog/[id].js  // Dynamic route for '/blog/:id'"
            },
            {
                "subtopic_name": "Link Component",
                "example_code": "<Link href=\"/about\"><a>About</a></Link>"
            },
            {
                "subtopic_name": "Programmatic Navigation",
                "example_code": "import { useRouter } from 'next/router';\nrouter.push('/about');"
            }
        ]
    },
    {
        "topic_name": "Data Fetching",
        "topic_description": "Next.js supports various methods for fetching data, including getStaticProps, getServerSideProps, and getInitialProps, depending on your use case.",
        "subtopics": [
            {
                "subtopic_name": "getStaticProps",
                "example_code": "export async function getStaticProps(context) {\n  // Fetch data for static generation\n  const data = await fetchData();\n  return {\n    props: { data },\n  };\n}"
            },
            {
                "subtopic_name": "getServerSideProps",
                "example_code": "export async function getServerSideProps(context) {\n  // Fetch data on each request\n  const data = await fetchData();\n  return {\n    props: { data },\n  };\n}"
            },
            {
                "subtopic_name": "getInitialProps",
                "example_code": "import fetch from 'isomorphic-unfetch';\n\nMyPage.getInitialProps = async ({ req }) => {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { data };\n};"
            }
        ]
    },
    {
        "topic_name": "Dynamic Imports",
        "topic_description": "Next.js supports dynamic imports for code splitting, allowing you to load components or modules only when they are needed.",
        "subtopics": [
            {
                "subtopic_name": "Importing Modules",
                "example_code": "import dynamic from 'next/dynamic';\nconst DynamicComponent = dynamic(() => import('../components/DynamicComponent'));\n\nfunction MyPage() {\n  return <DynamicComponent />;\n}"
            },
            {
                "subtopic_name": "Loading Indicators",
                "example_code": "import dynamic from 'next/dynamic';\nconst Loading = () => <p>Loading...</p>;\nconst DynamicComponentWithLoading = dynamic(() => import('../components/DynamicComponent'), { loading: Loading });"
            }
        ]
    },
    {
        "topic_name": "Layouts and Components",
        "topic_description": "Next.js allows you to create reusable layout components that can be shared across multiple pages for consistent styling and structure.",
        "subtopics": [
            {
                "subtopic_name": "Creating Layouts",
                "example_code": "components/Layout.js\n\nfunction Layout({ children }) {\n  return (\n    <div>\n      <Header />\n      {children}\n      <Footer />\n    </div>\n  );\n}"
            },
            {
                "subtopic_name": "Using Layouts",
                "example_code": "pages/index.js\n\nimport Layout from '../components/Layout';\n\nfunction HomePage() {\n  return (\n    <Layout>\n      <h1>Welcome to Next.js</h1>\n    </Layout>\n  );\n}"
            },
            {
                "subtopic_name": "Shared Components",
                "example_code": "components/Button.js\n\nfunction Button({ text }) {\n  return <button>{text}</button>;\n}\n\nexport default Button;"
            },
            {
                "subtopic_name": "Importing Shared Components",
                "example_code": "pages/index.js\n\nimport Button from '../components/Button';\n\nfunction HomePage() {\n  return <Button text=\"Click Me\" />;\n}"
            }
        ]
    },
    {
        "topic_name": "API Routes",
        "topic_description": "Next.js allows you to create API routes as serverless functions, enabling you to build backend functionality within your Next.js app.",
        "subtopics": [
            {
                "subtopic_name": "Creating API Routes",
                "example_code": "pages/api/my-api.js\n\nexport default (req, res) => {\n  const data = { message: 'Hello, API!' };\n  res.status(200).json(data);\n};"
            },
            {
                "subtopic_name": "Fetching from API Routes",
                "example_code": "components/MyComponent.js\n\nimport { useEffect, useState } from 'react';\n\nfunction MyComponent() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch('/api/my-api')\n      .then((res) => res.json())\n      .then((result) => setData(result));\n  }, []);\n\n  return <div>{data ? data.message : 'Loading...'}</div>;\n}"
            }
        ]
    },
    {
        "topic_name": "Authentication",
        "topic_description": "Implementing authentication in Next.js can be done using various strategies, including JSON Web Tokens (JWT) and third-party libraries.",
        "subtopics": [
            {
                "subtopic_name": "JWT Authentication",
                "example_code": "import jwt from 'jsonwebtoken';\n\n// Generate a JWT token\nconst token = jwt.sign({ userId: '123' }, 'secret-key', { expiresIn: '1h' });\n\n// Verify a JWT token\nconst decoded = jwt.verify(token, 'secret-key');"
            },
            {
                "subtopic_name": "Third-Party Libraries",
                "example_code": "import { useAuth0 } from '@auth0/auth0-react';\n\nfunction Profile() {\n  const { user, isAuthenticated } = useAuth0();\n  return isAuthenticated ? <div>Welcome, {user.name}!</div> : null;\n}"
            }
        ]
    },
    {
        "topic_name": "Styling",
        "topic_description": "Styling in Next.js can be achieved using various methods, including CSS, CSS Modules, and styled-components.",
        "subtopics": [
            {
                "subtopic_name": "CSS Stylesheets",
                "example_code": "import './MyComponent.css';\n\nfunction MyComponent() {\n  return <div className=\"my-component\">Styled with CSS</div>;\n}"
            },
            {
                "subtopic_name": "CSS Modules",
                "example_code": "import styles from './MyComponent.module.css';\n\nfunction MyComponent() {\n  return <div className={styles.myComponent}>Styled with CSS Modules</div>;\n}"
            },
            {
                "subtopic_name": "styled-components",
                "example_code": "import styled from 'styled-components';\n\nconst Wrapper = styled.div\`\n  background-color: lightgray;\n\`;\n\nfunction MyComponent() {\n  return <Wrapper>Styled with styled-components</Wrapper>;\n}"
            }
        ]
    },
    {
        "topic_name": "Error Handling",
        "topic_description": "Next.js provides error handling capabilities for both client-side and server-side errors to maintain a robust application.",
        "subtopics": [
            {
                "subtopic_name": "Client-Side Errors",
                "example_code": "import { useRouter } from 'next/router';\n\nfunction MyPage() {\n  const router = useRouter();\n\n  const handleButtonClick = () => {\n    try {\n      // Code that may throw an error\n    } catch (error) {\n      router.push('/error');\n    }\n  };\n\n  return <button onClick={handleButtonClick}>Click Me</button>;\n}"
            },
            {
                "subtopic_name": "Server-Side Errors",
                "example_code": "export default function handler(req, res) {\n  try {\n    // Code that may throw an error\n  } catch (error) {\n    console.error(error);\n    res.status(500).send('Something went wrong!');\n  }\n}"
            }
        ]
    },
    {
        "topic_name": "Testing",
        "topic_description": "Testing is crucial for maintaining a healthy Next.js application. Libraries like Jest and Testing Library can be used for writing tests.",
        "subtopics": [
            {
                "subtopic_name": "Jest and Testing Library Setup",
                "example_code": "npm install --save-dev jest @testing-library/react @testing-library/jest-dom"
            },
            {
                "subtopic_name": "Component Testing",
                "example_code": "import { render, screen } from '@testing-library/react';\nimport MyComponent from './MyComponent';\n\ntest('renders the component', () => {\n  render(<MyComponent />);\n  const element = screen.getByText('Hello, Next.js!');\n  expect(element).toBeInTheDocument();\n});"
            }
        ]
    },
    {
        "topic_name": "Error Pages",
        "topic_description": "Custom error pages can be created in Next.js to handle different types of errors gracefully.",
        "subtopics": [
            {
                "subtopic_name": "404 Page",
                "example_code": "pages/404.js\n\nfunction Custom404() {\n  return <h1>404 - Page Not Found</h1>;\n}\n\nexport default Custom404;"
            },
            {
                "subtopic_name": "Other Error Pages",
                "example_code": "pages/500.js\n\nfunction Custom500() {\n  return <h1>500 - Server Error</h1>;\n}\n\nexport default Custom500;"
            }
        ]
    },
    {
        "topic_name": "Environment Variables",
        "topic_description": "Sensitive data and configuration can be stored in environment variables for security and flexibility.",
        "subtopics": [
            {
                "subtopic_name": "Accessing Environment Variables",
                "example_code": "const apiKey = process.env.API_KEY;\nconsole.log(apiKey);"
            },
            {
                "subtopic_name": "Using .env Files",
                "example_code": "Create a .env file and add variables:\nAPI_KEY=your-api-key\n\nThen, use a package like 'dotenv' to load them."
            }
        ]
    },
    {
        "topic_name": "Internationalization (i18n)",
        "topic_description": "Next.js supports internationalization to create multilingual applications.",
        "subtopics": [
            {
                "subtopic_name": "Using 'next-i18next'",
                "example_code": "npm install next-i18next i18next\n\nConfigure i18n and translation files."
            },
            {
                "subtopic_name": "Switching Languages",
                "example_code": "import { useTranslation } from 'next-i18next';\n\nfunction MyComponent() {\n  const { t } = useTranslation('common');\n  return <p>{t('hello')}</p>;\n}"
            }
        ]
    },
    {
        "topic_name": "Middleware",
        "topic_description": "Middleware functions can be used to customize the behavior of Next.js routes.",
        "subtopics": [
            {
                "subtopic_name": "Creating Middleware",
                "example_code": "function middleware(req, res, next) {\n  // Perform actions before reaching the route\n  next();\n}"
            },
            {
                "subtopic_name": "Using Middleware",
                "example_code": "import { applyMiddleware } from 'next-middleware';\n\nexport default applyMiddleware(middleware, handler);"
            }
        ]
    },
    {
        "topic_name": "Webpack Configuration",
        "topic_description": "Customizing Webpack configuration in Next.js for advanced use cases.",
        "subtopics": [
            {
                "subtopic_name": "Custom Webpack Config",
                "example_code": "const withCustomWebpack = require('next-compose-plugins')\nconst withBundleAnalyzer = require('@next/bundle-analyzer')\n\nmodule.exports = withCustomWebpack(withBundleAnalyzer({\n  webpack: (config, options) => {\n    // Customize Webpack configuration\n    return config;\n  },\n}));"
            },
            {
                "subtopic_name": "Using Plugins",
                "example_code": "Install and use plugins to modify the Webpack configuration."
            }
        ]
    },
    {
        "topic_name": "Serverless Deployment",
        "topic_description": "Next.js applications can be deployed to serverless platforms for scalability and cost-effectiveness.",
        "subtopics": [
            {
                "subtopic_name": "Vercel Deployment",
                "example_code": "Vercel offers seamless deployment for Next.js apps with automatic serverless setup."
            },
            {
                "subtopic_name": "AWS Lambda",
                "example_code": "Host Next.js apps on AWS Lambda using services like AWS API Gateway."
            }
        ]
    },
    {
        "topic_name": "Authentication Strategies",
        "topic_description": "Implementing authentication using various strategies like OAuth and JWT.",
        "subtopics": [
            {
                "subtopic_name": "OAuth with NextAuth.js",
                "example_code": "NextAuth.js simplifies OAuth and authentication setup in Next.js apps."
            },
            {
                "subtopic_name": "JWT Authentication",
                "example_code": "Implement JWT-based authentication for secure user sessions."
            }
        ]
    },
    {
        "topic_name": "Webhooks",
        "topic_description": "Webhooks allow your application to react to events on external services.",
        "subtopics": [
            {
                "subtopic_name": "Creating Webhooks",
                "example_code": "Set up webhooks to listen for events and trigger actions."
            },
            {
                "subtopic_name": "Handling Webhooks",
                "example_code": "Implement webhook handlers to process incoming data."
            }
        ]
    },
    {
        "topic_name": "Optimizing Performance",
        "topic_description": "Improving the performance of your Next.js application.",
        "subtopics": [
            {
                "subtopic_name": "Image Optimization",
                "example_code": "Use the 'next/image' component for optimized image loading."
            },
            {
                "subtopic_name": "Code Splitting",
                "example_code": "Split your code into smaller chunks for faster initial load times."
            }
        ]
    },
    {
        "topic_name": "Real-time Updates",
        "topic_description": "Implementing real-time features using technologies like WebSockets or server-sent events (SSE).",
        "subtopics": [
            {
                "subtopic_name": "WebSockets",
                "example_code": "Integrate WebSockets for bidirectional real-time communication."
            },
            {
                "subtopic_name": "Server-Sent Events",
                "example_code": "Use SSE to send updates from the server to the client."
            }
        ]
    },
    {
        "topic_name": "Content Management Systems (CMS)",
        "topic_description": "Integrating CMS platforms like WordPress or headless CMS systems.",
        "subtopics": [
            {
                "subtopic_name": "WordPress Integration",
                "example_code": "Use the 'wpapi' package to fetch data from a WordPress site."
            },
            {
                "subtopic_name": "Headless CMS",
                "example_code": "Connect Next.js to a headless CMS like Contentful or Strapi."
            }
        ]
    },
    {
        "topic_name": "Authentication and Authorization",
        "topic_description": "Implementing user authentication and authorization in Next.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Passport.js Integration",
                "example_code": "Integrate Passport.js for various authentication strategies."
            },
            {
                "subtopic_name": "Role-Based Access Control",
                "example_code": "Implement role-based access control (RBAC) for authorization."
            }
        ]
    },
    {
        "topic_name": "Database Integration",
        "topic_description": "Connecting Next.js applications to databases for data storage and retrieval.",
        "subtopics": [
            {
                "subtopic_name": "MongoDB",
                "example_code": "Use the 'mongoose' library to interact with MongoDB."
            },
            {
                "subtopic_name": "MySQL",
                "example_code": "Connect Next.js to MySQL databases using 'mysql2'."
            }
        ]
    },
    {
        "topic_name": "Server-Side Rendering (SSR)",
        "topic_description": "Utilizing server-side rendering for improved SEO and performance.",
        "subtopics": [
            {
                "subtopic_name": "SSR with Data Fetching",
                "example_code": "Fetch data on the server side and pass it to components."
            },
            {
                "subtopic_name": "Static Site Generation (SSG)",
                "example_code": "Generate static pages at build time for optimal performance."
            }
        ]
    },
    {
        "topic_name": "Testing and Quality Assurance",
        "topic_description": "Ensuring the quality and reliability of Next.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Unit Testing",
                "example_code": "Write unit tests using libraries like 'Jest' and 'React Testing Library'."
            },
            {
                "subtopic_name": "End-to-End (E2E) Testing",
                "example_code": "Implement E2E tests with tools like 'Cypress' or 'Puppeteer'."
            }
        ]
    },
    {
        "topic_name": "SEO Optimization",
        "topic_description": "Optimizing Next.js applications for search engine visibility.",
        "subtopics": [
            {
                "subtopic_name": "Meta Tags and SEO Components",
                "example_code": "Create SEO components to set meta tags and titles."
            },
            {
                "subtopic_name": "Sitemap Generation",
                "example_code": "Generate sitemaps for improved search engine indexing."
            }
        ]
    },
    {
        "topic_name": "Web Accessibility (a11y)",
        "topic_description": "Ensuring web accessibility standards are met for all users.",
        "subtopics": [
            {
                "subtopic_name": "Screen Reader Support",
                "example_code": "Test and enhance screen reader compatibility."
            },
            {
                "subtopic_name": "Keyboard Navigation",
                "example_code": "Ensure keyboard navigation is functional and intuitive."
            }
        ]
    },
    {
        "topic_name": "Error Handling and Logging",
        "topic_description": "Implementing error handling strategies and logging for debugging.",
        "subtopics": [
            {
                "subtopic_name": "Error Boundary",
                "example_code": "Wrap components with error boundaries for graceful error handling."
            },
            {
                "subtopic_name": "Logging Libraries",
                "example_code": "Use logging libraries like 'Winston' or 'Bunyan' for detailed logs."
            }
        ]
    },
    {
        "topic_name": "Progressive Web Apps (PWAs)",
        "topic_description": "Turning Next.js apps into Progressive Web Apps for offline support and performance improvements.",
        "subtopics": [
            {
                "subtopic_name": "Service Workers",
                "example_code": "Implement service workers for caching and offline capabilities."
            },
            {
                "subtopic_name": "Installable PWA",
                "example_code": "Make your app installable on users' devices."
            }
        ]
    },
    {
        "topic_name": "Deployment Strategies",
        "topic_description": "Choosing the right deployment strategy for Next.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Serverless Deployment",
                "example_code": "Deploy to serverless platforms like Vercel or Netlify."
            },
            {
                "subtopic_name": "Docker Containers",
                "example_code": "Containerize your Next.js app for deployment in Docker containers."
            }
        ]
    },
    {
        "topic_name": "Caching and CDN Integration",
        "topic_description": "Implementing caching strategies and utilizing CDNs for content delivery.",
        "subtopics": [
            {
                "subtopic_name": "Client-Side Caching",
                "example_code": "Leverage client-side caching with libraries like 'swr'."
            },
            {
                "subtopic_name": "CDN Integration",
                "example_code": "Integrate a Content Delivery Network for optimized content delivery."
            }
        ]
    },
    {
        "topic_name": "Loading and Manipulating 3D Text",
        "topic_description": "Learn how to load and manipulate 3D text objects in Three.js for adding text content to your 3D scenes.",
        "subtopics": [
            {
                "subtopic_name": "Loading 3D Text Models",
                "example_code": `
    // Load 3D text models or fonts for creating 3D text
    // Use TextGeometry or TextBufferGeometry to generate 3D text geometry
    `
            },
            {
                "subtopic_name": "Customizing Text Appearance",
                "example_code": `
    // Customize the appearance of 3D text using materials and textures
    // Adjust text color, font size, and extrusion depth
    `
            },
            {
                "subtopic_name": "Animating 3D Text",
                "example_code": `
    // Animate 3D text objects using keyframes or scripts
    // Create dynamic and engaging text animations
    `
            }
        ]
    },
    {
        "topic_name": "Camera Controls",
        "topic_description": "Implement camera controls for user navigation within 3D scenes.",
        "subtopics": [
            {
                "subtopic_name": "Orbit Controls",
                "example_code": `
    // Implement orbit controls to allow users to orbit around a target
    // Enable panning, zooming, and rotation interactions
    `
            },
            {
                "subtopic_name": "First-Person Controls",
                "example_code": `
    // Create first-person camera controls for immersive experiences
    // Capture mouse and keyboard input for movement and look controls
    `
            },
            {
                "subtopic_name": "Fly Controls",
                "example_code": `
    // Implement fly controls for a flying camera experience
    // Enable navigation through 3D space with smooth movements
    `
            }
        ]
    },
    {
        "topic_name": "VR and AR Interaction",
        "topic_description": "Explore interaction techniques in virtual reality (VR) and augmented reality (AR) using Three.js.",
        "subtopics": [
            {
                "subtopic_name": "VR Hand Tracking",
                "example_code": `
    // Implement VR hand tracking using controllers or hand-tracking devices
    // Enable hand gestures and interactions in VR environments
    `
            },
            {
                "subtopic_name": "AR Marker-Based Tracking",
                "example_code": `
    // Use AR markers for object tracking and interaction in AR scenes
    // Recognize and respond to marker patterns in real-world environments
    `
            },
            {
                "subtopic_name": "VR and AR UI Elements",
                "example_code": `
    // Create user interface (UI) elements and menus in VR and AR
    // Design interactive menus and UI elements in 3D space
    `
            }
        ]
    },
    {
        "topic_name": "Advanced Physics Simulations",
        "topic_description": "Take physics simulations to the next level with advanced features and interactions.",
        "subtopics": [
            {
                "subtopic_name": "Rigid Body Dynamics",
                "example_code": `
    // Simulate rigid body dynamics for realistic object interactions
    // Create objects with mass, collision shapes, and constraints
    `
            },
            {
                "subtopic_name": "Cloth and Soft Bodies",
                "example_code": `
    // Simulate cloth and soft bodies with dynamic behavior
    // Achieve realistic cloth movements and deformations
    `
            },
            {
                "subtopic_name": "Fluid Simulation",
                "example_code": `
    // Implement fluid simulations for liquids and gases
    // Simulate fluid behavior with particle-based or grid-based methods
    `
            }
        ]
    },
    {
        "topic_name": "Real-Time Reflections",
        "topic_description": "Add real-time reflections to objects and scenes for increased realism.",
        "subtopics": [
            {
                "subtopic_name": "Screen Space Reflections (SSR)",
                "example_code": `
    // Implement screen space reflections (SSR) for real-time reflections
    // Render reflections based on screen-space information
    `
            },
            {
                "subtopic_name": "Cube Mapping",
                "example_code": `
    // Use cube mapping to generate reflections for objects
    // Apply cube maps to materials for reflective surfaces
    `
            },
            {
                "subtopic_name": "Dynamic Reflection Probes",
                "example_code": `
    // Create dynamic reflection probes for accurate and dynamic reflections
    // Improve reflection quality in changing environments
    `
            }
        ]
    },
    {
        "topic_name": "Multiplayer 3D Experiences",
        "topic_description": "Build multiplayer 3D experiences and online games using Three.js and networking libraries.",
        "subtopics": [
            {
                "subtopic_name": "Network Integration",
                "example_code": `
    // Integrate networking libraries (e.g., Socket.io) for multiplayer support
    // Synchronize object states and player actions across clients
    `
            },
            {
                "subtopic_name": "Real-Time Collaboration",
                "example_code": `
    // Create collaborative 3D environments for real-time teamwork
    // Implement shared object interactions and communication
    `
            },
            {
                "subtopic_name": "Leaderboards and Scoring",
                "example_code": `
    // Implement leaderboards and scoring systems for online games
    // Track and display player scores and achievements
    `
            }
        ]
    },
    {
        "topic_name": "Terrain Generation",
        "topic_description": "Generate and render realistic terrains for outdoor and landscape scenes.",
        "subtopics": [
            {
                "subtopic_name": "Heightmaps",
                "example_code": `
    // Use heightmaps to define terrain elevation data
    // Generate terrains with varying heights and features
    `
            },
            {
                "subtopic_name": "Terrain Texturing",
                "example_code": `
    // Apply textures to terrain for ground cover and details
    // Blend textures based on terrain height and slope
    `
            },
            {
                "subtopic_name": "Procedural Terrain Generation",
                "example_code": `
    // Generate terrains procedurally using algorithms (e.g., Perlin noise)
    // Create vast and diverse terrains without manual modeling
    `
            }
        ]
    },
    {
        "topic_name": "Interactive 3D Widgets",
        "topic_description": "Design and implement interactive 3D widgets for user interface elements in 3D scenes.",
        "subtopics": [
            {
                "subtopic_name": "3D Buttons and Controls",
                "example_code": `
    // Create 3D buttons, sliders, and controls for user interactions
    // Design interactive elements for 3D applications
    `
            },
            {
                "subtopic_name": "HUD (Heads-Up Display)",
                "example_code": `
    // Implement HUD elements for displaying information in 3D scenes
    // Overlay UI elements in the user's field of view
    `
            },
            {
                "subtopic_name": "3D Object Manipulation Handles",
                "example_code": `
    // Design manipulation handles for rotating, scaling, and moving objects
    // Allow users to interact with objects through handles
    `
            }
        ]
    },
    {
        "topic_name": "Realistic Sky and Atmosphere",
        "topic_description": "Enhance the visual quality of your 3D scenes with realistic sky and atmospheric effects.",
        "subtopics": [
            {
                "subtopic_name": "Day-Night Cycle",
                "example_code": `
    // Create a dynamic day-night cycle with changing lighting and sky appearance
    // Simulate the passage of time in your 3D scenes
    `
            },
            {
                "subtopic_name": "Atmospheric Scattering",
                "example_code": `
    // Implement atmospheric scattering for realistic sky appearance
    // Achieve realistic colors and lighting in the sky
    `
            },
            {
                "subtopic_name": "Weather Effects",
                "example_code": `
    // Add weather effects such as clouds, rain, and fog to your scenes
    // Create immersive and dynamic outdoor environments
    `
            }
        ]
    },
    {
        "topic_name": "Optimizing 3D Models",
        "topic_description": "Optimize 3D models and assets for improved performance and rendering.",
        "subtopics": [
            {
                "subtopic_name": "LOD (Level of Detail)",
                "example_code": `
    // Implement level of detail (LOD) techniques for varying model complexity
    // Load lower-poly models at a distance to improve performance
    `
            },
            {
                "subtopic_name": "Texture Compression",
                "example_code": `
    // Compress textures to reduce memory usage and load times
    // Use texture formats like DDS, WebP, or Basis Universal
    `
            },
            {
                "subtopic_name": "Geometry Instancing",
                "example_code": `
    // Use geometry instancing to render multiple instances of the same model efficiently
    // Optimize rendering for objects with repetitive geometry
    `
            }
        ]
    },
    {
        "topic_name": "3D Audio and Spatial Sound",
        "topic_description": "Enhance 3D experiences with spatial audio and realistic soundscapes.",
        "subtopics": [
            {
                "subtopic_name": "Positional Audio",
                "example_code": `
    // Implement positional audio for 3D sound sources
    // Simulate sound direction and attenuation based on object position
    `
            },
            {
                "subtopic_name": "Ambisonic Audio",
                "example_code": `
    // Use ambisonic audio for immersive 360-degree soundscapes
    // Create rich and dynamic audio environments
    `
            },
            {
                "subtopic_name": "Interactive Sound Triggers",
                "example_code": `
    // Trigger sound effects and music based on user interactions or events
    // Add audio feedback and ambiance to your 3D scenes
    `
            }
        ]
    },
    {
        "topic_name": "Mobile and WebXR",
        "topic_description": "Optimize Three.js applications for mobile devices and WebXR experiences.",
        "subtopics": [
            {
                "subtopic_name": "Mobile Touch Controls",
                "example_code": `
    // Implement touch controls for mobile devices
    // Enable touch-based interactions and gestures
    `
            },
            {
                "subtopic_name": "WebXR Support",
                "example_code": `
    // Add WebXR support for immersive VR and AR experiences in browsers
    // Create cross-platform XR applications using WebXR APIs
    `
            },
            {
                "subtopic_name": "Performance Tuning for Mobile",
                "example_code": `
    // Optimize performance for mobile devices with limited resources
    // Adjust quality settings and reduce computational load
    `
            }
        ]
    },
    {
        "topic_name": "Debugging and Profiling",
        "topic_description": "Master debugging and profiling techniques for identifying and resolving issues in Three.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Browser Developer Tools",
                "example_code": `
    // Utilize browser developer tools for debugging Three.js code
    // Inspect and modify scene elements, shaders, and textures
    `
            },
            {
                "subtopic_name": "Performance Profiling",
                "example_code": `
    // Profile performance to identify bottlenecks and optimize rendering
    // Use tools like Chrome DevTools to analyze frame rates and GPU usage
    `
            },
            {
                "subtopic_name": "Error Handling",
                "example_code": `
    // Implement error handling strategies to gracefully handle runtime errors
    // Provide informative error messages and fallbacks
    `
            }
        ]
    },
    {
        "topic_name": "3D Model Importers",
        "topic_description": "Learn to import 3D models from various file formats and sources.",
        "subtopics": [
            {
                "subtopic_name": "GLTF and FBX Formats",
                "example_code": `
    // Import 3D models in GLTF and FBX formats
    // Use widely supported formats for compatibility
    `
            },
            {
                "subtopic_name": "External Model Libraries",
                "example_code": `
    // Explore external 3D model libraries and repositories
    // Access a wide range of pre-made 3D models for your projects
    `
            },
            {
                "subtopic_name": "Custom Model Loading",
                "example_code": `
    // Implement custom model loading procedures for specialized models
    // Load and integrate models from unique sources or formats
    `
            }
        ]
    },
    {
        "topic_name": "Advanced Shader Effects",
        "topic_description": "Create complex shader effects for materials and visual enhancements.",
        "subtopics": [
            {
                "subtopic_name": "Ray Tracing",
                "example_code": `
    // Implement ray tracing effects for realistic reflections and lighting
    // Achieve photorealistic rendering in real-time applications
    `
            },
            {
                "subtopic_name": "GPU Compute Shaders",
                "example_code": `
    // Utilize GPU compute shaders for parallel computing tasks
    // Perform complex simulations and computations on the GPU
    `
            },
            {
                "subtopic_name": "Toon Shading",
                "example_code": `
    // Apply toon shading techniques for a stylized and cartoon-like appearance
    // Create unique visual styles with contour lines and flat shading
    `
            }
        ]
    },
    {
        "topic_name": "Creating 3D Particle Systems",
        "topic_description": "Generate and animate 3D particle systems for various visual effects.",
        "subtopics": [
            {
                "subtopic_name": "Particle Emitters",
                "example_code": `
    // Create particle emitters for generating particle streams
    // Adjust parameters like particle size, velocity, and lifespan
    `
            },
            {
                "subtopic_name": "Particle Textures",
                "example_code": `
    // Apply textures to particles for diverse visual effects
    // Use textures for sparks, smoke, fire, and more
    `
            },
            {
                "subtopic_name": "Interactive Particle Systems",
                "example_code": `
    // Implement interactive particle systems affected by user interactions
    // Create particle-based effects that respond to user actions
    `
            }
        ]
    },
    {
        "topic_name": "Interactive 3D Charts and Data Visualization",
        "topic_description": "Visualize data in 3D space and create interactive charts and graphs.",
        "subtopics": [
            {
                "subtopic_name": "3D Scatter Plots",
                "example_code": `
    // Create 3D scatter plots to visualize data points in a 3D environment
    // Use colors and markers to represent data attributes
    `
            },
            {
                "subtopic_name": "Animated Data Visualization",
                "example_code": `
    // Animate data visualization elements for dynamic and engaging charts
    // Add time-based animations to data-driven scenes
    `
            },
            {
                "subtopic_name": "Interactivity and Data Filtering",
                "example_code": `
    // Implement interactivity for exploring data and filtering datasets
    // Allow users to interact with data points and explore insights
    `
            }
        ]
    },
    {
        "topic_name": "AI and Machine Learning Integration",
        "topic_description": "Integrate AI and machine learning models into Three.js applications.",
        "subtopics": [
            {
                "subtopic_name": "Object Recognition",
                "example_code": `
    // Implement object recognition using machine learning models
    // Identify and interact with objects in the 3D scene
    `
            },
            {
                "subtopic_name": "Gesture Recognition",
                "example_code": `
    // Recognize user gestures and actions using AI algorithms
    // Enable gesture-based interactions in 3D environments
    `
            },
            {
                "subtopic_name": "Natural Language Processing (NLP)",
                "example_code": `
    // Integrate natural language processing for voice interactions
    // Allow users to control the 3D scene using voice commands
    `
            }
        ]
    },
    {
        "topic_name": "Custom 3D Physics Simulations",
        "topic_description": "Create custom physics simulations and behaviors tailored to your application.",
        "subtopics": [
            {
                "subtopic_name": "Custom Colliders",
                "example_code": `
    // Define custom collision shapes and colliders for objects
    // Implement unique collision behaviors for specialized interactions
    `
            },
            {
                "subtopic_name": "Physics Constraints",
                "example_code": `
    // Create physics constraints and joints between objects
    // Simulate complex mechanical systems and interactions
    `
            },
            {
                "subtopic_name": "Advanced Gravitational Forces",
                "example_code": `
    // Implement custom gravitational forces and fields
    // Simulate gravitational effects unique to your 3D world
    `
            }
        ]
    }

];

// console.log(JSON.stringify(NextjsCourseData, null, 2));
export default NextjsCourseData;