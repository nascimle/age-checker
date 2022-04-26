let button = document.getElementById('check');
let anoNascimento = document.getElementById('bornYear');
let genre = document.getElementById('genre');

let userYear;
let userGenre;


button.addEventListener('click',function(){
    userYear = anoNascimento.value;
    userGenre = document.querySelector('input[name="sexo"]:checked').value;
    console.log('Ano: ', userYear)
    console.log('Genero: ', userGenre)

    let data = new Date();
    let ano = data.getFullYear();
    let idade = ano - userYear;

    let sexo;

    let img = document.getElementById('genre-image');

    console.log(img)

    userGenre == 'masculino' ? sexo = 'Homem' : sexo = 'Mulher';

    document.getElementById('user-comunication').innerHTML = `Detectamos ${sexo} com ${idade} anos`;

    if(idade <= 10 && userGenre == 'masculino'){
        img.src = "./img/menino-crianca.jpg";
    }else if(idade >= 11 && idade <= 25 && userGenre == 'masculino'){
        img.src = "./img/homem-jovem.jpg";
    }else if(idade >=26 && idade < 50 && userGenre == 'masculino'){
        img.src = "./img/homem-adulto.jpg";
    }else if(idade > 50 && userGenre == 'masculino'){
        img.src = "./img/homem-idoso.jpg";
    }else if(idade <= 10 && userGenre == 'feminino'){
        img.src = "./img/menina-crianca.jpg";
    }else if(idade >= 11 && idade <= 25 && userGenre == 'feminino'){
        img.src = "./img/mulher-jovem.jpg";
    }else if(idade >=26 && idade < 50 && userGenre == 'feminino'){
        img.src = "./img/mulher-adulta.jpg";
    }else{
        img.src = "./img/mulher-idosa.jpg";
    }

    

})