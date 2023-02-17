
let email = document.forms['Form']['email']
let password = document.forms['Form']['password']
let confirmPass = document.forms['Form']['confirmPassword']

let emailError = document.getElementById('emailError')
let passwordError = document.getElementById('passwordError')
let confirmPassError = document.getElementById('confirmPassError')
const validateForm = () => {

    if(email.value === ''){
        email.style.border = '2px solid red'
        emailError.innerHTML = 'email must be filled out'
    }else{
        email.style.border = '2px solid green'
    }

    if(password.value === ''){
        password.style.border = '2px solid red'
        passwordError.innerHTML = 'password must be filled out'
    }else{
        password.style.border = '2px solid green'
    }

    if(confirmPass.value === ''){
        confirmPass.style.border = '2px solid red'
        confirmPassError.innerHTML = 'Please confirm your password'
    }else if(confirmPass.value !== password.value){
        confirmPass.innerHTML = 'Passwords do not match'
        confirmPassError.style.border = '2px solid red'
    }else{
        confirmPass.style.border = '2px solid green'
        alert("You have successfully logged in")
    }
}