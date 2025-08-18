let user = "";
let password = "";
window.onload = function() {
    try {
        let data = JSON.parse(localStorage.getItem("login"));
        user = data[0];
        password = data[1];
        document.getElementById("user").innerHTML = user;
    }
    catch(error) {
       login(); 
       console.log(error);
    }
};
function login() {
    user = prompt("Enter your HAC Username");
    if (user === null) {return;}
    password = prompt("Enter your HAC Password");
    if (password === null) {return;}
    let data = [user,password];
    localStorage.setItem("login", JSON.stringify(data));
    document.getElementById("user").innerHTML = user;
}