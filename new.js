loadEvents();
 function loadEvents(){
let sendButton = document.getElementById('send');
let contact=document.getElementById('contact');
 }   

function save(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let company = document.getElementById('company');
    let phone = document.getElementById('phone');
    let text = document.getElementById('text');

     
    name = name.value;
    localStorage.setItem('name', Json.stringify(name));
    
    email = email.value;
    localStorage.setItem('email', Json.stringify(email));

    comapny = company.value;
    localStorage.setItem('company', Json.stringify(company));

    phone = phone.value;
    localStorage.setItem('phone', Json.stringify(phone));

    text = text.value;
    localStorage.setItem('text',Json.stringify(text) );
}
   

    
