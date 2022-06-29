// Given two arrays A and B of equal size N, the task is to find 
// if given arrays are equal or not. Two arrays are said to be equal 
// if both of them contain same set of elements, arrangements 
// (or permutation) of elements may be different though.
// Note : If there are repetitions, then counts of repeated elements 
// must also be same for two array to be equal.


const arr1 = [1, 2, 5, 4, 0]
const arr2 = [2, 4, 5, 0, 1]


const checkArrays = function (arr1, arr2) {

    console.log(arr1.sort())
    console.log(arr2.sort())
    if (arr1.sort().toString() === arr2.sort().toString()) {
        return 1
    } else {
        return 0
    }

};

console.log(checkArrays(arr1, arr2))

