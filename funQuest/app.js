// debugger;

(function(){ //putting complete code into IIFE so that the code won't interefere with other programmers 

    function  Question (question, answer, correct)  {
        this.question = question;
        this.answer= answer;
        this.correct= correct; 
    }
    
    Question.prototype.displayQuestion = function() { //This nodule wil display questions and possible answers with questions
        
        console.log('running display question');
            
            // displaying question
            var questionTODisplay = this.question
            console.log('Started');
            console.log(questionTODisplay);
            document.getElementById('display-question').textContent = questionTODisplay;
            // console.log('without pressing submit');
    
            //display possible answers
            
            var possibleAnsToDisplay = this.answer;

            parentElement = document.getElementById('possible-answers')

            document.getElementById('possible-answers').innerHTML = " "

            for(i=0;i<possibleAnsToDisplay.length;i++){
                
                childElement = document.createElement('li');
                appendChildElement = parentElement.appendChild(childElement);
                appendChildElement.innerHTML = i + ' - ' + this.answer[i];
            }       
    };
    
    // Instantiaing  objects from Question Constructor 
    var q1 = new Question("What's the best programming lagnuage in the world.?",
                                        ['Javascript', 'Phyton', 'Ruby'],
                                        0)
    
    var q2 = new Question("How's programming?",
                                        ['Tedious', 'Boring', 'Fun'],
                                        2)
    
    
    var q3 = new Question("Who is your teacher?",
                                        ['Micheal', 'Jonas', 'Jack'],
                                        1)
    
    
    var q4 = new Question("Your preferred browser?",
                                        ['Edge', 'Opera', 'Firefox', 'Safari', 'Chrome'],
                                        4)

    var q5 = new Question("Your OS?",
                                        ['Windows', 'MAC', 'Linux', ],
                                        2)                                        
    

    var q6 = new Question("Smartphone brand?",
                                        ['Apple', 'Oppo', 'Huawei', 'Samsung' ],
                                        3)                                        
    
    // Saving objects into  Array 
                                        
    var allQuestions = [q1, q2, q3, q4, q5, q6];
        
    var score  = 0;

    Question.prototype.answerCheck = function(answer){
       
        if (answer === this.correct){
            
            console.log('running if ');
            score += 1;
            document.getElementById('congrats-msg').textContent = 'Congratulations! your answer is correct. Your Score is  : ' +  score;    
        }

        else {
            document.getElementById('congrats-msg').textContent = 'Wrong answer. Try again! ';    
    
            console.log('running else');
        }   
    }
    
    document.getElementById('submit').addEventListener('click', getNewQuestion);
  
    var n = Math.floor(Math.random() * allQuestions.length);
    allQuestions[n].displayQuestion();

    function getNewQuestion () {

        var userInput = parseInt(document.getElementById('ansInput').value);

        allQuestions[n].answerCheck(userInput);
        
        n = Math.floor(Math.random() * allQuestions.length);
       
        allQuestions[n].displayQuestion();
        
    }
       
})()

