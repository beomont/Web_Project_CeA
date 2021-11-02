
let user = document.querySelector('#user');

user.addEventListener('change', function() {
    console.log('You selected: ', this.value);
    localStorage.setItem('user', this.value);
});

