// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated.
// Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.



function xor(a, b) {
if (( a === true) && (b === true)){
 return false
 console.log("star")
 }
 else if (( a === true) || (b === true)){
 return true
 }else if (( a === false) && (b === false)){
 return false
 }
}
