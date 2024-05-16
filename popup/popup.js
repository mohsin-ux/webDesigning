let popup = document.querySelector('.popup');
let form = document.querySelector('form');
let signup = document.querySelector('.signUp');


popup.addEventListener('click', () => {
    form.style.display= 'inline-block';
    button.style.background= 'green';
    // alert('hello');
});


signup.addEventListener('click', () => {
    form.remove();
})

