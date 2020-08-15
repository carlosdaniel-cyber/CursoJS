function calcular() {
    let number = document.querySelector('input#num')
    let result = document.querySelector('select#table')
    
    if (number.value.length == 0) {
        alert('Por favor, digite um número!')
    } else{
        let n = Number(number.value)
        result.innerHTML = ''
        for (let a = 1; a <= 10; a++) {
            let item = document.createElement('option')
            item.text = `${n} x ${a} = ${n * a}`
            result.appendChild(item)
        }
    }
}