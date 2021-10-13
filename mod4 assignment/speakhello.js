(function(window){
var hellospeak={};
var speakWord = "Hello";
hellospeak.hellosay= function speak(name) {
  console.log(speakWord+" " +name  );
}
window.hellospeak= hellospeak;
})(window);