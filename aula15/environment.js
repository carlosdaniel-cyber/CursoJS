let num = [1, 3, 2]
num[3] = 6

num.push(0)
//console.log(num.length)
num.sort()

for (i in num) {
    console.log(num[i])
}

console.log(num.indexOf(6))