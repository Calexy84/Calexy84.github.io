// alert($); 

// console.log($); 
// this is the console that you can find in the dev tools under console

function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age  = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult.');
	} else if (age >= 13){
		console.log('User is a teenager.');
	} else {
		console.log('User is a child.');
	}

	// its always a good idea to convert all typed input to lowercase because users don't always know how to use CAPITAL LETTERS

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {	
		prompt('Hello ' + firstName);
	} else if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() ==='assembly') {
		console.log('Goodbye');
	} else {
		console.log('I am a snowflake.');
	}

	var faveColor = prompt('What is your favorite color?').toLowerCase().trim(); 

	if (faveColor === 'red' || faveColor === 'green' || faveColor === 'blue' || faveColor === 'yellow'){
	$('h1').css('color', faveColor);
	}
}
// the next piece of code is important to include. it tells the browser to only start on JavaScript until the page has loaded. 
$(function () {

$('img').on('click', askQuestions);
	// when user clicks an h3
	console.log('any word I fancy');
	$('h3').on('click', function () {

		
		

		// Toggle/slideToggle the next element
		$(this).next().slideToggle(699);
		//the word "this" in JS can mean a number of things depending on where it is placed in the code. In this case; whatever was just clicked on, take the next element and toggle it. The round brackets tell jQuery to do the thing so "do toggle" etc. 

		// Whenever you use prompt, it will return a string which means JavaScript will just add whatever is after + to your string.
		// You can use parseInt() – declare variable inside brackets – to find an integer in a string

		// var age prompt(‘How old are you?’);
		// age = parseInt(age); 


	});

});