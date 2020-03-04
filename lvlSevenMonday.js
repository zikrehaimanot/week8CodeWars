// Write a small function that returns the values of an array that are not odd.
//
// All values in the array will be integers. Return the good values in the order they are given.


function noOdds( values ){
 let evenNums = []
  for (i = 0; i < values.length; i++){
//   console.log(values[i])
   if ( i % 2 === 0) {
     evenNums.push(values[[i]])
    }
   }
  return evenNums
}
