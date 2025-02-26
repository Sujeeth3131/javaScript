/*
12,1,2-"winter"
3,4,5,6 - "summer
7,8 - monsoon
9,10,11 - spring
*/
month=5
switch (month){
    case 12:
    case 1:
     case 2:
        console.log("winter");
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Summer");
        break;
    case 7:
    case 8:
    console.log("Monsoon");
        break;
    case 9:
    case 10:
     case 11:
        console.log("Spring");
        break;
        default: 
        console.log("invalid");
}