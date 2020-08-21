    function addNumber() {
        let box = document.querySelector('select#addedValues')
        box.innerHTML =  ''
        let string = document.createElement('option')
        string.text = 'test'
        box.appendChild(string)
    }