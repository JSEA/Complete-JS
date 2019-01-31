/*
//object literal
var julius = {
    name: 'Julius',
    yearOfBirth: 1979,
    job: 'software engineer'
};

// Function Constructor (Start with a Capital Letter)
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge(); 
jane.calculateAge(); 
mark.calculateAge(); 

console.log(john);
*/

/*
// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer' }
});
*/

/*
// Primitives vs Objects

 var a = 23;
 var b = a;
 a = 46

 console.log(a);
 console.log(b);

 var obj1 = {
     name: 'John',
     age: 26
 };

 var obj2 = obj1;
 obj1.age = 30;

 console.log(obj1.age);
 console.log(obj2.age);

 // Functions

 var age = 27;
 var obj = {
     name: 'Jonas',
     city: 'Lisbon'
 };

 function change(a, b) {
     a = 30;
     b.city = 'San Francisco';
 }

 change(age, obj);

 console.log(age);
 console.log(obj.city);
*/

/*
// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
};

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

// Functions return functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log(`Hello ${name}, what do you do?`);
        }
    }
};

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

// IIFE

 function game() {
     var score = Math.random() * 10;
     console.log(score >= 5);
 }

 game();

 (function () {
    var score = Math.random() * 10;
     console.log(score >= 5);
    }
 )();

 (function (goodluck) {
    var score = Math.random() * 10;
     console.log(score >= 5 - goodluck);
    }
 )(5);
 */

 /*
 // Closures

 function retirement(retirementAge) {
     var a = ' years left until retirement';
     return function(yearOfBirth) {
         var age = 2019 - yearOfBirth;
         console.log((retirementAge - age) + a);
     }
 }

 var retirementUS = retirement(66);
 var retirementGermany = retirement(65);
 var retirementIceland = retirement(67);

 retirementUS(1979);
 retirement(70)(1979);
 retirementGermany(1979);
 retirementIceland(1979);
 */

 /*
 // Bind, Call, Apply

 var john = {
     name: 'John',
     age: 26,
     job: 'teacher',
     presentation: function(style, timeOfDay) {
         if (style === 'formal') {
             console.log(`Good ${timeOfDay}, Ladies and Gentlmen! My name is ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`)
         } else if (style === 'friendly') {
             console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
         }
     }
 }

 john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35, 
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('evening');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

(function() {
    //function constructor (pseudoclassical method)
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    //Method to dsiplay the questions
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    //Method to check the answers and tabulate scores
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer, great job!');
            sc = callback(true);
        } else {
            console.log('Wrong answer, please try again.');

            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------------');
    }

    //new questions
    var question1 = new Question('Is Javascript the programming language in the world?', ['Yes', 'No'], 0);
    var question2 = new Question('What is the name of the course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    var question3 = new Question('What\'s the best way to describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
    //array containing the questions for ease of access
    var questions = [question1, question2, question3];

    //function to add scores
    function scores() {
        var score = 0;
        return function(correct) {
            if (correct) {
                score++;
            }
            return score;
        }
    };

    var keepScores = scores();
    
    function nextQuestion() {
        //random number generator to generate each question
        var num = Math.floor(Math.random() * questions.length);
            
        //call the function
        questions[num].displayQuestion();

        //prompt where user will answer the question
        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            //call the function, parseInt converts answer to number
            questions[num].checkAnswer(parseInt(answer), keepScores);

            nextQuestion();
        }
    }
    
    nextQuestion();

})();


