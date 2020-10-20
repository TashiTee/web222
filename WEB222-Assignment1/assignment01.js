
 /*****************************************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: _____Tashi Tsering____ Student ID: __114763170________ Date: ________sept 13 2018________
*
********************************************************************************************************/

/*****************************
* Task 1  //student-info
*****************************/

var StudentName = "Tashi Tsering";
var NumCourse = "5";
var program = "CPA";
var job = true;
console.log("My name is " +StudentName+ " and I'm in "+program+" program. I'm taking "+NumCourse+ " course in this semester.");


if (job){
  var haveJob="have";
  
}else{
  var haveJob="dont have"
}

console.log("My name is " +StudentName+ " and I'm in "+program+" program. I'm taking "+NumCourse+ " course in this semester and I "+haveJob+ " a part-time job now.");


/*****************************
* Task 2  //birth-year and graduate year
*****************************/

var currentYear = 2018;
var age = prompt("Please enter your age:");

var bornYear = currentYear - age;

console.log("You were born in the year of " +bornYear+ ".");

var schoolYear = prompt("Enter the number of years you expect to study in the college:");

var gradYear = currentYear+ +schoolYear;  


console.log("You will graduate form Seneca College in the year of "+gradYear+".");

/*****************************
* Task 3  // Celcius and Fahrenheit temperatures
*****************************/

var celsius = 32;

var celTemp = celsius;
var cToFar = +celTemp * 9 / 5 + 32;

console.log(+celTemp+"°C is "+cToFar+" °F");

//Fahrenhiet-Celsius
var fahrenheit = 90;

var farTemp = fahrenheit;
var fToCel  = (+farTemp - 32) * 5 / 9;
var rndTemp = Math.round(+fToCel);

console.log(+farTemp+" °F is " +rndTemp+ " °C");

/*****************************
* Task 4  Even and Odd numbers
*****************************/

function Even() {
        for (var i = 0; i <=10; i++){  // 
            if ((i % 2) == 0)   // if remainder of i % 2 = 0 then its even
               console.log(i + " Even \n");
        }
    }

function Odd() {
        for (var i = 0; i <=10; i++){
            if ((i % 2) !== 0)    // if remainder of i % 2 does not equal 0 then its odd
                console.log(i + " Odd \n");
        }
    }

  Even();
  Odd();

/*****************************
* Task 5  Larger or largest number
*****************************/

//part a

function largerNum(a, b) {        
    if ( a > b ) {      // if a > b then it returns a
      return a;
  } else { 
     return b;          // or else it returns b
  }
}

//part b
var greaterNum = function(a, b){    
  if ( a > b ) {    
   return a;
  } else { 
    return b;
  }
}
console.log( "The larger number is " +largerNum(5,12));
console.log( "The larger number is " +greaterNum(5,12));

/*****************************
* Task 6  Evaluator
*****************************/

function Evaluator(){
  
  var val=0;
  
  for (var i = 0; i < arguments.length; i++){  //find out how many arguments
       val = val + arguments[i];      // add all the arguments value into val
  }
  
  return (val/arguments.length >=50) ? true : false;  // finds the average
}
console.log("The average of 45,55 is greater than or equal to 50 is "+ Evaluator(45, 55)+",");
console.log("The average of 80,60,70,50 is greater than or equal to 50 is "+ Evaluator(80, 60, 70, 50)+",");
console.log("The average of 21,21 is greater than or equal to 50 is "+ Evaluator(21,21)+".");


/*****************************
* Task 7  Grader
*****************************/

Grader = function(mark){
  
var grade;
  if (mark >= 90)
     grade='A+';
  else if (mark >= 80)
     grade='A';
  else if (mark >= 70)
     grade='B';
  else if (mark >= 60)
     grade='C';
  else if (mark >= 50)
     grade='D';
  else 
     grade="F";
  
  return grade;
}
var result1 = Grader(90);
console.log("Your grade: " +result1);
var result2 = Grader(71);
console.log("Your grade: " +result2);
var result3 = Grader(55);
console.log("Your grade: " +result3);

/*****************************
* Task 8  ShowMultiples
*****************************/

function showMultiples()
{
  var c = "";
  var p = 0;
  for(var i = 1; i <=numMultiples; i++)
    {
      var p = num * i;
      c = c + num + " x "+i+" = "+p+"\n";
    }
return c;
}

var num = 5
var numMultiples = 4;           // multiplys to 4
var result = showMultiples();
console.log(result)

var num = 4
var numMultiples = 4;
var result = showMultiples();
console.log(result)
 
var num = 6
var numMultiples = 4;
var result=showMultiples();
console.log(result) 
