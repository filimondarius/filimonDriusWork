const a = [1, 4, 2, 8, 9, 3, 10, 14, 2];
let largest = a[0];
let secondLargest;
for (let index = 0; index < a.length; index++) {
  if (a[index] > largest) {
    secondLargest = largest;
    largest = a[index]
  }
}
console.log(secondLargest)