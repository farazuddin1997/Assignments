const arr = [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0];
var count = 0;
var num = 0;
var x;
for (x of arr) {
  if ((arr[x] == arr[x + 1] && arr[x] = 1)) {
    count = count + 1;
    num = count;
  }
}
console.log(num);
