const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

var x;
for (x of arr) {
  if (x % 2 == 0) {
    console.log(`${x} is even `);
  }
}