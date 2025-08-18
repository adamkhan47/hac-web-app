let user = "";
let password = "";
window.onload = function() {
    try {
        let data = JSON.parse(localStorage.getItem("login"));
        user = data[0];
        password = data[1];
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
        localStorage.setItem("login", JSON.stringify(data));
    }
}