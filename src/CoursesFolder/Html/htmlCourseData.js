var htmlCourseData = [
  {
    "topic_name": "HTML Structure",
    "topic_description": "HTML documents have a tree-like structure consisting of elements that enclose content. The basic structure includes an opening <html> tag, a <head> section, and a <body> section.",
    "subtopics": [
      {
        "subtopic_name": "Document Structure",
        "example_code": `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a paragraph.</p>
</body>
</html>`
      }
    ]
  },
  {
    "topic_name": "Headings and Text",
    "topic_description": "HTML provides various heading elements (<h1> to <h6>) and text elements (<p>, <span>, <strong>, <em>, etc.) for structuring and formatting content.",
    "subtopics": [
      {
        "subtopic_name": "Headings",
        "example_code": "<h1>This is a Heading</h1>"
      },
      {
        "subtopic_name": "Paragraph",
        "example_code": "<p>This is a paragraph of text.</p>"
      },
      {
        "subtopic_name": "Bold and Italic",
        "example_code": "<strong>Bold</strong> and <em>Italic</em> text."
      },
      {
        "subtopic_name": "Line Break",
        "example_code": "Line<br>Break"
      }
    ]
  },
  {
    "topic_name": "Lists",
    "topic_description": "HTML supports ordered lists (<ol>), unordered lists (<ul>), and definition lists (<dl>) for structuring content in list form.",
    "subtopics": [
      {
        "subtopic_name": "Ordered List",
        "example_code": `
<ol>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ol>`
      },
      {
        "subtopic_name": "Unordered List",
        "example_code": `
<ul>
<li>Item A</li>
<li>Item B</li>
<li>Item C</li>
</ul>`
      },
      {
        "subtopic_name": "Definition List",
        "example_code": `
<dl>
<dt>Term 1</dt>
<dd>Definition 1</dd>
<dt>Term 2</dt>
<dd>Definition 2</dd>
</dl>`
      }
    ]
  },
  {
    "topic_name": "Links",
    "topic_description": "Hyperlinks (<a>) allow you to navigate to other web pages, resources, or sections within the same page.",
    "subtopics": [
      {
        "subtopic_name": "External Link",
        "example_code": "<a href=\"https://www.example.com\">Visit Example</a>"
      },
      {
        "subtopic_name": "Internal Link",
        "example_code": "<a href=\"#section2\">Go to Section 2</a>"
      },
      {
        "subtopic_name": "Email Link",
        "example_code": "<a href=\"mailto:email@example.com\">Send Email</a>"
      },
      {
        "subtopic_name": "Link with Target",
        "example_code": "<a href=\"https://www.example.com\" target=\"_blank\">Open in New Tab</a>"
      }
    ]
  },
  {
    "topic_name": "Images",
    "topic_description": "You can embed images in HTML using the <img> element, specifying the image source, alt text, and optional attributes.",
    "subtopics": [
      {
        "subtopic_name": "Image Embedding",
        "example_code": "<img src=\"image.jpg\" alt=\"Description\">"
      },
      {
        "subtopic_name": "Image Attributes",
        "example_code": "<img src=\"image.jpg\" alt=\"Description\" width=\"200\" height=\"150\">"
      }
    ]
  },
  {
    "topic_name": "Forms",
    "topic_description": "HTML forms (<form>) are used to collect user input. Form elements include text fields, checkboxes, radio buttons, and more.",
    "subtopics": [
      {
        "subtopic_name": "Text Input",
        "example_code": "<input type=\"text\" name=\"username\">"
      },
      {
        "subtopic_name": "Checkbox",
        "example_code": "<input type=\"checkbox\" name=\"subscribe\" value=\"yes\"> Subscribe"
      },
      {
        "subtopic_name": "Radio Buttons",
        "example_code": `
<label>
<input type="radio" name="gender" value="male"> Male
</label>
<label>
<input type="radio" name="gender" value="female"> Female
</label>`
      },
      {
        "subtopic_name": "Select Box",
        "example_code": `
<select name="country">
<option value="usa">USA</option>
<option value="canada">Canada</option>
<option value="uk">UK</option>
</select>`
      }
    ]
  },
  {
    "topic_name": "Tables",
    "topic_description": "Tables in HTML are created with the <table> element. They consist of rows (<tr>), columns (<td>), headers (<th>), and captions (<caption>).",
    "subtopics": [
      {
        "subtopic_name": "Table Structure",
        "example_code": `
<table>
<caption>Table Caption</caption>
<tr>
  <th>Header 1</th>
  <th>Header 2</th>
</tr>
<tr>
  <td>Data 1</td>
  <td>Data 2</td>
</tr>
</table>`
      },
      {
        "subtopic_name": "Table Borders",
        "example_code": "<table border=\"1\">...</table>"
      },
      {
        "subtopic_name": "Table Cell Padding",
        "example_code": "<table cellpadding=\"5\">...</table>"
      }
    ]
  },
  {
    "topic_name": "HTML Entities",
    "topic_description": "HTML entities are special characters represented by codes, such as &lt; for < and &amp; for &.",
    "subtopics": [
      {
        "subtopic_name": "Less Than",
        "example_code": "&lt; represents <"
      },
      {
        "subtopic_name": "Greater Than",
        "example_code": "&gt; represents >"
      },
      {
        "subtopic_name": "Ampersand",
        "example_code": "&amp; represents &"
      }
    ]
  },
  {
    "topic_name": "Semantic HTML",
    "topic_description": "Semantic HTML elements (<header>, <nav>, <article>, <footer>, etc.) provide meaning to the structure, improving accessibility and SEO.",
    "subtopics": [
      {
        "subtopic_name": "Header",
        "example_code": "<header>Header Content</header>"
      },
      {
        "subtopic_name": "Article",
        "example_code": "<article>Article Content</article>"
      },
      {
        "subtopic_name": "Footer",
        "example_code": "<footer>Footer Content</footer>"
      }
    ]
  },
  {
    "topic_name": "Audio and Video",
    "topic_description": "HTML5 introduced <audio> and <video> elements for embedding audio and video content with supported formats.",
    "subtopics": [
      {
        "subtopic_name": "Audio Player",
        "example_code": `
<audio controls>
<source src="audio.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>`
      },
      {
        "subtopic_name": "Video Player",
        "example_code": `
<video controls>
<source src="video.mp4" type="video/mp4">
Your browser does not support the video element.
</video>`
      }
    ]
  },
  {
    "topic_name": "Meta Tags",
    "topic_description": "Meta tags provide metadata about the HTML document, including character encoding, viewport settings, and description.",
    "subtopics": [
      {
        "subtopic_name": "Character Encoding",
        "example_code": "<meta charset=\"UTF-8\">"
      },
      {
        "subtopic_name": "Viewport Meta Tag",
        "example_code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
      },
      {
        "subtopic_name": "Description Tag",
        "example_code": "<meta name=\"description\" content=\"Page description goes here.\">"
      }
    ]
  },
  {
    "topic_name": "Div and Spans",
    "topic_description": "The <div> and <span> elements are generic container elements used for grouping and styling content.",
    "subtopics": [
      {
        "subtopic_name": "Div Container",
        "example_code": "<div>Content goes here.</div>"
      },
      {
        "subtopic_name": "Span Inline",
        "example_code": "<span>Inline content</span>"
      }
    ]
  },
  {
    "topic_name": "Canvas",
    "topic_description": "The <canvas> element is used for rendering graphics, animations, and interactive content using JavaScript.",
    "subtopics": [
      {
        "subtopic_name": "Canvas Drawing",
        "example_code": `
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);
</script>`
      }
    ]
  },
  {
    "topic_name": "IFrames",
    "topic_description": "IFrames (<iframe>) allow you to embed external web content within your page, such as videos, maps, or other websites.",
    "subtopics": [
      {
        "subtopic_name": "Embedding Content",
        "example_code": "<iframe src=\"https://www.example.com\"></iframe>"
      },
      {
        "subtopic_name": "Specifying Dimensions",
        "example_code": "<iframe src=\"https://www.example.com\" width=\"400\" height=\"300\"></iframe>"
      }
    ]
  },
  {
    "topic_name": "Comments",
    "topic_description": "HTML comments are used to add notes or explanations to the code that are not displayed in the rendered page.",
    "subtopics": [
      {
        "subtopic_name": "Single-Line Comment",
        "example_code": "<!-- This is a comment -->"
      },
      {
        "subtopic_name": "Multi-Line Comment",
        "example_code": `
<!--
This is a multi-line comment.
It can span multiple lines.
-->`
      }
    ]
  },
  {
    "topic_name": "Embedding Scripts",
    "topic_description": "JavaScript code can be embedded in HTML using the <script> element. It can be placed in the <head> or <body> section.",
    "subtopics": [
      {
        "subtopic_name": "Inline Script",
        "example_code": "<script>alert('Hello, World!');</script>"
      },
      {
        "subtopic_name": "External Script",
        "example_code": "<script src=\"myscript.js\"></script>"
      }
    ]
  },
  {
    "topic_name": "Forms - Textarea",
    "topic_description": "The <textarea> element is used for multiline text input, allowing users to enter longer messages or comments.",
    "subtopics": [
      {
        "subtopic_name": "Textarea Element",
        "example_code": "<textarea rows=\"4\" cols=\"50\">Enter text here...</textarea>"
      }
    ]
  },
  {
    "topic_name": "Forms - Buttons",
    "topic_description": "HTML provides various button types (<button>, <input type=\"button\">, and <input type=\"submit\">) to trigger actions.",
    "subtopics": [
      {
        "subtopic_name": "Button Element",
        "example_code": "<button>Click Me</button>"
      },
      {
        "subtopic_name": "Input - Button",
        "example_code": "<input type=\"button\" value=\"Click Me\">"
      },
      {
        "subtopic_name": "Input - Submit",
        "example_code": "<input type=\"submit\" value=\"Submit\">"
      }
    ]
  },
  {
    "topic_name": "Forms - Select Multiple",
    "topic_description": "A <select> element with the 'multiple' attribute allows users to select multiple options from a list.",
    "subtopics": [
      {
        "subtopic_name": "Select Multiple",
        "example_code": `
<select name="fruits" multiple>
<option value="apple">Apple</option>
<option value="banana">Banana</option>
<option value="cherry">Cherry</option>
</select>`
      }
    ]
  },
  {
    "topic_name": "Forms - File Input",
    "topic_description": "The <input type=\"file\"> element is used for file uploads, allowing users to select and submit files from their devices.",
    "subtopics": [
      {
        "subtopic_name": "File Input",
        "example_code": "<input type=\"file\" name=\"file-upload\">"
      }
    ]
  },
  {
    "topic_name": "HTML Entities - Symbols",
    "topic_description": "HTML entities can represent various symbols, such as &copy; for © and &hearts; for ♥.",
    "subtopics": [
      {
        "subtopic_name": "Copyright Symbol",
        "example_code": "&copy; All rights reserved"
      },
      {
        "subtopic_name": "Heart Symbol",
        "example_code": "I &hearts; HTML"
      }
    ]
  },
  {
    "topic_name": "Semantic HTML - Main and Section",
    "topic_description": "The <main> and <section> elements are used to define the main content and sections within a web page.",
    "subtopics": [
      {
        "subtopic_name": "Main Element",
        "example_code": "<main>Main Content Goes Here</main>"
      },
      {
        "subtopic_name": "Section Element",
        "example_code": "<section><h2>Section Title</h2><p>Section Content</p></section>"
      }
    ]
  },
  {
    "topic_name": "Audio and Video - Controls",
    "topic_description": "Adding 'controls' to <audio> and <video> elements provides a user interface for play, pause, and volume control.",
    "subtopics": [
      {
        "subtopic_name": "Audio with Controls",
        "example_code": `
<audio controls>
<source src="audio.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>`
      },
      {
        "subtopic_name": "Video with Controls",
        "example_code": `
<video controls>
<source src="video.mp4" type="video/mp4">
Your browser does not support the video element.
</video>`
      }
    ]
  },
  {
    "topic_name": "Meta Tags - Author and Keywords",
    "topic_description": "Meta tags like 'author' and 'keywords' provide additional information about the web page.",
    "subtopics": [
      {
        "subtopic_name": "Author Meta Tag",
        "example_code": "<meta name=\"author\" content=\"John Doe\">"
      },
      {
        "subtopic_name": "Keywords Meta Tag",
        "example_code": "<meta name=\"keywords\" content=\"HTML, CSS, JavaScript\">"
      }
    ]
  },
  {
    "topic_name": "Div and Spans - Grouping",
    "topic_description": "Use <div> and <span> to group and style content, applying CSS rules for layout and formatting.",
    "subtopics": [
      {
        "subtopic_name": "Div Grouping",
        "example_code": "<div class=\"container\">Content goes here.</div>"
      },
      {
        "subtopic_name": "Span Styling",
        "example_code": "<span style=\"color: blue;\">Blue Text</span>"
      }
    ]
  },
  {
    "topic_name": "Canvas - Drawing Lines",
    "topic_description": "The <canvas> element can be used to draw lines and shapes. JavaScript is used to specify the drawing commands.",
    "subtopics": [
      {
        "subtopic_name": "Canvas Line Drawing",
        "example_code": `
<canvas id="myCanvas" width="400" height="200"></canvas>
<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.stroke();
</script>`
      }
    ]
  },
  {
    "topic_name": "IFrames - YouTube Video",
    "topic_description": "Embed a YouTube video using an <iframe> to display the video player within your web page.",
    "subtopics": [
      {
        "subtopic_name": "YouTube Video Embed",
        "example_code": `
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>`
      }
    ]
  },
  {
    "topic_name": "Comments - Conditional Comments",
    "topic_description": "Conditional comments allow you to target specific versions of Internet Explorer for CSS or JavaScript.",
    "subtopics": [
      {
        "subtopic_name": "Conditional CSS for IE",
        "example_code": `
<!--[if IE]>
<link rel="stylesheet" type="text/css" href="ie-styles.css">
<![endif]-->`
      },
      {
        "subtopic_name": "Conditional JavaScript for IE",
        "example_code": `
<!--[if IE]>
<script src="ie-script.js"></script>
<![endif]-->`
      }
    ]
  },
  {
    "topic_name": "Embedding Scripts - Async and Defer",
    "topic_description": "The 'async' and 'defer' attributes for the <script> element control when and how scripts are executed.",
    "subtopics": [
      {
        "subtopic_name": "Async Attribute",
        "example_code": "<script src=\"myscript.js\" async></script>"
      },
      {
        "subtopic_name": "Defer Attribute",
        "example_code": "<script src=\"myscript.js\" defer></script>"
      }
    ]
  },
  

];

// console.log(JSON.stringify(htmlCheatSheet, null, 2));
export default htmlCourseData;