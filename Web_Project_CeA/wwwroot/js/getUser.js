document.getElementById('userName').innerHTML = localStorage.user;

const logoff = document.getElementById('logoff');
logoff.addEventListener('click', function() {
    localStorage.clear();
});
