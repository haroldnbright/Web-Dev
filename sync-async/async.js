const fileSystem = require('fs')

console.log('Before reading the files.')

// Read file asynchronously.
//This function will run in the background
fileSystem.readFile('f1.txt', function(err, data1) {
    if(err) {
        console.log(err)
        return
    }

    console.log('This is file-1 data: ' + data1)
})


//This function will run in the background
fileSystem.readFile('f2.txt', function(err, data2) {
    if(err) {
        console.log(err)
        return
    }

    console.log('This is file-1 data: ' + data2)
})

console.log('After reading the files.')