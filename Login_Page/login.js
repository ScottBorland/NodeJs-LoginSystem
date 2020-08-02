const form = document.querySelector('form');

const API_URL = 'http://localhost:3000/api/user/login';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('psw');
    console.log('form submitted')

    const user = {
        "email": email, 
        "password": password
    };

    //form.style.display = 'none'

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => {
        if(!response.ok){
            alert("Incorrect email or password")
            throw new Error('Invalid Request')
        }else{
            form.reset();
            //Logged In Successfully - Redirect somewhere + send web token
        }
    })
    .catch((error) => {
        console.log(error);
    });
});
d