function greeting(time, callback) {
  setTimeout(function () {
    return callback('Good ' + time + '!');
  }, 1000);
}

greeting('Morning', function (greeting) {
  console.log(greeting);
});
