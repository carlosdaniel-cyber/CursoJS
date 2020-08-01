function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'foto_manha.png'
        document.body.style.background = '#c77020'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto_tarde.png'
        document.body.style.background = '#c13301'
    } else {
        img.src = 'foto_noite.png'
        document.body.style.background = '#353d40'
    }
}
