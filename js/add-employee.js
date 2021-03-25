// HANDLE THE LOAD EVENT OF THE WINDOW
window.document.addEventListener("DOMContentLoaded", init, false);
function init (){
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
var width= 800;
var height=700;
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width, height);
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((window.screen.width-width)/2), ((window.screen.height-height)/2));
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
var myButton =window.document.getElementById('submit');
myButton.addEventListener("click", function() {

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
window.close();
});
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
document.getElementById("empForm").addEventListener("submit", function(event)
    {  
        event.preventDefault();
    });
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
var iden = document.getElementById("id").value;
var name = document.getElementById("name").value;
var text = document.getElementById("extension").value;
var email = document.getElementById("email").value;
var department = document.getElementById("department").value;
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
window.opener.document.write('ID:'+ iden+ '\n'); 
window.opener.document.write('Name:'+ name+'\n');
window.opener.document.write('Extension:'+ text+'\n');
window.opener.document.write('Email:'+ email +'\n');
window.opener.document.write('Department:'+ department+'\n');
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP


// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE



// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW



}