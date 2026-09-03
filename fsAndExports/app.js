const fs = require("fs")
const path = require("path")

const textFile = path.join(__dirname, "text.txt")
const text1File = path.join(__dirname, "text1.txt")

//it does not expect callback it directly return output blocking
fs.writeFileSync(textFile, "Hi rahul")


//it expect callback function to handel erros non-bloking
fs.writeFile(text1File, "Hello Rkg", (err) => { })



//read file sync it does not expect callback. wee ned to give encoding
let read = fs.readFileSync(textFile, 'utf-8')
console.log(read)
//read file asyncronusly it expect error handling and encoding
fs.readFile(textFile, "utf-8", (err, output) => {
    if (err) {
        console.log("Error", err)
    }
    else {
        console.log(output)
    }

})




//diffrence between async and sync

//sync
console.log(1)
//it does not expect callback it directly return output blocking
let read1 = fs.readFileSync(textFile, "utf-8")
console.log(read1)
console.log(2)


//async it is non-Blocking
console.log(1)
//it does not expect callback it directly return output blocking
fs.readFile(textFile, "utf-8", (err, output) => {
    if (err) {
        console.log("Error", err)
    } else {
        console.log(output)
    }
})

console.log(2)
