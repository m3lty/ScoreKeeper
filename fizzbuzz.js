function fizzbuzz() {
	for(var i = 1; i <= 100; i++){
		var divBy5 = i % 5 === 0;
		var divBy3 = i % 3 === 0;
		if(divBy3 && divBy5){
			console.log("Fizzbuzz");
		} else if(divBy3){
			console.log("Fizz");
		} else if(divBy5){
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}
fizzbuzz();