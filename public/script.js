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
    let userr = prompt("Enter your HAC Username");
    if (userr === null) {return;}
    let passwordd = prompt("Enter your HAC Password");
    if (passwordd === null) {return;}
    let data = [userr,passwordd];
    user = userr; password = passwordd;
    localStorage.setItem("login", JSON.stringify(data));
    document.getElementById("user").innerHTML = user;
}