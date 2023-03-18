var name = prompt("enter your name :");
var age = prompt("enter your age :");

var gender = prompt(" your gender : male or female");
if (gender == "male") {
   var WM = confirm("did you want welcome message");
   if (WM == true) {
      alert("welcome Mr " + name);
   }
}
else if (gender == "female") {
   var WM = confirm("did you want welcome message");
   if (WM == true) {
      alert("welcome Ms " + name);
   }
}
else { alert("welcome " + name); }



if (age <= 0)
   alert("your age less than zero");

var arr = [];
function qustions(Messege) 
{
   var Answer = prompt(Messege);

   if (Answer == "yes" || Answer == "no")
      return Answer;
   else {
      Answer = 'invalide';
      return Answer;
   }
}
function pushArray(arrayValue)
 {
   arr.push(arrayValue);
}
function printArray()
 {
   for (let count = 0; count <= 2; count++)
      console.log(arr[count]);
      alert(arr);
}
var qustionOne = qustions("did you study computer engineering ?");
pushArray(qustionOne);
var qustionTwo = qustions("are you work ?");
pushArray(qustionTwo);
var qustionThree = qustions("are you single ?");
pushArray(qustionThree);
printArray();