$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var str = $("input#word1").val();
    var upper = str.toUpperCase();
    var final = upper.split("").reverse().join("");
    if (final === upper){
      alert("true");
    } else {
      alert("false");
    }

  })
});
