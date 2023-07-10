const image = document.getElementById('img');
const btn = document.getElementById('btn');
const txt = document.getElementById('txt-content');


btn.addEventListener('click',function(){

    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(Response => Response.json())
    .then(data =>txt.innerText= data.activity)    


})





    
