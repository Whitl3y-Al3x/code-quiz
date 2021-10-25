/**set the time to zero*/
var timer = 76;
var timeCount;
/**this is the timer funtion which will start counting as soon as the quiz starts*/
function setupTimer() {
    timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time:" + " " + timer;
       timer = timer;
        if (timer <= 0) {         
            clearInterval(timeCount);
              
            timeElement.textContent = timeReset;
             
        }
    }, 1000)
}



let question = {
  title: 'Commonly used data types DO NOT include:',
  alternative: ['strings', 'booleans', 'alerts', 'numbers'],
  correctAnswer: 2
};

let question = {
  title: 'The condition in an if/else statement is enclosed with_________.',
  alternative: ['quotes', 'curly brackerts', 'parenthesis', 'square brackets'],
  correctAnswer: 3
};

let question = {
  title: 'String values must be enclosed within_________.',
  alternative: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
  correctAnswer: 2
};

let question = {
  title: 'Arrays in JavaScript can be used to store_________.',
  alternative: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
  correctAnswer: 3
};

let question = {
  title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
  alternative: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
  correctAnswer: 3
};

function showQuestion(q) {
  // 1. select dom element
  let titleDiv = document.getElementById('title');

  // 2. modify it
  titleDiv.textContent = q.title;

  // selecting by a query
  let alts = document.querySelectorAll('.alternative');

  alts.forEach(function (element, index) {
    element.textContent = q.alternative[index];

    element.addEventListener('click', function () {
      // check correct answer
      if (q.correctAnswer === index) {
      console.log('Correct!');
    }
      else {
      console.log('Wrong!');
      }
    });
  });
}

showQuestion(question);

let btn = document.getElementById('alternative');

alternative.addEventListener('click', function () {

});


