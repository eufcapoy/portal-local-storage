function addData(){
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pwd').value;
    var email = document.getElementById('email').value;
    var mobilenumber = document.getElementById('telnum').value;
    var gender = document.getElementById('gender').value;
    var cms = document.getElementById('cms').value;
    
    // storing data

    localStorage.username = username;
    localStorage.userpwd = pass;
    localStorage.usercms = cms;
}