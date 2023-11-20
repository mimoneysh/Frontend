var guestList =["manish","shrytika","shubham","sifu","baba"];
console.log(guestList[0]);
var guestName = prompt("what is your name?")
if(guestList.includes(guestName)){
    alert("Welcome");
} else{
    alert("Sorry next time");
}