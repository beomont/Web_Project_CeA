const userName = document.getElementById('userName');

console.log(localStorage.user);
if (localStorage.user == undefined) {
    localStorage.user = 'Usuário anônimo';
}
document.getElementById('userName').innerHTML = localStorage.user;


const logoff = document.getElementById('logoff');
logoff.addEventListener('click', function() {
    localStorage.clear();
});
