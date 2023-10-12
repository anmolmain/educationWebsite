export var subjectName = "Bootstrap"
var BootstrapData = [
    {
        "topic_name": "Bootstrap Typography",
        "topic_description": "Bootstrap provides typography styles for headings, paragraphs, and more.",
        "subtopics": [
            {
                "subtopic_name": "Headings",
                "example_code": "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>"
            },
            {
                "subtopic_name": "Paragraphs",
                "example_code": "<p>This is a paragraph.</p>"
            },
            {
                "subtopic_name": "Text Styling",
                "example_code": "<strong>Bold Text</strong>\n<em>Italic Text</em>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Buttons",
        "topic_description": "Bootstrap provides styles for buttons and button groups.",
        "subtopics": [
            {
                "subtopic_name": "Basic Button",
                "example_code": "<button class=\"btn btn-primary\">Primary Button</button>"
            },
            {
                "subtopic_name": "Button Groups",
                "example_code": "<div class=\"btn-group\" role=\"group\">\n  <button class=\"btn btn-secondary\">Button 1</button>\n  <button class=\"btn btn-secondary\">Button 2</button>\n</div>"
            },
            {
                "subtopic_name": "Button Sizes",
                "example_code": "<button class=\"btn btn-sm btn-primary\">Small Button</button>\n<button class=\"btn btn-lg btn-primary\">Large Button</button>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Forms",
        "topic_description": "Bootstrap makes it easy to style form elements.",
        "subtopics": [
            {
                "subtopic_name": "Text Input",
                "example_code": "<input type=\"text\" class=\"form-control\" placeholder=\"Text Input\">"
            },
            {
                "subtopic_name": "Textarea",
                "example_code": "<textarea class=\"form-control\" rows=\"3\"></textarea>"
            },
            {
                "subtopic_name": "Checkboxes and Radios",
                "example_code": "<div class=\"form-check\">\n  <input type=\"checkbox\" class=\"form-check-input\" id=\"checkbox1\">\n  <label class=\"form-check-label\" for=\"checkbox1\">Checkbox</label>\n</div>\n<div class=\"form-check\">\n  <input type=\"radio\" class=\"form-check-input\" id=\"radio1\">\n  <label class=\"form-check-label\" for=\"radio1\">Radio</label>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Navbar",
        "topic_description": "Bootstrap provides a responsive navigation bar component.",
        "subtopics": [
            {
                "subtopic_name": "Basic Navbar",
                "example_code": "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n</nav>"
            },
            {
                "subtopic_name": "Navbar Links",
                "example_code": "<ul class=\"navbar-nav\">\n  <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Home</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">About</a></li>\n</ul>"
            },
            {
                "subtopic_name": "Dropdown Menu",
                "example_code": "<li class=\"nav-item dropdown\">\n  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\">\n    Dropdown\n  </a>\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n    <a class=\"dropdown-item\" href=\"#\">Item 1</a>\n    <a class=\"dropdown-item\" href=\"#\">Item 2</a>\n  </div>\n</li>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Alerts",
        "topic_description": "Bootstrap provides alert styles for notifications.",
        "subtopics": [
            {
                "subtopic_name": "Success Alert",
                "example_code": "<div class=\"alert alert-success\" role=\"alert\">Success message.</div>"
            },
            {
                "subtopic_name": "Warning Alert",
                "example_code": "<div class=\"alert alert-warning\" role=\"alert\">Warning message.</div>"
            },
            {
                "subtopic_name": "Danger Alert",
                "example_code": "<div class=\"alert alert-danger\" role=\"alert\">Danger message.</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Modals",
        "topic_description": "Bootstrap modals are used for displaying pop-up content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Modal",
                "example_code": "<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal content here -->\n    </div>\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Triggering Modal",
                "example_code": "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>"
            },
            {
                "subtopic_name": "Modal Content",
                "example_code": "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Modal Title</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  </div>\n  <div class=\"modal-body\">\n    <!-- Modal body content here -->\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n  </div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Grid System",
        "topic_description": "Bootstrap grid system helps create responsive layouts.",
        "subtopics": [
            {
                "subtopic_name": "Container",
                "example_code": "<div class=\"container\">\n  <!-- Content here -->\n</div>"
            },
            {
                "subtopic_name": "Row",
                "example_code": "<div class=\"row\">\n  <!-- Columns here -->\n</div>"
            },
            {
                "subtopic_name": "Columns",
                "example_code": "<div class=\"col-md-4\">Column 1</div>\n<div class=\"col-md-4\">Column 2</div>\n<div class=\"col-md-4\">Column 3</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Icons",
        "topic_description": "Bootstrap Icons can be easily integrated into your web projects.",
        "subtopics": [
            {
                "subtopic_name": "Using Icons",
                "example_code": "<i class=\"bi bi-heart\"></i>\n<i class=\"bi bi-star\"></i>"
            },
            {
                "subtopic_name": "Icon Size",
                "example_code": "<i class=\"bi bi-heart\" style=\"font-size: 24px;\"></i>"
            },
            {
                "subtopic_name": "Icon Color",
                "example_code": "<i class=\"bi bi-heart\" style=\"color: red;\"></i>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Carousel",
        "topic_description": "Bootstrap carousel is used for creating image sliders.",
        "subtopics": [
            {
                "subtopic_name": "Basic Carousel",
                "example_code": "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Carousel slides here -->\n</div>"
            },
            {
                "subtopic_name": "Carousel Items",
                "example_code": "<div class=\"carousel-inner\">\n  <div class=\"carousel-item active\">\n    <!-- Carousel item content here -->\n  </div>\n  <div class=\"carousel-item\">\n    <!-- Carousel item content here -->\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Carousel Controls",
                "example_code": "<a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Previous</span>\n</a>\n<a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Next</span>\n</a>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Accordion",
        "topic_description": "Bootstrap accordion is used for creating collapsible content panels.",
        "subtopics": [
            {
                "subtopic_name": "Basic Accordion",
                "example_code": "<div id=\"accordion\">\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingOne\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          Accordion Item 1\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        <!-- Accordion content here -->\n      </div>\n    </div>\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Accordion Items",
                "example_code": "<div class=\"card\">\n  <div class=\"card-header\" id=\"headingTwo\">\n    <h5 class=\"mb-0\">\n      <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n        Accordion Item 2\n      </button>\n    </h5>\n  </div>\n  <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n    <div class=\"card-body\">\n      <!-- Accordion content here -->\n    </div>\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Multiple Accordions",
                "example_code": "<div id=\"accordion\">\n  <!-- Add more accordion items here -->\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Utilities",
        "topic_description": "Bootstrap provides utility classes for various purposes.",
        "subtopics": [
            {
                "subtopic_name": "Text Alignment",
                "example_code": "<p class=\"text-left\">Left-aligned text.</p>\n<p class=\"text-center\">Centered text.</p>"
            },
            {
                "subtopic_name": "Background Colors",
                "example_code": "<div class=\"bg-primary text-light\">Primary background color.</div>\n<div class=\"bg-danger text-light\">Danger background color.</div>"
            },
            {
                "subtopic_name": "Spacing",
                "example_code": "<div class=\"mt-3\">Margin top</div>\n<div class=\"pb-4\">Padding bottom</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Navs",
        "topic_description": "Bootstrap provides navigation tabs and pills.",
        "subtopics": [
            {
                "subtopic_name": "Nav Tabs",
                "example_code": "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#\">Tab 1</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Tab 2</a></li>\n</ul>"
            },
            {
                "subtopic_name": "Nav Pills",
                "example_code": "<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#\">Pill 1</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Pill 2</a></li>\n</ul>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Badges",
        "topic_description": "Bootstrap badges are used to highlight important information.",
        "subtopics": [
            {
                "subtopic_name": "Basic Badge",
                "example_code": "<span class=\"badge badge-primary\">New</span>"
            },
            {
                "subtopic_name": "Badge Pill",
                "example_code": "<span class=\"badge badge-pill badge-danger\">4</span>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Tables",
        "topic_description": "Bootstrap styles for tables.",
        "subtopics": [
            {
                "subtopic_name": "Basic Table",
                "example_code": "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Header 1</th>\n      <th>Header 2</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Data 1</td>\n      <td>Data 2</td>\n    </tr>\n  </tbody>\n</table>"
            },
            {
                "subtopic_name": "Striped Table",
                "example_code": "<table class=\"table table-striped\">\n  <!-- Table content here -->\n</table>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Alerts",
        "topic_description": "Bootstrap provides alert styles for notifications.",
        "subtopics": [
            {
                "subtopic_name": "Info Alert",
                "example_code": "<div class=\"alert alert-info\" role=\"alert\">Info message.</div>"
            },
            {
                "subtopic_name": "Light Alert",
                "example_code": "<div class=\"alert alert-light\" role=\"alert\">Light message.</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Pagination",
        "topic_description": "Bootstrap pagination for splitting content into pages.",
        "subtopics": [
            {
                "subtopic_name": "Basic Pagination",
                "example_code": "<ul class=\"pagination\">\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n</ul>"
            },
            {
                "subtopic_name": "Disabled Pagination",
                "example_code": "<ul class=\"pagination\">\n  <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n</ul>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Progress Bars",
        "topic_description": "Bootstrap progress bars to show task completion.",
        "subtopics": [
            {
                "subtopic_name": "Basic Progress Bar",
                "example_code": "<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 70%;\"></div>\n</div>"
            },
            {
                "subtopic_name": "Striped Progress Bar",
                "example_code": "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped\" style=\"width: 50%;\"></div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Tooltips",
        "topic_description": "Bootstrap tooltips for displaying additional information.",
        "subtopics": [
            {
                "subtopic_name": "Basic Tooltip",
                "example_code": "<button class=\"btn btn-primary\" data-toggle=\"tooltip\" title=\"Tooltip Text\">Hover Me</button>"
            },
            {
                "subtopic_name": "Tooltip Placement",
                "example_code": "<button class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Top Tooltip\">Top</button>\n<button class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Bottom Tooltip\">Bottom</button>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Cards",
        "topic_description": "Bootstrap cards for displaying content in a flexible container.",
        "subtopics": [
            {
                "subtopic_name": "Basic Card",
                "example_code": "<div class=\"card\">\n  <div class=\"card-body\">\n    <!-- Card content here -->\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Card Header and Footer",
                "example_code": "<div class=\"card\">\n  <div class=\"card-header\">Card Header</div>\n  <div class=\"card-body\">\n    <!-- Card content here -->\n  </div>\n  <div class=\"card-footer\">Card Footer</div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Breadcrumbs",
        "topic_description": "Bootstrap breadcrumbs for navigation.",
        "subtopics": [
            {
                "subtopic_name": "Basic Breadcrumbs",
                "example_code": "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Category</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Product</li>\n  </ol>\n</nav>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Carousel",
        "topic_description": "Bootstrap carousel is used for creating image sliders.",
        "subtopics": [
            {
                "subtopic_name": "Basic Carousel",
                "example_code": "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Carousel slides here -->\n</div>"
            },
            {
                "subtopic_name": "Carousel Items",
                "example_code": "<div class=\"carousel-inner\">\n  <div class=\"carousel-item active\">\n    <!-- Carousel item content here -->\n  </div>\n  <div class=\"carousel-item\">\n    <!-- Carousel item content here -->\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Carousel Controls",
                "example_code": "<a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Previous</span>\n</a>\n<a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Next</span>\n</a>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Pagination",
        "topic_description": "Bootstrap pagination for splitting content into pages.",
        "subtopics": [
            {
                "subtopic_name": "Basic Pagination",
                "example_code": "<ul class=\"pagination\">\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n</ul>"
            },
            {
                "subtopic_name": "Disabled Pagination",
                "example_code": "<ul class=\"pagination\">\n  <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n</ul>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Popovers",
        "topic_description": "Bootstrap popovers for additional content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Popover",
                "example_code": "<button class=\"btn btn-primary\" data-toggle=\"popover\" title=\"Popover Title\" data-content=\"Popover Content\">Click Me</button>"
            },
            {
                "subtopic_name": "Popover Placement",
                "example_code": "<button class=\"btn btn-secondary\" data-toggle=\"popover\" title=\"Top Popover\" data-placement=\"top\" data-content=\"Top Popover Content\">Top</button>\n<button class=\"btn btn-secondary\" data-toggle=\"popover\" title=\"Bottom Popover\" data-placement=\"bottom\" data-content=\"Bottom Popover Content\">Bottom</button>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap List Groups",
        "topic_description": "Bootstrap list groups for displaying lists of items.",
        "subtopics": [
            {
                "subtopic_name": "Basic List Group",
                "example_code": "<ul class=\"list-group\">\n  <li class=\"list-group-item\">Item 1</li>\n  <li class=\"list-group-item\">Item 2</li>\n</ul>"
            },
            {
                "subtopic_name": "Active and Disabled Items",
                "example_code": "<ul class=\"list-group\">\n  <li class=\"list-group-item active\">Active Item</li>\n  <li class=\"list-group-item disabled\">Disabled Item</li>\n</ul>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Forms",
        "topic_description": "Bootstrap styles for forms and form controls.",
        "subtopics": [
            {
                "subtopic_name": "Basic Form",
                "example_code": "<form>\n  <!-- Form controls here -->\n</form>"
            },
            {
                "subtopic_name": "Form Inputs",
                "example_code": "<input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n<input type=\"password\" class=\"form-control\" placeholder=\"Password\">"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Jumbotron",
        "topic_description": "Bootstrap jumbotron for showcasing important content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Jumbotron",
                "example_code": "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, World!</h1>\n  <p class=\"lead\">This is a simple jumbotron.</p>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Dropdowns",
        "topic_description": "Bootstrap dropdown menus.",
        "subtopics": [
            {
                "subtopic_name": "Basic Dropdown",
                "example_code": "<div class=\"dropdown\">\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Dropdown Button\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a class=\"dropdown-item\" href=\"#\">Item 1</a>\n    <a class=\"dropdown-item\" href=\"#\">Item 2</a>\n  </div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Modals",
        "topic_description": "Bootstrap modals for displaying dialogs.",
        "subtopics": [
            {
                "subtopic_name": "Basic Modal",
                "example_code": "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <!-- Modal content here -->\n    </div>\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Modal Trigger Button",
                "example_code": "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n  Open Modal\n</button>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Navbar",
        "topic_description": "Bootstrap navbar for site navigation.",
        "subtopics": [
            {
                "subtopic_name": "Basic Navbar",
                "example_code": "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <!-- Navbar content here -->\n</nav>"
            },
            {
                "subtopic_name": "Navbar Brand",
                "example_code": "<a class=\"navbar-brand\" href=\"#\">Brand</a>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Tabs",
        "topic_description": "Bootstrap tabs for organizing content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Tabs",
                "example_code": "<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#\">Tab 1</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Tab 2</a></li>\n</ul>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Accordions",
        "topic_description": "Bootstrap accordions for collapsible content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Accordion",
                "example_code": "<div class=\"accordion\" id=\"accordionExample\">\n  <!-- Accordion items here -->\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Forms",
        "topic_description": "Bootstrap styles for forms and form controls.",
        "subtopics": [
            {
                "subtopic_name": "Basic Form",
                "example_code": "<form>\n  <!-- Form controls here -->\n</form>"
            },
            {
                "subtopic_name": "Form Inputs",
                "example_code": "<input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n<input type=\"password\" class=\"form-control\" placeholder=\"Password\">"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Jumbotron",
        "topic_description": "Bootstrap jumbotron for showcasing important content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Jumbotron",
                "example_code": "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, World!</h1>\n  <p class=\"lead\">This is a simple jumbotron.</p>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Dropdowns",
        "topic_description": "Bootstrap dropdown menus.",
        "subtopics": [
            {
                "subtopic_name": "Basic Dropdown",
                "example_code": "<div class=\"dropdown\">\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Dropdown Button\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a class=\"dropdown-item\" href=\"#\">Item 1</a>\n    <a class=\"dropdown-item\" href=\"#\">Item 2</a>\n  </div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Modals",
        "topic_description": "Bootstrap modals for displaying dialogs.",
        "subtopics": [
            {
                "subtopic_name": "Basic Modal",
                "example_code": "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <!-- Modal content here -->\n    </div>\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Modal Trigger Button",
                "example_code": "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n  Open Modal\n</button>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Navbar Brand",
        "topic_description": "Adding a brand logo or text to the Bootstrap navbar.",
        "subtopics": [
            {
                "subtopic_name": "Navbar Brand Text",
                "example_code": "<a class=\"navbar-brand\" href=\"#\">My Website</a>"
            },
            {
                "subtopic_name": "Navbar Brand Logo",
                "example_code": "<a class=\"navbar-brand\" href=\"#\"><img src=\"logo.png\" alt=\"Logo\"></a>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Breadcrumbs",
        "topic_description": "Creating breadcrumb navigation for hierarchical content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Breadcrumbs",
                "example_code": "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Category</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Current Page</li>\n  </ol>\n</nav>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Alerts",
        "topic_description": "Displaying alert messages for various purposes.",
        "subtopics": [
            {
                "subtopic_name": "Basic Alert",
                "example_code": "<div class=\"alert alert-primary\" role=\"alert\">\n  This is a primary alert.\n</div>"
            },
            {
                "subtopic_name": "Dismissible Alert",
                "example_code": "<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n  This is a warning alert that can be dismissed.\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Progress Bars",
        "topic_description": "Displaying progress bars to indicate completion or status.",
        "subtopics": [
            {
                "subtopic_name": "Basic Progress Bar",
                "example_code": "<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 50%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n</div>"
            },
            {
                "subtopic_name": "Striped Progress Bar",
                "example_code": "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 75%;\"></div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Tooltips",
        "topic_description": "Adding tooltips to elements for additional information.",
        "subtopics": [
            {
                "subtopic_name": "Basic Tooltip",
                "example_code": "<button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip Text\">Hover Me</button>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Badges",
        "topic_description": "Displaying badges for notifications or counts.",
        "subtopics": [
            {
                "subtopic_name": "Basic Badge",
                "example_code": "<span class=\"badge badge-primary\">New</span>"
            },
            {
                "subtopic_name": "Badge with Links",
                "example_code": "<a href=\"#\" class=\"badge badge-danger\">5 Notifications</a>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Cards",
        "topic_description": "Creating cards to display content or information.",
        "subtopics": [
            {
                "subtopic_name": "Basic Card",
                "example_code": "<div class=\"card\">\n  <div class=\"card-body\">\n    This is a basic card.\n  </div>\n</div>"
            },
            {
                "subtopic_name": "Card with Image",
                "example_code": "<div class=\"card\">\n  <img src=\"card-image.jpg\" class=\"card-img-top\" alt=\"Card Image\">\n  <div class=\"card-body\">\n    This is a card with an image.\n  </div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Tables",
        "topic_description": "Styling tables for data presentation.",
        "subtopics": [
            {
                "subtopic_name": "Basic Table",
                "example_code": "<table class=\"table\">\n  <!-- Table content here -->\n</table>"
            },
            {
                "subtopic_name": "Striped Rows",
                "example_code": "<table class=\"table table-striped\">\n  <!-- Table content here -->\n</table>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Scrollspy",
        "topic_description": "Creating scrollspy navigation for single-page applications.",
        "subtopics": [
            {
                "subtopic_name": "Scrollspy Navigation",
                "example_code": "<nav id=\"navbarExample\">\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"#section1\">Section 1</a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"#section2\">Section 2</a></li>\n  </ul>\n</nav>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Alerts",
        "topic_description": "Displaying alert messages for various purposes.",
        "subtopics": [
            {
                "subtopic_name": "Basic Alert",
                "example_code": "<div class=\"alert alert-primary\" role=\"alert\">\n  This is a primary alert.\n</div>"
            },
            {
                "subtopic_name": "Dismissible Alert",
                "example_code": "<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n  This is a warning alert that can be dismissed.\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Collapse",
        "topic_description": "Creating collapsible elements and content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Collapse",
                "example_code": "<button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n  Toggle Content\n</button>\n<div class=\"collapse\" id=\"collapseExample\">\n  <div class=\"card card-body\">\n    This content can be collapsed.\n  </div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Alerts",
        "topic_description": "Displaying alert messages for various purposes.",
        "subtopics": [
            {
                "subtopic_name": "Basic Alert",
                "example_code": "<div class=\"alert alert-primary\" role=\"alert\">\n  This is a primary alert.\n</div>"
            },
            {
                "subtopic_name": "Dismissible Alert",
                "example_code": "<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n  This is a warning alert that can be dismissed.\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Collapse",
        "topic_description": "Creating collapsible elements and content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Collapse",
                "example_code": "<button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n  Toggle Content\n</button>\n<div class=\"collapse\" id=\"collapseExample\">\n  <div class=\"card card-body\">\n    This content can be collapsed.\n  </div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Carousel",
        "topic_description": "Creating image carousels or sliders.",
        "subtopics": [
            {
                "subtopic_name": "Basic Carousel",
                "example_code": "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Carousel content here -->\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Navs",
        "topic_description": "Creating navigation tabs or pills.",
        "subtopics": [
            {
                "subtopic_name": "Basic Navs",
                "example_code": "<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\" role=\"presentation\">\n    <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n  </li>\n  <li class=\"nav-item\" role=\"presentation\">\n    <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n  </li>\n</ul>\n<div class=\"tab-content\" id=\"myTabContent\">\n  <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">Home content</div>\n  <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">Profile content</div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap List Groups",
        "topic_description": "Creating styled list groups.",
        "subtopics": [
            {
                "subtopic_name": "Basic List Group",
                "example_code": "<ul class=\"list-group\">\n  <li class=\"list-group-item\">Item 1</li>\n  <li class=\"list-group-item\">Item 2</li>\n</ul>"
            },
            {
                "subtopic_name": "List Group with Badges",
                "example_code": "<ul class=\"list-group\">\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n    Item 1\n    <span class=\"badge badge-primary badge-pill\">5</span>\n  </li>\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n    Item 2\n    <span class=\"badge badge-primary badge-pill\">3</span>\n  </li>\n</ul>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Pagination",
        "topic_description": "Creating paginated content.",
        "subtopics": [
            {
                "subtopic_name": "Basic Pagination",
                "example_code": "<nav aria-label=\"Page navigation\">\n  <ul class=\"pagination\">\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n  </ul>\n</nav>"
            }
        ]
    },
    {
        "topic_name": "Bootstrap Alerts",
        "topic_description": "Displaying alert messages for various purposes.",
        "subtopics": [
            {
                "subtopic_name": "Basic Alert",
                "example_code": "<div class=\"alert alert-primary\" role=\"alert\">\n  This is a primary alert.\n</div>"
            },
            {
                "subtopic_name": "Dismissible Alert",
                "example_code": "<div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n  This is a warning alert that can be dismissed.\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>"
            }
        ]
    }

];

// console.log(bootstrapCheatSheet[0]);
export default BootstrapData;
