// Write a program to find the index of a value in a sorted array. 
// If the value does not find return the index where it would be if 
// it were inserted in order.

const arr1 = [ 1, 2, 4, 5, 6] // 5(target) => 3(index), 7(target) => 5(index)
const target = 7

const indexMe = (arr1, target) => {
    return arr1.concat(target).sort(function(a, b) {
        return a - b;
      }).indexOf(target);
}

console.log(indexMe(arr1, target))