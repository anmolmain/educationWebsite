export var subjectName = "Angular";
var AngularData = [
    {
        "topic_name": "Angular Overview",
        "topic_description": "Angular is a popular JavaScript framework for building web applications. It provides a structured architecture, two-way data binding, and a wide range of features for building modern web apps.",
        "subtopics": [
            {
                "subtopic_name": "Creating a New Angular App",
                "example_code": "ng new my-app"
            },
            {
                "subtopic_name": "Running the Development Server",
                "example_code": "ng serve"
            },
            {
                "subtopic_name": "Angular CLI Commands",
                "example_code": "ng generate component my-component"
            },
            {
                "subtopic_name": "Building for Production",
                "example_code": "ng build --prod"
            }
        ]
    },
    {
        "topic_name": "Components",
        "topic_description": "Components are the building blocks of Angular applications. They encapsulate the user interface and logic of a part of the application.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Component",
                "example_code": "ng generate component my-component"
            },
            {
                "subtopic_name": "Component Templates",
                "example_code": "@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n})"
            },
            {
                "subtopic_name": "Component Logic",
                "example_code": "export class MyComponent implements OnInit {\n  constructor() { }\n  ngOnInit() { }\n}"
            },
            {
                "subtopic_name": "Using Components",
                "example_code": "<app-my-component></app-my-component>"
            }
        ]
    },
    {
        "topic_name": "Templates and Data Binding",
        "topic_description": "Templates in Angular are used to define the structure of your application's user interface. Data binding allows you to connect your component logic with the template.",
        "subtopics": [
            {
                "subtopic_name": "Interpolation",
                "example_code": "{{ data }}"
            },
            {
                "subtopic_name": "Property Binding",
                "example_code": "[property]=\"data\""
            },
            {
                "subtopic_name": "Event Binding",
                "example_code": "(event)=\"handleEvent($event)\""
            },
            {
                "subtopic_name": "Two-Way Data Binding",
                "example_code": "[(ngModel)]=\"data\""
            }
        ]
    },
    {
        "topic_name": "Directives",
        "topic_description": "Directives are special markers in the DOM that tell Angular to do something with a DOM element or component.",
        "subtopics": [
            {
                "subtopic_name": "Built-in Directives",
                "example_code": "*ngIf, *ngFor, *ngSwitch, [ngClass], [ngStyle]"
            },
            {
                "subtopic_name": "Creating Custom Directives",
                "example_code": "@Directive({ selector: '[appHighlight]' })"
            },
            {
                "subtopic_name": "Using Custom Directives",
                "example_code": "<p appHighlight>Highlight me!</p>"
            }
        ]
    },
    {
        "topic_name": "Services",
        "topic_description": "Services are used to share data or logic across different parts of your application. They are a way to keep your components lean and focused on their own tasks.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Service",
                "example_code": "ng generate service my-service"
            },
            {
                "subtopic_name": "Injecting Services",
                "example_code": "constructor(private myService: MyService) { }"
            },
            {
                "subtopic_name": "Using Services",
                "example_code": "this.myService.getData()"
            }
        ]
    },
    {
        "topic_name": "Routing",
        "topic_description": "Routing allows you to build a single-page application with navigation. You can define routes and associate components with them.",
        "subtopics": [
            {
                "subtopic_name": "Configuring Routes",
                "example_code": "const routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'about', component: AboutComponent },\n];"
            },
            {
                "subtopic_name": "Router Outlet",
                "example_code": "<router-outlet></router-outlet>"
            },
            {
                "subtopic_name": "Navigating Between Routes",
                "example_code": "<a routerLink=\"/home\">Home</a>"
            }
        ]
    },
    {
        "topic_name": "Forms",
        "topic_description": "Angular provides powerful tools for working with forms, including template-driven forms and reactive forms.",
        "subtopics": [
            {
                "subtopic_name": "Template-Driven Forms",
                "example_code": "<form (ngSubmit)=\"onSubmit()\">\n  <input [(ngModel)]=\"data\">\n</form>"
            },
            {
                "subtopic_name": "Reactive Forms",
                "example_code": "import { FormBuilder, FormGroup } from '@angular/forms';\n\nthis.myForm = this.fb.group({\n  name: [''],\n  email: ['']\n});"
            },
            {
                "subtopic_name": "Form Validation",
                "example_code": "Validators.required, Validators.email"
            }
        ]
    },
    {
        "topic_name": "HTTP Client",
        "topic_description": "Angular's HTTP client allows you to make HTTP requests to a server. It includes features for handling request and response data.",
        "subtopics": [
            {
                "subtopic_name": "Importing HttpClientModule",
                "example_code": "import { HttpClientModule } from '@angular/common/http';"
            },
            {
                "subtopic_name": "Making GET Requests",
                "example_code": "this.http.get('/api/data').subscribe(data => { /* handle data */ });"
            },
            {
                "subtopic_name": "Making POST Requests",
                "example_code": "this.http.post('/api/data', { data }).subscribe(response => { /* handle response */ });"
            }
        ]
    },
    {
        "topic_name": "Lifecycle Hooks",
        "topic_description": "Angular components have a set of lifecycle hooks that allow you to perform actions at various stages of a component's life.",
        "subtopics": [
            {
                "subtopic_name": "ngOnInit",
                "example_code": "ngOnInit() { /* initialization code */ }"
            },
            {
                "subtopic_name": "ngOnChanges",
                "example_code": "ngOnChanges(changes: SimpleChanges) { /* change handling code */ }"
            },
            {
                "subtopic_name": "ngOnDestroy",
                "example_code": "ngOnDestroy() { /* cleanup code */ }"
            }
        ]
    },
    {
        "topic_name": "Dependency Injection",
        "topic_description": "Angular's dependency injection system is used to provide dependencies to components and services in a hierarchical manner.",
        "subtopics": [
            {
                "subtopic_name": "Injecting Services",
                "example_code": "constructor(private myService: MyService) { }"
            },
            {
                "subtopic_name": "Providing Services",
                "example_code": "@Injectable({ providedIn: 'root' })"
            }
        ]
    },
    {
        "topic_name": "Angular Modules",
        "topic_description": "Angular modules are used to organize your application into functional units. Each module can contain components, services, and other features.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Module",
                "example_code": "ng generate module my-module"
            },
            {
                "subtopic_name": "Importing Modules",
                "example_code": "imports: [MyModule]"
            }
        ]
    },
    {
        "topic_name": "Angular CLI",
        "topic_description": "The Angular CLI (Command Line Interface) provides a set of powerful tools for developing and deploying Angular applications.",
        "subtopics": [
            {
                "subtopic_name": "Creating Components",
                "example_code": "ng generate component my-component"
            },
            {
                "subtopic_name": "Generating Modules",
                "example_code": "ng generate module my-module"
            },
            {
                "subtopic_name": "Building for Production",
                "example_code": "ng build --prod"
            }
        ]
    },
    {
        "topic_name": "State Management",
        "topic_description": "State management is crucial in Angular applications. You can use various state management libraries like NgRx, Akita, or build custom solutions.",
        "subtopics": [
            {
                "subtopic_name": "NgRx Store",
                "example_code": "StoreModule.forRoot(reducers, { initialState })"
            },
            {
                "subtopic_name": "Actions and Reducers",
                "example_code": "createAction('Add Item', props<{ item: Item }>())"
            }
        ]
    },
    {
        "topic_name": "Internationalization (i18n)",
        "topic_description": "Angular provides built-in support for internationalization and localization, allowing your app to support multiple languages and regions.",
        "subtopics": [
            {
                "subtopic_name": "Setting Up Translation Files",
                "example_code": "ng xi18n"
            },
            {
                "subtopic_name": "Translating Text",
                "example_code": "{{ 'Hello, World!' | translate }}"
            }
        ]
    },
    {
        "topic_name": "Authentication and Authorization",
        "topic_description": "Securing your Angular application is essential. You can implement authentication and authorization using libraries like Firebase Authentication or build custom solutions.",
        "subtopics": [
            {
                "subtopic_name": "Firebase Authentication",
                "example_code": "signInWithEmailAndPassword(email, password)"
            },
            {
                "subtopic_name": "JWT (JSON Web Tokens)",
                "example_code": "const token = jwt.sign({ userId }, secretKey);"
            }
        ]
    },
    {
        "topic_name": "Angular Material",
        "topic_description": "Angular Material is a UI component library that provides ready-to-use components for building a polished and modern user interface.",
        "subtopics": [
            {
                "subtopic_name": "Installation",
                "example_code": "ng add @angular/material"
            },
            {
                "subtopic_name": "Using Material Components",
                "example_code": "<mat-button>Click me</mat-button>"
            }
        ]
    },
    {
        "topic_name": "Error Handling",
        "topic_description": "Error handling in Angular involves handling errors that occur during application execution and providing a good user experience.",
        "subtopics": [
            {
                "subtopic_name": "Error Interceptor",
                "example_code": "intercept(request, next) { /* error handling code */ }"
            },
            {
                "subtopic_name": "Global Error Handling",
                "example_code": "ErrorHandler.handle(error);"
            }
        ]
    },
    {
        "topic_name": "Testing",
        "topic_description": "Testing is crucial for ensuring the reliability and correctness of your Angular applications. Tools like Jasmine and Karma are commonly used for Angular testing.",
        "subtopics": [
            {
                "subtopic_name": "Unit Testing",
                "example_code": "describe('MyComponent', () => { /* test cases */ });"
            },
            {
                "subtopic_name": "Integration Testing",
                "example_code": "beforeEach(async(() => { /* setup code */ }));"
            }
        ]
    },
    {
        "topic_name": "Deployment",
        "topic_description": "Deploying an Angular application involves building a production-ready bundle and hosting it on a web server or cloud platform.",
        "subtopics": [
            {
                "subtopic_name": "Building for Production",
                "example_code": "ng build --prod"
            },
            {
                "subtopic_name": "Hosting on Firebase",
                "example_code": "firebase deploy"
            },
            {
                "subtopic_name": "Deploying to AWS",
                "example_code": "aws s3 sync ./dist s3://my-angular-app"
            }
        ]
    },
    {
        "topic_name": "Angular Overview",
        "topic_description": "Angular is a popular JavaScript framework for building web applications. It provides a structured architecture, two-way data binding, and a wide range of features for building modern web apps.",
        "subtopics": [
            {
                "subtopic_name": "Creating a New Angular App",
                "example_code": "ng new my-app"
            },
            {
                "subtopic_name": "Running the Development Server",
                "example_code": "ng serve"
            },
            {
                "subtopic_name": "Angular CLI Commands",
                "example_code": "ng generate component my-component"
            },
            {
                "subtopic_name": "Building for Production",
                "example_code": "ng build --prod"
            }
        ]
    },
    {
        "topic_name": "Components",
        "topic_description": "Components are the building blocks of Angular applications. They encapsulate the user interface and logic of a part of the application.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Component",
                "example_code": "ng generate component my-component"
            },
            {
                "subtopic_name": "Component Templates",
                "example_code": "@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n})"
            },
            {
                "subtopic_name": "Component Logic",
                "example_code": "export class MyComponent implements OnInit {\n  constructor() { }\n  ngOnInit() { }\n}"
            },
            {
                "subtopic_name": "Using Components",
                "example_code": "<app-my-component></app-my-component>"
            }
        ]
    },
    {
        "topic_name": "Templates and Data Binding",
        "topic_description": "Templates in Angular are used to define the structure of your application's user interface. Data binding allows you to connect your component logic with the template.",
        "subtopics": [
            {
                "subtopic_name": "Interpolation",
                "example_code": "{{ data }}"
            },
            {
                "subtopic_name": "Property Binding",
                "example_code": "[property]=\"data\""
            },
            {
                "subtopic_name": "Event Binding",
                "example_code": "(event)=\"handleEvent($event)\""
            },
            {
                "subtopic_name": "Two-Way Data Binding",
                "example_code": "[(ngModel)]=\"data\""
            }
        ]
    },
    {
        "topic_name": "Directives",
        "topic_description": "Directives are special markers in the DOM that tell Angular to do something with a DOM element or component.",
        "subtopics": [
            {
                "subtopic_name": "Built-in Directives",
                "example_code": "*ngIf, *ngFor, *ngSwitch, [ngClass], [ngStyle]"
            },
            {
                "subtopic_name": "Creating Custom Directives",
                "example_code": "@Directive({ selector: '[appHighlight]' })"
            },
            {
                "subtopic_name": "Using Custom Directives",
                "example_code": "<p appHighlight>Highlight me!</p>"
            }
        ]
    },
    {
        "topic_name": "Services",
        "topic_description": "Services are used to share data or logic across different parts of your application. They are a way to keep your components lean and focused on their own tasks.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Service",
                "example_code": "ng generate service my-service"
            },
            {
                "subtopic_name": "Injecting Services",
                "example_code": "constructor(private myService: MyService) { }"
            },
            {
                "subtopic_name": "Using Services",
                "example_code": "this.myService.getData()"
            }
        ]
    },
    {
        "topic_name": "Routing",
        "topic_description": "Routing allows you to build a single-page application with navigation. You can define routes and associate components with them.",
        "subtopics": [
            {
                "subtopic_name": "Configuring Routes",
                "example_code": "const routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'about', component: AboutComponent },\n];"
            },
            {
                "subtopic_name": "Router Outlet",
                "example_code": "<router-outlet></router-outlet>"
            },
            {
                "subtopic_name": "Navigating Between Routes",
                "example_code": "<a routerLink=\"/home\">Home</a>"
            }
        ]
    },
    {
        "topic_name": "Forms",
        "topic_description": "Angular provides powerful tools for working with forms, including template-driven forms and reactive forms.",
        "subtopics": [
            {
                "subtopic_name": "Template-Driven Forms",
                "example_code": "<form (ngSubmit)=\"onSubmit()\">\n  <input [(ngModel)]=\"data\">\n</form>"
            },
            {
                "subtopic_name": "Reactive Forms",
                "example_code": "import { FormBuilder, FormGroup } from '@angular/forms';\n\nthis.myForm = this.fb.group({\n  name: [''],\n  email: ['']\n});"
            },
            {
                "subtopic_name": "Form Validation",
                "example_code": "Validators.required, Validators.email"
            }
        ]
    },
    {
        "topic_name": "HTTP Client",
        "topic_description": "Angular's HTTP client allows you to make HTTP requests to a server. It includes features for handling request and response data.",
        "subtopics": [
            {
                "subtopic_name": "Importing HttpClientModule",
                "example_code": "import { HttpClientModule } from '@angular/common/http';"
            },
            {
                "subtopic_name": "Making GET Requests",
                "example_code": "this.http.get('/api/data').subscribe(data => { /* handle data */ });"
            },
            {
                "subtopic_name": "Making POST Requests",
                "example_code": "this.http.post('/api/data', { data }).subscribe(response => { /* handle response */ });"
            }
        ]
    },
    {
        "topic_name": "Lifecycle Hooks",
        "topic_description": "Angular components have a set of lifecycle hooks that allow you to perform actions at various stages of a component's life.",
        "subtopics": [
            {
                "subtopic_name": "ngOnInit",
                "example_code": "ngOnInit() { /* initialization code */ }"
            },
            {
                "subtopic_name": "ngOnChanges",
                "example_code": "ngOnChanges(changes: SimpleChanges) { /* change handling code */ }"
            },
            {
                "subtopic_name": "ngOnDestroy",
                "example_code": "ngOnDestroy() { /* cleanup code */ }"
            }
        ]
    },
    {
        "topic_name": "Dependency Injection",
        "topic_description": "Angular's dependency injection system is used to provide dependencies to components and services in a hierarchical manner.",
        "subtopics": [
            {
                "subtopic_name": "Injecting Services",
                "example_code": "constructor(private myService: MyService) { }"
            },
            {
                "subtopic_name": "Providing Services",
                "example_code": "@Injectable({ providedIn: 'root' })"
            }
        ]
    },
    {
        "topic_name": "Angular Modules",
        "topic_description": "Angular modules are used to organize your application into functional units. Each module can contain components, services, and other features.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Module",
                "example_code": "ng generate module my-module"
            },
            {
                "subtopic_name": "Importing Modules",
                "example_code": "imports: [MyModule]"
            }
        ]
    },
    {
        "topic_name": "Angular CLI",
        "topic_description": "The Angular CLI (Command Line Interface) provides a set of powerful tools for developing and deploying Angular applications.",
        "subtopics": [
            {
                "subtopic_name": "Creating Components",
                "example_code": "ng generate component my-component"
            },
            {
                "subtopic_name": "Generating Modules",
                "example_code": "ng generate module my-module"
            },
            {
                "subtopic_name": "Building for Production",
                "example_code": "ng build --prod"
            }
        ]
    },
    {
        "topic_name": "State Management",
        "topic_description": "State management is crucial in Angular applications. You can use various state management libraries like NgRx, Akita, or build custom solutions.",
        "subtopics": [
            {
                "subtopic_name": "NgRx Store",
                "example_code": "StoreModule.forRoot(reducers, { initialState })"
            },
            {
                "subtopic_name": "Actions and Reducers",
                "example_code": "createAction('Add Item', props<{ item: Item }>())"
            }
        ]
    },
    {
        "topic_name": "Internationalization (i18n)",
        "topic_description": "Angular provides built-in support for internationalization and localization, allowing your app to support multiple languages and regions.",
        "subtopics": [
            {
                "subtopic_name": "Setting Up Translation Files",
                "example_code": "ng xi18n"
            },
            {
                "subtopic_name": "Translating Text",
                "example_code": "{{ 'Hello, World!' | translate }}"
            }
        ]
    },
    {
        "topic_name": "Authentication and Authorization",
        "topic_description": "Securing your Angular application is essential. You can implement authentication and authorization using libraries like Firebase Authentication or build custom solutions.",
        "subtopics": [
            {
                "subtopic_name": "Firebase Authentication",
                "example_code": "signInWithEmailAndPassword(email, password)"
            },
            {
                "subtopic_name": "JWT (JSON Web Tokens)",
                "example_code": "const token = jwt.sign({ userId }, secretKey);"
            }
        ]
    },
    {
        "topic_name": "Angular Material",
        "topic_description": "Angular Material is a UI component library that provides ready-to-use components for building a polished and modern user interface.",
        "subtopics": [
            {
                "subtopic_name": "Installation",
                "example_code": "ng add @angular/material"
            },
            {
                "subtopic_name": "Using Material Components",
                "example_code": "<mat-button>Click me</mat-button>"
            }
        ]
    },
    {
        "topic_name": "Error Handling",
        "topic_description": "Error handling in Angular involves handling errors that occur during application execution and providing a good user experience.",
        "subtopics": [
            {
                "subtopic_name": "Error Interceptor",
                "example_code": "intercept(request, next) { /* error handling code */ }"
            },
            {
                "subtopic_name": "Global Error Handling",
                "example_code": "ErrorHandler.handle(error);"
            }
        ]
    },
    {
        "topic_name": "Testing",
        "topic_description": "Testing is crucial for ensuring the reliability and correctness of your Angular applications. Tools like Jasmine and Karma are commonly used for Angular testing.",
        "subtopics": [
            {
                "subtopic_name": "Unit Testing",
                "example_code": "describe('MyComponent', () => { /* test cases */ });"
            },
            {
                "subtopic_name": "Integration Testing",
                "example_code": "beforeEach(async(() => { /* setup code */ }));"
            }
        ]
    },
    {
        "topic_name": "Deployment",
        "topic_description": "Deploying an Angular application involves building a production-ready bundle and hosting it on a web server or cloud platform.",
        "subtopics": [
            {
                "subtopic_name": "Building for Production",
                "example_code": "ng build --prod"
            },
            {
                "subtopic_name": "Hosting on Firebase",
                "example_code": "firebase deploy"
            },
            {
                "subtopic_name": "Deploying to AWS",
                "example_code": "aws s3 sync ./dist s3://my-angular-app"
            }
        ]
    },
    {
        "topic_name": "Angular Services",
        "topic_description": "Angular services are used to encapsulate and share logic and data across different parts of an application.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Service",
                "example_code": "ng generate service my-service"
            },
            {
                "subtopic_name": "Injecting a Service",
                "example_code": "constructor(private myService: MyService) { }"
            }
        ]
    },
    {
        "topic_name": "Angular Directives",
        "topic_description": "Angular directives allow you to extend HTML with custom behavior. Common directives include ngIf, ngFor, and ngSwitch.",
        "subtopics": [
            {
                "subtopic_name": "ngFor Directive",
                "example_code": "<ul>\n  <li *ngFor=\"let item of items\">{{ item }}</li>\n</ul>"
            },
            {
                "subtopic_name": "ngSwitch Directive",
                "example_code": "<div [ngSwitch]=\"condition\">\n  <div *ngSwitchCase=\"'case1'\">Content for case 1</div>\n  <div *ngSwitchCase=\"'case2'\">Content for case 2</div>\n  <div *ngSwitchDefault>Default content</div>\n</div>"
            }
        ]
    },
    {
        "topic_name": "Angular Routing Guards",
        "topic_description": "Angular routing guards allow you to control navigation and access to routes based on conditions.",
        "subtopics": [
            {
                "subtopic_name": "CanActivate Guard",
                "example_code": "canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree { /* guard logic */ }"
            },
            {
                "subtopic_name": "CanDeactivate Guard",
                "example_code": "canDeactivate(component: CanDeactivateComponent): Observable<boolean> | Promise<boolean> | boolean { /* guard logic */ }"
            }
        ]
    },
    {
        "topic_name": "Angular Custom Pipes",
        "topic_description": "Custom pipes in Angular allow you to create reusable transformations for data displayed in templates.",
        "subtopics": [
            {
                "subtopic_name": "Creating a Custom Pipe",
                "example_code": "import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({ name: 'myPipe' })\nexport class MyPipe implements PipeTransform { /* transformation logic */ }"
            },
            {
                "subtopic_name": "Using a Custom Pipe",
                "example_code": "{{ data | myPipe }}"
            }
        ]
    },
    {
        "topic_name": "Angular Lazy Loading",
        "topic_description": "Lazy loading in Angular involves loading parts of the application on-demand to improve initial load times.",
        "subtopics": [
            {
                "subtopic_name": "Lazy Loading Modules",
                "example_code": "const routes: Routes = [\n  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }\n];"
            },
            {
                "subtopic_name": "Preloading Strategies",
                "example_code": "RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })"
            }
        ]
    },
];

export default AngularData;
