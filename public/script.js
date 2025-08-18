let user = "";
let password = "";
window.onload = function() {
    try {
        user = localStorage.getItem(login)[0];
        password = localStorage.getItem(login)[1];
    }
    catch(error) {
       login(); 
       console.log(error);
    }
};
function login() {
    user = prompt("Enter your HAC Username");
    password = prompt("Enter your HAC Password");
    if (user === null || password === null) {}
    else {
        let data = [user,password];
        localStorage.setItem("login", data);
    }
}