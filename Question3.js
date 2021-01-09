const arr = [];
var i = 0;
for (i; i <= 100; i++) {
  console.log(i);
  arr.push(i);
}
arr.push(7);
console.log(arr);
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);

var x;

for (x of arr) {
  if (arr[x] == arr[x + 1]) {
    console.log(x);
  }
}
