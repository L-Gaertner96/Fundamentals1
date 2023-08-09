function pushFront(arr, newNum){
    let newArray = arr
    newArray.unshift(newNum)
    return newArray;
}

console.log(pushFront([5,7,2,3], 8))
console.log(pushFront([99], 7))

function popFront(arr){
    let array=arr.slice()
    let removedValue = array.shift()
    console.log("removed value: " + removedValue+", remaining arry: "+ array)
}

popFront([0,5,10,15])
popFront([4,5,7,9])

function insertAt(arr, index, value) {
    if (index < 0 || index > arr.length) {
        console.error("Index out of bounds");
        return arr; // Return the original array if index is invalid
    }

    // Move the elements to the right to create space for the new value
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    
    // Insert the value at the specified index
    arr[index] = value;
    
    return arr; // Return the array with the inserted value
}

console.log(insertAt([100,200,5], 2, 311))
console.log(insertAt([9,33,7], 1, 42))