var a = 2, b = 1;
var result = --a - --b + ++b + b--;

--a;
document.write('At first stage: Decrement take place of variable a which result as 1' + "<br>")

--a - --b;

document.write('At second stage: Decrement take place of variable a which result as 1 and b also decremant which result as 0 and final ans become 1'+ "<br>")
 
--a - --b + ++b;

document.write('At third stage: Decrement take place of variable a which result as 1 and b also decremant which result as 0 and final ans become 1 and now increment take place in var b which result as 2'+ "<br>")


--a - --b + ++b + b--;


document.write('At fourth stage: Decrement take place of variable a which result as 1 and b also decremant which result as 0 and final ans become 1 and now increment take place in var b which result as 2 and now decrement occurs which generate a result 3'+ "<br>")

