// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', onload);
function onload () {
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
var myButton = window.document.getElementById("btnAddEmployee");
myButton.addEventListener("click", function () {
    'use strict';
    window.open('add-employee.html', 'mypopup');
});
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
}