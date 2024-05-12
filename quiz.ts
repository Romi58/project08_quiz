async function runQuiz() {
    const inquirer = await import('inquirer');
  
    const questions = [
      {
        type: 'list',
        name: 'q1',
        message: 'What is the capital of Pakistan?',
        choices: ['Islamabad', 'Karachi', 'Lahore', 'Peshawar'],
        filter: function (val: string) {
          return val.toLowerCase();
        }
      },
      {
        type: 'list',
        name: 'q2',
        message: 'Which is the national bird of Pakistan?',
        choices: ['Parrot', 'Peacock', 'Chukar', 'Koel'],
        filter: function (val: string) {
          return val.toLowerCase();
        }
      },
      {
        type: 'list',
        name: 'q3',
        message: 'What is the national flower of Pakistan?',
        choices: ['Rose', 'Jasmine', 'Sunflower', 'Tulip'],
        filter: function (val: string) {
          return val.toLowerCase();
        }
      }
    ];
  
    
    const answers = {
      q1: 'islamabad',
      q2: 'chukar',
      q3: 'jasmine'
    };
  

    console.log('Welcome to the Pakistan Quiz!\n');
    const userAnswers = await inquirer.default.prompt(questions); 
    let score = 0;
  
    
    if (userAnswers.q1 === answers.q1) {
      score++;
    }
    if (userAnswers.q2 === answers.q2) {
      score++;
    }
    if (userAnswers.q3 === answers.q3) {
      score++;
    }
  
    console.log(`\nYour score: ${score} out of 3\n`);
  }
  

runQuiz();
