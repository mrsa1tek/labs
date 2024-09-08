document.addEventListener("DOMContentLoaded", (event) => {
    var btn = document.getElementById('nameBtn');
    console.log(btn);
    btn.onclick = () => {
        var input = document.getElementById('nameInput');
        //console.log('Привет ' + input.value + '!');
        var p = document.getElementById('nameP');
        if(input.value)
        {
            p.innerText = 'Привет ' + input.value + '!';
        }
        else
        {
            p.innerText = 'Вы не ввели имя!';
        }
    };
});