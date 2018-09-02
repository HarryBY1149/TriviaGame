This a simple trivia quiz of goofy facts concerning famous composers.

logic is Javascript with the JQuery library.

The Questions and answers are key value objects in an array and are diplsayed dynamically.

a fisher-yates shuffle is used on the nums variable to randomize the append order of the answer values. The for loop containing the switch syntax assigns id's to the answers based on their position in the original Answers array in the dataArr object.  0 is always the correct answer, which makes targeting it by id easy and universal.

functions: 
nextQuestion() resets the html for getData()
getData() generates the questions and answers
correctAnswer() does stuff if the user selects the correct answer
wrongAnswer() does stuff if the user selects the wrong answer
timer() times things
answerSelect() does stuff with user input

GL HF!

P.S. there's a univeral iterator (var i) to track what question the user is on and call endScreen();