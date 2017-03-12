
//business stuff

function range(lowEnd,highEnd){
  var arr[];
  i = highEnd - lowEnd + 1;
  while (i--){
    arr[i] = highEnd--
  }
  return arr;
}


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



$(document).ready(function() {






  });
});
