src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";

$(document).ready(function(){
   const userNameSU = document.getElementById('userNameSU').value; 
});

    
    function signUp(){
        var userNameSU = document.getElementById('userNameSU').value;
        var passwordSU = document.getElementById('passwordSU').value;
        
        if(localStorage.getItem(JSON.stringify(userNameSU)) !== null){
            alert('account already exists try signing in');
        }else{
            localStorage.setItem(JSON.stringify(userNameSU),JSON.stringify(passwordSU));
            sessionStorage.setItem(JSON.stringify(userNameSU), JSON.stringify(passwordSU));
            window.open('http://localhost:8383/TitanAccounting/landingPage.html');
            
        }
    }
    
        function signIn(){
        var userNameSI = document.getElementById('userNameSI').value;
        var passwordSI = document.getElementById('passwordSI').value;
        
        if((localStorage.getItem(JSON.stringify(userNameSI)) !== null) && (JSON.stringify(passwordSI) == localStorage.getItem(JSON.stringify(userNameSI)))){
            window.open('http://localhost:8383/TitanAccounting/landingPage.html');
        }else{
            alert('Username/password is incorrect or does not exist');
        }
        }
    
    function deletee(){
        localStorage.clear();
    }
    



function getUser(){
    var nameSet = document.getElementById('name');
    nameSet.innerHTML = userNameSU;
}

