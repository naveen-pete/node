var obj = {
  greeting: 'Good morning!',
  greet: function () {
    setTimeout(function () {
      console.log(this.greeting);
    }, 0);
  }
};
obj.greet();
