function save(event) {
    
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const text = document.getElementById('text').value;

    const contactDetails = {
        name,
        email,
        company,
        phone,
        text,
    };
    localStorage.setItem('contactDetails', JSON.stringify(contactDetails));
}




   

    
