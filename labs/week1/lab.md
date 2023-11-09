# Week 01 | Lab (17.11.2023)

Welcome to the first lab of INFOMVIS 2023-2024!

***First step:***

Our labs are designed as work-books in the style of a self-guided tutorial. We ask you to read and work through the given example problems, and to hand in the code of your completed lab at the end of each week, together with your homework.

This week, you can work on the lab on your own. Usually, you will work on the lab in class and with your group. 

We embrace the concept of learning by doing. To truly master new programming and development skills, you have to spend the time to figure things out and try different approaches and examples.
However, you are not alone in this! INFOMVIS 2023-2024 staff is available for any questions that pop up along the way. We encourage you to pester them with questions, but at the same time, make sure that you come to the lab prepared and ready to code!

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

![Lab 1 - Preview](./infomvis2023-lab1-preview.png)

**You can find the image files on corresponding Github directory!**


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

Every HTML5 document requires a little bit of boilerplate code that you should just copy and paste every time you create a new file. A boilerplate is a piece of code that is usually copied with little or no alteration, much like a template, to speed up the creation of new files. In the case of HTML5 this includes several HTML tags (e.g. \<head>, \<html>, ...) that don't have visual equivalents on the website, but that are necessary to define the document's metadata.

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

In the above HTML snippet, the div-element has no attributes, so the only possible way to identify the element is by its tag name *div*. If there are multiple div tags on one page, which happens frequently, selecting just the above div element becomes a problem.

(2) ```<div id="book-123">The Value of Visualization</div>```

To solve this problem, we can give the element a unique ID: *book-123*. However, each element can only have a single ID, and each ID value can be used only once per page!

(3) ```<div class="book content">Visualization Analysis and Design</div>```

Any attribute or styling information that needs to be applied to multiple elements on a page should be done with a *class*. In the above example, we have assigned the div element to the class *book*, which allows us to select all HTML containers of the type *book*. At the same time, we have assigned the div element to the class *content*.

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
	* Add the ID ```infomvis2023-basics``` to the button
	* Add the classes ```btn``` and ```btn-primary``` to the button


-----

### The DOM

The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a hierarchically structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style, and content. Or in other words, it is a model that the browser generates, when it parses the HTML document.

The difference between HTML and DOM should be more understandable after the following interactive exercise.

-----

#### Activity 2

##### Web Developer Tools

Every modern-day web browser has built-in *developer tools* that expose the current state of the DOM and help us to better understand what is going on. In this exercise, we will use the *Web Inspector* to view the DOM tree of our document.


1. **Create a new folder ```js``` in your project, download the file ```dom-example.js``` and save it in your newly created folder**

	[dom-example.js](./assests/dom-example.js)


2. **Include the external JavaScript file that you just downloaded in your HTML document. Add the following line at the bottom of your previously created ```basics.html``` (inside the ```<body></body>```)**

	```
	<script src="js/dom-example.js"></script>
	```

	This script will listen to your button (*ID: infomvis2023-basics*). It will automatically deliver random facts if you click on the button.


3. **Open *basics.html* in your web browser and navigate to *Developer Tools***

	We strongly encourage you to use Google Chrome or Mozilla Firefox. On Mac OS, you can navigate to the Developer Tools using:

	- Chrome: View → Developer → Developer Tools
	- Firefox: Tools → Web Developer → Inspector

	Make sure to check out the keyboard shortcut of your system to open the developer tools!

4. **Inspecting the DOM with the *Web Inspector***

	In the default mode, the *Web Inspector* should be docked to the bottom of the window and split the page horizontally.

	We can see something that looks like the source code of the HTML document that you wrote in your editor. Some tags are probably collapsed. Actually, you are **not** viewing the raw content of your HTML document. What you are seeing is the visual representation of the DOM tree (after all scripts have run and potentially modified the original HTML source)!

	The HTML you write is parsed by the browser and turned into the DOM. In simple cases, this will look like your raw HTML, but if any JavaScript code has been executed, the current DOM may be different, as JavaScript commands can add, remove, and adjust the DOM dynamically.

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

With HTML you define the structure and content of the page and with CSS you set its style - things like fonts, colors, margins, backgrounds, etc.

A stylesheet will usually consist of a list of CSS rules that are inserted either in a ```<style>``` block in your HTML header or, more often, stored in an external file and included via the below line of code. Make sure to include an external style sheet always in the HTML header (inside the ```<head></head>``` elements of your HTML file).

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

In the above example, we have assigned our CSS rule to all div containers but if we want to style specific elements we can use the selectors *id* and *class*.

As you can see in the example below, IDs are preceded with a hash mark (*#article-1*), and class names are preceded with a period (*.error*). You can also use descendant selectors to address nested tags (*.article .warning*).


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


In this activity, you will use CSS to add custom styles to your HTML file.


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

	- Click on different lines in the *Elements*-panel to see the respective CSS properties. The rules are collected from inline styles, attached stylesheets, and user agent stylesheets. User-agent stylesheets are the browser's default properties, such as font size or margin.

	- Be mindful that rules that are specified later in a CSS file generally override rules that were specified earlier in the file, but not always. The true logic has to do with the specificity of each selector. The *div.content* selector would override the *div* rule even if it were listed first, simply because it is a more specific selector.

		The order of the CSS rules in the right panel helps you to identify the importance of the individual styles.

	- Similar to the DOM tree, you can also modify, add, and remove CSS rules and properties in the web inspector. This is a quick and easy way to try different styles directly in the browser (debugging), but keep in mind that the changes will be discarded if you reload the page. Try it out and modify your CSS in the browser!

	- If you include a specific color in your CSS properties the *Web Inspector* shows you a small button, linked to a color picker. This little tool can help you to find the desired color codes. Add a new CSS rule in the *Web Inspector* and change the font color of the headline!


-----

&nbsp;
## HTML, CSS & JS Frameworks

Rather than coding from scratch, frameworks enable you to utilize ready-made blocks of code to help you get started. They give you a solid foundation for what a typical web project requires and usually they are also flexible enough for customization.

In INFOMVIS2023 we use ***Bootstrap*** as an example open source HTML, JS, and CSS framework. It is one of the most widely used frameworks, it is easy to understand and it provides great documentation with many examples.

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

    Let's make use of bootstrap, shall we? One of the most basic but at the same time most useful features is bootstrap's grid system. Here's the link to the documentation: [https://getbootstrap.com/docs/5.2/layout/grid/](https://getbootstrap.com/docs/5.2/layout/grid/)

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

Please submit your completed lab 1 together with your homework submission (a single .zip file) via email (subject: INFOMVIS2023-Week01-Submission) e.oral@uu.nl. 

&nbsp;

-----


**Resources**

- Chapter 3 (up to page 36) in *D3 - Interactive Data Visualization for the Web* (Second Edition) by Scott Murray
- [https://developer.mozilla.org/en-US/docs/Web](https://developer.mozilla.org/en-US/docs/Web)
- [https://www.w3schools.com/](https://www.w3schools.com/)
- [https://observablehq.com/@d3](https://observablehq.com/@d3)

  




&nbsp;

