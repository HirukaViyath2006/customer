document.getElementById('showSignup').addEventListener('click', function () {
    document.getElementById('loginForm').parentElement.classList.add('d-none');
    document.getElementById('signupCard').classList.remove('d-none');
});

document.getElementById('showLogin').addEventListener('click', function () {
    document.getElementById('signupCard').classList.add('d-none');
    document.getElementById('loginForm').parentElement.classList.remove('d-none');
});
