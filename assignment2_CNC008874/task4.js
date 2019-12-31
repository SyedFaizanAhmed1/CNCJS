var sub1 = prompt("Enter first subject marks");
var sub2 = prompt("Enter second subject marks");
var sub3 = prompt("Enter third subject marks");
var marksObt = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
var percentage = (marksObt/300) * 100;
var grade;
var remarks;
if( percentage >= 80 )
{
    grade = "A-One";
    remarks = "Excellent";
}
else if( percentage >= 70 && percentage < 80 )
{
    grade = "A";
    remarks = "Good";
}
else if( percentage >= 60 && percentage < 70 )
{
    grade = "B";
    remarks = "You need to improve";
}
else if( percentage < 60 )
{
    grade = "F";
    remarks = "Sorry";
}

document.write("<b>Marks Sheet</b><br>")
document.write("Total Marks: 300<br>"+ "Marks Obtained: "+ marksObt +"<br>"+"Percentage: "+ percentage+"<br>"
+ "Grade: "+ grade+"<br>"+"Remarks: "+remarks );