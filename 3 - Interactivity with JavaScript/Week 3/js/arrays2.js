/*var name = prompt("What is your name?")

if (name.length != 0){
    document.write("Hello " +  name)
}
else
  document.write("Feeling shy?")*/


// Nested if
var name = prompt("What is your name?")

if (name.length != 0){
    if (name == "James")
      document.write("What a beautiful name");
    else
      document.write("Hello " +  name);
    
}
else
   document.write("Feeling shy?");

 /*//As soon as a conditional is matched, the rest can be skipped
var name = prompt("What is your name?")

if(name.length != 0 && name == "James")
    document.write("What a beautiful name");

if(name.length != 0 && name != "James")
    document.write("Hello " + name);

if(name.length == 0)
    document.write("Feeling shy?");*/

//Every conditional is checkked instead of just one