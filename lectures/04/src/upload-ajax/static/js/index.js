(function(){
    "use strict";
        
    window.addEventListener('load', function(){
        
        api.onError(function(err){
            console.error("[error]", err);
        });
        
        api.onError(function(err){
            let error_box = document.querySelector('#error_box');
            error_box.innerHTML = err;
            error_box.style.visibility = "visible";
        });
        
        api.onUserUpdate(function(usernames){
            document.querySelector('#users').innerHTML = '';
            usernames.forEach(function(username){
                let element = document.createElement('div');
                element.className = "user";
                element.innerHTML = `
                     <div class="username">${username}</div>
                    <img src="/api/users/${username}/profile/picture/"/>
                `;
                document.querySelector('#users').prepend(element);
            });
        });
        
        document.querySelector('#add_user').addEventListener('submit', function(e){
            e.preventDefault();
            let username = document.querySelector('#add_user input[name="username"]').value;
            let picture = document.querySelector('#add_user input[name="picture"]').files[0];
            document.querySelector('#add_user').reset();
            api.addUser(username, picture);
        });
    });
    
}());



