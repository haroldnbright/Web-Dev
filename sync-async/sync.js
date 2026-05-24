const fileSystem = require('fs')

console.log('Before reading the files.')

const data1 = fileSystem.readFileSync('f1.txt')
const data2 = fileSystem.readFileSync('f2.txt')

console.log('This is file-1 data ' + data1)
console.log('This is file-2 data ' + data2)

console.log('After reading the files.')

