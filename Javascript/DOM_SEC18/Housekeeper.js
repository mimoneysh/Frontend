// var houseKeeper1 ={
//     yearsOfExperience:12,
//     name: "jane",
//     cleaningRepertoire:["bathroom","lobby","bedroom"]
// }

function HouseKeeper(name,yearsOfExperience,cleaningRepertoire) {
     this.yearsOfExperience=yearsOfExperience;
    this.name=name;
   
    this.cleaningRepertoire=cleaningRepertoire;
    this.clean = function(){
        alert("cleaning in progress....");
    }
    
}


