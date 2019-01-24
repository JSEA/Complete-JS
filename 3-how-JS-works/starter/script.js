///////////////////////////////////////
// Lecture: Hoisting

//functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
};

var retirement = function(year) {
    console.log(65 - (2016 - year));
};

retirement(1979);

//variables

var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);  

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
 


// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}



///////////////////////////////////////
// Lecture: The this keyword

// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var julius = {
    name: 'Julius',
    yearOfBirth: 1979,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
}

julius.calculateAge()

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = julius.calculateAge;
mike.calculateAge();




