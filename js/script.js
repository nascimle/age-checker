let button = document.getElementById('check');
let anoNascimento = document.getElementById('bornYear');
let genre = document.getElementById('genre');

let userYear;
let userGenre;


button.addEventListener('click',function(){
    userYear = anoNascimento.value;
    userGenre = document.querySelector('input[name="sexo"]:checked').value;
    
})