$(document).ready(function () {
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
            Question: "Wagner enjoyed what unusual pasttime?",
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
            Question: "Tchaikovsky was known to hold onto what part of his body, believing it would fall off while he was conducting?",
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
    var i = 1;
    var timeRem;
    var timerInt;

    //functions: nextQuestion() resets the html for getData; getData generates the questions and answers; correctAnswer does stuff if the user selects the correct answer
    //wrongAnswer does stuff if the user selects the wrong answer; timer times things; answerSelect does stuff with user input; 
    function nextQuestion() {
        function reset() {
            $("#displayCont").empty();
            $("#displayCont").html(`<span id="timer"></span>
        <span id="questionDisp"></span><br>
        <ul id="answerDisp"></ul>`);
        }
        reset();
        getData();
    };

    function correctAnswer() {
        $("#displayCont").empty();
        $("#displayCont").html(`<h1>Congratulations! You chose the right answer</h1><br><img src="assets/images/Celebration.gif" alt="Victory Dance!"/>`);
        i++;
        clearInterval(timerInt);
        setTimeout(nextQuestion, 3000);
    };

    function timer() {
        $("#timer").text(timeRem);
        timeRem--;
        if (timeRem < 0) {
            clearInterval(timerInt);
            incorrect++;
            $("#displayCont").empty();
            $("#displayCont").html(`<h1> Time's Up!</h1><br><h2>The correct answer was ${dataArr[i].Answers[0]}</h2><img src="assets/images/Failure.gif" alt="Dance Fail" />`);
            i++;
            setTimeout(nextQuestion, 2200);
        }
    };

    function wrongAnswer() {
        $("#displayCont").empty();
        $("#displayCont").html(`<h1> Oh no!</h1><h2>The correct answer was ${dataArr[i].Answers[0]}</h2><img src="assets/images/Oops.gif"/>`);
        i++;
        clearInterval(timerInt);
        setTimeout(nextQuestion, 3000);
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

    function getData() {
        $("#questionDisp").empty();
        $("#answerDisp").empty();
        $("#questionDisp").append(`<h2>${dataArr[i].Question}</h2>`);
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
                        $("#answerDisp").append(`<li id="0">` + dataArr[i].Answers[nums[j]] + `</li>`);
                        break;
                    case 1:
                        $("#answerDisp").append(`<li id="1">` + dataArr[i].Answers[nums[j]] + `</li>`);
                        break;
                    case 2:
                        $("#answerDisp").append(`<li id="2">` + dataArr[i].Answers[nums[j]] + `</li>`);
                        break;
                    case 3:
                        $("#answerDisp").append(`<li id="3">` + dataArr[i].Answers[nums[j]] + `</li>`);
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