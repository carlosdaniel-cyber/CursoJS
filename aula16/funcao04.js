function factorial(n) {
    let result = 1
    for(let c = n; c > 1; c--) {
        result *= c
    }
    return result
}

console.log(factorial())