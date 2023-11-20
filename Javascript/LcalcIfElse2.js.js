prompt("Your name:");
prompt("Your partners name:");

var luvScore=Math.random()*100;
luvScore=Math.floor(luvScore)+1;
console.log(luvScore);

if (luvScore > 70){
    alert("Your love Score is "+luvScore+"%"+"\nYouLove each other like Lakshmi Narayana!");
}
    if(luvScore > 30 && luvScore <=70){
        alert("Your love Score is "+luvScore+"%");
    }
if (luvScore <= 30) {
    

    alert("Your love Score is "+luvScore+"%."+ " You are together like oil and water");
    
}
