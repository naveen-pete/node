function sumAsync(a, b) {
  setTimeout(function () {
    return a + b;
  }, 1000);
}
console.log(sumAsync(1, 2));
