$(document).ready(function(){
    $(function () {
        count = 0;
        wordsArray = ["Bonjour, je m'appelle", "Hola, mi nombre es", "Hallo Ich heisse", "Ciao il mio nome è", "Hello, my name is"];
        setInterval(function () {
          count++;
          $("#word").fadeOut(400, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
          });
        }, 10000);
      });
});


