const say = require('say');

function textToSpeech(text,delay) {
  setTimeout(()=>{
    say.speak(text,'',1);
  },delay*1000)
}


module.exports = {textToSpeech}
