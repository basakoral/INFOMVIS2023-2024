# Week 01 | Lab

Welcome to the first lab of INFOMVIS2022!

***First step:***

Our labs are designed as work-books in the style of a self-guided tutorial. We ask you to read and work through the given example problems, and to hand in the code of your completed lab at the end of each week, together with your homework.

This week, you will work on the lab on your own. Usually, you will work on the lab in class and with a pair partner. This week, it is up to you if you want to work on the lab alone or with a pair partner.

We embrace the concept of learning by doing. To truly master new programming and development skills, you have to spend the time to figure things out and to try different approaches and examples.
However, you are not alone in this! INFOMVIS2022 staff is available for any questions that pop up along the way. We encourage you to pester them with questions, but at the same time, make sure that you come to the lab prepared and ready to code!

### Learning Objectives

After completing this lab you will be able to:

- Use several web development tools (Webstorm, Chrome/Firefox developer tools and Web Inspector, and the browser integrated console)
- Set up and modify HTML documents
- Understand the difference between HTML and DOM
- Define CSS rules to style web pages (with CSS selectors)
- Include front-end frameworks like *Bootstrap*


### Prerequisites

- You have installed a code editor such as *Webstorm* ([https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)). The free educational license can be obtained [here](https://www.jetbrains.com/community/education/#students). (You are free to use your own IDE, but we will only officially support Webstorm.)
- You have read Chapter 3 (up to page 36) in *D3 - Interactive Data Visualization for the Web* (Second Edition) by Scott Murray.
- We encourage you to use [Google Chrome](https://www.google.com/chrome/browser/desktop/) or [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/) as your primary web browser during all labs and homeworks. Those are the browsers we will use for grading.
- We also encourage you to take a look at Alex Lex's [interactive lecture on html](http://dataviscourse.net/2015/lectures/lecture-html/) at the University of Utah.



&nbsp;
## Setup
During the next weeks, you will be working through the book *D3 - Interactive Data Visualization for the Web* (Second Edition) by Scott Murray.
The book provides a lot of sample code (see page 5 of the book, *Using Sample Code*). The book is written for D3 v4 (the latest version is v6 as of Aug 2020). We will go over the changes in syntax for v7 as we progress through the book.

- Download and extract the sample code for the book now. It can be found [here](https://github.com/alignedleft/d3-book/releases).
- Set up a directory on your computer for the sample code and remember its location.
- Starting next week, while working through the book, you should look at and run the sample code. It will help you prepare for labs and homeworks!

For today's lab, you should prepare the following:

- Create a directory for your HTML project
- You can already create subdirectories ''css'' and ''js''.
- You will add all remaining files while working through the activities of this lab.


&nbsp;
## Fundamentals of Web Development

In this course, we will use HTML, CSS, JavaScript, and SVG to create interactive data visualizations. Before starting with extensive visualization projects and learning more about the JavaScript library D3, we will use the first lab to get a fundamental understanding of these basic web technologies.

The next minutes are split up into multiple theoretical and interactive sections. All the activities are consecutive and will result in a basic web page with random facts about Utrecht. We will provide the facts and the interactive component. Your task is to set up the markup (HTML) and the style (CSS) of the website. After completion of this lab you will be well-prepared for the homework and the following labs.

*The result of the first lab may look like the following screenshot. Most of the design decisions are up to you - so feel free to be creative and come up with your own ideas.*

![Lab 1 - Preview](./infomvis2022-lab1-preview.png)

**You can find the image files on SURFdrive directory!**


### HTML (Hypertext Markup Language)

As you have read, HTML is used to structure content for web browsers. It enables us to differentiate between content and structure of a document.

*A brief HTML example:*

	<h1>Curious George Goes to a Chocolate Factory</h1>
	<p>
		When <i>George</i> and the man with the yellow hat stop to shop at a chocolate
		factory store, George becomes curious about how chocolates are made...
	</p>


*Result as shown in a web browser:*

![HTML Example](./html-example.png)

A comprehensive and well structured list of HTML elements can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

#### HTML Boilerplate

Every HTML5 document requires a little bit of boilerplate code that you should just copy and past every time you create a new file. A boilerplate is a piece of code that is usually copied with little or no alteration, much like a template, to speed up the creation of new files. In the case of HTML5 this includes several HTML tags (e.g. \<head>, \<html>, ...) that don't have visual equivalents on the website, but that are necessary to define the document's metadata.

Make sure to get familiar with this structure (notice that WebStorm pre-populates new HTML files automatically!):

```
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
This is where the main content of the page goes.
</body>
</html>
```

#### CSS Selectors: Classes and IDs

Classes and IDs are extremely helpful for selecting specific HTML elements. Your CSS and JavaScript code will rely heavily on classes and IDs to identify elements.

(1) ```<div>Interactive Data Visualization</div>```

In the above HTML snippet, the div-element has no attributes, so the only possible way to identify the element is by its tag name *div*. If there are multiple div-tags in one page, which happens frequently, selecting just the above div element becomes a problem.

(2) ```<div id="book-123">The Value of Visualization</div>```

To solve this problem, we can give the element a unique ID: *book-123*. However, each element can only have a single ID, and each ID value can be used only once per page!

(3) ```<div class="book content">Visualization Analysis and Design</div>```

Any attribute or styling information that needs to be applied to multiple elements on a page should be done with a *class*. In the above example, we have assigned the div element to the class *book*, that allows us to select all HTML containers of the type *book*. At the same time, we have assigned the div element to the class *content*.

Elements can be assigned multiple classes, simply by separating them with a space.

-----

#### Activity 1

1. **Create a new HTML file ```basics.html``` in your code editor**

	In Webstorm you will have to create a new project (empty project), and then add a new basics.html file to your project. You can then not only edit your file in Webstorm, but also view the HTML in a browser by running basics.html from within Webstorm (right-click on basics.html -> run). Internally, Webstorm will start its own web server for serving your basics.html page, which will become important once we start including D3 elements into our HTML pages.

2. **Copy the HTML boilerplate from above into your empty file**

3. **Add some structure to the *body* of your new document and try different HTML elements. The content should be appropriate for the HTML tags you are using (e.g., a headline vs. a paragraph).**

	Make sure to include at least:

	* A top-level headline
	* An empty div-container (will be filled with facts later)
	* A hyperlink to any other page
	* An image
	* A button (will trigger the search for a new fact)

	Open your file ```basics.html``` in a web browser to see the results.

4. **Add the following classes and IDs to the elements**

	* Add the ID ```content``` to the div container
	* Add the ID ```infomvis2022-basics``` to the button
	* Add the classes ```btn``` and ```btn-primary``` to the button


-----

### The DOM

The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a hierarchical structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content. Or in other words, it is a model that the browser generates, when it parses the HTML document.

The difference between HTML and DOM should be more understandable after the following interactive exercise.

-----

#### Activity 2

##### Web Developer Tools

Every modern-day web browser has built-in *developer tools* that expose the current state of the DOM and help us to better understand what is going on. In this exercise we will use the *Web Inspector* to view the DOM tree of our document.


1. **Create a new folder ```js``` in your project, download the file ```dom-example.js``` and save it in your newly created folder**

	[dom-example.js](./assests/dom-example.js)


2. **Include the external JavaScript file that you just downloaded in your HTML document. Add the following line at the bottom of your previously created ```basics.html``` (inside the ```<body></body>```)**

	```
	<script src="js/dom-example.js"></script>
	```

	This script will listen to your button (*ID: infomvis2022-basics*). It will automatically deliver random facts if you click on the button.


3. **Open *basics.html* in your web browser and navigate to *Developer Tools***

	We strongly encourage you to use Google Chrome or Mozilla Firefox. On Mac OS, you can navigate to the Developer Tools using:

	- Chrome: View → Developer → Developer Tools
	- Firefox: Tools → Web Developer → Inspector

	Make sure to check out the keyboard shortcut of your system to open the developer tools!

4. **Inspecting the DOM with the *Web Inspector***

	In the default mode, the *Web Inspector* should be docked to the bottom of the window and split the page horizontally.

	We can see something that looks like the source code of the HTML document that you wrote in your editor. Some tags are probably collapsed. Actually, you are **not** viewing the raw content of your HTML document. What you are seeing is the visual representation of the DOM tree (after all scripts have run and potentially modified the original HTML source)!

	The HTML you write is parsed by the browser and turned into the DOM. In simple cases this will look like your raw HTML, but if any JavaScript code has been executed, the current DOM may be different, as JavaScript commands can add, remove, and adjust the DOM dynamically.

5. **Update the DOM: Click on the previously created button!**

	Every time you click on the button, a function in the external JavaScript file that we provided for you will be triggered that adds a new paragraph (random fact) to the DOM tree. You can see the new elements in the browser window and the current state of the DOM in the *Web Inspector*.

	Your ```basics.html``` remains unchanged. We have only modified the DOM with JavaScript, not the actual document. Your modifications will be discarded if you reload the page.

	If you have trouble getting this step to work you should double check that you have added the appropriate IDs to your HTML tags!

6. **Update the DOM: Delete nodes from the DOM tree**

	You can also use the *Web Inspector* to modify your DOM directly. You can edit the content, add attributes or delete nodes. Try it out and delete some paragraphs!

	The developer tools of modern browsers usually include many other tools to make the life of a web developer easier. In the next activity we will use the Web Inspector to modify CSS and next week we will use the JavaScript Console for debugging.

	**From now on, whenever you are programming HTML, CSS, JavaScript, or D3, you should always have the developer console open. This helps you in debugging and figuring out what is going on in the code!**

-----


### Cascading Style Sheets (CSS) - *Making things pretty!*

With HTML you define the structure and content of the page and with CSS you set its style - things like fonts, colors, margins, backgrounds etc.

A stylesheet will usually consist of a list of CSS rules that are inserted either in a ```<style>``` block in your HTML header, or, more often, stored in an external file and included via the below line of code. Make sure to include an external style sheet always in the HTML header (inside the ```<head></head>``` elements of your HTML file).

	<link rel="stylesheet" href="css/style.css">

This assumes that you have a separate file ```style.css``` in the folder ```css```.

*CSS styles consist of selectors and properties, grouped in curly brackets. A property and its value are separated by a colon, and the line is terminated with a semicolon.*

A simple rule in CSS can look like the following:

	div {
		font-size: 15px;
		padding: 30px 10px;
		background-color: #F7F7F7;
		color: black;
		border: 2px solid red;
	}

![CSS Example Result](./css-example.png)


If you are searching for an exhaustive list of style properties we recommend [Mozilla's Developer Platform](https://developer.mozilla.org/en-US/docs/Web/CSS) or [w3schools.com](http://www.w3schools.com/CSS/). Some CSS properties are needed quite often, so you should try to memorize them.

In the above example we have assigned our CSS rule to all div containers but if we want to style specific elements we can use the selectors *id* and *class*.

As you can see in the example below, IDs are preceded with a hash mark (*#article-1*) and class names are preceded with a period (*.error*). You can also use descendant selectors to address nested tags (*.article .warning*).


*Example:*

	<!DOCTYPE HTML>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
  	  	<title>Simple CSS</title>
 	   	<style>
 	   	#article-1 {
 	   	  text-decoration: underline;
 	   	}
        	.error {
            	  font-weight: bold;
            	  color: red;
        	}
        	.article .warning {
          	  color: blue;
        	}
   		</style>
	</head>
	<body>

	<div class="article" id="article-1">Some text</div>

	<div class="article">
		Some other text
		<div class="warning">and a warning</div>
	</div>

	<div class="article error">Error!</div>

	</body>
	</html>

*Result:*

![CSS Example 2 Result](./css-example-2.png)

-----

#### Activity 3


In this activity you will use CSS to add custom styles to your HTML file.


1. **Create an external CSS file ```style.css``` and include it in your HTML document ```basics.html```**

2. **Add several CSS rules to your stylesheet. You can choose the design parameters freely (e.g., decisions about fonts, font size, colors or scales) but make sure to include at least:**

	- *ID Selector* (e.g. *#content*)
	- *Class Selector*
	- *Descendant Selector* for the dynamically created Utrecht facts (paragraphs)
	- Custom *Hover-Effect* for hyperlinks
	- *Padding* and *Margin* properties
	- *Color* or *Background-Color* properties

	You can play around with different CSS parameters, but don't worry too much right now about making your webpage look beautiful, we will come back to the design at the end of the lab.

3. **Inspecting the CSS with the *Web Inspector***

	If you are working on a more sophisticated problem it can be very useful to analyze your CSS rules with the *Web Inspector*. The CSS styles in the right panel match the currently selected DOM element.

	- Click on different lines in the *Elements*-panel to see the respective CSS properties. The rules are collected from inline styles, attached stylesheets and user agent stylesheets. User agent stylesheets are the browser's default properties, such as font-size or margin.

	- Be mindful that rules that are specified later in a CSS file generally override rules that were specified earlier in the file, but not always. The true logic has to do with the specificity of each selector. The *div.content* selector would override the *div* rule even if it were listed first, simply because it is a more specific selector.

		The order of the CSS rules in the right panel helps you to identify the importance of the individual styles.

	- Similar to the DOM tree, you can also modify, add and remove CSS rules and properties in the web inspector. This is a quick and easy way to try different styles directly in the browser (debugging), but keep in mind that the changes will be discarded if you reload the page. Try it out and modify your CSS in the browser!

	- If you include a specific color in your CSS properties the *Web Inspector* shows you a small button, linked to a color picker. This little tool can help you to find the desired color codes. Add a new CSS rule in the *Web Inspector* and change the font color of the headline!


-----

&nbsp;
## HTML, CSS & JS Frameworks

Rather than coding from scratch, frameworks enable you to utilize ready-made blocks of code to help you get started. They give you a solid foundation for what a typical web project requires and usually they are also flexible enough for customization.

In INFOMVIS2022 we use ***Bootstrap*** as an example open source HTML, JS and CSS framework. It is one of the most widely used frameworks, it is easy to understand and it provides a great documentation with many examples.

The question whether a framework can be useful depends on the individual project and on the developer. Therefore, it is up to you to decide if you want to use it in your homeworks or projects.

Here is a summary of the main aspects of *Bootstrap*:

* **Open source** HTML, CSS, and JS framework
* Provides a **base styling** for common used HTML elements
* The **grid system** helps you to create multi-column and nested layouts, especially if your website should work on different devices
* Extensive list of **pre-styled components** (navigation, dropdown-menu, forms, tables, icons ...)
* **Customizable**: All CSS rules can be overridden by your own rules
* **Compatible** with the latest versions of all major browsers


-----

#### Activity 4


In the last activity you will download and include the Bootstrap JavaScript library in your project.


1. **Getting started with Bootstrap**

	[http://getbootstrap.com/](https://getbootstrap.com/)

	Click on ```Get started```

2. **Bootstrap CSS**

    Copy-paste the provided stylesheet ```<link>``` into the ```<head>``` of ```basics.html``` to load bootstrap's CSS.Use the ```Copy``` button in the upper right to avoid errors.

    Every time you work with CSS libraries/frameworks you should insert them right before your own stylesheets. Thereby your rules are prioritized and you can override the default properties of the libraries. Lastly, notice that all the bootstrap files have been minified and thus contain a ```.min.``` in their name.

	> *The purpose of minification is to increase the speed of websites, by removing spacing, indentation, newlines and comments. These elements are not required to successfully run CSS in a browser. The best practice of many developers is to maintain a regular version of the CSS file and when rolling out the project, the stylesheet is transformed to the optimized version.*

3. **Bootstrap JS**

	Bootstrap provides some JavaScript components, too. In this lab our focus is on CSS, but you should include the *Bootstrap JavaScript Bundle*, otherwise there may be problems with some components.

    Just like you did with bootstrap's CSS file, copy-paste bootstrap's JS bundle script tag and load it in your ```basics.html```. Once again, use the ```Copy``` button in the upper right to avoid errors. Place the ```<script>``` near the end of your pages, right before the closing ```</body>``` tag.
    In your header link to the bootstrap minified CSS: ```bootstrap.min.css```

   >Note that we are linking to online versions of the CSS and the Javascript libraries. Alternatively, we could download local copies into the project directory, and link to them.

4. **Reload ```basics.html```in your browser**

	* Do you notice any changes?
	* Open the *Web Inspector* and check the different styles

5. **Bootstrap Grid**

    Let's make use of bootstrap, shall we? Once of the most basic but at the same time most useful feature is bootstrap's grid system. Here's the link to the documentation: [https://getbootstrap.com/docs/5.2/layout/grid/](https://getbootstrap.com/docs/5.2/layout/grid/)

    Below, you will find an example of the bootstrap grid. It is important to understand the hierarchy that the grid system uses: A div-container, i.e. ```<div class="container">``` serves as a parent for one or more div-rows, i.e. ```<div class="row">```, while a div-row serves as the parent for multiple div-columns, i.e. ```<div class="col">```.
    ```
   <div class="container">
       <div class="row">
           <div class="col">
               One of three columns
           </div>
           <div class="col">
               One of three columns
           </div>
           <div class="col">
               One of three columns
           </div>
       </div>
   </div>
   ```

   Bootstrap's grid system allows you to tweak the width of a column and its siblings easily: Underneath the hood, each row is divided into 12 pieces and, thus, you can piece together your rows so that they add up to '12'. For example, two div-columns with the class ```.col-6``` will result in a symmetric two-column-layout. You might want to give that a try.    

6. **Bootstrap components - Navbar & others**

	Now, it's time to explore bootstrap's documentation in depth. Maybe there are some components that could be useful? Go to the official Bootstrap website and skim over the different styles and pre-configured components: [http://getbootstrap.com/components/](http://getbootstrap.com/components/)

	Feel free to add whatever component you like. However, we'd like you to add at least a Navbar with a dropdown-menu. Search for the *Navbar* component, find the proper example, and copy the HTML example code in your ```basics.html```. Try it in your browser afterwards. Adding new Bootstrap elements to your HTML page is often very quick and easy, by using the example code on the bootstrap webpage.

6. **Override Bootstrap styles**

	- Add custom CSS rules to change the *Background-Color* and the Hover-State of the previously created button in your ```style.css```.

	- We assume that you do not know the CSS selectors or properties for changing the background color and the hover-state yet. Search for it online, either in google or at [W3 school](https://www.w3schools.com/cssref/sel_hover.asp). Example search term: CSS background color.

	This allows us to make full use of Bootstrap's potential. We can use boilerplates for different components, add custom content and override some styles subsequently.

	*Keep in mind: If you have to override too many styles, it can be easier to work without a framework.*

&nbsp;

Bootstrap is a very popular front-end framework for web projects but there are also alternatives:

- [uikit](https://getuikit.com/)
- [Foundation](http://foundation.zurb.com/)
- [PureCSS](http://pureCSS.io/)

Additionally, much of the alignment functionality Bootstrap offers is now possible with [CSS3 Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

-----

#### Bonus Activities (optional!)

These bonus activities are not required, but we recommend that you try them!

1. **Beautify basics.html**

	Play around with different CSS styles. Think of the design of webpages you like and try to recreate that look. Look at CSS files of pages you like.

2. **Try other Bootstrap components**

	Go back to the Bootstrap website and look at their [examples](https://getbootstrap.com/docs/5.2/examples/). Include some other Bootstrap components in your ```basics.html``` file.

	*Just copy and paste the respective boilerplate codes and play around with the styles.*

-----

#### Submission of lab

You have now completed the activities of the first part of Lab 1 and should have a basic understanding of HTML, CSS, and how you can style your webpage based on CSS selectors and libraries like Bootstrap. This knowledge will enable you to complete the first part of Homework 1!

Please submit your completed lab 1 together with your homework submission on SURFdrive. 

If you have worked on the lab with a pair partner, please specify your partner's name as a comment at the top of your html file.

&nbsp;

-----


**Resources**

- Chapter 3 (up to page 36) in *D3 - Interactive Data Visualization for the Web* (Second Edition) by Scott Murray
- [https://developer.mozilla.org/en-US/docs/Web](https://developer.mozilla.org/en-US/docs/Web)




&nbsp;

## Fundamentals of Web Development (JavaScript)

### Introduction


*From now on, and in all upcoming labs and homeworks we will use the common abbreviation JS for the term JavaScript.*

This lab includes three activities and covers JS basics. It is intended to solidify your understanding of JS so that you are able to write your own code in upcoming exercises. If you already know JS well, feel free to skim the text and jump right to the activites. However, if you are new to JS or need a refresher, make sure to read the text closely!

*The result of this lab may look like the following screenshot. Among other things, you will work with data from amusement parks and museums and do some array manipulations and filtering. At the end you will use JS to call a function that will render a pre-configured bar chart.*

![Lab 2 - Preview](./infomvis2022-lab2-preview.png)

### A short reiteration of the basic concepts of JavaScript (JS)

We assume that you have completed the pre-reading on JS, so here we are only showing you some examples and use cases of JS basics.

#### Variables

```javascript
// Variables in JS are loosely typed

// String
let month = "February";

// Integer
let day = 4;

// Double
let temperature = 34.36;

// Boolean
let winter = true;
```


#### Data Structures

##### Arrays
* Arrays can store a sequence of values, and contain any type of data.
* Use bracket notation ```[]``` to define or access an array.

```javascript
// Array with integer values
let numbers = [1, 2, 3, 100, 500, 4];

// Array with strings
let fruits = ["Orange", "Banana", "Apple"];

// Empty array declaration
let names = [];

// Access the elements of an array
fruits[0]; 	// Returns: Orange
fruits[1]; 	// Returns: Banana

// Adding array elements
fruits.push("Mango");	// adds a new element to fruits

// Access the length of an array using the length attribute
let numberOfFruits = fruits.length;

// You can nest arrays (multidimensional)
let nestedNumbers = [[1, 2], [3, 4], [5, 6]];
```

> You can do much more with arrays than shown here. Again, check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) if you have no experience with JavaScript or difficulties with some concepts. Arrays are very important for data visualization, so take the time to go through this at home!


##### Objects

* Objects are the second type of compound data types in JS.
* Use curly brackets ```{}``` to define an object and list *properties* and *values*.

```javascript
// JS object with four properties
let course = {
	id: "INFOMVIS2022",
	name: "Visualization",
	students: 30,
	active: true
}

// Accessing an object via dot notation, specifying the name of the property
course.id; 		// Returns: INFOMVIS2022
course.students;	// Returns: 30

// We can include arrays in objects
let course = {
	id: "INFOMVIS2022",
	students: ["Luuk", "Michelle", "Lucas", "Anne"]
};

// And we can also create arrays of objects
let courses = [
	{ id: "INFOMVIS2022", name: "Visualization" },
	{ id: "INFOMPR", name: "Pattern Recognition" }
];

// To access this data we just follow the trail of properties
courses[1].id; 	// Returns: INFOMPR

// Keep in mind: [...] means array and {...} means object!
```

##### JSON (JavaScript Object Notation)

* JSON is a popular data-interchange format for APIs (application program interfaces) and therefore very important for our future tasks.
* It is basically a JS object, with the only difference being that the property names are surrounded by double quotation marks.

```javascript
// JSON object
let course = {
	"id": "INFOMVIS2022",
	"name": "Visualization",
	"students": 30,
	"active": true
}
```

&nbsp;

-----

## Activity I

1. **Use the JavaScript Web Console**

	As we have already learned, there are some developer tools in our web
	 browsers that make programing a bit easier. Normally, we include JS code in HTML files and
	  then open these files in the browser. But we can also use the *Console* to type JS code
	   directy in the browser. We've also provided more information about the console, how to use
	    it as a debugging tool and what's going on underneath the hood [here](####the-console).

	* Open your developer-tools (in your browser) and switch to the tab ***Console***

	* Create a few variables and try out some mathematical operators to see how it works. The console accepts one line of code at a time.

	* Type in the examples below, line by line.

		Examples:

		```javascript		
		(1) let message = "I am learning JS"
		(2) message

		(1) let cities = ["Tokio", "Berlin", "San Francisco"]
		(2) cities[0]
		(3) cities [2]

		(1) let numeric = 12
		(2) numeric / (1 + 2)
		```

	*If you need multiple lines (e.g. JSON object) you can write the code in an editor and copy it into the console. This is an easy and quick way to test out code. Furthermore, the console is an essential tool for debugging. We will give it a try soon, but first continue with step (2).*

2. **JS data structure**

	Now it is your turn to apply your acquired knowledge! Come up with a *proper compound JS data structure* to store the following information and make sure that its values are simple and efficient.

	We have data for **three attractions** in an amusement park that we want to store. Each amusement ride has several attributes:

	- ID
	- Name
	- Price in USD
	- List with opening days (some attractions are open only on specific days, like weekends)
	- Limited access for children (yes / no)


	*You can make up the actual values for each of those attributes. We are mainly interested in the following: How would you store this data in code? Which data structure(s) would you use?  We suggest that you start with pen and paper to design your data structure (or your local code editor). Which JS data structure would you use (basic data types, arrays, objects, etc.)? Which data types (string, boolean, etc.) would you use to represent the data? Once you know how you want to implement it, continue to step (3).*

3. **Create a new HTML file and JS file and implement the data structure**

	JS can be included directly in HTML or in a separate file with *.js* suffix and then referenced. Generally, including JS in a separate file is the preferred method:

	```javascript
	// Included directly
	<script type="text/javascript">
		let message = "test";
	</script>

	// Referenced (at the bottom of the <body> tag, below other included javascript libraries)
	<script type="text/javascript" src="js/myscript.js"></script>
	```

	Make up some example data (3 amusement rides, with the above described attributes) and implement your data structure in JS.

4. **Write messages to the web console**

	The console is an essential tool for debugging. It shows logged security alerts, warnings, errors, informational messages etc. When you are creating scripts, you can write your own debug messages to the console:

	```javascript
	console.log("My debug message");

	let debugId = 12;
	console.log("Another debug message with id: " + debugId);
	```

	Use ```console.log()``` to print some information of your dataset:

	* Name of the first amusement ride
	* All days when the second attraction is open
	* First item of the list of opening days from the second amusement ride
	* There is a 50% discount for your third attraction! Print the reduced price.

&nbsp;

-----




You should already be familiar with **control structures**, **loops** and **functions**. The following just shows some examples and the correct syntax for using those structures.


#### Control Structures & Loops

##### IF-STATEMENT

```javascript
let numericData = 10;

// Regular if statement
if (numericData >= 10) {
	console.log("Equal or greater than 10");
} else if (numericData > 0 && numericData < 10) {
	console.log("Between 0 and 10");
} else {
	console.log("Less than 1");
}

// The ternary operator can be used as a compact alternative to an if-statement
// CONDITION ? WHAT_HAPPENS_IF_TRUE : WHAT_HAPPENS_IF_FALSE
let result = (numericData >= 10) ? "greater than or equal to 10" : "less than 10";
let result = (numericData % 2 === 0) ? "even" : "odd";
```

##### FOR-LOOP

```javascript
// (1) Loop through a block of code 5 times (printing the value of i each time to the console)
for (let i = 0; i < 5; i++) {
	console.log(i);
}

// (2) Loop through each of the values in an array
let arrayWithNames = ["Jack", "Anna", "Mike", "Susan"];
for (let i = 0; i < arrayWithNames.length; i++) {
	console.log(arrayWithNames[i]);
}

// (3) Loop through the properties of an object
let person = { firstName: "John", lastName: "Doe", age: 24 };
for (let property in person) {
	console.log(property + ": " + person[property]);
}


// (4) The holy grail of JS loops:
// makink use of object oriented JS, the forEach loop is an array methode
// that iterates over all elements in the array. The index of the element
// and the element itself are available inside the loop via an anonymous callback function.
// That's definitely a lot to wrap your head around, but once you get used to it, this loop is pure magic.

# # # # # # # # # # # # # # # # # # # # # # # # # # #
arrayWithNames.forEach( (element, index) => {
	console.log(index + ": " + element);
});
# # # # # # # # # # # # # # # # # # # # # # # # # # #
```

*Result:*
![Lab 2 - For-Loops](./infomvis2022-for-loop-examples.png)


#### Functions

Here we list a few examples to show you the syntax for functions. In the following weeks you will learn more about anonymous functions, callbacks etc.

```javascript
// Call a function
toCelsius(34);

// Function (with input parameter and return value)
function toCelsius(fahrenheit) {
	return (5/9) * (fahrenheit-32);
}

// Another function call
console.log("Write something to the web console");

// Function used as a variable
let temperature = "Current temperature: " + toCelsius(34) + " Celsius";
```


> To create a **local variable**, use the keyword ```let```. *Local* refers to the current execution context. When used within a function these variables are **private to that function**, however, when they are declared outside a function they are global.

&nbsp;

-----

## Activity II

*In this exercise you should use your data structure from the previous activity (amusement rides) and add two short functions to the JS file.*

1. **Create a new function: doublePrices()**

	This function takes your data structure as an input variable. You should loop through all the amusement rides, and modify their prices (*2). (Note: You will be modifying the original data here, but that is fine. You do not need to create a deep copy of the data.)

	```javascript
	// Calling the function
	let amusementRidesDouble = doublePrices(amusementRides);

	// Implementation of the function
	function doublePrices(amusementRides) {

		// TODO: Modify data here ...

	}
	```

	You can add a ```console.log(amusementRidesDouble);``` at the end to look at the result of your code.

	> Pro tip: In JS, when you pass a primitive type variable (e.g., string or number) to a function, it is passed by value. On the other hand, if you pass an object, it is passed by reference. To try out the difference, check out this [JSFiddle code snippet](https://jsfiddle.net/ywn5vno5/). If you don't know the difference between pass-by-value and pass-by-reference, don't worry about it for now. But you might want to come back to this eventually.

	&nbsp;

2. **Modify the function doublePrices() to double all prices, except for the second item in your list of amusement rides**

	&nbsp;

3. **Create a second function: debugAmusementRides()**

	In this function, loop through the modified list of attractions and write the **name** and the new **price** for each item to the console.

	```javascript
	// The + operator can be used to concatenate strings/variables.
	let firstName = "John";
	let lastName = "Doe";
	let name = firstName + " " + lastName;

	console.log(name); 	// Returns: John Doe
	```
	&nbsp;

4. **Changing the DOM with JS**

	Now we want to display some attributes of our amusement rides directly on the website, not just the JS console. To do this, we first have to create a new HTML element and then fill the content of this element dynamically with JS.

	The easiest way to modify the content of an HTML element is by using its *innerHTML* property. This implies that you have to create a string for the HTML snippet you want to insert first, and then set the *innerHTML* property. For example, you can create a new string variable and extend it in a for-loop, before you assign it to the *innerHTML property*.

	Here is an example that you can copy and paste into your HTML file:

	```javascript
	<div id="content-1"></div>
	<div id="content-2"></div>

	<script type="text/javascript">
		// Write HTML with JS
		document.getElementById("content-1").innerHTML = '<h1>Headline</h1>...and some text';

		// Loop through array, build HTML block and finally display it on the page
		let fruits = ["Orange", "Banana", "Apple"];
		let result = '';
		for (let i = 0; i < fruits.length; i++) {
			result += fruits[i] + "<br/>";
		}
		document.getElementById("content-2").innerHTML = result;
	</script>
	```
	Note that this example includes the JS code directly in the HTML file. Usually it's preferrable to link to an external javascript file. Try it out!

	Now it's your turn! Update the HTML with the following content:

	* **Add a new HTML element to your document with a specific ID** (e.g. ```div```).
	* **Create a new function** or duplicate debugAmusementRides() that loops through all amusement rides and **displays the name and the new prices on the website**.

&nbsp;

-----


### More JavaScript

Here we introduce some more advanced JavaScript concepts, that will be very important once we start working with D3. Don't worry, we will reiterate over them with more examples in the next labs in connection with D3.


#### Functions are Objects

In JavaScript, functions are objects which can be *called*. They take arguments and they return values. But because of their object-like characteristics, they are also just values that can be stored in variables and passed on.

There is an alternative way of defining functions:

```javascript
// We assign a function to the variable 'message'
let message = function(firstName) {
    return "Hello, I'm " + firstName + ".";
}

// We can call the function to get the expected message
console.log(message("Sarah"));	// Returns: Hello, I'm Sarah.
```
And a more advanced example:

```javascript
let person = { firstName: "Sarah", age: 24, profession: "Student" };

// Add a new variable to the class 'person' called 'message'. Store a function in 'message'.
person.message = function() {
	return "Hello, I'm " + this.firstName + "!";
}
console.log(person); // Returns your new person object

console.log(person.message()); // Returns: Hello, I'm Sarah.
```

In these examples, the current *scope* - the environment in which the function executes in - is important.

> The default scope for executing functions is the *Window Object* which is a browser level object representing the actual browser window/tab. Additionally, we have also used the keyword ```this```. In the global execution context (outside of the function) ```this``` refers to the global object. Inside a function, the value of ```this``` depends on how the function is called.

So that means, if you run the function in the person's scope (second example), you can access the first name via ```this```. If you use ```this.firstName``` in a function by itself (e.g. without the scope of the person object) it will give you an error, because your window object has no attribute ```firstName```.

If this still seems confusing to you, you can read up on this on the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). We will also come back to this in later labs.


#### Array Manipulation with higher-order functions

JS offers several functions for fast array manipulation. These functions usually rely on concepts from functional programming and can be hard to grasp at the beginning. We will come back to them in more detail later, but below you find a first introduction.
If you want to read up on higher-order functions, here is a [link](http://eloquentjavascript.net/05_higher_order.html).

The ***filter()*** method creates a new array with the elements that meet a condition implemented by the provided function.

```javascript
// ---- Filter Example 1 - Get all cities except London ----

let cities = ["Vienna", "Paris", "London", "London"];

// Pass a function to cities.filter()
let filteredCities = cities.filter(checkCity);

// Implementation of passed function
function checkCity(value) {
  return value != "London";
}

filteredCities // Returns: ["Vienna", "Paris"]

console.log(filteredCities);


// ---- Filter Example 2 - Get all numbers which are >= 10 and have array indices > 3 ----

let numericData = [1, 20, 3, 40, 5, 60, 7, 80];

// Use an anonymous function in numericData.filter
// (the anonymous function takes the array element's current value and index as parameters)
let filteredNumericData = numericData.filter( (value, index) => {
	return (value >= 10) && (index > 3);
});

filteredNumericData // Returns: [60, 80]
console.log(filteredNumericData);

```

For more information on ***filter()*** you can take a look at [this tutorial](http://adripofjavascript.com/blog/drips/filtering-arrays-with-array-filter.html).


The ***sort()*** method sorts the items in an array. No new array object will be created during execution.

```javascript
// ---- Sort Example 1 - Filter array with strings (default sorting) ----

let cities = ["Vienna", "Paris", "London", "Munich", "Toronto"];
cities.sort();
cities 	// Returns: ["London", "Munich", "Paris", "Toronto", "Vienna"]
console.log(cities);


// ---- Sort Example 2 - Filter array with objects ----
// We are specifying a function that defines the sort order

let products = [
	{ name: "laptop", price: 800 },
	{ name: "phone", price:200},
	{ name: "tv", price: 1200}
];

// Sort ascending by the 'price' property
products.sort( (a, b) => {
	return a.price - b.price;
});

// Sort descending by the 'price' property
products.sort( (a, b) => {
	return b.price - a.price;
});
```
The ***map()*** method creates a new array with the results of calling a provided function on every element of the original array.

```javascript
// ---- Map Example 1 - Calculate the square root ----

let numericData = [1, 4, 9];
let roots = numericData.map(Math.sqrt);

roots	// Returns: [1, 2, 3]


// ---- Map Example 2 - Double the prices ----

let products = [
	{ name: "laptop", price: 800 },
	{ name: "phone", price:200},
	{ name: "tv", price: 1200}
];

let expensiveProducts = products.map(doublePrice);

function doublePrice(elem){
	elem.price = elem.price * 2;
	return elem;
}

expensiveProducts // Returns: [{ name: "laptop", price: 1600 }, { name: "phone", price:400}, { name: "tv", price: 2400}]
```

*You will learn more about other useful array manipulation methods (e.g. ```join()```, ```reduce()```, ...) in our next labs.*


&nbsp;
-----


### Debugging

You've learned about how to use your browser's built-in web developer tools
. However, so far you've only learned how to use these tools to inspect the DOM and analyze the tree
 structure of HTML elements. Today, we want you to start using the **console** as well as the
  **sources** panel of your dev tools. 
   
#### The console 
   
You've already used the console extensively in activity I. Every browser has a debugging console
, which is a command line interface in your browser that can execute snippets
   of code. JavaScript comes with a (window) console object, that allows you to interact with
    this debugging console. The most prominent amongst many [methods](https://www.w3schools.com/jsref/obj_console.asp) is the .log() method that writes a message to the console. The reason why console.log
    () is such a prominent line in JavaScript is because it allows you to double check that your variables and data structures are indeed
       what you expect them to be - you can think of it like a sanity-check print-statement in
        python. 
     
#### The sources panel 

While for smaller architectures, it is very often more practical to use console.log()
 to debug your code and get to the root of your bug, there is a much more powerful tool that
  comes with the dev tools, which is particularly helpful when you first need to get an overview
   and don't know where to start debugging. In your sources panel, you cannot only view files
   , but i.a. also pause and explore your code using breakpoints and use **watch** to track
    how variables change and get updated while running through your code breakpoint by breakpoint.

![Breakpoints](./sources_01.png)


How to get set up breakpoints and explore using watch:
- first, go to the sources panel
- then open the js file that contains the code you want to debug (by clicking on it)
- next, click on the line number where you would want to place a break - a blue arrow will appear
 (see screenshots)
- set as many stops as you want/as necessary
- reload the page
- Your debugger is now running. A message in a yellow box overlaying your browser window saying
 "Paused in debugger" is indicating that. Also, the navigation arrows of your breakpoint tool are
  now no longer grayed out and ready to be used
 - next, you can either use the scope tab to explore the behavior of all local and global
  variables while going through the breakpoints or
- you could switch to the **Watch** tab and just name the variables you want to monitor
- in order to watch just the variables you're interested, you can just start typing the name of the
 variable and the dev tools will autocomplete the name (see screenshots)
- the listed variables will now reflect the state of the webapp at the particular breakpoint.

![Watch](./sources_02.png)


-----

## Activity III

This activity summarizes most of the learned concepts of the first two labs. It includes different aspects of HTML, CSS and JS and will result in a bar chart visualization.

We will provide a template with a basic *HTML structure*, a *dataset* (stored in a JSON array) and a *complete JS function* that renders a bar chart with D3. Your primary tasks are data filtering and controlling the workflow. In the following labs we will introduce D3 and show you how to create these visualizations yourself.

**Data:**

- The dataset (provided with the code template) consists of 60 attractions around the world. Each attraction has the following properties:
	-  ```Location``` *(name, city and country)*
	-  ```Category``` *(theme park | water park | museum)*
	-  ```Visitors``` *(annual visitors in 2013)*
	-  ```Entry``` *(paid | free)*
- The JSON array with objects is stored in the global variable ```attractionData```.
- Data Source: TEA/AECOM 2013 Theme Index and Museum Index

1. **Download template for 'week01_lab_part2 js', unzip it and open it as a new project in Webstorm:**

	[download week-01_lab_part2.zip](https://surfdrive.surf.nl/files/index.php/s/7yZvgpOe7AuTVQX)

2. **Familiarize yourself with the provided HTML document: ```index.html```**

	Look at the source code, its HTML elements, and which files (JS, CSS) are included.

3. **Array sorting and using the Chrome DevTools**

	Open the JS file ```week01_lab_part2.js``` (*js* folder). Most of the tasks you need to complete should be implemented in the function: *dataFiltering()*.

	We have included a template of the function, and have created a local variable ```attractions``` from the global variable and we have called the function right before. You should work with the local variable ```attractions``` - don't override the global one.

	In this exercise we're interested in finding the attractions with the most visitors. We've added some code that sorts the ```attractions``` array by the number of advisors. However, if you look at the console log that prints the sorted array, you'll notice that the sorting isn't working.

	**We'll use the Chrome DevTools to debug this issue.**
		
	- Open the Chrome Developer Tools pane (View -> Developer -> Developer Tools)
	- Click on the `Sources` tab . You'll notice that the HTML/JS/CSS files you're currently
	 working on are listed here. 
	 - Click on the ***week01_lab_part2.js*** file.
        ![Watch](./week-01_lab_sources_panel.png)

	- From this file view, we are able to set [breakpoints](https://developer.chrome.com/docs/devtools/javascript/breakpoints/) that let you step through your code as it executes, which is an incredibly powerful debugging tool. **Add breakpoints on lines 14 and 15 as shown below and refresh the page.**
        ![Watch](./week-01_lab_breakpoint.png)

	- You'll notice now that your code stops executing at line 14. If you hover over the
	 ```attractions```, you can view the value assigned to the variable.
	- If you press the blue resume button, you'll see that the execution jumped down to line 15
	, which is the next breakpoint. By hovering over ```a.visitors``` you can see that the value is undefined. This is our bug.
	- You can also step forward line-by-line, disable all breakpoints, and step into, out of, and
	 over functions through the buttons at the top right of the debugger by the resume button.
	- If you switch to the Console tab and type in ```a``` and pressing enter, you'll notice you
	 can also interact with the local variables from the console. This is a good tool for testing out code without having to reload the page.
	- From the current value of ```a``` or ```b```, you'll notice there's a property that holds
	 the number of visitors that's capitlized slightly differently than it is in line 15. This is the bug!
	- Disable your breakpoints by clicking on them. Now go back to WebStorm and update your code
	  so that visitors is capitalized correctly. When you refresh the page the log that prints the array should show that it's sorted.

4. **Filter the array**
	We want to show the *top five global attractions* with the most annual visitors in a bar chart. There are 60 attractions in the dataset, so you have to create a new array or modify the variable ```attractions```. *Suggestion: Filter your sorted array to get the first five rows.*

5. **Call the function: renderBarChart(attractions)**

	- This function will automatically render a bar chart with the top attractions in the div-container with the id: ```#chart-area```.
	- You must include a JSON array with attractions as a parameter (array length: 5)
	- If there is a problem, check the web console and try to debug your code (e.g., by using ```console.log()``` statements)
	- If you are still in class, don't hesitate to ask TFs for help! Otherwise, you can use Piazza or office hours!

6. **Extend array filtering**

	As you might have seen already, there is a *select-box* in the HTML document. You can select different categories but right now, nothing happens.

	In the next task you should call a function *dataManipulation()* if someone changes the select-box and then, inside the function, filter the attractions by the selected category:

	* Add the attribute ```onchange="dataManipulation()"``` to the select-box (in the HTML file). The function ```dataManipulation()``` will be automatically called whenever the user changes the value of the select box. However, you will need to create that function!
	* In your JS file you can use the following code snippet to get the selected category. Make sure to change "SELECT-ID" to the ID of the select-box.

		```javascript
		let selectBox = document.getElementById("SELECT-ID");
		let selectedValue = selectBox.options[selectBox.selectedIndex].value;
		```
		Make sure this part is working, by printing out *selectedValue* in the console whenever the select-box selection has changed, before continuing.

	* Before searching for the top attractions and calling *renderBarChart()*: check if the selected category is "all", otherwise filter the attractions by category.

	*If everything has been configured correctly, the bar chart will be updated automatically after selecting a category.*

&nbsp;

-----

#### Bonus Activity (optional!)

- **Add custom styles (CSS)**

	We have included *Bootstrap* and a couple of CSS rules to style the bar chart. Add a new stylesheet or modify ```style.css``` to create an individual design.
	To change the style of the D3 components you will have to add new elements to your css. D3 uses ```<svg>``` tags in the DOM, and you might want to look up properties like *fill* or *stroke*. We've also provided code for you to implement hover interactions in the form of a tooltip, which is classed ```tooltip``` in the DOM. In order to enable this functionality, you must add a placeholder div of id ```tooltip``` to your HTML file. Inside your newly minted div, create a span of id ```value```. We encourage you to play around with adding more content to the tooltip, as well as changing the tooltip's styling in CSS.
&nbsp;

-----

In the last activity you have implemented a function which reacts to the user input (changing a select-box value) and updates the chart immediately. So that means, you have done everything, apart from drawing the bars, to create an interactive data visualization. Next week, we will start with the JS library D3 and you will learn how to draw these SVG charts yourself.
&nbsp;

-----

#### Submission of lab

Congratulations, you have now completed all activities of the first Lab.

*See you next week!*

Please include the code of your completed activity 3 in your homework submission. Read the homework
 documentation for more detail.

&nbsp;

-----


**Resources**

- Chapter 3 (p. 36-52) in *D3 - Interactive Data Visualization for the Web* (Second Edition) by Scott Murray
- [https://developer.mozilla.org/en-US/docs/Web](https://developer.mozilla.org/en-US/docs/Web)
- [http://dataviscourse.net/2015/lectures/lecture-javascript/](http://dataviscourse.net/2015/lectures/lecture-javascript/)
- [http://hangar.runway7.net/javascript/guide](http://hangar.runway7.net/javascript/guide)


