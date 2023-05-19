
    document.addEventListener("DOMContentLoaded", function() {
        var biggerBtn = document.getElementById("bigger-btn");
        var userText = document.getElementById("user-text");
        var moobtn = document.getElementById("moo-btn");
        var string1 = "moo";

        biggerBtn.addEventListener("click", function() {
          userText.style.fontSize = "24pt";
        });
       
      });

      document.addEventListener("DOMContentLoaded", function(){
        var userInput = document.getElementById("user-text");

        mooBtn.addEventListener("click", function(){
            var parts = userInput.split(".");
            userText = parts.join("moo");
        })
      });

      document.addEventListener("DOMContentLoaded", function() {
        var fancyRadio = document.getElementById("fancy-radio");
        var fancyText = document.getElementById("user-text");
        var boringRadio = document.getElementById("boring-radio");
        

        fancyRadio.addEventListener("click", function() {
            fancyText.style.fontWeight = "bold";
            fancyText.style.color = "blue";
            fancyText.style.textDecoration="underline";
            alert("Good Choice! Your text will be fancy");
          });

          boringRadio.addEventListener("click", function() {
            fancyText.style.fontSize = "10pt";
            fancyText.style.textDecoration="none";
            fancyText.style.fontWeight = "normal";
            fancyText.style.color = "black";
            alert("BOO! Your text will be boring");
          });
    });
