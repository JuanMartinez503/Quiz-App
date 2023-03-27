
const timerEl = document.getElementById('timer');
const questionContainer = document.querySelector('.question-container');
const questionEl =document.querySelector('.question');
const choicesEL = document.querySelectorAll('.choices');
const result = document.getElementById('result');

let timer = 50;
let questionNumber =0;

 let question1 = {
    question: "What is the output of the following code?: console.log(typeof [])",
    answerOptions: ["object", "array", "undefined", "string"],
    correctAnswer: "object"
}
let question2 = {
    question: "Which of the following is not a JavaScript data type?",
    answerOptions: ["number", "boolean", "null", "table"],
    correctAnswer: "table"
}
let question3 = 
    {
        question: "What does DOM stand for?",
        answerOptions: ["Document Orientation Model", "Digital Ordinance Model", "Data Object Mode", "Document Object Model"],
        correctAnswer: "Document Object Model"
    }
    
let question4 = {
    question: "What is the difference between let and var in JavaScript?",
    answerOptions: ["var is block-scoped and let is function-scoped", "let is block-scoped and var is function-scoped", "let is only used for loops and var is used for variables", "there is no difference between the two"],
    correctAnswer: "let is block-scoped and var is function-scoped"
}

function startGame (){
    
    setTimer()
    
    question1Func()
    
    
}

function question1Func(){
        
        questionEl.innerText = question1.question
        choicesEL[0].innerText =question1.answerOptions[0]
        choicesEL[1].innerText =question1.answerOptions[1]
        choicesEL[2].innerText =question1.answerOptions[2]
        choicesEL[3].innerText =question1.answerOptions[3]
        for(let i = 0; i <choicesEL.length; i++){
            choicesEL[i].setAttribute('style', 'width:150px;')
        }
        questionContainer.addEventListener('click', function(e){
            var element = e.target
            var type = element.getAttribute('data-type')
            if(type ==1){
                result.innerText= 'Correct!'
            }
            else{
                result.innerText= 'Wrong'
                timer = timer-4;

            }
    question2Func()
            
        })

    }
    
       function question2Func() {
        questionEl.innerText = question2.question
        choicesEL[0].innerText =question2.answerOptions[0]
        choicesEL[1].innerText =question2.answerOptions[1]
        choicesEL[2].innerText =question2.answerOptions[2]
        choicesEL[3].innerText =question2.answerOptions[3]
        for(let i = 0; i <choicesEL.length; i++){
            choicesEL[i].setAttribute('style', 'width:150px;')
        }
        questionContainer.addEventListener('click', function(e){
            var element = e.target
            var type = element.getAttribute('data-type')
            if(type ==4){
                result.innerText= 'Correct!'
            }
            else{
                result.innerText= 'Wrong'
                timer 
                
            }
        question3Func()
        })
    function question3Func(){
        questionEl.innerText = question3.question
        choicesEL[0].innerText =question3.answerOptions[0]
        choicesEL[1].innerText =question3.answerOptions[1]
        choicesEL[2].innerText =question3.answerOptions[2]
        choicesEL[3].innerText =question3.answerOptions[3]
        for(let i = 0; i <choicesEL.length; i++){
            choicesEL[i].setAttribute('style', 'width:250px;')
        }
        questionContainer.addEventListener('click', function(e){
            var element = e.target
            var type = element.getAttribute('data-type')
            if(type ==4){
                result.innerText= 'Correct!'
            }
            else{
                result.innerText= 'Wrong'
                timer

            }
            question4Func()
        })
    }
        function question4Func(){
            questionEl.innerText = question4.question
            choicesEL[0].innerText =question4.answerOptions[0]
            choicesEL[1].innerText =question4.answerOptions[1]
            choicesEL[2].innerText =question4.answerOptions[2]
            choicesEL[3].innerText =question4.answerOptions[3]
            for(let i = 0; i <choicesEL.length; i++){
                choicesEL[i].setAttribute('style', 'width:250px;')
            }
            questionContainer.addEventListener('click', function(e){
                var element = e.target
                var type = element.getAttribute('data-type')
                if(type ==2){
                    result.innerText= 'Correct!'
                }
                else{
                    result.innerText= 'Wrong'
                    timer 

                }
                clearInterval(timerSet)
                initials()

            })
        }
    }
 function initials() {
  choicesEL.forEach(choice => {
    choice.remove()
  })
  result.remove()
  questionEl.innerHTML = 'Enter your initials here to save your score!'

  let form = document.createElement('form')
  let input = document.createElement('input')
  let button = document.createElement('button')

  input.addEventListener('submit', function(event) {
    event.preventDefault() // Prevent the default form submission behavior


    // Handle the submission data or redirect to another page
  })
  questionEl.append(form)

  form.append(input) // append the input field to the form element
  form.append(button)
  



  button.innerHTML = 'Submit'

  let userInitials = {
    initials : input.value,
    score : timer
}
localStorage.setItem('userInitials', JSON.stringify(userInitials))
button.addEventListener('click', function(){
    window.location='index.html'
})
}

      

    function setTimer(){
        timer--
    timerEl.innerText = `Timer: ${timer}`
    if(timer<0){
        clearInterval(timerSet)
    timerEl.innerText = `Timer: 0`
    return startGame()

    }
}
var timerSet= setInterval(setTimer,1000)

  
startGame()