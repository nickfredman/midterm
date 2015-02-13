    // Quiz Implimentation
    //passed variables: diff currentLang
var totalQuest = 0;
if (diff === 'easy') {
    totalQuest = 10;
}   else if ( diff === 'medium') {
    totalQuest = 15;
}   else if (diff === 'hard') {
    totalQuest = 20;
}

var questionList, questionCounter, currentAnswer, mcAnswers, correctQuestions;


var populate = function(qtype){
    $('#question-number').text(questionCounter + ' / ' + totalQuest);
    console.log(questionCounter);
    if(qtype === "mc"){
        mcAnswers = questionList[questionCounter-1].possibleAnswers.split(',');
        console.log(mcAnswers);
        $('.mc-question-text').find('p').html(questionList[questionCounter-1].question);
        $('#answer1').html(mcAnswers[0]);
        $('#answer2').html(mcAnswers[1]);
        $('#answer3').html(mcAnswers[2]);
        $('#answer4').html(mcAnswers[3]);
    }
    else if(qtype === "fitb"){
        $('#fitb-answer').val('');
        $('.fitb-question-text').find('p').html(questionList[questionCounter-1].question);
    }
};

var checker = function() {
    questionCounter ++;

    if(questionList[questionCounter-1].type === "mc"){
        $('.current-question-fitb').addClass('hidden');
        $('.current-question-mc').removeClass('hidden');
        populate("mc");
    } else if(questionList[questionCounter-1].type === "fitb"){
        $('.current-question-mc').addClass('hidden');
        $('.current-question-fitb').removeClass('hidden');
        populate("fitb");
    }
};

var finisher = function() {
    $('#final-modal').modal('show');
    $('#correct').text(correctQuestions + " ");
    $('#total').text(totalQuest + " ");
};


$(document).on('ready', function() {
    totalQuest = 10;
    questionCounter = 0;
    correctQuestions = 0;
    questionList = _.first(_.shuffle(easyQuestions), totalQuest);
    checker();
    $(document).on('click', '.mc-btn', function(){
        if($(this).text() === questionList[questionCounter-1].answer){
            correctQuestions ++;
            $('#h4-label').text('Correct!');
            $('#next-btn').addClass('btn-good');
            $('#quiz-modal').modal('show');
            $(document).on('click', '#next-btn', function(){
                $('#quiz-modal').modal('hide');
                $('#next-btn').removeClass('btn-good');
                if (questionCounter === totalQuest){
                    return finisher();
                }
            });
        } else {
            $('#h4-label').text('Wrong Answer!');
            $('#next-btn').addClass('btn-bad');
            $('#quiz-modal').modal('show');
            $(document).on('click', '#next-btn', function(){
                $('#next-btn').removeClass('btn-bad');
                $('#quiz-modal').modal('hide');
                if (questionCounter === totalQuest){
                    return finisher();
                }
            });
        }
        checker();
    });

    $(document).on('click', '.fitb-btn', function(e){
        console.log('yay')
        e.preventDefault();
        if($('#fitb-answer').val() === questionList[questionCounter-1].answer){
            correctQuestions ++;
            $('#h4-label').text('Correct!');
            $('#next-btn').addClass('btn-good');
            $('#quiz-modal').modal('show');
            $(document).on('click', '#next-btn', function(){
                $('#quiz-modal').modal('hide');
                $('#next-btn').removeClass('btn-good');
                if (questionCounter === totalQuest){
                    return finisher();
                }
            });
        } else {
            $('#h4-label').text('Wrong Answer!');
            $('#next-btn').addClass('btn-bad');
            $('#quiz-modal').modal('show');
            $(document).on('click', '#next-btn', function(){
                $('#next-btn').removeClass('btn-bad');
                $('#quiz-modal').modal('hide');
                if (questionCounter === totalQuest){
                    return finisher();
                }
            });
        }
        checker();
    });
});
