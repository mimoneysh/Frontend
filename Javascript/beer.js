    var numberOfBottles = 99
    while (numberOfBottles >= 0) {
        var bottleWord = "bottle";
        if (numberOfBottles === 1) {
            bottleWord = "bottles";
        } 

        if (numberOfBottles > 0) {
             console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, "+numberOfBottles + " " + bottleWord + " of beer.");
            
        } else {
            console.log("No more bottles of beer in the wall, no more bottles of beer.");
        }
        //console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, "+numberOfBottles + " " + bottleWord + " of beer.");
        //console.log(numberOfBottles + " " + bottleWord + " of beer,");
        //console.log("Take one down, pass it around,");
    	numberOfBottles--;
        if (numberOfBottles > 0) {
             console.log("Take one down, pass it around, "+numberOfBottles + " " + bottleWord + " of beer on the wall.");
            
        } else if( numberOfBottles === 0){
            console.log("Take one down, pass it around, no more bottles of beer on the wall.");
            
        }else{
            console.log("Go to store and buy some more, 99 bottles of beer on the wall");
            
        }
       
    }