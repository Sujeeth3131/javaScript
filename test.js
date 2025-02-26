//simple if
console.log("Welcome to college!");
marks=55
if(marks>80){
    console.log("Welcome to tech club!")
}
//else if
age=19
if(age>=18)
    console.log("Eligible for voting!");
else
    console.log("Not eligible for voting!");
//nested if
num=10
if(num>0){
    console.log("posiyive");
    if(num%2==0)
        console.log("Even");
    else
    console.log("odd");
}
else
console.log("Negative");

//else if ladder
age=44
if(age <= 5)
    console.log("Baby");
else if(age<=12)
    console.log("child");
else if(age <=19)
    console.log("teen age");
else if(age<=50)
    console.log("adult age");
else
 console.log("senior");