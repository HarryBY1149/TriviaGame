$(document).ready(function () {
    //The questions and their respective answers
    var dataArr = [
        {
            Question: "Beethoven was so meticulous, he would count 60 of these every time he had a cup",
            Answers: [
                "Coffee Beans",
                "Cocoa Beans",
                "Marshmallows",
                "Mililiters",
            ]
        },
        {
            Question: "Dvorak was an avid watcher of ____",
            Answers: [
                "Trains",
                "People",
                "Birds",
                "Dogs",

            ]
        },
        {
            Question: "Brahms was a prodigous drinker.  What was the name of his favorite watering hole?",
            Answers: [
                "The Red Hedgehog",
                "The Green Lady",
                "The Blue Bird",
                "The Grey Hound",
            ]
        },
        {
            Question: "Mozart had a reputation as a prankster.  What animal did he most like to imitate?",
            Answers: [
                "Cats",
                "Dogs",
                "Horses",
                "Birds",

            ]
        },
        {
            Question: "Wagner enjoyed what unusual pastime?",
            Answers: [
                "Cross-Dressing",
                "Skinny Dipping",
                "Excessive Gambling",
                "Drinking",
            ]
        },
        {
            Question: "Felix Mendelssohn rewrote, from memory, which famous overture the night before it was due to be performed",
            Answers: [
                "Midsummer Night's Dream",
                "Rondo Capriccioso, op 14",
                "Hark! The Herald Angels Sing",
                "Wedding March",
            ]
        },
        {
            Question: "Tchaikovsky was known to hold onto what part of his body while he was conducting, believing it would fall off?",
            Answers: [
                "His Head",
                "His Left Arm",
                "His Right Arm",
                "His Shin",
            ]
        },
        {
            Question: "Erik Satie, who composed primarily for piano, ate foods of only what color?",
            Answers: [
                "White",
                "Red",
                "Green",
                "Yellow",
            ]
        },
        {
            Question: "Chopin, the composer behind Noctourne, worked in France but was born in ______",
            Answers: [
                "Poland",
                "Germany",
                "Hungary",
                "Austria",
            ]
        },
        {
            Question: "Schubert, a short and round man, had an unusal nickname. What would it translate as?",
            Answers: [
                "Mushroom",
                "Banana",
                "Apple",
                "Potato",
            ]
        }];

    var correct = 0;
    var incorrect = 0;
    var i = 0;
    var timeRem;
    var timerInt;

    
    function nextQuestion() {
        function reset() {
            $("#displayCont").empty();
            $("#displayCont").html(`<div class="row"><div class="col-md-12 text-center" id="timer"></div></div>
        <div class="row" id="questionDisp"></div>
        <div class="row mt-2"><ul class="col-md-10 mx-auto mt-2" id="answerDisp"></ul></div>`);
        }
        reset();

        getData();
    };

    function correctAnswer() {
        $("#displayCont").empty();
        $("#displayCont").html(
            `<div class="row"><h1 class="col-md-12 text-center">Congratulations! You chose the right answer</h1></div>
            <div class="row mt-2"><img class="img-fluid max-width:500px; max-height:300px; mx-auto mt-2" src="assets/images/Celebration.gif" alt="Victory Dance!"/></div>`);
        i++;
        clearInterval(timerInt);
        if (i < 10) {
            setTimeout(nextQuestion, 2200);
        } else {
            endScreen();
        }
    };

    function timer() {
        $("#timer").text(timeRem);
        timeRem--;
        if (timeRem < 0) {
            clearInterval(timerInt);
            incorrect++;
            $("#displayCont").empty();
            $("#displayCont").html(
                `<div class="row"><h1 class="col-md-12 text-center"> Time's Up!</h1></div>
                <div class="row mt-2"><h2 class="col-md-12 text-center">The correct answer was ${dataArr[i].Answers[0]}</h2></div>
                <div class="row"><img class="img-fluid max-width:320px; max-height:240px; mx-auto mt-2" src="assets/images/Failure.gif" alt="Dance Fail" /></div>`);
            i++;
            if (i < 10) {
                setTimeout(nextQuestion, 2200);
            } else {
                endScreen();
            }
        }
    };

    function wrongAnswer() {
        $("#displayCont").empty();
        $("#displayCont").html(
            `<div class="row"><h1 class="col-md-12 text-center"> Oh no!</h1></div>
            <div="row mt-2"><h2 class="col-md-12 text-center">The correct answer was ${dataArr[i].Answers[0]}</h2></div>
            <div class="row"><img class="img-fluid max-width:500px; max-height:286px; mx-auto mt-2"  src="assets/images/Oops.gif"/></div>`);
        i++;
        clearInterval(timerInt);
        if (i < 10) {
            setTimeout(nextQuestion, 2200);
        } else {
            endScreen();
        }
    };

    function answerSelect() {
        $("#0").on("click", function () {
            correct++;
            correctAnswer();
        });
        $("#1").on("click", function () {
            incorrect++;
            wrongAnswer();
        });
        $("#2").on("click", function () {
            incorrect++;
            wrongAnswer();
        });
        $("#3").on("click", function () {
            incorrect++;
            wrongAnswer();
        });
    }

    function endScreen() {
            $("#displayCont").empty();
            $("#displayCont").html(
                `<div class="row"><h1 class="col-md-10 text-center mx-auto">Congratulations, you've reached the end!</h1></div>
            <div class="row"><h2 class="col-md-10 text-center mx-auto">Here's how you scored:</h2></div>
            <div class="row"><p class="col-md-10 text-center mx-auto">Correct answers: ${correct}</p></div>
            <div class="row"><p class="col-md-10 text-center mx-auto">Incorrect answers: ${incorrect}</p></div>
            <div class="row"><button type="button" class="btn btn-primary mx-auto" id="reset">Try Again?</button>`);
            correct=0;
            incorrect=0;
            $("#reset").on("click", function(){
                i=0;
                nextQuestion();
            })
    }

    function getData() {
        $("#questionDisp").empty();
        $("#answerDisp").empty();
        $("#questionDisp").append(`<div class="row"><h2 class="col-md-12 text-center">${dataArr[i].Question}</h2></div>`);
        function answerDisp() {
            //A Fisher-Yates Shuffle to randomize the position of the answers
            var nums = [0, 1, 2, 3]
            function randomize() {
                var x = nums.length,
                    y = 0,
                    temp;
                while (x--) {

                    y = Math.floor(Math.random() * (i + 1));

                    // swap randomly chosen  with current element
                    temp = nums[x];
                    nums[x] = nums[y];
                    nums[y] = temp;

                }
                return nums;
            }
            randomize();
            //assigning each answer an id based on it's position in the original answer array and displaying based on random nums array
            for (j = 0; j < nums.length; j++) {
                switch (nums[j]) {
                    case 0:
                        $("#answerDisp").append(`<div class="row"><li class="col-md-10 mx-auto" id="0"><p>` + dataArr[i].Answers[nums[j]] + `</p></li></div>`);
                        break;
                    case 1:
                        $("#answerDisp").append(`<div class="row"><li class="col-md-10 mx-auto" id="1"><p>` + dataArr[i].Answers[nums[j]] + `</p></li></div>`);
                        break;
                    case 2:
                        $("#answerDisp").append(`<div class="row"><li class="col-md-10 mx-auto" id="2"><p>` + dataArr[i].Answers[nums[j]] + `</p></li></div>`);
                        break;
                    case 3:
                        $("#answerDisp").append(`<div class="row"><li class="col-md-10 mx-auto" id="3"><p>` + dataArr[i].Answers[nums[j]] + `</p></li></div>`);
                }
            }
        }
        answerDisp();
        answerSelect();
        timeRem = 20;
        timerInt = setInterval(timer, 1000);
        timer();
    }
    getData()




})