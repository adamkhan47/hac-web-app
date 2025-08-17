let user = "";
let password = "";
let storage = localStorage.getItem(data);
window.onload = function() {
    if(storage === null) {
        login();
    }
};
function login() {
    user = prompt("Enter your HAC Username");
    password = prompt("Enter your HAC Password");
}