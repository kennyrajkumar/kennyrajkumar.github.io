var currentNode;
var homepagetext = "Welcome to our Website";

function start()
{
    insertText();
}

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

function insertText()
{
    var newNode = createNewNode(homepagetext);
    currentNode = document.getElementById( "homepage-text" );
    currentNode.appendChild(newNode);
}
