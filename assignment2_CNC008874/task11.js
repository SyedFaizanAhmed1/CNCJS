var input = prompt("Enter time in 24 hours clock format");
if( input >= 0000 && input < 1200)
{
    alert("Good Morning");
}
if( input >= 1200 && input < 1700)
{
    alert("Good Afternoon");
}
if( input >= 1700 && input < 2100)
{
    alert("Good Evening");
}
if( input >= 2100 && input < 2359)
{
    alert("Good Night");
}