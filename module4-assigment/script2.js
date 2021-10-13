(function (window) {
  var hellospeak = {};
  var speakWord = "Hello";
  hellospeak.sayhello = function speak(name) {
    console.log(speakWord + " " + name);
  }
  window.hellospeak = hellospeak;
})(window);