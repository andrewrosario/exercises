// Rock Paper Scissors

    $('#scissors').on('click', function(){
       var result = compare('scissors', computerChoice());
       $("#decision").html(result);
    });

    $('#paper').on('click', function(){
       var result = compare('paper', computerChoice());
       $("#decision").html(result);
    });


    $('#rock').on('click', function(){
       var result = compare('rock', computerChoice());
       $("#decision").html(result);
    });
var random = Math.random();
console.log(random);





var compare = function(user, other) {
	if(user === other) {
		alert("A Tie!");	

	} else if (user === "rock") {
			if (other === "paper") {
				return true;
			} else {
				return 'false';
			}

	}else if (user === "scissors") {
			if (other === "paper") {
				return true;
			} else {
				return 'false';
			}

	}else if (user === "paper") {
			if (other === "rock") {
				return true;
			} else {
				return 'false';
			}
	}

};


var computerChoice = function() {
	random = Math.random();
	if (random <= 0.3) {
		return "rock"
	} else if (random < 0.6) {
		return "paper"
	} else {
		return "scissors"
	}
};
console.log(computerChoice);

// Button Game

  $("#name").on("change", function() {
  	console.log("Working")
    $(".name").append($("#name").val() +"'s")
  });
  


  $(document).on("click", ".button", function() { 
  	var button = $("<button>").addClass('button').html('click me');
  	$(this).after(button)
  	$(".score").replaceWith("<span class='score'>" + $('.button').length + "</span>")
  });


  $(document).on("dblclick", ".button", function() { 
  	$(".button").slice(-3).remove()
  	$(".score").replaceWith("<span class='score'>" + $('.button').length + "</span>")
  });

  $(document).on("click", ".start", function() {


// Counter	
var i = 0
	setInterval(function(){
		
		if (i<= 100) {$(".counter").replaceWith("<p class='counter'>" + i + "</p>"); i++};

	}, 100);		 
  });


// Nested Loops and 2D arrays

// Create an array of arrays, aka a 2D array. Using the example listed below.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// etc....

//***********To access 2-dimensional array elements we would "console.log(array[i][j]);"

var numberSet = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

//Write the first for loop
for(i=0; i <= 4; i++){
	
	for(j = 0; j <= 3; j++){ 
		console.log(numberSet[i][j]);

  }
}

















