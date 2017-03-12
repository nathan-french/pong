
//business stuff

function range(lowEnd,highEnd){
  var arr = [];
  i = highEnd - lowEnd + 1;
  while (i--){
    arr[i] = highEnd--
  }
  return arr;
};

//console.log("rangeTest " + range(1,10));

var number = 32;

var engine = function(number){
  if (number % 3 === 0){
    return "ping";
  } else if (number % 5 === 0){
    return "pong";
  } else if (number % 15 === 0){
    return "pingpong";
  } else {

    return range(1,number);

  }
};

console.log("engineTest " + range(1,number));


$(document).ready(function() {
  $("form#form").submit(function(event){
    event.preventDefault();
    var test = $("input").val();
    var number = parseInt($("input#number").val());
    //range();
    var result = engine(number);
    $("#output").text(result);
      //$("p")fadeIn();

    //alert("test");
    console.log("form " + number);
    console.log("result" + result );
    console.log("test" + test );

  });

});
