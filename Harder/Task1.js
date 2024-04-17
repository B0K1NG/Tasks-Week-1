function array (n, val1, arr) {
console.log("Input: ")
console.log("n = ", n)
console.log("val1 = ", val1)
console.log("arr = ", arr)

console.log("Output: ")

let arrayJoin = n;
for (i = 0; i < arrayJoin.length; i++) {
    if(arrayJoin < val1) {
        return (arrayJoin[i]);
        } if(arrayJoin === val1) {
            return (arrayJoin[i]);
 } if(arrayJoin > val1) {
    return (arrayJoin[i]);
 }
 else {
    return
 }

}
console.log(arrayJoin)
}

arr = [2, 4, 6, 8, 10]
n = arr.length;
val1 = arr[2];

console.log(array(n, val1, arr))
