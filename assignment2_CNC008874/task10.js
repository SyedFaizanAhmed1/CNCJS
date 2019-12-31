var pass = "megladon";
var input = prompt("Enter your password");
if( input == "")
{
    input = prompt("Please enter your password");
}
if( input == pass)
{
    alert("Correct! The password you entered matches the original password");
}
else
{
    alert("Incorrect password");
}