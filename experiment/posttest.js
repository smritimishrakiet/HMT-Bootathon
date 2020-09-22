/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "After adding insulation amount of heat convection",  ///// Write the question inside double quotes
      answers: {
        a: "Increases",                  ///// Write the option 1 inside double quotes
        b: "Decreases",                  ///// Write the option 2 inside double quotes
        c: "No Change",                  ///// Write the option 3 inside double quotes
        d: "None of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "Illustrate the effect of change in outer radius of the hollow cylinder on the thermal resistance of conduction?",  ///// Write the question inside double quotes
      answers: {
        a: "the thermal resistance of conduction increases with increase in outer radius of the hollow cylinder",                  ///// Write the option 1 inside double quotes
        b: "the thermal resistance of conduction decreases with increase in outer radius of the hollow cylinder",                  ///// Write the option 2 inside double quotes
        c: "the thermal resistance of conduction remains same with change in outer radius of the hollow cylinder",                  ///// Write the option 3 inside double quotes
        d: "unpredictable"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
    {
      question: "What is the effect of change in outer radius of the hollow cylinder on the thermal resistance of convection?",
      answers: {
        a: "the thermal resistance of convection increases with increase in outer radius of the hollow cylinder",
        b: "the thermal resistance of convection decreases with increase in outer radius of the hollow cylinder",
        c: "the thermal resistance of convection remains same with change in outer radius of the hollow cylinder",
        d: "unpredictable"
      },
      correctAnswer: "b"
    },
        {
      question: "What is the formula for thermal resistance for convection at the outer surface of hollow cylinder? Where, h = convection heat transfer coefficient l = length of hollow cylinder r = outer radius of the cylinder",
      answers: {
        a: "Rc = 1 / h r l",
        b: "Rc = 2 π h r l",
        c: "Rc = 1 / 2 π h r l",
        d: "none of the above"
      },
      correctAnswer: "c"
    },

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
