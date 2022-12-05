function checkData(){
    var enterUser = document.getElementById('username').value;
    var enterPass = document.getElementById('pwd').value;
    var enterCMS = document.getElementById('cms').value;

    // getting data from local storage

    var getUser = localStorage.getItem('username');
    var getPass = localStorage.getItem('userpwd');
    var getCms = localStorage.getItem('usercms');

    if(enterUser == getUser){
        if(enterPass == getPass && enterCMS == getCms){
            alert("Login Successfully! Name is "+enterUser+" Your access level is "+enterCMS);
            location.href = "signout.html";
        }
    }
    else{
        alert("Invalid Information");
        location.href = "signin.html";
    }
}
