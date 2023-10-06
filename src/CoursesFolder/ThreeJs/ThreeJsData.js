const ThreeJsData = [
    {
        "topic_name": "Introduction to Three.js",
        "topic_description": "Three.js is a JavaScript library used for 3D graphics programming on the web. It provides tools and utilities for creating 3D scenes and animations.",
        "subtopics": [
            {
                "subtopic_name": "Setting up Three.js",
                "example_code": `
// Import Three.js library
import * as THREE from 'three';

// Create a scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Add renderer to the DOM
document.body.appendChild(renderer.domElement);
                `
            },
            {
                "subtopic_name": "Creating a Basic 3D Object",
                "example_code": `
// Create a geometry (e.g., a cube)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);
                `
            }
        ]
    },
    {
        "topic_name": "Basic 3D Concepts",
        "topic_description": "Understanding fundamental 3D concepts is crucial for working with Three.js effectively.",
        "subtopics": [
            {
                "subtopic_name": "Coordinates and Axes",
                "example_code": `
// Three.js uses a right-handed coordinate system
// X-axis points right, Y-axis points up, Z-axis points out of the screen
`
            },
            {
                "subtopic_name": "Cameras and Views",
                "example_code": `
// Cameras define the view of the scene
// PerspectiveCamera provides a perspective view, while OrthographicCamera is used for 2D-like views
`
            },
            {
                "subtopic_name": "Lights",
                "example_code": `
// Lights illuminate the scene
// Common types: AmbientLight, DirectionalLight, PointLight, SpotLight
`
            },
            {
                "subtopic_name": "Materials and Textures",
                "example_code": `
// Materials define an object's appearance
// Textures can be applied to materials to add details
`
            }
        ]
    },
    {
        "topic_name": "Geometry and Mesh",
        "topic_description": "Geometry and mesh are essential components for creating 3D objects in Three.js.",
        "subtopics": [
            {
                "subtopic_name": "Basic Geometries",
                "example_code": `
// Common geometries: BoxGeometry, SphereGeometry, CylinderGeometry, PlaneGeometry
`
            },
            {
                "subtopic_name": "Creating Custom Geometries",
                "example_code": `
// Create custom geometries by defining vertices and faces
// Use BufferGeometry for better performance
`
            },
            {
                "subtopic_name": "Mesh Properties",
                "example_code": `
// Mesh combines a geometry and a material
// Position, rotation, and scale can be manipulated
`
            }
        ]
    },
    {
        "topic_name": "Materials and Shading",
        "topic_description": "Materials determine how an object appears when rendered.",
        "subtopics": [
            {
                "subtopic_name": "Basic Materials",
                "example_code": `
// MeshBasicMaterial: Simple shading with no lighting
// MeshLambertMaterial: Diffuse shading (matte appearance)
// MeshPhongMaterial: Phong shading (specular highlights)
`
            },
            {
                "subtopic_name": "Texture Mapping",
                "example_code": `
// Apply textures to materials for realistic surfaces
// Load textures with TextureLoader
`
            },
            {
                "subtopic_name": "Custom Shaders",
                "example_code": `
// Write custom shaders using GLSL for advanced materials and effects
// Use ShaderMaterial to apply custom shaders to objects
`
            }
        ]
    },
    {
        "topic_name": "Lights and Shadows",
        "topic_description": "Lights and shadows play a significant role in creating realistic 3D scenes.",
        "subtopics": [
            {
                "subtopic_name": "Types of Lights",
                "example_code": `
// DirectionalLight: Simulates distant light (e.g., sunlight)
// PointLight: Radiates light in all directions from a point
// SpotLight: Emits light in a cone shape
`
            },
            {
                "subtopic_name": "Adding Shadows",
                "example_code": `
// Enable shadows in the renderer and lights
// Adjust properties like shadowMapSize and shadowBias
`
            },
            {
                "subtopic_name": "Shadow Mapping",
                "example_code": `
// Shadow mapping techniques for creating realistic shadows
// Depth texture and shaders are used to calculate shadows
`
            }
        ]
    },
    {
        "topic_name": "Animation in Three.js",
        "topic_description": "Animating objects and scenes is a crucial aspect of 3D development.",
        "subtopics": [
            {
                "subtopic_name": "Basic Animations",
                "example_code": `
// Use the requestAnimationFrame loop for smooth animations
// Update object properties (e.g., position, rotation) over time
`
            },
            {
                "subtopic_name": "Keyframe Animations",
                "example_code": `
// Create keyframe animations using libraries like Tween.js
// Define keyframes and easing functions
`
            },
            {
                "subtopic_name": "Physics Simulations",
                "example_code": `
// Integrate physics engines like Cannon.js for realistic simulations
// Simulate dynamics, collisions, and forces
`
            }
        ]
    },
    {
        "topic_name": "Loading 3D Models",
        "topic_description": "Loading external 3D models and assets into Three.js.",
        "subtopics": [
            {
                "subtopic_name": "Using 3D Model Formats",
                "example_code": `
// Load 3D models in common formats like OBJ, GLTF, FBX
// Use loaders (e.g., GLTFLoader) to import models
`
            },
            {
                "subtopic_name": "Manipulating Imported Models",
                "example_code": `
// Adjust model position, scale, and rotation
// Animate imported models along with the scene
`
            },
            {
                "subtopic_name": "Optimizing Model Loading",
                "example_code": `
// Optimize model loading for better performance
// Implement LOD (Level of Detail) techniques
`
            }
        ]
    },
    {
        "topic_name": "Interactivity and User Input",
        "topic_description": "Adding user interaction and controls to 3D scenes.",
        "subtopics": [
            {
                "subtopic_name": "Mouse and Touch Events",
                "example_code": `
// Detect mouse and touch events on 3D objects
// Implement interactions like object selection and rotation
`
            },
            {
                "subtopic_name": "Keyboard Input",
                "example_code": `
// Capture keyboard input for controlling scenes or objects
// Define custom keybindings and actions
`
            },
            {
                "subtopic_name": "VR and AR Integration",
                "example_code": `
// Integrate Three.js with WebXR for virtual and augmented reality experiences
// Create immersive 3D environments for VR headsets
`
            }
        ]
    },
    {
        "topic_name": "Post-Processing Effects",
        "topic_description": "Apply post-processing effects to enhance the visual quality of 3D scenes.",
        "subtopics": [
            {
                "subtopic_name": "Bloom and HDR",
                "example_code": `
// Add bloom and high dynamic range (HDR) effects
// Improve scene illumination and realism
`
            },
            {
                "subtopic_name": "Depth of Field",
                "example_code": `
// Simulate depth of field (DOF) for a camera lens effect
// Blur objects based on their distance from the camera
`
            },
            {
                "subtopic_name": "Custom Shader Effects",
                "example_code": `
// Create and apply custom post-processing shader effects
// Achieve unique visual styles and effects
`
            }
        ]
    },
    {
        "topic_name": "WebGL and Performance",
        "topic_description": "Understanding the underlying WebGL renderer for optimizing performance.",
        "subtopics": [
            {
                "subtopic_name": "WebGL Rendering Pipeline",
                "example_code": `
// Learn about the WebGL rendering pipeline
// Understand vertex and fragment shaders, buffers, and textures
`
            },
            {
                "subtopic_name": "Performance Optimization",
                "example_code": `
// Optimize performance through techniques like frustum culling
// Minimize draw calls and use GPU acceleration
`
            },
            {
                "subtopic_name": "Debugging and Profiling",
                "example_code": `
// Debug and profile Three.js applications
// Use browser developer tools and extensions for insights
`
            }
        ]
    },
    {
        "topic_name": "Exporting and Deployment",
        "topic_description": "Preparing and deploying Three.js projects for the web.",
        "subtopics": [
            {
                "subtopic_name": "Exporting 3D Scenes",
                "example_code": `
// Export Three.js scenes to standalone files or formats
// Prepare models and scenes for sharing and distribution
`
            },
            {
                "subtopic_name": "Web Deployment",
                "example_code": `
// Deploy Three.js projects to web servers or hosting platforms
// Ensure compatibility and performance on various devices
`
            },
            {
                "subtopic_name": "AR and Mobile Apps",
                "example_code": `
// Adapt Three.js projects for augmented reality (AR) and mobile applications
// Use frameworks like React Native or AR.js
`
            }
        ]
    },
    {
        "topic_name": "Community and Resources",
        "topic_description": "Leverage the Three.js community and resources for learning and development.",
        "subtopics": [
            {
                "subtopic_name": "Official Documentation",
                "example_code": `
// Explore the official Three.js documentation
// Reference guides, examples, and API documentation
`
            },
            {
                "subtopic_name": "Online Communities",
                "example_code": `
// Join online communities and forums for discussions and support
// Share your projects and seek advice from experts
`
            },
            {
                "subtopic_name": "Tutorials and Courses",
                "example_code": `
// Follow tutorials and online courses to master Three.js
// Learn from experienced developers and educators
`
            }
        ]
    },
    
];
export default ThreeJsData;