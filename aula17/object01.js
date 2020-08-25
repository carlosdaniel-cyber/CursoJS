let friend = {name: 'John',
sex: 'M',
weight: 160,
gainWeight(p=0) {
    console.log('Fatty!')
    this.weight += p
}}

friend.gainWeight(4)
console.log(`${friend.name} weights ${friend.weight} pounds.`)