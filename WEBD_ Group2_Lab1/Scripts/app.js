/*
     Name: Andrei Sorescu, Kenny Rajkumar
     File: app.js 
     Desc: Executes functions needed to run the website for WEBD6021 - Lab 1. 
     Date: February 11, 2022 
*/

var currentNode;
var homepagetext = "Welcome to our Website";
var projectHeading = "Top 3 Projects";
var aboutHeading = "About Us!";

function start()
{
    //insertText("homepage-text", homepagetext);
    insertText("project-header", projectHeading);
    changeNavName();
    insertNavItem();
    insertBefore()
}

window.alert(document.getElementById("title").value);

window.addEventListener("load", start, false);

function createNewNode( text )
{
    var idcount = 0;

    var newNode = document.createElement("h1");
    nodeId = "new" + idcount;
    ++idcount;
    newNode.setAttribute("id", nodeId );
    newNode.appendChild( document.createTextNode( text ) );
    return newNode;
}

function createHeadingNode( text )
{
    var idcount = 0;

    var newNode = document.createElement("h1");
    nodeId = "new" + idcount;
    ++idcount;
    newNode.setAttribute("id", nodeId );
    newNode.appendChild( document.createTextNode( text ) );
    return newNode;
}

function createParagraphNode( text )
{
    var idcount = 0;

    var newNode = document.createElement("p");
    nodeId = "new" + idcount;
    ++idcount;
    newNode.setAttribute("id", nodeId );
    newNode.appendChild( document.createTextNode( text ) );
    return newNode;
}

function insertText(id, text)
{
    var newNode = createNewNode(text);
    currentNode = document.getElementById( id );
    currentNode.appendChild(newNode);
}
// Function: changing Nav item "Products" to "Projects"
function changeNavName()
{
    var newNode = document.createElement( "a" );
    newNode.setAttribute("id", "projects");
    newNode.setAttribute("class", "nav-item nav-link");
    newNode.setAttribute("href", "#");
    text = " Projects";

    var iconNode = document.createElement( "i" );
    iconNode.setAttribute("class", "fa-solid fa-grip");
    newNode.appendChild( iconNode );

    newNode.appendChild( document.createTextNode( text ) );
    
    var currentNode = document.getElementById( "projects" );
    currentNode.parentNode.replaceChild(newNode, currentNode);
}

function insertNavItem()
{
    var newNode = document.createElement( "a" );
    newNode.setAttribute("id", "human-resources");
    newNode.setAttribute("class", "nav-item nav-link");
    newNode.setAttribute("href", "#");
    text = " Human Resources";

    var iconNode = document.createElement( "i" );
    iconNode.setAttribute("class", "fa-solid fa-person");
    newNode.appendChild( iconNode );

    newNode.appendChild( document.createTextNode( text ) );

    var currentNode = document.getElementById("contact");
    currentNode.parentNode.insertBefore(newNode, currentNode);
}

function submitForm()
{
    var name = document.getElementById("input-name").value;
    var email = document.getElementById("input-email").value;
    var contact = document.getElementById("input-contact").value;
    var message = document.getElementById("input-message").value;

    console.log("Contact Info\nName: " + name + "\nEmail: " + email + "\nPhone Number: " + contact + "\nMessage: " + message);

}

function redirect()
{
    submit.addEventListener("click", function (evt) {
        evt.preventDefault();
        window.location.replace("www.google.ca");
        return false; 
       });
}



