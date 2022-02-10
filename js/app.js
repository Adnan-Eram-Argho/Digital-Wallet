let submitBtn = document.getElementById('login-submit');
let inputEmail = document.getElementById('user-email')
let inputPass = document.getElementById('user-password')


submitBtn.addEventListener('click', function (e) {
    if ((inputEmail.value == 'argho@gmail.com' && inputPass.value == 'argho') || (inputEmail.value == 'email' && inputPass.value == 'pass')) {
        window.location.replace("banking.html");

    } else {
        alert('email = email and password = pass')

    }
    inputEmail.value = '';
    inputPass.value = '';
})




