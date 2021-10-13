(function(window){
    var speakbye={};
    var speakword= "Good Bye";
    speakbye.saybye=function speak(name) {
      console.log(speakword+" "+name);
    }
    window.speakbye= speakbye ; 
})(window);