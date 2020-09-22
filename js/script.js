$(document).ready(function() {

var m8b = {};

m8b.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "Reply hazy - try again", "Ask again later", "Better not tell you now", "Cannot predict now", "My reply is no", "My scources say no", "Outlook not so good", "Very doubtful"];
        
$("#answer").hide();

m8b.askQuestion = function(question){
        
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
        $("#8ball").effect("shake");
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        $("#answer").fadeIn(4000);
};

m8b.announcem8b = function(){
        console.log("Question: " + this.question + "");
        m8b.produceAnswer();
        
};

//Question button
var onClick = function() {
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        setTimeout (
                function() {
                        var question = prompt("Ask me a Y/N question!")
                        m8b.askQuestion(question)
                }, 500);
};
        
        $("#questionButton").click( onClick);

});