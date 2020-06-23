// ******************************************************** Chapter 21 to 25 ****************************************************************************
// -----------------------------------------Question 1------------------------------------------
// var firstName = prompt("Enter your first name?");
// var lastName = prompt("Enter your last name?");
// var firstChar = firstName.slice(0,1);
// var firstSome = firstName.slice(1);
// firstChar = firstChar.toUpperCase();
// firstSome = firstSome.toLowerCase();
// var lastChar = lastName.slice(0,1);
// var lastSome = lastName.slice(1);
// lastChar = lastChar.toUpperCase();
// lastSome = lastSome.toLowerCase();
// var fullName = firstChar+firstSome+" "+lastChar+lastSome;
// document.write("Welcome here! "+fullName);

// -----------------------------------------Question 2------------------------------------------
// var userInput = prompt("Enter your favorite Mobile phone model?");
// let actualText = userInput.replace(/ /g, "");
// var lengthInput = actualText.length;
// document.write("My favorite phone is : "+userInput+"<br>Length of string : "+lengthInput);

// -----------------------------------------Question 3------------------------------------------
// var string = "pakistani";
// var index = string.indexOf("n");
// document.write("Index of 'n' in the word 'Pakistani' is  : "+index);

// -----------------------------------------Question 4------------------------------------------
// var string = "hello world";
// var index = string.lastIndexOf("l");
// document.write("Last index of 'l' in the string 'hello world' is  : "+index);

// -----------------------------------------Question 5------------------------------------------
// var string = "pakistani";
// var character = string.charAt(3);
// document.write("Character at index 3 in the word 'Pakistani' is  : "+character);

// -----------------------------------------Question 6------------------------------------------
// var firstName = prompt("Enter your first name?");
// var lastName = prompt("Enter your last name?");
// var firstChar = firstName.slice(0,1);
// var firstSome = firstName.slice(1);
// firstChar = firstChar.toUpperCase();
// firstSome = firstSome.toLowerCase();
// var lastChar = lastName.slice(0,1);
// var lastSome = lastName.slice(1);
// lastChar = lastChar.toUpperCase();
// lastSome = lastSome.toLowerCase();
// var fullName = firstChar.concat(firstSome+" "+lastChar+lastSome);
// document.write("Welcome here! "+fullName);

// -----------------------------------------Question 7------------------------------------------
// var city  = "Hyderabad";
// var newCity = city.replace("Hyder","Islam");
// document.write("City : "+city+"<br>After replacement : "+newCity);

// -----------------------------------------Question 8------------------------------------------
// var message  = "Ali and Sami are best friends. They play cricket and football together";
// var newMessage = message.replace(/and/g,"&");
// document.write("Message : "+message+"<br>After replacement : "+newMessage);

// -----------------------------------------Question 9------------------------------------------
// var number = "472"; 
// var typeOfNum = typeof(number);
// document.write("Value : "+number+"<br>Type : "+typeOfNum);
// typeOfNum = typeof(parseInt(number));
// document.write("<br>Value : "+number+"<br>Type : "+typeOfNum);

// -----------------------------------------Question 10------------------------------------------
// var userInput = prompt("Enter Input?");
// var uppercase = userInput.toUpperCase();
// document.write("User input : "+userInput+"<br>Upper-case : "+uppercase);

// -----------------------------------------Question 11------------------------------------------
// var userInput = prompt("Enter Input?");
// document.write("User input : "+userInput+"<br>Title-case : "+(userInput.charAt(0).toUpperCase())+(userInput.substr(1).toLowerCase()));

// -----------------------------------------Question 12------------------------------------------
// var num = 35.36;
//  var res = num+''
//  res = res.replace('.', '');
//  res = res.toString();
// document.write("Number : "+num+"<br>Result : "+res);

// -----------------------------------------Question 13------------------------------------------
// var userInput = prompt("Enter a user name?");
// var num =0;
// for (var i = 0; i <= userInput.length; i++){
// if (userInput.charCodeAt(i) === 33 || userInput.charCodeAt(i) === 44 || userInput.charCodeAt(i) === 46 || userInput.charCodeAt(i) === 64){
//     num = 1;
//     break;
// }
// }
// if (num === 1){
//  alert("Enter a valid user name!")
// }
// else{
//     document.write("User Name : "+userInput);

// }

// -----------------------------------------Question 14------------------------------------------
// var bakkery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABc Bakkery. What do you want to order");
// input = input.toLowerCase();
//   if(bakkery.indexOf(input) !== -1){
//     document.write(input+" is <b> available </b> at index "+(bakkery.indexOf(input))+" in our bakkery");}
//   else{
//     document.write("We are sorry! "+input+" is <b>not available</b> in our bakkery");
//   }

  // -----------------------------------------Question 15------------------------------------------
// var password = prompt("Enter a password? (password should contain alphabets and numbers, at least 6 characters long and not start with a number)");
// var num =0;
// if (password.length > 6){

//   if (!(password.charAt(0).match(/[0-9]/g))){

//   if( password.match("^[A-Za-z0-9]*$")){
//   num = 1;
//   }
//   if (num === 1){
//     alert("You have enter a valid password");
//    }
//    else{
//     alert("You have enter a special character. Please  enter a valid password");
  
  
//   }
// }

// else{
//   alert("Password can not begin with a number. Please  enter a valid password");


// }

// }
// else{
//   alert("Password must contain at least 6 Character!");
// }

  // -----------------------------------------Question 16------------------------------------------
// var university = "University of Karachi";
// var arr = {};
// var char;
// arr = university.split("");
// for (var i=0 ; i< university.length ; i++ ){
//  document.write(arr[i]+"<br>");
// }

  // -----------------------------------------Question 17------------------------------------------
// var userInput = prompt("Enter an input");
// var length = userInput.length;
// document.write("User input : "+userInput+"<br>Last character of user input is : "+userInput.charAt(length-1));

  // -----------------------------------------Question 18------------------------------------------
// var string = "The quick brown fox jumps over the lazy dog";
// string = string.toLowerCase();
// var arr = string.split("the");
//  document.write("String : "+string+"<br>There are "+(arr.length-1)+" occurrences(s) of the word 'the'");

// ******************************************************** Chapter 26 to 30 ****************************************************************************
// -----------------------------------------Question 1------------------------------------------
// mistake in question integers does not include decimal numbers
// var num = prompt("Enter a positive floating point number?");
// num = parseFloat(num);
// if (num > 0){
//   var roundNum = Math.round(num);
//   var ceilNum = Math.ceil(num);
//   var floorNum = Math.floor(num);
//    document.write("Number : "+num+"<br>Round of value : "+roundNum+"<br>Ceil value : "+ceilNum+"<br>Floor value : "+floorNum);
// }

// else{
//   alert("You have entered a negative number or alphabets! Please enter positive number")
// }

// -----------------------------------------Question 2------------------------------------------
// mistake in question integers does not include decimal numbers
// var num = prompt("Enter a negative floating point number?");
// num = parseFloat(num);
// if (num < 0){
//   var roundNum = Math.round(num);
//   var ceilNum = Math.ceil(num);
//   var floorNum = Math.floor(num);
//    document.write("Number : "+num+"<br>Round of value : "+roundNum+"<br>Ceil value : "+ceilNum+"<br>Floor value : "+floorNum);
// }

// else{
//   alert("You have entered a positive number or alphabets! Please enter positive number")
// }

// -----------------------------------------Question 3------------------------------------------
// var num = prompt("Enter a number?");
// num = parseInt(num);
// var absolute = Math.abs(num);
//    document.write("Number : "+num+"<br>Absolute value : "+absolute);

// -----------------------------------------Question 4------------------------------------------
// var num = Math.random();
// var improvedNum = (num * 6) + 1;
// var diceNum = Math.floor(improvedNum);
//    document.write("Random dice value : "+diceNum);

// -----------------------------------------Question 5------------------------------------------
// var num = Math.random();
// var improvedNum = (num * 2) + 1;
// var coinNum = Math.floor(improvedNum);
// if(coinNum === 2){
//    document.write(coinNum+"<br>Random coin value : Head");
// }
// else{
//   document.write(coinNum+"<br>Random coin value : Tail");

// }

// -----------------------------------------Question 6------------------------------------------
// var num = Math.random();
// var improvedNum = (num * 99)+2;
// var ranNum = Math.floor(improvedNum);
//    document.write("Random number between 1 and 100 (i.e 2 to 99) : "+ranNum);

// -----------------------------------------Question 7------------------------------------------
// var userInput = prompt("Enter your weight in kilograms?");
// userInput = parseFloat(userInput);
//   document.write("Your weight is : "+userInput+" Kilograms");

// -----------------------------------------Question 8------------------------------------------
// var num = Math.random();
// var improvedNum = (num * 10) + 1;
// var ranNum = Math.floor(improvedNum);
// var userInput = prompt("Enter a number?");
// userInput = parseInt(userInput);
// if(ranNum === userInput){
//    alert("Congrates! your number "+userInput+" is matched with the secret number "+ranNum);
// }
// else{
//   alert("Try again!");

// }

// ******************************************************** Chapter 31 to 34 ****************************************************************************
// -----------------------------------------Question 1------------------------------------------
// var currentDate = new Date();
// document.write(currentDate);

// -----------------------------------------Question 2------------------------------------------
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = monthNames[theMonth];
// document.write("Current Month : "+nameOfMonth);

// -----------------------------------------Question 3------------------------------------------
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is "+nameOfToday);

// -----------------------------------------Question 4------------------------------------------
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(theDay === 0 || theDay === 6){
// document.write("It's Fun day : "+nameOfToday);
// }
// else{
//   document.write("It's working day : "+nameOfToday);
// }

// -----------------------------------------Question 5------------------------------------------
// var now = new Date();
// var theDay = now.getDate();
// if(theDay < 16){
// document.write("First fifteen days of the month");
// }
// else{
//   document.write("Last days of the month");
// }

// -----------------------------------------Question 6------------------------------------------
// var date = new Date("January 1, 1970 0");
// var date1 = new Date();
// var milliSec = date.getTime();
// var milliSec1 = date1.getTime();
// var milli = milliSec1-milliSec;
// var min = milli/(1000*3600);
//   document.write("Current Date : "+date1+"<br>Elapsed milliseconds since January 1, 1970 : "+milli+
//   "<br>Elapsed minutes since January 1, 1970 : "+min);

// -----------------------------------------Question 7------------------------------------------
// var date = new Date();
// var hour = date.getHours();
// if(hour <= 12){
//   document.write("It's AM");
// }
// else{
//   document.write("It's PM");
// }

// -----------------------------------------Question 8------------------------------------------
// var laterDate = new Date("Dec 31, 2020 00:00:00");
//   document.write("Later Date : "+laterDate);

  // -----------------------------------------Question 9------------------------------------------
// var ramzanDate = new Date("April 25, 2020");
// var date1 = new Date();
// var milliSec = ramzanDate.getTime();
// var milliSec1 = date1.getTime();
// var milli = milliSec1-milliSec;
// var days = milli/(1000*3600*24);
// days = Math.floor(days);
// document.write(days+" have passed since 1 Ramadan, 2020");

  // -----------------------------------------Question 10------------------------------------------
// var date1 = new Date("January 1, 2015 ");
// var referenceDate1 = new Date("December 5, 2015 22:50:16");
// var milliSec = date1.getTime();
// var milliSec1 = referenceDate1.getTime();
// var milli = milliSec1-milliSec;
// var sec = milli/(1000*60);
// sec = Math.ceil(sec);
// document.write("On reference Date : "+referenceDate1+"<br>"+sec+" seconds had passed since begining of 2015");

  // -----------------------------------------Question 11------------------------------------------
// var date1 = new Date();
// document.write("Current time : "+date1);
// var hour = date1.setHours(22);
// document.write("<br>1 hour ago, it was "+date1);

  // -----------------------------------------Question 12------------------------------------------
// var date1 = new Date();
// alert("Current time : "+date1);
// var year = date1.setFullYear(1920);
// alert("100 years back, it was "+date1);

  // -----------------------------------------Question 13------------------------------------------
// var age = prompt("Enter your age?");
// var currentDate = new Date();
// var year = currentDate.getFullYear();
// var birthYear = year-age;
// document.write("Your age is : "+age+"<br>Your birth year is : "+birthYear);

  // -----------------------------------------Question 14------------------------------------------
// var name = "fatima";
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var theMonth = date.getMonth();
// var month = monthNames[theMonth];
// var numOfUnits = 410.890086;
// var chargesPerUnit = 16;
// var netAmountPayable = numOfUnits*chargesPerUnit;
// var surcharge = 350;
// var grossAmountPayable = netAmountPayable+surcharge;
// document.write("<h1>K-Electric Bill</h1>Consumer Name : <b>"+name+"</b><br>Month : <b>"+month+"</b><br>Number of units : <b>"
// +(numOfUnits.toFixed(2))+"</b><br>Charges per unit : <b>"+(chargesPerUnit.toFixed(2))+"</b><br>Net amount payable(within due date) : <b>"
// +(netAmountPayable.toFixed(2))+"</b><br>Late payment surcharge : <b>"+(surcharge.toFixed(2))+
// "</b><br>Gross amount payable(after due date) : <b>"+(grossAmountPayable.toFixed(2))+"<b>");

// ******************************************************** Chapter 35 to 38 ****************************************************************************
// -----------------------------------------Question 1------------------------------------------
// function tellTime(){
//   var date = new Date();
//   document.write("Current Time : "+date);
// }
//  tellTime();

 // -----------------------------------------Question 2------------------------------------------
// function fullName(){
// var firstName = prompt("Enter your first name?");
// var lastName = prompt("Enter your last name?");
// var firstChar = firstName.slice(0,1);
// var firstSome = firstName.slice(1);
// firstChar = firstChar.toUpperCase();
// firstSome = firstSome.toLowerCase();
// var lastChar = lastName.slice(0,1);
// var lastSome = lastName.slice(1);
// lastChar = lastChar.toUpperCase();
// lastSome = lastSome.toLowerCase();
// var fullName = firstChar.concat(firstSome+" "+lastChar+lastSome);
// document.write("Welcome here! "+fullName);
// }

// fullName();

 // -----------------------------------------Question 3------------------------------------------
// var input=prompt("Enter two numbers?","firstnumber  ,  secondnumber"),
//      firstNumber = parseInt(input.split(",")[0]),
//      secondNumber = parseInt(input.split(",")[1]);
//      var addition = sum(firstNumber,secondNumber);
//      document.write("Sum of "+firstNumber+" and "+secondNumber+" is "+addition);

//      function sum(a,b){
//        var sum = a+b;
//        return sum;

//      }

 // -----------------------------------------Question 4------------------------------------------
// var input = prompt("Enter two numbers?","6  ,  5"),
//        firstNo = parseInt(input.split(",")[0]),
//        secondNo = parseInt(input.split(",")[1]);
//        operator = prompt("Enter operator(+,-,*,/&%)?","+")

//        var result = calculator(firstNo,secondNo,operator);
//        document.write(firstNo+" "+operator+" "+secondNo+" = "+result);

//        function calculator(firstNo,secondNo,operator){
//        if(operator === "+"){
//            return firstNo+secondNo;
//        }
//        else if(operator === "-"){
//         return firstNo-secondNo;
//       }
//       else if(operator === "*"){
//       return firstNo*secondNo;
//       }
//       else if(operator === "%"){
//       return firstNo%secondNo;
//       }
//       else if(operator === "/"){
//       return firstNo/secondNo;
//       }
//       else {
//         document.write("You have entered wrong Operator<br>");
//       }
//   }

 // -----------------------------------------Question 5------------------------------------------
//  var input = parseInt(prompt("Enter a number?","5"));
// var squareNum = square(input);
// document.write("Square of "+input+" is "+squareNum);
// function square(a){
// return Math.pow(a,2)
// }

 // -----------------------------------------Question 6------------------------------------------
//  var input = parseInt(prompt("Enter a number?","5"));
// var fact = factorial(input);
// document.write("Factorial of "+input+" is "+fact);

// function factorial(a){
//   var n=1;
// for(var i = 2; i <= a; i++){
//   n = n * i;
// }

// return n
// }

 // -----------------------------------------Question 7------------------------------------------
// var input = prompt("Enter two numbers?(end number shoud be greater from start)","startNo  ,  EndNo"),
//        startNo = parseInt(input.split(",")[0]),
//        endNo = parseInt(input.split(",")[1]);
//        document.write("Counting from "+startNo+" to "+endNo+" : <br>");
//        counting(startNo,endNo);

// function counting(a,b){
//   var n = a;
//  for(var i = 0; i <= b-a; i++){
//   document.write((n+i)+"<br>");

//  }
// }

 // -----------------------------------------Question 8------------------------------------------
// var input = prompt("Enter two numbers?(end number shoud be greater from start)","base  ,  perpendicular"),
//        base = parseInt(input.split(",")[0]),
//        perpendicular = parseInt(input.split(",")[1]);
//        var hypo = hypotenuse(base,perpendicular);
//        document.write("Base : "+base+"<br>Perpendicular : "+[perpendicular]+"<br>The hypotenuse : "+(hypo.toFixed(2)));

//        function hypotenuse(a,b){
//          a = square(a);
//          b= square(b);
//          return Math.sqrt(a+b);

//        }
//        function square(c){
//      return Math.pow(c,2)
//       }

 // -----------------------------------------Question 9------------------------------------------
  // var height =5;
  // area(2,height);
  // function area(w,h){
  //   var area = w*h;
  //   document.write("Width : "+w+"<br>Height : "+h+"<br>Area of rectangle : "+area)

  // }

   // -----------------------------------------Question 11------------------------------------------
// var string = "the quick brown fox";
// document.write("String : "+string+"<br>After :");

// upperCase(string);
// function upperCase(string){
//   var arr = string.split(" ");

//   for(var i=0; i<arr.length;i++){
//     arr[i]=(arr[i].slice(0,1).toUpperCase())+arr[i].slice(1).toLowerCase();
//     document.write(arr[i]+" ");

//   }

// }

   // -----------------------------------------Question 12------------------------------------------
  //  var string = "web development tutorial";
  //  document.write("String : "+string+"<br>Longest word in the string is :");
   
  //  longest(string);
  //  function longest(string){
  //    var arr = string.split(" ");
   
  //    for(var i=0; i<(arr.length-1);i++){
  //      var long
  //      if(arr[i].length>arr[i+1].length){
  //        long = arr[i];
   
   
  //      document.write(long);
   
  //    }
   
  //  }
  //  }

     // -----------------------------------------Question 13------------------------------------------
