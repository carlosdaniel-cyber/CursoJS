function contar() {
    let start = Number(document.querySelector('input#start').value)
    let end = Number(document.querySelector('input#end').value)
    let pace = Number(document.querySelector('input#pace').value)
    let result = document.querySelector('div#result')

    result.innerHTML = 'Contando: '
    if (pace == 0) {
        pace = 1
    }

    if (pace < 0) {
        pace = Math.abs(pace)
    }
    
    if (start < end) {
        for (let a = start; a <= end; a += pace) {
            result.innerHTML += `${a} ->`
        }
    } else {
        for (let b = start; b >= end; b -= pace) {
            result.innerHTML += `${b} => `
        }
    }
    result.innerHTML += '&#x1F3C1'
}