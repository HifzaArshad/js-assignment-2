
// CHAPTER21
// TASK1

var first_name=prompt("Enter first name");
var last_name=prompt("Enter Last  name");
 var full_name=(first_name + " " + last_name);
 alert(" Hello " + full_name)


// TASK2

var mobile=prompt("Enter your Favorite Mobile Phone!");
var fav=mobile.length;
document.write(fav)

// TASK3

var text = "pakistani"; 
var segIndex = text.lastIndexOf("n");
document.write(segIndex)


// TASK4
var str="Hello World";
var char=str.lastIndexOf("l");
document.write(char)

// TASK5

var str="pakistani";
var char=str.charAt(2)
document.write(char)

// TASK6

var first_name="Hifza";
var last_name="Arshad";
var full_name=first_name.concat(last_name);
document.write(full_name)

// TASK7

var city="Hyderabad";
var str=city.replace("Hydera","Islama");
document.write(str);

// TASK8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var end= message.replace( /and/g,"&");
document.write(end) 

// TASK9

var str="472"
var num=472;
document.write(typeof str);
document.write(typeof num)

// TASK10

var user=prompt("Enter any text");
var user1=user.toUpperCase();
document.write(user1)

// TASK11

var user=prompt("Enter any text");
var user1=user.slice(0,1).toUpperCase() + user.slice(1).toLowerCase();
document.write(user1)

// TASK12

var num=35.36;
var num1=num.toString().replace('.',"");
document.write(num1)

// TASK13

  var user=prompt("Enter user name");
var str;
for(var i=0; i<=user.length;i++){
   str=user.charCodeAt(i);
   if(str==3 || str==44 || str==46 || str==64){
      alert("Please Enter valid user name")
   }
}
// TASK14

var user=prompt("What you want to order sir/mam !");
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
user=user.toLowerCase();
for(var i=0; i<bakery.length;i++){
    if(bakery[i]===user){
        document.write(bakery[i] +" avilable at index " + i + " in our bakery ")
    }
    else if(user==="pastry"){
        document.write("We are sorry " + user + " is not Available in our Bakery!")
    }
    
}

// TASK15

var pass=prompt("Enter Password  \n" + " a. It should contain alphebets and numbers  \n "+
                "b. It should not start with number  \n " + " c. it must at least 6 characters long");
 if(pass.length>=6){
     if(pass.slice(0,1) <= String.fromCharCode(65)){
         alert("password can not begin  with a number")
     }
     else{
         alert("Welcome")
     }
 }               
 else{
     alert("password must be 6 character long!")
 }

// TASK16

var university = "University of Sindh";
var res=university.split("")
for(var i=0; i<res.length;i++){
    document.write( res[i] + "<br>")
}


// TASK17

var user=prompt("Enter any text");
var last=user.charAt(user.length-1);
document.write("last character of string "+ last)

// TASK18

var str="The quick brown fox jumps over The lazy dog";
var count=(str.match(/The/g) || []).length;
document.write(count)


// CHAPTER 26-30

// TASK1
// A
  var num=prompt("Enter positive Integer");
document.write(num)

// B
var res=Math.round(num)
document.write("round of value " + res)

// C
var ceil=Math.ceil(num)
document.write("ceil value " + ceil)

// D
var floor=Math.floor(num)
document.write("floor value " + floor)


// TASK2

// A
   var num=prompt("Enter negative floating number Integer");
document.write(num)

// B
var res=Math.round(num)
document.write("round of value " + res)

// C
  var ceil=Math.ceil(num)
  document.write("ceil value " + ceil)

// D
 var floor=Math.floor(num)
 document.write("floor value " + floor)


// TASK3
var num= -6;
var res= Math.abs(num)
document.write(res)


// TASK4

var random=Math.random()*4;
var random1=Math.random()*6;
document.write("Random dice value 4: " + random)

// TASK5


var coin=Math.random() *3;
var f=Math.floor(coin);
document.write( f + " Random coin value: Heads")


// TASK6

var res=Math.random()*100
document.write( " Random number between 1 to 100: " + res)

// TASK7

var weight=prompt("Enter your weight in killograms");
document.write("the weight of user is " +weight)

// TASK8

var sec=Math.random() * 11;
var floor=Math.floor(sec);
var user=prompt("Enter any number between 1 to 10");
if(user==floor){
    document.write("Congratulations!")
}
else{
    document.write("Try Again!")



// CHAPTER 31-34
// TASK1

var date=new Date();
alert(date)

// TASK2

var month=["January","Feburary","March","Aprail","May","June","July","August","September","November","December"];
 var a= new Date();
 var b=a.getMonth();
  var c=month[b];
 document.write("Current Month " + c)


// TASK3

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date=new Date();
var a=date.getDay();
var b=days[a];
var slice=b.slice(0,3);
document.write(slice)

// TASK4

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date=new Date();
var a=date.getDay();
if(a==="Sunday"){
    document.write("It's Fun day")
}
else if(a==="Saturday"){
    document.write("It's Fun Day")
}
else{
    document.write("Today is not Fun Day")
}

// TASK5

var date= new Date();
var a=date.getDay();
if(a>16){
    document.write("First Fifteen days of Month")
}
else if(a<16){
    document.write("Lat Fifteen Days of Month ")
}

// TASK6

var date=new Date();
mili=date.getTime();
document.write("miliseconds since january 1,1970: " +mili);

// TASK7

var date=new Date();
var hours=date.getHours();
if(hours < 12){
    document.write("Am")
}
else{
    document.write("Pm")
}

// TASK8

var date = new Date();
var laterDate= new Date(date.getFullYear(), date.getMonth() + 7, 0);
document.write(laterDate)

// TASK9

var ramadan=new Date("Aprail/26,2020");
 var mili=ramadan.getTime();
var date=new Date();
var mili1=date.getTime();
 var diff=mili1-mili;
var days=diff/(1000*60*60*24);
var floor=Math.floor(days);
document.write(floor + " Days Have passed since 1st Ramadan ,2020")

// TASK10

  var fifty=new Date("Januaery/1,2020");
  var sec=fifty.getTime();
 var fifty1=new Date()
 var sec1=fifty1.getTime();
 var differnce=sec1-sec;
 var a=differnce/(1000);
 document.write(a + " seconds has passed since begining of 2020")
 
// TASK11

var date=new Date();
var ago=date.setHours(-4);
document.write(date)

// TASK12
 var current=new Date();
 document.write("current date "  + current + "<br>")
var ago=current.setFullYear(1920);
document.write("100 years back : " + current)

// TASK13

   var current=new Date();
 var currentyear=current.getFullYear();

 var year=new Date("35");
 var ageyear = year.getFullYear();
 var diff=ageyear-currentyear;


// TASK14
var unit=410;
var charge=16;
var late=350;
var net= unit*charge
var gross=net+late
var customer=("Customer Name is : Hifza");
var month="June";
 var unit1=("Number of Units: 410 " )
 var charge1=("charges per unit : 16 ");
var net1=("Net Amount payable (with Due Date):" + net);
var late1= ("Late Payment sarcharge:350");
document.write("Gross Amount Payable (After Due Date) "+ gross)
  



// CHAPTER 35-38

// TASK1

function dar(a,b){
    alert(a+b);

}
dar(2,3);



// TASK2
var h=2;
function feez(){
    var a=prompt("Enter first name");
    var b=prompt("Enter Lasr name " );
     var c=("Hello! " + a + " " +b);  
    alert(c)
    
}

feez();


// TASK3

function add(a,b){
    return a+b
}
 var g=add(2,3);
 alert(g)


// TASK4

function calc(){
    var num1=+prompt("Enter First Number")
    var sign=prompt("Enter Operator");
    var num2=+prompt("Enter second number");
    if(sign==="+"){
        return num1+num2
    }
    else if(sign==="*"){
        return num1*num2
    }

}
var result=calc();
alert(result);


// TASK5

function arg(a){
    alert(a*a)
}
arg(3);

TASK6

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  alert("The factorial of " + n + " is " + answer)



// TASK7

function count(){
    var a=+prompt("Enter first value");
    var b=+prompt("Enter second value");
    for(var i=a;i<=b;i++){
        alert(i)
    }
}
count();


// TASK8

function angle(){
    var base=prompt("Enter Base value")
    var per=prompt("Enter perpendicular value")
    var base1=base*base;
    var per1=per*per;
    var hypotenuse=base1+per1
    alert(hypotenuse)
}
angle();




// TASK9
// I
function rectangle(width,height){
    var area=width*height;
    alert(area)
}
rectangle(20,10);


// II

function rectangle(){
         var area=width*height;
         alert(area)
 }
rectangle(width=20,height=10);
    


// TASK10

function palindrom(str){

var  check="";
for(var i=str.length-1; i>=0;i--){

    check += str[i]
        
}


if(str==check)
{
alert( str + " it's a Palindrome.");
}
else
{
alert("not a Palindrome");
}
}
 palindrom("madam");

// TASK11


function example(str)
{
  var a = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < a.length; x++){
      newarray1.push(a[x].charAt(0).toUpperCase()+a[x].slice(1));
  }
  return newarray1.join(' ');
}
var g=(example("the quick brown fox"));
alert(g)


// TASK12

function dev(text){
        var longest="";

         var array=text.split(" ");
        
         for(var i=0;i<array.length;i++){
             var word=array[i];
            
             if(word.length>longest.length){
                 longest=word;
             }
         }
          document.write(longest)
        
    }


 dev("Web Development Tutorial");


// TASK13



 function sheep(str){
 var word="";
    for(var i=0;i<str.length;i++){
       var a=str[i];
        if(a==='o'){
         document.write(a)
        }
      
    }
    
 }

 sheep();
