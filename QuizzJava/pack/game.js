// An array with questions and answers
// The answers are shuffled before showing
// The answer is saved in the answered button after clicking "Enviar"
var contador = 1;
let questions = [
{
	question: "Name the Glands associated with the Human Digestive System?",
	answers: [
		{ answer: "Salivary Glands and Pancreas", correct: false },
		{ answer: "Salivary Glands and Liver", correct: false },
		{ answer: "Liver and Pancreas", correct: false },
		{ answer: "Salivary Glands, Liver & Pancreas", correct: true }
	],
	answered: false
},{
	question: "Arrange the correct sequence of the steps involved in the process of Human Digestive System?",
	answers: [
		{ answer: "Digestion, Ingestion, Assimilation, Egestion and Absorption", correct: false },
		{ answer: "Ingestion, Digestion, Absorption, Assimilation and Egestion", correct: true },
		{ answer: "Egestion, Absorption, Digestion, Assimilation and Ingestion", correct: false },
		{ answer: "Assimilation, Absorption, Ingestion, Digestion and Egestion", correct: false }
	],
	answered: false 
}
,{
	question: "At what temperature are Farenheit and Celsius equal to each other?",
	answers: [
		{ answer: "0", correct: false },
		{ answer: "-40", correct: true },
		{ answer: "10", correct: false },
		{ answer: "20", correct: false }
	],
	answered: false 
}
,{
	question: "Which planet has the most moons?",
	answers: [
		{ answer: "Jupiter", correct: true },
		{ answer: "Saturn", correct: false },
		{ answer: "Mars", correct: false },
		{ answer: "Venus", correct: false }
	],
	answered: false 
}
,{
	question: "What type of animal is a barramundi?",
	answers: [
		{ answer: "A Fish", correct: true },
		{ answer: "A dog", correct: false },
		{ answer: "A Dinosaur", correct: false },
		{ answer: "A cat", correct: false }
	],
	answered: false 
}
,{
	question: "What is a pomelo??",
	answers: [
		{ answer: "A Hat", correct: false },
		{ answer: "A fruit", correct: true },
		{ answer: "A musical instrument", correct: false },
		{ answer: "A type of meat", correct: false }
	],
	answered: false 
}
,{
	question: "Where on the human body would you find the papillae?",
	answers: [
		{ answer: "The tongue", correct: true },
		{ answer: "leg", correct: false },
		{ answer: "feet", correct: false },
		{ answer: "on head", correct: false }
	],
	answered: false 
}
,{
	question: "Oil, natural gas and coal are examples of …",
	answers: [
		{ answer: "Biofuels", correct: false },
		{ answer: "Geothermal resources", correct: false },
		{ answer: "Fossil fuels", correct: true },
		{ answer: "Renewable resources", correct: false }
	],
	answered: false 
}
,{
	question: "Which one of the following waves are used by the common TV remote control?",
	answers: [
		{ answer: "Radio waves", correct: false },
		{ answer: "Lasers", correct: false },
		{ answer: "Infrared waves", correct: true },
		{ answer: "Ultrasonic waves", correct: false }
	],
	answered: false 
}
,{
	question: "Which gas is safe and an effective extinguisher for all confined fires?",
	answers: [
		{ answer: "Nitrogen dioxide", correct: false },
		{ answer: "Carbon dioxide", correct: true },
		{ answer: "Sulphur dioxide", correct: false },
		{ answer: "Nitrous Oxide", correct: false }
	],
	answered: false 
}
,{
	question: "Which one of the following statements is incorrect about laser?",
	answers: [
		{ answer: "It is a technique for producing intense beams of light, ultraviolet or infrared radiation of different wavelength.", correct: true },
		{ answer: "Even in diamond laser beam can drill a hole.", correct: false },
		{ answer: "A variety of lasers have been made from solids like the ruby crystal and semi conducting materials, liquids and gases.", correct: false },
		{ answer: "All waves in laser, travel in phase.", correct: false }
	],
	answered: false 
}
,{
	question: "Which one of the following elements the drum of a Photostat machine is made up of:",
	answers: [
		{ answer: "Aluminium", correct: false },
		{ answer: "Selenium", correct: true },
		{ answer: "Barium", correct: false },
		{ answer: "Caesium", correct: false }
	],
	answered: false 
}
,{
	question: "Which bacteria is responsible for the formation of curd?",
	answers: [
		{ answer: "Lactic acid bacteria", correct: false },
		{ answer: "Lactobacillus Acidophillus", correct: true },
		{ answer: "Lactobacillus aureus", correct: false },
		{ answer: "Bacillus radicicola", correct: false }
	],
	answered: false 
}
,{
	question: "Which one of the following bacteria present in the soil produces a peculiar smell if it rains on perched soil?",
	answers: [
		{ answer: "Streptomycetes", correct: true },
		{ answer: "Staphymycetes", correct: false },
		{ answer: "Diplomycetes", correct: false },
		{ answer: "Micrococcus", correct: false }
	],
	answered: false 
}
,{
	question: "In poorly ventilated buildings which one of the following inert gases can be accumulated?",
	answers: [
		{ answer: "Helium", correct: false },
		{ answer: "Neon", correct: false },
		{ answer: "Argon", correct: false },
		{ answer: "Radon", correct: true }
	],
	answered: false 
}
,{
	question: "Honey is sweeter than cane sugar or corn syrup. Which one of the following carbon sugars is responsible for this?",
	answers: [
		{ answer: "Dextrose", correct: false },
		{ answer: "Levulose", correct: true },
		{ answer: "Sucrose", correct: false },
		{ answer: "Fructose", correct: false }
	],
	answered: false 
}
,{
	question: "In which part of the body digestion of protein begins?",
	answers: [
		{ answer: "Pancreas", correct: false },
		{ answer: "Stomach", correct: true },
		{ answer: "Small Intestine", correct: false },
		{ answer: "Large Intestine", correct: false }
	],
	answered: false 
}
,{
	question: "Name the largest part of the Alimentary canal?",
	answers: [
		{ answer: "Large Intestine", correct: false },
		{ answer: "Small Intestine", correct: true },
		{ answer: "Liver", correct: false },
		{ answer: "Stomach", correct: false }
	],
	answered: false 
}
,{
	question: "Complete digestion of food occurs in:",
	answers: [
		{ answer: "Stomach", correct: false },
		{ answer: "Small Intestine", correct: true },
		{ answer: "Pancreas", correct: false },
		{ answer: "Large Intestine", correct: false }
	],
	answered: false 
}
,{
	question: "What is the function of Bile Juice secreted by Liver?",
	answers: [
		{ answer: "it makes the food alkaline.", correct: true },
		{ answer: "It makes the food acidic.", correct: false },
		{ answer: "It breaks down the food.", correct: false },
		{ answer: "None of the above", correct: false }
	],
	answered: false 
}
];

let question = -1; // Start before questions

// Fisher-Yates (Knuth) Shuffle
// This shuffles an array and returns it
let shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Calculates the score by checking if the answered is correct
let calculateScore = function() {
	let correct = 0;
	for (let i = 0; i < questions.length; i++) {
		if (questions[i].answers[questions[i].answered].correct) {
			correct++;
		}
	}
	return '' + correct + '/' + questions.length;
}

let calculatePercentage = function() {
	let correct = 0;
	let percentage = 0;
	for (let i = 0; i < questions.length; i++) {
		if (questions[i].answers[questions[i].answered].correct) {
			correct++;
		}
	}

	percentage = correct / questions.length * 100;

	if(percentage >= 50)
		$('#percentagem').css('color','#0db511');
	else
		$('#percentagem').css('color','#ff0000');


	return percentage + ("%");
}

let conta = function()
{
	return contador + " of 20";
}

let nextQuestion = function() {
	$('#answer').hide();
	$('#enviar').hide();
	$('#next').hide();
	$('#inicio').hide()
	$('#contador').text(conta())

	
	document.body.style.background = '#222222';

	question++;
	contador++;
	if (question >= questions.length) {
		$('#quizz_questao').hide()
		$('#score').text(calculateScore())
		$('#percentagem').text(calculatePercentage()) 
		$('#quizz_questao').hide()
		$('#fim').show()
		$('#startbutton').hide()
		$('#inicio').show()
		return
	}
	questions[question].answers = shuffle(questions[question].answers)
	//let Q = '<h1>' + questions[question].question + '</h1><br /><br />';

	let Q = '<div class="py-2 h5"><b>' + questions[question].question +'</b></div>'
	Q += '<div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options" >'
	
	//Q += '<input id="a1" type="radio" name="question" value="op_A">';
    //Q += '<label class="options" id="a1Label" for="opcaoA">' + questions[question].answers[0].answer + '</label><br>';

	Q += '<label class="options" id="a1Label" >' + questions[question].answers[0].answer + '<input id="a1" type="radio" name="question" value="op_A"> <span class="checkmark"></span> </label>'

	//Q += '<input id="a2" type="radio" name="question" value="op_B">';
    //Q += '<label class="options" id="a2Label" for="opcaoB">' + questions[question].answers[1].answer + '</label><br>';

	Q += '<label class="options" id="a2Label" >' + questions[question].answers[1].answer + '<input id="a2" type="radio" name="question" value="op_B"> <span class="checkmark"></span> </label>'

	//Q += '<input id="a3" type="radio" name="question" value="op_C">';
    //Q += '<label class="options" id="a3Label" for="opcaoC">' + questions[question].answers[2].answer + '</label><br>';

	Q += '<label class="options" id="a3Label" >' + questions[question].answers[2].answer + '<input id="a3" type="radio" name="question" value="op_C"> <span class="checkmark"></span> </label>'

	//Q += '<input id="a4" type="radio" name="question" value="op_D">';
    //Q += '<label class="options" id="a4Label" for="opcaoD">' + questions[question].answers[3].answer + '</label><br>';

	Q += '<label class="options" id="a4Label" >' + questions[question].answers[3].answer + '<input id="a4" type="radio" name="question" value="op_D"> <span class="checkmark"></span> </label>'

	Q += '</div>'
	$('#quizz_questao').show()
	$('#pergunta_respondida').empty().append(Q)
	$('#enviar').show();
}

// Check the answer
let checkQuestion = function() {
	let answer = -1;
	if ($('#a1').prop("checked")) {
		answer = 0
	} else if ($('#a2').prop("checked")) {
		answer = 1
	} else if ($('#a3').prop("checked")) {
		answer = 2
	} else if ($('#a4').prop("checked")) {
		answer = 3
	}
	if (answer < 0) {
		$('#answer').text("Não respondeu a pergunta. Tenta de novo");
		$('#enviar').show();
		return;
	}
	// Store the answer in answered
	questions[question].answered = answer;
	let text = 'The answer is ';
	if (questions[question].answers[answer].correct) {
		$('#answer').css('color','#0db511');
		text += 'correct!';
	} else {
		$('#answer').css('color','#ff0000');
		text += 'incorrect!';

	}
	$('#answer').empty().append(text).show();
	$('#enviar').hide();
	$('#next').show();
}

let init = function() {
	questions = shuffle(questions);
}