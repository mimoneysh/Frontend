var bottles = prompt("How many bottles of milk you want?");
var money = prompt("Please give me money");

    function getMilk(bottles, money) {  
        
        alert("you have given: "+ money+" to me!")
        //var cost = bottles*70;
        var balance = money%70;
        var maxBottles = Math.floor(money/70);
        var cost = maxBottles*70;
      console.log("leaveHouse");
      console.log("moveRight");
      console.log("moveRight");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveRight");
      console.log("moveRight");
        alert("Based on money given I can buy "+maxBottles+" bottles of Milk");
        alert("pay Rs. " +cost+" to shopkeeper");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("enterHouse");
        alert("Returned this balance amount: "+balance);
        alert("Task completed");
    }


    getMilk(bottles, money);
