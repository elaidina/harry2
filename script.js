const quizData = [
    {
        question: "Dobby is ...",
        a: "... an owl.",
        b: "... a house elf.",
        c: "... Harry´s brother.",
        
        correct: "b",
    },
    {
      question: "Ginny is ...",
      a: "... Harry´s cousin.",
      b: "... Hermione´s pet.",
      c: "... Ron´s sister.",
      correct: "c",
  },
  {
    question: "You-Know-Who´s full name is...",
    a: "... Rubeus Hagrid.",
    b: "... Tom Marvolo Riddle.",
    c: "... Rebecca Zamolo.",
    correct: "b",
},
{
  question: "The Hogwarts school is in  ...",
  a: "... Japan.",
  b: "... Russia.",
  c: "... Great Britain.",
  correct: "c",
},{
  question: "The Weasley family lives in  ...",
  a: "... the Diagon Alley.",
  b: "... the Burrow.",
  c: "... the Chamber of Secrets.",
  correct: "b",
},
{
question: "Gilderoy Lockhart  was the ...  ",
a: "... Potions teacher.",
b: "... Defense Against the Dark Arts teacher.",
c: "... Transfiguration teacher.",
correct: "b",
},{
  question: "The flying car belongs to... ",
  a: "... Dobby.",
  b: "... Aragog.",
  c: "... the Weasley family.",
  correct: "c",
},
{
question: "Fawkes...",
a: "... is a phoenix.",
b: "... is a giant snake.",
c: "... is a zombie.",
correct: "a",
},{
  question: "Phoenixes ...",
  a: "...are  frost-covered Christmas trees.",
  b: "...  burst into flame when  it is time for them to die and are reborn from the ashes.",
  c: "...are very beautiful Barbies.",
  correct: "b",
},
{
question: "The entrance to the Chamber of Secrets was in  ...",
a: "... Moaning Myrtle’s bathroom.",
b: "... The Whomping Willow .",
c: "... the Forbidden Forest.",
correct: "a",
},{
  question: "Aragog was a giant...",
  a: "... turtle.",
  b: "... three-headed dog.",
  c: "... spider.",
  correct: "c",
},
{
question: "The most popular sport inthe wizarding world is ...",
a: "... Homeball.",
b: "...  Quidditch.",
c: "... Dueling",
correct: "b",
},{
  question: "The Basilisk was ...",
  a: "... a giant.",
  b: "... a giant snake.",
  c: "... a pimple.", 
  correct: "b",
},
{
question: "Floo powder was used for ...",
a: "... baking.",
b: "... kissing.",
c: "... transport.",
correct: "c",
},{
  question: "The father of Draco Malfoy is ...",
  a: "... Lucius Malfoy.",
  b: "... Severus Snape.",
  c: "... Albus Dumledore.",
  correct: "a",
},
{
question: "The shop Borgin and Burkes is in the ...",
a: "... Disney Land.",
b: "... Dragon Alley.",
c: "... Knockturn Alley.",
correct: "c",
},{
  question: "Harry destroyed Tom Riddle´s diary with ...",
  a: "... the fang of the basilisk.",
  b: "... the sword of Godric Gryffindor.",
  c: "... a love potion.",
  correct: "a",
},
{
question: "Dobby was set free by getting   ...",
a: "... a fish.",
b: "... a sock.",
c: "... a car.",


correct: "b",
},{
  question: "Gilderoy Lockhart forgot everything thank to his own ...",
  a: "... Memory Charm.",
  b: "... wand.",
  c: "... house elf.",
  correct: "a",
},
{
question: "The cat of Mr. Filch was ...",
a: "... murdered by Aragog.",
b: "... stolen.",
c: "... petrified.",
correct: "c",
},
/* {
  question: "21. Zpěvák",
  a: "zpívá písničky na koncertech.",
  b: "opravuje pokazené elektrické přístroje.",
  c: "... Harry´s daughter.",
  correct: "a",
},
{
question: "22. Statistik",
a: "provádí turisty v pralese.",
b: "používá matematické modely k vyhodnocování informací.",
c: "... Harry´s daughter.",
correct: "b",
},
{
question: "23. Otorinolaryngolog",
a: "je doktor, který léčí nemoci nosu, uší a krku.",
b: "píše články do novin a časopisů.",
c: "... Harry´s daughter.",
correct: "a",
},
{
question: "24. Soudce",
a: "rozhoduje právní spory.",
b: "kontroluje jízdenky ve vlaku.",
c: "... Harry´s daughter.",
correct: "a",
},{
question: "25. Editor",
a: "zodpovídá za obsah a formu článků v médiích.",
b: "řídí letadlo.",
c: "... Harry´s daughter.",
correct: "a",
},
{
question: "26. Radiolog",
a: "slouží mše v kostele.",
b: "vyhodnocuje rentgeny a ultrazvuky pacientů.",
c: "... Harry´s daughter.",
correct: "b",
},{
question: "27. Tlumočník",
a: "dělá překlady z jedné řeči do druhé.",
b: "natáčí videa na Youtube.",
c: "... Harry´s daughter.",
correct: "a",
},
{
question: "28. Archeolog",
a: "zkoumá vykopávky a nálezy z minulosti.",
b: "pracuje v bance u pokladny.",
c: "... Harry´s daughter.",
correct: "a",
},{
question: "29. Detektiv",
a: "je specialista na výživu.",
b: "pátrá po stopách zločinců.",
c: "... Harry´s daughter.",
correct: "b",
},
{
question: "30. Recepční",
a: "pracuje v hoteli na recepci.",
b: "vymýšlí a navrhuje reklamy. ",
c: "... Harry´s daughter.",
correct: "a",
} */
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const q = document.getElementById('q')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]


    q.innerText = [currentQuiz+1] + "/20"
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>

                  <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text">${question.c}</label>
                  </li>
        
                  
                  <li>
                  <h4>Correct answer: ${question[quizData[i].correct]}</h4>
                <h4>You chose: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>You got ${score} points out of ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Try again.</button>
            `
        
        
        }
    }
  })