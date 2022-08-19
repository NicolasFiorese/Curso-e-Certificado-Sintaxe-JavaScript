// O que são vetores e arrays

// Como declarar um array

let array = ['string', '1', 'true']
console.log(array)

let array2 = ['string', '1', 'true', ['array3'],['array4'],['array5']]

// forEach
array.forEach(function(item, index){console.log{item, index}})

// Push
array.push([])
console.log(array)

// Pop
array.pop()
console.log(array)

// Shift
array.shift()
console.log(array)

// Unshift
array.unshift()
console.log(array)

// Index
console.log(array.indexOf(1))

// Splice
array.splice(0, 3)
console.log(array)

// Slice
let novoArray = array.slice(0, 3)
console.log()

let object = {string: 'string', number:1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}}

console.log(object.objectInterno)

var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

var {string, boolean, objectInterno} = object