var a = 1275
var b = 1
function add(a,b) {return a+b}
add()

function subtract(a,b) {return a-b}
subtract()

function multiply(a,b) {return a*b}
multiply()

function divide(a,b) {return a/b}
divide()

var n = 746
function inc(n) {
  console.log(n++)
}
inc(n)

function dec(n) {
  console.log(n--)
}
dec(n)

function makeInt(n) {parseInt(n,10)}
makeInt()

function preserveDecimal(n) {parseFloat(n,10)}
preserveDecimal()
