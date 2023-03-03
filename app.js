var name = prompt("enter your name :");


var gender = prompt(" your gender : male or female");
if (gender=="male")
{
   var WM =  confirm("did you want welcome message");
   if (WM==true)
   {
    alert("welcome Mr "+name);
   }
}
else if (gender=="female")
{
    var WM =  confirm("did you want welcome message");
    if (WM==true)
    {
     alert("welcome Ms "+name);
}}
else { alert("welcom "+name);}


var age = prompt("enter your age :");
if (age<=0)
alert("your age less than zero");




