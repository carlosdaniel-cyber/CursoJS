function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (ano_nasc.value.length == 0 || ano_nasc.value > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(ano_nasc.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (sexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} ano(s)!</p>`
        res.appendChild(img)
    }
}