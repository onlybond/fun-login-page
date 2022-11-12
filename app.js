const btn = document.getElementById('btn');
const password = document.getElementById('password');
errordiv = document.getElementsByClassName('error');
Errormsg = []
btn.addEventListener('mouseover', (button) => {
    if (password.value.length <= 8){
        button.target.classList.toggle("move");
        btn.style.background = "red";
        errordiv
    }
    else
    {
        button.target.classList.toggle("stop");
        btn.style.background = "green";
    }
})
