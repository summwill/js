var ele = document.body.querySelector( selectors: ".box");
var eleAnswer = document.body.querySelector( selectors:".answer");

var question =prompt( message: "What animal do I want?");

// This is the conditional of my program

if(question=="cat"||question=="CAT"||question=="Cat"){
    ele.innerHTML="You got the right animal, which is a cat";
} else if(question=="dog"||question=="DOG"||question=="Dog"){
    ele.innerHTML="You got the right animal, which is a dog";

}else{
    ele.innerHTML="Sorry the animal was a cat or dog. MEOW WOOF";
}

var qTwo=prompt( message:"What is the first number?"));
var qThree=prompt( message:"What is the second number?"));

if(qTwo>3&&qThree<10) {
    eleAnswer.innerHTML = "The numbers are good";
}else{
    eleAnswer.innerHTML="The numbers are bad";
}


