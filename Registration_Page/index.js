const form = document.querySelector('form');

const API_URL = 'http://localhost:3000/api/user/register';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const name = formData.get('uname');
    const password = formData.get('psw');
    console.log('form submitted')

    const user = {
        "email": email, 
        "name": name,
        "password": password
    };
    console.log(user)

    //form.style.display = 'none'

    var res;

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
          }
    })
    .then(response => {
        if(!response.ok){
            alert("Invalid request. Ensure username and password are longer than 6 characters and email is not already registered to an Autotune account")
            throw new Error('Invalid Request')
        }else{
            form.reset();
            //Registered Successfully - Redirect somewhere / automatically log them in
        }
    })
    .catch((error) => {
        console.log(error);
    });
});




