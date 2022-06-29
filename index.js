
const arr1 = [1,2,5,4,0]
const arr2 = [2,4,5,0,1]


const checkArrays = function(arr1, arr2) {

    console.log(arr1.sort())
    console.log(arr2.sort())
     if (arr1.sort().toString() === arr2.sort().toString()) {
         return 1
     } else return null

};

console.log(checkArrays(arr1, arr2))