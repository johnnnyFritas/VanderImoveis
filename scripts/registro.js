const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('emailReg');
const confirmEmail = document.getElementById('confirmEmail');
const buttonSubmit = document.getElementById('buttonSubmit');

username.addEventListener('blur', ()=> {
    const usernameVerify = username.value;
    const usernameReal = username.value;

    const verify = usernameVerify.replace(' ', '');

    if(usernameReal != verify) {
        alert('Seu usuário não deve conter espaços');
    }
});

password.addEventListener('blur', ()=> {
    const passwordReal = password.value;
    const passwordVerify = confirmPassword.value;

    if(passwordReal != passwordVerify) {
        const mesagePass = document.getElementById('mesagePass');
        mesagePass.innerHTML = '*Suas senhas não coincidem';
        mesagePass.classList.remove('pReg');
        mesagePass.classList.add('errorPass');
    }else {
        const mesagePass = document.getElementById('mesagePass');
        mesagePass.classList.remove('errorPass');
        mesagePass.classList.add('pReg');
    }
});

confirmPassword.addEventListener('blur', ()=> {
    const passwordReal = password.value;
    const passwordVerify = confirmPassword.value;

    if(passwordReal != passwordVerify) {
        const mesagePass = document.getElementById('mesagePass');
        mesagePass.innerHTML = '*Suas senhas não coincidem';
        mesagePass.classList.remove('pReg');
        mesagePass.classList.add('errorPass');
    }else {
        const mesagePass = document.getElementById('mesagePass');
        mesagePass.classList.remove('errorPass');
        mesagePass.classList.add('pReg');
    }
});

email.addEventListener('blur', ()=> {
    const emailVerify = email.value;
    const emailReal = confirmEmail.value;

    if(emailVerify != emailReal) {
        const mesagePass = document.getElementById('mesagePass2');
        mesagePass.innerHTML = '*Seus emails não coincidem';
        mesagePass.classList.remove('pReg');
        mesagePass.classList.add('errorPass');
    }else {
        const mesagePass = document.getElementById('mesagePass2');
        mesagePass.classList.remove('errorPass');
        mesagePass.classList.add('pReg');
    }
});

confirmEmail.addEventListener('blur', ()=> {
    const emailVerify = email.value;
    const emailReal = confirmEmail.value;

    if(emailVerify != emailReal) {
        const mesagePass = document.getElementById('mesagePass2');
        mesagePass.innerHTML = '*Seus emails não coincidem';
        mesagePass.classList.remove('pReg');
        mesagePass.classList.add('errorPass');
    }else {
        const mesagePass = document.getElementById('mesagePass2');
        mesagePass.classList.remove('errorPass');
        mesagePass.classList.add('pReg');
    }
});