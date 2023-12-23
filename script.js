function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(formularioAno.value == 0 || formularioAno.value > ano){
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - formularioAno.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if(idade < 21 ){
                //adolescente
                img.setAttribute('src', 'homemjovem.png')
            } else if(idade < 50 ){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else{
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if(idade < 21 ){
                //adolescente
                img.setAttribute('src', 'mulherjovem.png')
            } else if(idade < 50 ){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else{
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}