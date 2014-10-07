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

