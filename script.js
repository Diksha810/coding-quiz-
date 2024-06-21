const questions=[
    {
        question:"What does abbreviation “HTML” stands for?",
        answers: [
            { text:"Hyper Text Marquee Language",correct:"false"},
            { text:"Hyper Text Machine Language",correct:"false"},
            { text:"Hyper Text Markup Language",correct:"true"},
            { text:"Hyper Test Marking Language",correct:"false"},
            
        ]
    },{
        question:"Which of the following CSS selectors are used to specify a group of elements?",
        answers: [
            { text:"tag",correct:"false"},
            { text:"id",correct:"false"},
            { text:"class",correct:"true"},
            { text:"both id and class",correct:"false"},
        ]
    },{
        question:"Which statement creates a new object using the Person constructor?",
        answers: [
            { text:"var student = construct Person;",correct:"false"},
            { text:"var student = new Person();",correct:"true"},
            { text:"var student = Person();",correct:"false"},
            { text:"var student = construct Person();",correct:"false"},
        ]
    },{
    
        question:"Which of the following is correct about JavaScript?",
        answers: [
            { text:"JavaScript is an Object-Based language ",correct:"true"},
            { text:"JavaScript is Assembly-language",correct:"false"},
            { text:"JavaScript is an Object-Oriented language",correct:"false"},
            { text:"JavaScript is a High-level language",correct:"false"},
        ]
    },{
        question:"Which of the following is not the element associated with the HTML table layout?",
        answers: [
            { text:" alignment",correct:"false"},
            { text:"color",correct:"true"},       
            { text:"size",correct:"false"},
            { text:"spanning",correct:"false"},
        ]
    },{
        question:"From the choices given below, select the correct order to code css pseudo-classes",
        answers: [
            { text:"link,visited,hover,active",correct:"true"},
            { text:"hover,link,active,visited",correct:"false"},
            { text:"link,hover,visited,active",correct:"false"},
            { text:"link,hover,active,visited",correct:"false"},
        ]
    },{
        question:"Which of the following is not a vaid javascript variable.?",
        answers: [
            { text:"2names",correct:"true"},
            { text:"_first_and _lastname",correct:"false"},
            { text:"FirstAndLast",correct:"false"},
            { text:"first2last",correct:"false"},
        ]
    },{
        question:"Which JavaScript method is used to create a new array with array elements that passes a test?",
        answers: [
            { text:" forEach()",correct:"filter"},
            { text:"map()",correct:"filter"},
            { text:"forMap()",correct:"filter"},
            { text:"filter()",correct:"true"},
        ]
    },{
        question:"Which of the following is used to specify the subscript of text using CSS?",
        answers: [
            { text:"align: subscript",correct:"false"},
            { text:" vertical-align: subscript",correct:"false"}, 
            { text:"vertical-align: sub",correct:"true"},
            { text:"alignment:sub",correct:"false"},
        ]
    },{
        question:"JavaScript objects are written with ",
        answers: [
            { text:"round brackets",correct:"false"},
            { text:"curly brackets",correct:"true"},
            { text:"double quotes",correct:"false"},
            { text:"square brackets []",correct:"false"},
        ]
    },{
        question:"The tags in HTML are –",
        answers: [
            { text:"case-sensitive",correct:"false"},
            { text:"in upper case",correct:"false"},
            { text:"not case-sensitive",correct:"true"},
            { text:"in lower case",correct:"false"},
        ]
    },{
        question:"Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        answers: [
            { text:"slice()",correct:"false"},
            { text:"split()",correct:"false"},
            { text:"substr()",correct:"true"},
            { text:"search()",correct:"false"},
        ]
    }//{
      //  question:"Which of the following tag provides a hint to the user of what can be entered in the field?",
      //  answers: [
          //  { text:"output",correct:"false"},
          //  { text:"placeholder",correct:"true"},
         //   { text:"autofocus",correct:"false"},
          //  { text:" required",correct:"false"},
        ]//
    //

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex +1;
    questionElement.innerHTML=questionNo +"."+currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
button.addEventListener("click",selectAnswer);
});
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}



function selectAnswer(e){
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct==="true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct ==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
});
nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score}out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
}) ;



        startQuiz();
