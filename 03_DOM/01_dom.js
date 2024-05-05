// Window
// global object
// browser's window
// All global JavaScript objects, functions, and variables automatically become members of the window object.



// DOM(document object model)
// all html code get converted into a JS object called as document.
// When a web page is loaded, the browser creates a Document Object Model of the page.
// The HTML DOM model is constructed as a tree of Objects



// BOM (browser obejct model)
//  modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.








// HTML

// access element 
// 1. getElementbyID() return single
// 2. getElementsbyClassName() returns multiple. array like but actually html collections
// 3. getElementsbyTagName() returns multiple. arraly like but actually html collections
// 4. $0 selected element in dev tools
// 5. querySelector() we can use it to select element just like we do in CSS. we use it and pass it to a string just like CSS selector. returns single and first.
// 6. querySelectorAll returns all




// upade existing content
// .innerHTML   -> get an element or all of its descendents HTML content/ set an element's HTML content, renders the tag which is inside 
// .outerHTML
// .textContent -> can get and set textual content , dont renders the tag inside it , show the content whose display is set to hidden also
// .innerText   -> can get and set textual content , display hidden not shown




// adding new Element/content
// .createElement();
// then use it and add it wherever u want it like appendChild which will add at the end




// creating Text Node
// 1. let newPara = document.createElement('p');
//      let textPara = document.createTextNode('I am the text');
//      newPara.appendChild(textPara);
//      content.appendChild(newPara);
// 2. let myPara = document.createElement('p');
//      myPara.textContent = 'I am the text';
//      content.appendChild(myPara)


// insertAdjacentHTML()
// has to be called with 2 arg (where, what)
// where -> beforebegin, afterbegin, beforeend, afterend



// remove
// removeChild() -> opp. of appendChild()
// a parent element 
// the child element too remove
// parent.removeChild(childElement)



// easy way without parent
// child.parent.remove(child);







// CSS

// style    -> single property change
// cssText  -> multiple property change
// setAttribute -> dont necessarily used to style we can also add attributes.
// className    -> gives string 
// classList    -> gives string array of classes -> add(), remove(), toggle(), contains().