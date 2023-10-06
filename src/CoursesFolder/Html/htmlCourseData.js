const htmlData = [
  {
    sectionName: "Section 1: Introduction to HTML",
    subSection: [
      {
        sName: "1.1. What is HTML?",
        sdes: ["HTML (Hypertext Markup Language) definition and purpose."],
      },
      {
        sName: "1.2. The Role of HTML in Web Development",
        sdes: [
          "How HTML works in conjunction with CSS and JavaScript",
          "Why HTML is essential for web development",
        ],
      },
      {
        sName: "1.3. Basic HTML Structure",
        sdes: [
          "Explain the basic structure of an HTML document.",
          "Introduction to HTML elements, tags, and attributes.",
          "Creating a simple HTML page.",
        ],
      },
      {
        sName: "1.4. Setting Up Your Development Environment",
        sdes: [
          "Choosing a code editor",
          "Creating and saving HTML files",
          "Previewing HTML files in web browsers",
        ],
      },
    ],
    code: `<html lang="en">
  <head>
    <title>Section 1: Introduction to HTML</title>
  </head>
  <body>
    <h1>1.1. What is HTML?</h1>
    <p>HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It defines the structure and layout of a web page using various elements and tags.</p>
    <p>HTML's primary purpose is to provide a way to structure content on the web, including text, images, links, and multimedia.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 2: HTML Document Structure",
    subSection: [
      {
        sName: "2.1. Document Type Declaration (DOCTYPE)",
        sdes: ["What is the DOCTYPE declaration?", "Different DOCTYPEs for various HTML versions."],
      },
      {
        sName: "2.2. HTML Element",
        sdes: [
          "Explaining the <html> element as the root of the document.",
          "HTML document structure inside <html>.",
        ],
      },
      {
        sName: "2.3. Head Section",
        sdes: [
          "The purpose of the <head> section.",
          "Adding metadata, title, and external resources.",
        ],
      },
      {
        sName: "2.4. Body Section",
        sdes: [
          "The role of the <body> section.",
          "Placing visible content within the <body>.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 2: HTML Document Structure</title>
  </head>
  <body>
    <h1>2.1. Document Type Declaration (DOCTYPE)</h1>
    <p>What is the DOCTYPE declaration?</p>
    <p>Different DOCTYPEs for various HTML versions.</p>

    <h1>2.2. HTML Element</h1>
    <p>Explaining the <code>&amp;lt;html&amp;gt;</code> element as the root of the document.</p>
    <p>HTML document structure inside <code>&amp;lt;html&amp;gt;</code>.</p>

    <h1>2.3. Head Section</h1>
    <p>The purpose of the <code>&amp;lt;head&amp;gt;</code> section.</p>
    <p>Adding metadata, title, and external resources.</p>

    <h1>2.4. Body Section</h1>
    <p>The role of the <code>&amp;lt;body&amp;gt;</code> section.</p>
    <p>Placing visible content within the <code>&amp;lt;body&amp;gt;</code>.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 3: HTML Text Formatting",
    subSection: [
      {
        sName: "3.1. Headings and Paragraphs",
        sdes: [
          "Using <h1> to <h6> for headings.",
          "Creating paragraphs with <p>.",
        ],
      },
      {
        sName: "3.2. Text Styling",
        sdes: [
          "Bold and italic text with <strong> and <em>.",
          "Underlining text with <u>.",
        ],
      },
      {
        sName: "3.3. Lists",
        sdes: [
          "Ordered lists with <ol> and <li>.",
          "Unordered lists with <ul> and <li>.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 3: HTML Text Formatting</title>
  </head>
  <body>
    <h1>3.1. Headings and Paragraphs</h1>
    <p>Using <code>&amp;lt;h1&amp;gt;</code> to <code>&amp;lt;h6&amp;gt;</code> for headings.</p>
    <p>Creating paragraphs with <code>&amp;lt;p&amp;gt;</code>.</p>

    <h1>3.2. Text Styling</h1>
    <p>Bold and italic text with <code>&amp;lt;strong&amp;gt;</code> and <code>&amp;lt;em&amp;gt;</code>.</p>
    <p>Underlining text with <code>&amp;lt;u&amp;gt;</code>.</p>

    <h1>3.3. Lists</h1>
    <p>Ordered lists with <code>&amp;lt;ol&amp;gt;</code> and <code>&amp;lt;li&amp;gt;</code>.</p>
    <p>Unordered lists with <code>&amp;lt;ul&amp;gt;</code> and <code>&amp;lt;li&amp;gt;</code>.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 4: HTML Links and Images",
    subSection: [
      {
        sName: "4.1. Hyperlinks",
        sdes: ["Creating links with <a>.", "Linking to external websites and internal pages."],
      },
      {
        sName: "4.2. Image Insertion",
        sdes: [
          "Inserting images with <img>.",
          "Setting image source and alternative text.",
        ],
      },
      {
        sName: "4.3. Image Links",
        sdes: [
          "Using images as links.",
          "Creating image maps with <map> and <area>.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 4: HTML Links and Images</title>
  </head>
  <body>
    <h1>4.1. Hyperlinks</h1>
    <p>Creating links with <code>&amp;lt;a&amp;gt;</code>.</p>
    <p>Linking to external websites and internal pages.</p>

    <h1>4.2. Image Insertion</h1>
    <p>Inserting images with <code>&amp;lt;img&amp;gt;</code>.</p>
    <p>Setting image source and alternative text.</p>

    <h1>4.3. Image Links</h1>
    <p>Using images as links.</p>
    <p>Creating image maps with <code>&amp;lt;map&amp;gt;</code> and <code>&amp;lt;area&amp;gt;</code>.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 5: HTML Forms",
    subSection: [
      {
        sName: "5.1. Form Elements",
        sdes: ["Common form elements like text input, radio buttons, checkboxes, and buttons."],
      },
      {
        sName: "5.2. Form Structure",
        sdes: [
          "Creating forms with <form>.",
          "Grouping form elements using <fieldset> and <legend>.",
        ],
      },
      {
        sName: "5.3. Form Validation",
        sdes: ["Client-side form validation with HTML attributes.", "Required fields and input types."],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 5: HTML Forms</title>
  </head>
  <body>
    <h1>5.1. Form Elements</h1>
    <p>Common form elements like text input, radio buttons, checkboxes, and buttons.</p>

    <h1>5.2. Form Structure</h1>
    <p>Creating forms with <code>&amp;lt;form&amp;gt;</code>.</p>
    <p>Grouping form elements using <code>&amp;lt;fieldset&amp;gt;</code> and <code>&amp;lt;legend&amp;gt;</code>.</p>

    <h1>5.3. Form Validation</h1>
    <p>Client-side form validation with HTML attributes.</p>
    <p>Required fields and input types.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 6: HTML Tables",
    subSection: [
      {
        sName: "6.1. Table Basics",
        sdes: ["Creating tables with <table>.", "Defining table rows and columns."],
      },
      {
        sName: "6.2. Table Styling",
        sdes: [
          "Styling tables with CSS.",
          "Adding borders, background colors, and spacing.",
        ],
      },
      {
        sName: "6.3. Table Accessibility",
        sdes: ["Making tables accessible with <th> and <caption>.", "Using ARIA roles."],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 6: HTML Tables</title>
  </head>
  <body>
    <h1>6.1. Table Basics</h1>
    <p>Creating tables with <code>&amp;lt;table&amp;gt;</code>.</p>
    <p>Defining table rows and columns.</p>

    <h1>6.2. Table Styling</h1>
    <p>Styling tables with CSS.</p>
    <p>Adding borders, background colors, and spacing.</p>

    <h1>6.3. Table Accessibility</h1>
    <p>Making tables accessible with <code>&amp;lt;th&amp;gt;</code> and <code>&amp;lt;caption&amp;gt;</code>.</p>
    <p>Using ARIA roles.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 7: HTML Semantic Elements",
    subSection: [
      {
        sName: "7.1. Semantic HTML",
        sdes: ["What is semantic HTML?", "Benefits of using semantic elements."],
      },
      {
        sName: "7.2. Semantic Elements",
        sdes: [
          "Semantic elements like <header>, <nav>, <article>, and more.",
          "How to use these elements to structure content.",
        ],
      },
      {
        sName: "7.3. Accessibility in HTML",
        sdes: [
          "Creating accessible web content with semantic HTML.",
          "Using ARIA attributes for enhanced accessibility.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 7: HTML Semantic Elements</title>
  </head>
  <body>
    <h1>7.1. Semantic HTML</h1>
    <p>What is semantic HTML?</p>
    <p>Benefits of using semantic elements.</p>

    <h1>7.2. Semantic Elements</h1>
    <p>Semantic elements like <code>&amp;lt;header&amp;gt;</code>, <code>&amp;lt;nav&amp;gt;</code>, <code>&amp;lt;article&amp;gt;</code>, and more.</p>
    <p>How to use these elements to structure content.</p>

    <h1>7.3. Accessibility in HTML</h1>
    <p>Creating accessible web content with semantic HTML.</p>
    <p>Using ARIA attributes for enhanced accessibility.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 8: HTML Multimedia",
    subSection: [
      {
        sName: "8.1. Working with Images",
        sdes: [
          "Optimizing and displaying images.",
          "Using the <img> element for responsive images.",
        ],
      },
      {
        sName: "8.2. Video and Audio",
        sdes: ["Embedding videos and audio with HTML5 <video> and <audio> tags."],
      },
      {
        sName: "8.3. Multimedia Accessibility",
        sdes: [
          "Ensuring accessibility for multimedia content.",
          "Providing alternative text for images and captions for videos.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 8: HTML Multimedia</title>
  </head>
  <body>
    <h1>8.1. Working with Images</h1>
    <p>Optimizing and displaying images.</p>
    <p>Using the <code>&amp;lt;img&amp;gt;</code> element for responsive images.</p>

    <h1>8.2. Video and Audio</h1>
    <p>Embedding videos and audio with HTML5 <code>&amp;lt;video&amp;gt;</code> and <code>&amp;lt;audio&amp;gt;</code> tags.</p>

    <h1>8.3. Multimedia Accessibility</h1>
    <p>Ensuring accessibility for multimedia content.</p>
    <p>Providing alternative text for images and captions for videos.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 9: HTML Forms and JavaScript",
    subSection: [
      {
        sName: "9.1. Form Handling with JavaScript",
        sdes: [
          "Using JavaScript to enhance form functionality.",
          "Handling form submissions and validation.",
        ],
      },
      {
        sName: "9.2. DOM Manipulation",
        sdes: [
          "Accessing and manipulating form elements in the Document Object Model (DOM).",
          "Updating the UI based on user input.",
        ],
      },
      {
        sName: "9.3. Asynchronous Form Submission",
        sdes: [
          "Submitting forms asynchronously using JavaScript and AJAX.",
          "Handling responses from the server.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 9: HTML Forms and JavaScript</title>
  </head>
  <body>
    <h1>9.1. Form Handling with JavaScript</h1>
    <p>Using JavaScript to enhance form functionality.</p>
    <p>Handling form submissions and validation.</p>

    <h1>9.2. DOM Manipulation</h1>
    <p>Accessing and manipulating form elements in the Document Object Model (DOM).</p>
    <p>Updating the UI based on user input.</p>

    <h1>9.3. Asynchronous Form Submission</h1>
    <p>Submitting forms asynchronously using JavaScript and AJAX.</p>
    <p>Handling responses from the server.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 10: HTML and SEO",
    subSection: [
      {
        sName: "10.1. SEO Basics",
        sdes: [
          "Understanding Search Engine Optimization (SEO).",
          "The role of HTML in SEO.",
        ],
      },
      {
        sName: "10.2. Metadata for SEO",
        sdes: [
          "Adding meta tags for SEO.",
          "Optimizing titles, descriptions, and keywords.",
        ],
      },
      {
        sName: "10.3. Structured Data",
        sdes: [
          "Using schema markup for rich snippets in search results.",
          "Improving visibility in search engines.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 10: HTML and SEO</title>
  </head>
  <body>
    <h1>10.1. SEO Basics</h1>
    <p>Understanding Search Engine Optimization (SEO).</p>
    <p>The role of HTML in SEO.</p>

    <h1>10.2. Metadata for SEO</h1>
    <p>Adding meta tags for SEO.</p>
    <p>Optimizing titles, descriptions, and keywords.</p>

    <h1>10.3. Structured Data</h1>
    <p>Using schema markup for rich snippets in search results.</p>
    <p>Improving visibility in search engines.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 11: HTML5 and Modern Web Development",
    subSection: [
      {
        sName: "11.1. HTML5 Features",
        sdes: [
          "Introduction to HTML5 and its new features.",
          "Canvas, video, audio, and more.",
        ],
      },
      {
        sName: "11.2. Mobile-First Design",
        sdes: [
          "Designing websites with a mobile-first approach.",
          "Responsive web design principles.",
        ],
      },
      {
        sName: "11.3. Cross-Browser Compatibility",
        sdes: [
          "Ensuring web pages work well on various web browsers.",
          "Browser compatibility testing and solutions.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 11: HTML5 and Modern Web Development</title>
  </head>
  <body>
    <h1>11.1. HTML5 Features</h1>
    <p>Introduction to HTML5 and its new features.</p>
    <p>Canvas, video, audio, and more.</p>

    <h1>11.2. Mobile-First Design</h1>
    <p>Designing websites with a mobile-first approach.</p>
    <p>Responsive web design principles.</p>

    <h1>11.3. Cross-Browser Compatibility</h1>
    <p>Ensuring web pages work well on various web browsers.</p>
    <p>Browser compatibility testing and solutions.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 12: HTML Best Practices",
    subSection: [
      {
        sName: "12.1. Clean and Readable Code",
        sdes: [
          "Writing clean and organized HTML code.",
          "Indentation, comments, and naming conventions.",
        ],
      },
      {
        sName: "12.2. Performance Optimization",
        sdes: [
          "Optimizing HTML for faster page loading.",
          "Minification and compression techniques.",
        ],
      },
      {
        sName: "12.3. Cross-Platform Compatibility",
        sdes: [
          "Ensuring websites work well on various devices and platforms.",
          "Responsive design and testing.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 12: HTML Best Practices</title>
  </head>
  <body>
    <h1>12.1. Clean and Readable Code</h1>
    <p>Writing clean and organized HTML code.</p>
    <p>Indentation, comments, and naming conventions.</p>

    <h1>12.2. Performance Optimization</h1>
    <p>Optimizing HTML for faster page loading.</p>
    <p>Minification and compression techniques.</p>

    <h1>12.3. Cross-Platform Compatibility</h1>
    <p>Ensuring websites work well on various devices and platforms.</p>
    <p>Responsive design and testing.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 13: HTML Tools and Resources",
    subSection: [
      {
        sName: "13.1. Text Editors and IDEs",
        sdes: [
          "Choosing the right text editor or integrated development environment (IDE) for HTML development.",
          "Recommended features and options.",
        ],
      },
      {
        sName: "13.2. Browser Developer Tools",
        sdes: [
          "Utilizing browser developer tools for HTML debugging and inspection.",
          "Inspecting and modifying HTML and CSS in real-time.",
        ],
      },
      {
        sName: "13.3. Online Resources",
        sdes: [
          "Finding online documentation, tutorials, and communities for HTML.",
          "Websites and forums for learning and troubleshooting.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 13: HTML Tools and Resources</title>
  </head>
  <body>
    <h1>13.1. Text Editors and IDEs</h1>
    <p>Choosing the right text editor or integrated development environment (IDE) for HTML development.</p>
    <p>Recommended features and options.</p>

    <h1>13.2. Browser Developer Tools</h1>
    <p>Utilizing browser developer tools for HTML debugging and inspection.</p>
    <p>Inspecting and modifying HTML and CSS in real-time.</p>

    <h1>13.3. Online Resources</h1>
    <p>Finding online documentation, tutorials, and communities for HTML.</p>
    <p>Websites and forums for learning and troubleshooting.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 14: HTML Deployment",
    subSection: [
      {
        sName: "14.1. Web Hosting",
        sdes: ["Choosing a web hosting provider.", "Uploading HTML files to a web server."],
      },
      {
        sName: "14.2. Domain Names",
        sdes: ["Registering a domain name for your website.", "Domain name management."],
      },
      {
        sName: "14.3. HTTPS and Security",
        sdes: ["Enabling HTTPS for secure data transfer.", "Website security best practices."],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 14: HTML Deployment</title>
  </head>
  <body>
    <h1>14.1. Web Hosting</h1>
    <p>Choosing a web hosting provider.</p>
    <p>Uploading HTML files to a web server.</p>

    <h1>14.2. Domain Names</h1>
    <p>Registering a domain name for your website.</p>
    <p>Domain name management.</p>

    <h1>14.3. HTTPS and Security</h1>
    <p>Enabling HTTPS for secure data transfer.</p>
    <p>Website security best practices.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 15: HTML Maintenance",
    subSection: [
      {
        sName: "15.1. Website Updates",
        sdes: [
          "Regularly updating and maintaining HTML content.",
          "Adding new pages and features.",
        ],
      },
      {
        sName: "15.2. Content Management Systems (CMS)",
        sdes: [
          "Using CMS platforms for easier website management.",
          "Popular CMS options and their features.",
        ],
      },
      {
        sName: "15.3. Backup and Recovery",
        sdes: ["Implementing backup strategies to protect your website data.", "Recovery procedures."],
      },
    ],
    code: `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 15: HTML Maintenance</title>
    </head>
    <body>
    <h1>15.1. Website Updates</h1>
    <p>Regularly updating and maintaining HTML content.</p>
    <p>Adding new pages and features.</p>

    <h1>15.2. Content Management Systems (CMS)</h1>
    <p>Using CMS platforms for easier website management.</p>
    <p>Popular CMS options and their features.</p>

    <h1>15.3. Backup and Recovery</h1>
    <p>Implementing backup strategies to protect your website data.</p>
    <p>Recovery procedures.</p>
    </body>
    </html>`,
  },
  {
    sectionName: "Section 16: HTML and Web Accessibility",
    subSection: [
      {
        sName: "16.1. Accessibility Principles",
        sdes: [
          "Understanding web accessibility and its importance.",
          "Web Content Accessibility Guidelines (WCAG).",
        ],
      },
      {
        sName: "16.2. Creating Accessible Content",
        sdes: [
          "Designing websites with accessibility in mind.",
          "Using semantic HTML and ARIA roles for accessibility.",
        ],
      },
      {
        sName: "16.3. Testing and Compliance",
        sdes: [
          "Methods for testing web accessibility.",
          "Ensuring compliance with WCAG standards.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 16: HTML and Web Accessibility</title>
  </head>
  <body>
    <h1>16.1. Accessibility Principles</h1>
    <p>Understanding web accessibility and its importance.</p>
    <p>Web Content Accessibility Guidelines (WCAG).</p>

    <h1>16.2. Creating Accessible Content</h1>
    <p>Designing websites with accessibility in mind.</p>
    <p>Using semantic HTML and ARIA roles for accessibility.</p>

    <h1>16.3. Testing and Compliance</h1>
    <p>Methods for testing web accessibility.</p>
    <p>Ensuring compliance with WCAG standards.</p>
  </body>
</html>`,
  },
  {
    sectionName: "Section 17: HTML and CSS",
    subSection: [
      {
        sName: "17.1. CSS Basics",
        sdes: [
          "Introduction to Cascading Style Sheets (CSS).",
          "Linking CSS to HTML with <link> and <style>.",
        ],
      },
      {
        sName: "17.2. CSS Selectors",
        sdes: [
          "Understanding CSS selectors and specificity.",
          "Targeting HTML elements for styling.",
        ],
      },
      {
        sName: "17.3. CSS Properties",
        sdes: [
          "Common CSS properties for text, colors, margins, and padding.",
          "Box model and layout properties.",
        ],
      },
    ],
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 17: HTML and CSS</title>
  </head>
  <body>
    <h1>17.1. CSS Basics</h1>
    <p>Introduction to Cascading Style Sheets (CSS).</p>
    <p>Linking CSS to HTML with <code>&amp;lt;link&amp;gt;</code> and <code>&amp;lt;style&amp;gt;</code>.</p>

    <h1>17.2. CSS Selectors</h1>
    <p>Understanding CSS selectors and specificity.</p>
    <p>Targeting HTML elements for styling.</p>

    <h1>17.3. CSS Properties</h1>
    <p>Common CSS properties for text, colors, margins, and padding.</p>
    <p>Box model and layout properties.</p>
  </body>
</html>`,
  },
];
export default htmlData;